// src/mithril/AmbientManager.tsx
"use client";

import { useEffect, useRef } from "react";
import { useScene } from "./SceneController";

import { AudioBootCoreInstance } from "./AudioBoot";
import { loadAudio } from "./audioLoader";

import type { WeatherState } from "@engine/ambient/weather";
import { pickWeatherSound } from "@engine/ambient/weather";

/**
 * Convertit l’état météo logique de la scène
 * vers un WeatherState canon
 */
function resolveWeatherState(
  kind: string,
  intensity: number
): WeatherState {
  switch (kind) {
    case "rain":
      return { kind: "rain", intensity };
    case "snow":
      return { kind: "snow", intensity };
    case "fog":
      return { kind: "fog", intensity: intensity * 0.4 };
    case "storm":
      return { kind: "storm", intensity };
    case "clear":
    default:
      return { kind: "clear", intensity: 0 };
  }
}

/**
 * AmbientManager — Mithril Engine AAA
 *
 * - Ambiances météo via AudioContext global
 * - Volume dynamique selon intensité (0–1.0)
 * - Fade-in / Fade-out propre
 * - Aucun artefact sonore
 */
export default function AmbientManager() {
  const scene = useScene(); // weather, intensity, ambientColor

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // ---------------------------------------------------------------------------
  // Couleur d’ambiance globale (CSS variable)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.style.setProperty(
      "--mithril-ambient-color",
      scene.ambientColor
    );
  }, [scene.ambientColor]);

  // ---------------------------------------------------------------------------
  // Boucle météo principale
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const weather = resolveWeatherState(
        scene.weather,
        scene.intensity ?? 0
      );

      // Stop ambiance si météo claire
      if (weather.kind === "clear") {
        fadeOut(gainRef.current);
        return;
      }

      // Attendre AudioContext global
      await AudioBootCoreInstance.ready();
      if (cancelled) return;

      const ctx = AudioBootCoreInstance.context;

      // Choisir le son météo
      const sound = pickWeatherSound(weather);
      const el = await loadAudio(sound.src);

      if (cancelled) return;

      // Création de la chaîne audio
      const source = ctx.createMediaElementSource(el);
      const gain = ctx.createGain();

      gain.gain.value = 0;

      source.connect(gain).connect(ctx.destination);

      el.loop = true;
      el.volume = 1;

      try {
        await el.play();
      } catch {
        // autoplay bloqué → AudioBoot gère
      }

      // Sauvegarde refs
      audioRef.current = el;
      gainRef.current = gain;

      // Fade-in initial
      fadeTo(gain, computeVolume(weather), 1);
    })();

    return () => {
      cancelled = true;
      fadeOut(gainRef.current);
    };
  }, [scene.weather]);

  // ---------------------------------------------------------------------------
  // Ajustement dynamique du volume (intensité)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!gainRef.current) return;

    const weather = resolveWeatherState(
      scene.weather,
      scene.intensity ?? 0
    );

    fadeTo(gainRef.current, computeVolume(weather), 0.3);
  }, [scene.intensity]);

  return null;
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function computeVolume(weather: WeatherState): number {
  if (weather.kind === "clear") return 0;

  const base =
    weather.kind === "storm" ? 0.55 : 0.35;

  return Math.min(1, base + weather.intensity * 0.6);
}

function fadeTo(
  gain: GainNode | null,
  value: number,
  seconds = 0.5
) {
  if (!gain) return;
  const now = gain.context.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.linearRampToValueAtTime(value, now + seconds);
}

function fadeOut(
  gain: GainNode | null,
  seconds = 0.6
) {
  if (!gain) return;
  const now = gain.context.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.linearRampToValueAtTime(0, now + seconds);
}
