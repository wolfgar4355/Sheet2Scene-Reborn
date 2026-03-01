// src/mithril/LightningFX.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useMithril } from "./GrimoireFrame";
import { useScene } from "./SceneController";

import LightningArcs from "./LightningArcs";
import { triggerCameraShake } from "./CameraShake";

import { generateThunderEvent } from "../ambient/thunder";
import type { ThunderEvent } from "../ambient/thunder";
import { SoundManifest } from "../ambient/sound.manifest";

/**
 * ⚡ LightningFX — Mithril Engine AAA
 * --------------------------------------------------
 * - éclairs visuels + arcs canvas
 * - thunder audio avec délai réaliste
 * - camera shake proportionnel à la distance
 * - logique autonome (FX legacy, non pilotée par WeatherEngine)
 */
export default function LightningFX() {
  const { season } = useMithril();
  const scene = useScene();

  const [flash, setFlash] = useState(false);
  const timerRef = useRef<number | null>(null);

  // ---------------------------------------------------------------------------
  // Loop principal (uniquement en tempête)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (season.weather !== "storm") {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setFlash(false);
      return;
    }

    const schedule = () => {
      const intensity = Math.max(0.3, season.intensity ?? 0.6);

      const min = 1800;
      const max = 7000;
      const delay =
        min + Math.random() * (max - min) * (1.3 - intensity);

      timerRef.current = window.setTimeout(() => {
        strike(intensity);
        schedule();
      }, delay);
    };

    const strike = (intensity: number) => {
      // 0 = très proche, 1 = lointain
      const distNorm = Math.random();
      const event: ThunderEvent = generateThunderEvent(distNorm);

      // 💥 Flash global
      setFlash(true);
      window.setTimeout(() => setFlash(false), 120);

      // ⚡ Arcs électriques (canvas)
      const dir = Math.random() < 0.5 ? "left" : "right";
      LightningArcs.spawn(dir, scene);

      // 🎥 Camera shake (plus proche = plus fort)
      triggerCameraShake((1 - distNorm) * 900);

      // 🎧 Thunder audio avec délai réaliste
      window.setTimeout(() => {
        try {
          // Résolution canon via SoundManifest
          const thunderGroup =
            SoundManifest.thunder[event.distance];

          if (!thunderGroup) return;

          const url =
            thunderGroup[
              Math.floor(Math.random() * thunderGroup.length)
            ];

          const audio = new Audio(url);

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
        } catch {
          /* silence volontaire */
        }
      }, event.delayMs);
    };

    schedule();

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [season.weather, season.intensity, scene]);

  // ---------------------------------------------------------------------------
  // Flash visuel global
  // ---------------------------------------------------------------------------
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
