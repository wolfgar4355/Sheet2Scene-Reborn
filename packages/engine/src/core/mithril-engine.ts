// packages/engine/src/core/mithril-engine.ts

import type { MithrilWorld, MithrilWorldId } from "./types/world";

import { MITHRIL_QUEST_WORLD } from "../worlds/mithril-quest/world";
import { DARKNIGHT_WORLD } from "../worlds/darknight/world";
import { GALACTIC_SAGA_WORLD } from "../worlds/galactic-saga/world";
import { PATHSEEKER_WORLD } from "../worlds/pathseeker/world";

/**
 * Liste officielle des mondes supportés par Mithril Engine.
 */
export const ALL_WORLDS: MithrilWorld[] = [
  MITHRIL_QUEST_WORLD,
  DARKNIGHT_WORLD,
  GALACTIC_SAGA_WORLD,
  PATHSEEKER_WORLD,
];

/**
 * API principale du moteur.
 */
export const MithrilEngine = {
  id: "mithril-engine",
  label: "Mithril Engine",
  version: "0.1.0",

  /** Retourne tous les mondes disponibles. */
  getWorlds(): MithrilWorld[] {
    return ALL_WORLDS;
  },

  /** Retourne un monde par id, ou null s'il n'existe pas. */
  getWorld(id: MithrilWorldId): MithrilWorld | null {
    return ALL_WORLDS.find((w) => w.id === id) ?? null;
  },

  /** Monde principal (actuellement Mithril-Quest). */
  getMainWorld(): MithrilWorld {
    return MITHRIL_QUEST_WORLD;
  },
};

export type { MithrilWorld, MithrilWorldId };
