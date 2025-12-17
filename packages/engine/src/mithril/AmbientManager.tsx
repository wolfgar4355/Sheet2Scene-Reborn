// src/mithril/AmbientManager.tsx
"use client";

import { useEffect, useRef } from "react";
import { useScene } from "./SceneController";

import { AudioBootCoreInstance } from "./AudioBoot";
import { loadAudio } from "./audioLoader";

import type { WeatherState } from "@engine/ambient/weather";
import { pickWeatherSound } from "@engine/ambient/weather";

/**
 * Map météo logique → boucle audio
 */
function mapWeatherKind(kind: string): WeatherState | null {
  switch (kind) {
    case "clear":
      return null;
    case "rain":
      return "rain";
    case "snow":
      return "snow";
    case "fog":
      return "rain"; // brouillard ≈ pluie très douce
    case "storm":
      return "storm";
    default:
      return null;
  }
}

/**
 * AmbientManager AAA v3
 * - Boucles météo via AudioContext global
 * - Volume dynamique selon intensité (0–1.2)
 * - Fade-in/fade-out
 * - Aucun artefact sonore
 */
export default function AmbientManager() {
  const scene = useScene(); // saison, weather, intensity, ambientColor

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // CSS color variable (ambiance globale)
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.style.setProperty(
      "--mithril-ambient-color",
      scene.ambientColor
    );
  }, [scene.ambientColor]);

  // Boucle météo AAA
  useEffect(() => {
    let mounted = true;

    (async () => {
      const weatherState = mapWeatherKind(scene.weather);

      // Stop météo si clear
      if (!weatherState) {
        if (audioRef.current) {
          fadeOut(gainRef.current);
        }
        return;
      }

      // Attendre AudioContext
      await AudioBootCoreInstance.ready();
      const ctx = AudioBootCoreInstance.context;

      // Choisir le son
      const sound = pickWeatherSound(weatherState);
      const el = await loadAudio(sound.src); // src = base path dans pickWeatherSound

      // Créer un MediaElementSource
      const source = ctx.createMediaElementSource(el);
      const gain = ctx.createGain();
      gain.gain.value = 0;

      source.connect(gain).connect(ctx.destination);

      // Config
      el.loop = true;
      el.volume = 1;

      try {
        el.play();
      } catch {
        // autoplay denied → ignoré (AudioBoot le réglera)
      }

      // Sauvegarde
      audioRef.current = el;
      gainRef.current = gain;

      // Fade-in
      fadeTo(gain, computeVolume(scene), 1);

      // Cleanup
      return () => {
        mounted = false;
        fadeOut(gain);
      };
    })();

    return () => {
      fadeOut(gainRef.current);
    };
  }, [scene.weather]);

  // Volume dynamique selon intensité météo
  useEffect(() => {
    if (!gainRef.current) return;
    fadeTo(gainRef.current, computeVolume(scene), 0.3);
  }, [scene.intensity]);

  return null;
}

// ---------------------------------------------------------------------------
// Utilities AAA
// ---------------------------------------------------------------------------

function computeVolume(scene: ReturnType<typeof useScene>): number {
  // storm = +40% volume de base
  const base = scene.weather === "storm" ? 0.55 : 0.35;
  return Math.min(1, base + scene.intensity * 0.6);
}

function fadeTo(gain: GainNode | null, value: number, seconds = 0.5) {
  if (!gain) return;
  const now = gain.context.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.linearRampToValueAtTime(value, now + seconds);
}

function fadeOut(gain: GainNode | null, seconds = 0.6) {
  if (!gain) return;
  const now = gain.context.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.linearRampToValueAtTime(0, now + seconds);
}
