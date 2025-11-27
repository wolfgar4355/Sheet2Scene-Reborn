// ============================================================================
//  FANTASY — ENCOUNTER FILTERS — INDEX
//  Charge les catégories additionnelles : embuscades, patrouilles, raids, etc.
// ============================================================================

import type { MonsterDefinition } from "@s2s/fantasy/types";

// Import des tables
import AMBUSHES from "./ambushes";
import PATROLS from "./patrols";
import RAIDS from "./raids";
import BOSS_ARENAS from "./boss-arenas";
import DUNGEON_ROOMS from "./dungeon-rooms";
import CORRUPTED from "./corrupted-zones";

// Table de mapping
const ENCOUNTER_FILTER_TABLES: Record<string, MonsterDefinition[]> = {
  ambushes: AMBUSHES,
  patrols: PATROLS,
  raids: RAIDS,
  "boss-arenas": BOSS_ARENAS,
  "dungeon-rooms": DUNGEON_ROOMS,
  "corrupted-zones": CORRUPTED};

// API
export function loadEncounterFilters(name: string): MonsterDefinition[] {
  return ENCOUNTER_FILTER_TABLES[name] ?? [];
}

export default ENCOUNTER_FILTER_TABLES;
