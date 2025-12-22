// src/mithril/SceneController.tsx
"use client";

import React, {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import { motion, useSpring, useTransform } from "framer-motion";

import type { UseSeasonOptions } from "./hooks/useSeason";
import useSeason from "./hooks/useSeason";
import { useCamera } from "./hooks/useCamera";

import type { WeatherState, WeatherKind } from "@engine/ambient";
import { createWeatherState } from "@engine/ambient/weather";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SceneContextType {
  // Camera AAA
  camera: ReturnType<typeof useCamera>;

  // Lumière globale (0 = nuit, 1 = jour)
  lightLevel: number;

  // Saison & météo
  season: string;
  phase: string;
  weather: WeatherState;

  // Ambiance
  ambientColor: string;

  // Biome / Monde
  biome?: string;
  worldId?: string;
}

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function useScene() {
  const ctx = useContext(SceneContext);
  if (!ctx) {
    throw new Error("useScene must be used inside <SceneController>");
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// AAA SceneController
// ---------------------------------------------------------------------------

export default function SceneController({
  biome = "generic",
  worldId = "mithril-quest",
  children,
}: {
  biome?: string;
  worldId?: string;
  children: ReactNode;
}) {
  // -------------------------------------------------------------------------
  // Saison + météo + ambiance
  // -------------------------------------------------------------------------
const season = useSeason({
  biome: biome as UseSeasonOptions["biome"],
  worldId,
});

  /**
   * Construction canon du WeatherState
   * → UNE seule source de vérité
   */
  const weather: WeatherState = createWeatherState(
    season.weather,
    season.intensity ?? 0
  );

  // -------------------------------------------------------------------------
  // Lumière globale selon la phase
  // -------------------------------------------------------------------------
  const lightLevel =
    season.phase === "night"
      ? 0.25
      : season.phase === "evening" || season.phase === "morning"
      ? 0.55
      : 1;

  // -------------------------------------------------------------------------
  // Camera AAA v3
  // -------------------------------------------------------------------------
  const camera = useCamera();

  const lightMotion = useSpring(lightLevel, {
    stiffness: 90,
    damping: 25,
  });

  const brightness = useTransform(lightMotion, [0, 1], [0.4, 1]);

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <SceneContext.Provider
      value={{
        camera,
        lightLevel,
        season: season.name,
        phase: season.phase,
        weather,
        ambientColor: season.ambientColor,
        biome,
        worldId,
      }}
    >
      <motion.div
        style={{
          scale: camera.zoom,
          filter: useTransform(brightness, (v) => `brightness(${v})`),
          backgroundColor: season.ambientColor,
        }}
        className="relative w-full h-full overflow-hidden transition-colors duration-700"
      >
        {children}
      </motion.div>
    </SceneContext.Provider>
  );
}
