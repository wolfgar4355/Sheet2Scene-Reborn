// src/mithril/AmbientManager.tsx
"use client";

import { useEffect, useRef } from "react";
import { useScene } from "./SceneController";

import { AudioBootCoreInstance } from "./AudioBoot";
import { loadAudio } from "./audioLoader";

import type { WeatherState } from "@engine/ambient/weather";
import { pickWeatherSound } from "@engine/ambient/weather";

/**
 * AmbientManager — Mithril Engine AAA (canon)
 * --------------------------------------------------
 * - Lecture SEULE du WeatherState
 * - 1 seule source audio active
 * - Fade propre / aucun doublon
 * - ZÉRO logique météo ici
 */
export default function AmbientManager() {
  const { weather, ambientColor } = useScene();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // ---------------------------------------------------------------------------
  // Couleur d’ambiance globale (CSS variable)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.style.setProperty(
      "--mithril-ambient-color",
      ambientColor
    );
  }, [ambientColor]);

  // ---------------------------------------------------------------------------
  // Boucle météo audio (kind uniquement)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    async function start() {
      // 🔇 Stop si clear
      if (weather.kind === "clear") {
        stopAudio();
        return;
      }

      await AudioBootCoreInstance.ready();
      if (cancelled) return;

      const ctx = AudioBootCoreInstance.context;

      // 🔁 Nettoyage AVANT nouvelle source
      stopAudio();

      const sound = pickWeatherSound(weather);
      const el = await loadAudio(sound.mp3);
      if (cancelled) return;

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

      audioRef.current = el;
      sourceRef.current = source;
      gainRef.current = gain;

      fadeTo(gain, computeVolume(weather), 1);
    }

    start();

    return () => {
      cancelled = true;
    };
  }, [weather.kind]); // ⚠️ kind seulement

  // ---------------------------------------------------------------------------
  // Ajustement dynamique du volume (intensity)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!gainRef.current) return;
    fadeTo(gainRef.current, computeVolume(weather), 0.3);
  }, [weather.intensity]);

  return null;
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function computeVolume(weather: WeatherState): number {
  if (weather.kind === "clear") return 0;
  const base = weather.kind === "storm" ? 0.55 : 0.35;
  return Math.min(1, base + weather.intensity * 0.6);
}

function fadeTo(gain: GainNode, value: number, seconds = 0.5) {
  const now = gain.context.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.linearRampToValueAtTime(value, now + seconds);
}

function stopAudio() {
  try {
    gainRef.current?.disconnect();
    sourceRef.current?.disconnect();
    audioRef.current?.pause();
    audioRef.current = null;
    sourceRef.current = null;
    gainRef.current = null;
  } catch {}
}
