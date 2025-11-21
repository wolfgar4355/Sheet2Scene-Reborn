// ============================================================================
// FANTASY — ENCOUNTER FILTERS — INDEX
// Charge les catégories additionnelles : embuscades, patrouilles, raids, etc.
// ============================================================================

import type { MonsterDefinition } from "../../../types";

import AMBUSHES from "./ambushes";
import PATROLS from "./patrols";
import RAIDS from "./raids";
import BOSS_ARENAS from "./boss-arenas";
import DUNGEON_ROOMS from "./dungeon-rooms";
import CORRUPTED from "./corrupted-zones";

// Table de mapping narrative
const ENCOUNTER_FILTER_TABLES: Record<string, MonsterDefinition[]> = {
  ambushes: AMBUSHES,
  patrols: PATROLS,
  raids: RAIDS,
  "boss-arenas": BOSS_ARENAS,
  "dungeon-rooms": DUNGEON_ROOMS,
  "corrupted-zones": CORRUPTED,
};

// Retourne la table
export function loadEncounterFilters(name: string): MonsterDefinition[] {
  return ENCOUNTER_FILTER_TABLES[name] ?? [];
}
