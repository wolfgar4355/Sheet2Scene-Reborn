// packages/engine/src/ambient/WorldAmbienceController.tsx
"use client";

import { useEffect } from "react";
import { SoundManifest } from "./sound.manifest";
import { audioBus } from "./audioBus";

export type WorldBiome =
  | "forest"
  | "dungeon"
  | "desert"
  | "arctic"
  | "volcano"
  | "tavern"
  | "ruins";

export type TimeOfDay = "day" | "night";

export interface WorldAmbienceProps {
  biome: WorldBiome;
  timeOfDay?: TimeOfDay;
  /** intensité globale (0–1) */
  intensity?: number;
}

/**
 * WorldAmbienceController
 * - Joue les boucles d'ambiance de biome (foret, donjon, taverne…)
 * - Peut se superposer avec WeatherSystem + AmbientManager
 */
export default function WorldAmbienceController({
  biome,
  timeOfDay = "day",
  intensity = 1,
}: WorldAmbienceProps) {
  useEffect(() => {
    const world = SoundManifest.world;

    // Stop / fade les anciens loops d'ambiance monde
    audioBus.fadeLoop("world-bed", 0, 600);
    audioBus.fadeLoop("world-extra-1", 0, 600);
    audioBus.fadeLoop("world-extra-2", 0, 600);

    const clamp = (v: number) => Math.max(0, Math.min(1, v));

    if (biome === "forest") {
      const src = world.forest;
      const main =
        timeOfDay === "night" ? src.night : src.day;

      audioBus.playLoop("world-bed", main, clamp(0.6 * intensity));
      audioBus.playLoop(
        "world-extra-1",
        src.creaking,
        clamp(0.3 * intensity)
      );
    } else if (biome === "dungeon") {
      const src = world.dungeon;
      audioBus.playLoop("world-bed", src.rumble, clamp(0.65 * intensity));
      audioBus.playLoop("world-extra-1", src.water, clamp(0.4 * intensity));
      audioBus.playLoop("world-extra-2", src.chains, clamp(0.3 * intensity));
    } else if (biome === "desert") {
      const src = world.desert;
      audioBus.playLoop("world-bed", src.wind, clamp(0.7 * intensity));
      audioBus.playLoop(
        "world-extra-1",
        src.ruinsEcho,
        clamp(0.4 * intensity)
      );
    } else if (biome === "arctic") {
      const src = world.arctic;
      audioBus.playLoop("world-bed", src.blizzard, clamp(0.7 * intensity));
      audioBus.playLoop(
        "world-extra-1",
        src.iceCrack,
        clamp(0.35 * intensity)
      );
    } else if (biome === "volcano") {
      const src = world.volcano;
      audioBus.playLoop("world-bed", src.lavaRumble, clamp(0.7 * intensity));
      audioBus.playLoop(
        "world-extra-1",
        src.lavaBubble,
        clamp(0.45 * intensity)
      );
      audioBus.playLoop("world-extra-2", src.heat, clamp(0.3 * intensity));
    } else if (biome === "tavern") {
      const src = world.tavern;
      audioBus.playLoop("world-bed", src.ambience, clamp(0.7 * intensity));
      audioBus.playLoop(
        "world-extra-1",
        src.fireplace,
        clamp(0.4 * intensity)
      );
    } else if (biome === "ruins") {
      const src = world.ruins;
      audioBus.playLoop("world-bed", src.echo, clamp(0.6 * intensity));
      audioBus.playLoop(
        "world-extra-1",
        src.stoneFall,
        clamp(0.35 * intensity)
      );
      audioBus.playLoop(
        "world-extra-2",
        src.whisper,
        clamp(0.3 * intensity)
      );
    }

    return () => {
      // Optionnel: à la destruction, on fade-out
      audioBus.fadeLoop("world-bed", 0, 600);
      audioBus.fadeLoop("world-extra-1", 0, 600);
      audioBus.fadeLoop("world-extra-2", 0, 600);
    };
  }, [biome, timeOfDay, intensity]);

  return null;
}
