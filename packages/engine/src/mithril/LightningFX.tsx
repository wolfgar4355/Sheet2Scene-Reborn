// src/mithril/LightningFX.tsx
"use client";

import { useMithril } from "./GrimoireFrame";
import { useEffect, useRef, useState } from "react";

import type { ThunderEvent } from "@engine/ambient/thunder";
import { triggerCameraShake } from "./CameraShake";
import LightningArcs from "./LightningArcs";

/**
 * LightningFX v4 — Ultra AAA
 * - éclairs volumétriques
 * - arcs électriques dynamiques
 * - thunder audio delay réaliste
 * - camera shake proportionnel à distance
 */
export default function LightningFX() {
  const { season } = useMithril();
  const [flash, setFlash] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (season.weather !== "storm") {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setFlash(false);
      return;
    }

    const schedule = () => {
      const intensity = Math.max(0.3, season.intensity || 0.6);

      const min = 1800;
      const max = 7000;
      const delay = min + Math.random() * (max - min) * (1.3 - intensity);

      timerRef.current = window.setTimeout(() => {
        strike(intensity);
        schedule();
      }, delay);
    };

    const strike = (intensity: number) => {
      // 0 = très proche, 1 = loin
      const distNorm = Math.random();
      const event: ThunderEvent = generateThunderEvent(distNorm);

      // 💥 Flash global
      setFlash(true);
      setTimeout(() => setFlash(false), 120);

      // ⚡ Arcs électriques
      const dir = Math.random() < 0.5 ? "left" : "right";
      LightningArcs.spawn(dir);

      // 🎥 Camera Shake AAA
      triggerCameraShake(distNorm * 900);

      // 🎧 Thunder audio avec délai réaliste
      setTimeout(() => {
        try {
          const audio = new Audio(event.url);

          const distFactor =
            event.distance === "close"
              ? 1
              : event.distance === "mid"
              ? 0.7
              : 0.45;

          audio.volume = Math.min(
            1,
            distFactor * (0.6 + intensity * 0.6)
          );

          audio.play().catch(() => {});
        } catch {}
      }, event.delayMs);
    };

    schedule();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [season.weather, season.intensity]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none transition-opacity duration-150"
      style={{
        opacity: flash ? 1 : 0,
        background:
          "radial-gradient(circle at 25% 0%, rgba(255,255,255,0.95), rgba(255,255,255,0.25) 55%, transparent 75%)",
        mixBlendMode: "screen",
        zIndex: 60,
      }}
    />
  );
}
