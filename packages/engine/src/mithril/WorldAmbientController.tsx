// src/mithril/WorldAmbientController.tsx
"use client";

import type { ReactNode } from "react";
import { useScene } from "./SceneController";

/**
 * Teintes visuelles par monde (canon MQ + autres worlds)
 */
const WORLD_TINT: Record<string, string> = {
  "mithril-quest": "rgba(140,120,255,0.20)",
  "mq-dark-age": "rgba(80,60,140,0.30)",
  "mq-age-of-heroes": "rgba(255,190,120,0.25)",
  "mq-ancient-age": "rgba(200,150,100,0.22)",

  "desert-runes": "rgba(255,200,120,0.25)",
  "void": "rgba(180,120,255,0.32)",
};

/**
 * WorldAmbientController — Mithril Engine AAA
 * --------------------------------------------------
 * - Teinte globale jour/nuit + météo
 * - Teinte thématique par worldId
 * - Overlays météo (visuel pur)
 * - Ne gère PAS l’audio (AmbientManager)
 */
export default function WorldAmbientController({
  children,
}: {
  children?: ReactNode;
}) {
  const scene = useScene();

  const { weather, ambientColor, worldId } = scene;
  const intensity = weather.intensity;

  const tintWorld =
    WORLD_TINT[worldId ?? "mithril-quest"] ?? "transparent";

  const isRain = weather.kind === "rain";
  const isSnow = weather.kind === "snow";
  const isFog = weather.kind === "fog";
  const isStorm = weather.kind === "storm";

  return (
    <div className="relative w-full h-full">
      {/* ----------------------------------------------------------
         GLOBAL AMBIENT TINT (Jour/Nuit + intensité météo)
      ---------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 mix-blend-soft-light transition-opacity duration-700"
        style={{
          background: ambientColor,
          opacity: 0.4 + intensity * 0.3,
        }}
      />

      {/* ----------------------------------------------------------
         WORLD LORE TINT (teinte thématique par worldId)
      ---------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 mix-blend-overlay transition-opacity duration-700"
        style={{
          background: tintWorld,
          opacity: 0.35,
        }}
      />

      {/* ----------------------------------------------------------
         WEATHER OVERLAYS — VISUEL PUR
      ---------------------------------------------------------- */}

      {isRain && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 animate-[mithrilRain_1s_linear_infinite]"
          style={{
            background:
              "repeating-linear-gradient(transparent, transparent 20px, rgba(180,180,255,0.15) 22px)",
            opacity: 0.35 + intensity * 0.4,
          }}
        />
      )}

      {isSnow && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 animate-[mithrilSnow_2.5s_linear_infinite]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0.5px, transparent 2px)",
            backgroundSize: "4px 4px",
            opacity: 0.25 + intensity * 0.35,
          }}
        />
      )}

      {(isFog || isStorm) && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 55%, rgba(200,200,255,${
              0.25 + intensity * 0.4
            }), transparent 70%)`,
            opacity: 1,
            mixBlendMode: "lighten",
          }}
        />
      )}

      {/* ----------------------------------------------------------
         WORLD SPECIAL FX (future)
      ---------------------------------------------------------- */}

      {children}
    </div>
  );
}
