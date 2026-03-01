// src/mithril/TransitionLayer.tsx
"use client";

import { useMemo } from "react";
import useSeason from "./hooks/useSeason";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

type SeasonName = "winter" | "spring" | "summer" | "autumn";
type DayPhase = "morning" | "day" | "evening" | "night";
type WeatherKind = "clear" | "rain" | "snow" | "fog" | "storm";

interface TransitionLayerProps {
  overrideSeason?: SeasonName;
  overridePhase?: DayPhase;
  overrideWeather?: WeatherKind;
  overrideIntensity?: number; // 0..1
  overrideLightLevel?: number; // 0..1
}

/**
 * Mithril Engine v2 — TransitionLayer AAA (CANON)
 * ------------------------------------------------
 * - Teinte saisonnière dynamique
 * - Glow nocturne dépendant de la lumière
 * - Lumière directionnelle matin / soir
 * - Haze météo (rain / fog / snow / storm)
 * - Intensité météo normalisée
 * - Glow mystique du grimoire
 */
export default function TransitionLayer(props: TransitionLayerProps = {}) {
  /* ------------------------------------------------------------------------ */
  /* SAISON / MÉTÉO (SOURCE MOTEUR)                                            */
  /* ------------------------------------------------------------------------ */

  const seasonData = useSeason();

  const season: SeasonName =
    props.overrideSeason ?? seasonData.name ?? "summer";

  const dayPhase: DayPhase =
    props.overridePhase ?? seasonData.phase ?? "day";

  const weather: WeatherKind =
    props.overrideWeather ?? seasonData.weather ?? "clear";

  const intensity =
    props.overrideIntensity ?? seasonData.intensity ?? 0;

  /* ------------------------------------------------------------------------ */
  /* LUMIÈRE GLOBALE                                                           */
  /* ------------------------------------------------------------------------ */

  const lightLevel =
    props.overrideLightLevel ??
    (dayPhase === "night"
      ? 0.25
      : dayPhase === "morning" || dayPhase === "evening"
      ? 0.55
      : 1);

  /* ------------------------------------------------------------------------ */
  /* PALETTES                                                                 */
  /* ------------------------------------------------------------------------ */

  const seasonTint = useMemo<Record<SeasonName, string>>(
    () => ({
      winter: "rgba(160,200,255,1)",
      spring: "rgba(170,255,210,1)",
      summer: "rgba(255,230,140,1)",
      autumn: "rgba(255,150,90,1)",
    }),
    []
  );

  const nightGlow = `rgba(180,200,255,${
    0.15 + (1 - lightLevel) * 0.35
  })`;

  const directionalTint =
    dayPhase === "morning"
      ? `rgba(255,180,120,${0.4 + intensity * 0.1})`
      : dayPhase === "evening"
      ? `rgba(255,120,90,${0.4 + intensity * 0.1})`
      : "rgba(255,255,255,0.06)";

  const weatherHaze =
    weather === "fog"
      ? `rgba(200,200,255,${0.25 + intensity * 0.4})`
      : weather === "rain"
      ? `rgba(160,180,255,${0.10 + intensity * 0.3})`
      : weather === "snow"
      ? `rgba(255,255,255,${0.15 + intensity * 0.35})`
      : weather === "storm"
      ? `rgba(200,220,255,${0.30 + intensity * 0.4})`
      : "transparent";

  /* ------------------------------------------------------------------------ */
  /* RENDU FX                                                                 */
  /* ------------------------------------------------------------------------ */

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] transition-all duration-700">
      {/* 🌙 Glow nocturne */}
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          background: `radial-gradient(
            60% 60% at 50% 50%,
            ${nightGlow},
            transparent 80%
          )`,
        }}
      />

      {/* 🌸 Teinte saisonnière */}
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          background: `radial-gradient(
            75% 75% at 50% 50%,
            ${seasonTint[season]},
            transparent 90%
          )`,
          opacity: 0.45 * lightLevel,
        }}
      />

      {/* 🌅 Lumière directionnelle */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background: `linear-gradient(
            to ${
              dayPhase === "morning"
                ? "right"
                : dayPhase === "evening"
                ? "left"
                : "bottom"
            },
            ${directionalTint},
            transparent 70%
          )`,
          opacity: 0.4,
        }}
      />

      {/* 🌫️ Haze météo */}
      <div
        className="absolute inset-0 mix-blend-lighten"
        style={{
          background: `radial-gradient(
            80% 80% at 50% 50%,
            ${weatherHaze},
            transparent
          )`,
          opacity: weather !== "clear" ? 1 : 0,
        }}
      />

      {/* ✨ Glow mystique du grimoire */}
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.12), transparent 70%)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
