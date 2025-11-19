"use client";

import { useEffect, useMemo } from "react";
import { getSeason, getDayPhase } from "@lib/mithril/ambient.config";
import { useScene } from "./SceneController";

export default function TransitionLayer() {
  const { lightLevel } = useScene();

  // Palette par saison
  const seasonTint = useMemo(() => {
    return {
      winter: "#80b3ff",
      spring: "#8de77c",
      summer: "#ffd47a",
      autumn: "#ff995a",
    };
  }, []);

  const season = getSeason();
  const dayPhase = getDayPhase();

  const baseTint = {
    morning: "#ffffff",
    day: "#ffffff",
    evening: "#caa27a",
    night: "#27384d",
  }[dayPhase];

  const tint = seasonTint[season] ?? "#ffffff";

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] mix-blend-soft-light transition-all duration-700">
      {/* Couche 1 */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, ${baseTint}, transparent 80%)`,
          opacity: 0.65,
        }}
      />

      {/* Couche 2 */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(70% 70% at 50% 50%, ${tint}, transparent 90%)`,
          opacity: 0.45 * lightLevel,
        }}
      />
    </div>
  );
}
