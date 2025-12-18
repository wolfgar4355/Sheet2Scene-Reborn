// src/mithril/LightningEngine.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useWeather } from "./WeatherEngine";
import { triggerCameraShake } from "./CameraShake";

import {
  generateThunderEvent,
  type ThunderEvent,
} from "@engine/ambient/thunder";

/**
 * LightningEngine — Weather-driven AAA (canon)
 * --------------------------------------------------
 * - écoute WeatherEngine (events uniquement)
 * - flash visuel synchronisé
 * - son tonnerre réaliste (distance)
 * - camera shake proportionnelle
 * - zéro logique météo interne
 */

export default function LightningEngine() {
  const { state, subscribe } = useWeather();
  const { weather } = state;

  const [flash, setFlash] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // ---------------------------------------------------------------------------
  // Écoute événements météo (LIGHTNING_STRIKE)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    // Si on n’est pas en tempête, on ignore tout
    if (weather.kind !== "storm") {
      clear();
      return;
    }

    const unsubscribe = subscribe((evt) => {
      if (evt.type !== "LIGHTNING_STRIKE") return;
      handleLightning(evt.distance01);
    });

    return () => {
      unsubscribe();
      clear();
    };
  }, [weather.kind]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---------------------------------------------------------------------------
  // Réaction à un éclair (déjà décidé par le moteur)
  // ---------------------------------------------------------------------------
  function handleLightning(distance01: number) {
    const event: ThunderEvent = generateThunderEvent(distance01);

    // ⚡ FLASH VISUEL
    setFlash(true);
    window.setTimeout(() => setFlash(false), 120);

    // 🎥 CAMERA SHAKE (plus proche = plus violent)
    triggerCameraShake((1 - distance01) * 900);

    // 🎧 AUDIO (retardé selon distance)
    timeoutRef.current = window.setTimeout(() => {
      try {
        const audio = new Audio(event.url);

        const distanceFactor =
          event.distance === "close"
            ? 1
            : event.distance === "mid"
            ? 0.75
            : 0.55;

        audio.volume = Math.min(
          1,
          distanceFactor *
            (0.6 + weather.intensity * 0.7)
        );

        audio.play().catch(() => {});
      } catch {}
    }, event.delayMs);
  }

  function clear() {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setFlash(false);
  }

  // ---------------------------------------------------------------------------
  // Flash overlay
  // ---------------------------------------------------------------------------
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 transition-opacity duration-150"
      style={{
        opacity: flash ? 1 : 0,
        background:
          "radial-gradient(circle at 30% 0%, rgba(255,255,255,0.95), rgba(255,255,255,0.35) 45%, transparent 75%)",
        mixBlendMode: "screen",
        zIndex: 50,
      }}
    />
  );
}
