"use client";

import { useEffect, useRef, useState } from "react";
import { useWeatherEngine } from "./WeatherEngine";
import { triggerCameraShake } from "./CameraShake";

import {
  generateThunderEvent,
  type ThunderEvent,
} from "@engine/ambient/thunder";

/**
 * LightningEngine v4 — Weather-driven AAA
 * --------------------------------------------------
 * - écoute WeatherEngine (storm uniquement)
 * - flash visuel synchronisé
 * - son tonnerre réaliste (distance)
 * - camera shake proportionnelle
 * - zéro logique météo interne
 */

export default function LightningEngine() {
  const { weather, intensity, subscribe } = useWeatherEngine();
  const [flash, setFlash] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  // ---------------------------------------------------------------------------
  // Gestion événementielle météo
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (weather !== "storm") {
      clear();
      return;
    }

    // Abonnement aux ticks météo (ex: WeatherEngine pulse)
    const unsubscribe = subscribe("storm:tick", handleStormTick);

    return () => {
      unsubscribe();
      clear();
    };
  }, [weather, intensity]);

  // ---------------------------------------------------------------------------
  // Tick météo → déclenche éclair ou non
  // ---------------------------------------------------------------------------
  function handleStormTick() {
    // probabilité basée sur intensité
    const chance = 0.25 + intensity * 0.55;
    if (Math.random() > chance) return;

    triggerLightning();
  }

  // ---------------------------------------------------------------------------
  // Déclenchement complet éclair
  // ---------------------------------------------------------------------------
  function triggerLightning() {
    const dist = Math.random(); // 0 = proche, 1 = lointain
    const event: ThunderEvent = generateThunderEvent(dist);

    // ⚡ FLASH
    setFlash(true);
    window.setTimeout(() => setFlash(false), 120);

    // 🎥 CAMERA SHAKE (plus proche = plus violent)
    triggerCameraShake((1 - dist) * 900);

    // 🎧 AUDIO (décalé selon distance)
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
          distanceFactor * (0.6 + intensity * 0.7)
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
