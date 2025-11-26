// ============================================================================
// FANTASY — ENCOUNTERS (Biomes) – INDEX
// Charge dynamiquement toutes les tables de rencontres par biome
// ============================================================================

import type { EncounterTableEntry } from "@engine/content/fantasy/types";

// Imports statiques de tous les biomes
import CAVES from "./CAVES_ENCOUNTERS";
import COAST from "./COAST_ENCOUNTERS";
import DESERT from "./DESERT_ENCOUNTERS";
import DUNGEON from "./DUNGEON_ENCOUNTERS";
import ETHEREAL from "./ETHEREAL_MISTLANDS_ENCOUNTERS";
import FEYWILD from "./FEYWILD_BLOOM_ENCOUNTERS";
import FOREST from "./FOREST_ENCOUNTERS";
import HAUNTED from "./HAUNTED_RUINS_ENCOUNTERS";
import HILLS from "./HILLS_ENCOUNTERS";
import JUNGLE from "./JUNGLE_ENCOUNTERS";
import LAVA from "./LAVA_ENCOUNTERS";
import MANA from "./MANA_FIELDS_ENCOUNTERS";
import MOONLIGHT from "./MOONLIGHT_ENCOUNTERS";
import MOUNTAIN from "./MOUNTAIN_ENCOUNTERS";
import OCEAN from "./OCEAN_ENCOUNTERS";
import OVERGROWN from "./OVERGROWN_TEMPLE_ENCOUNTERS";
import PLAINS from "./PLAINS_ENCOUNTERS";
import RUINS from "./RUINS_ENCOUNTERS";
import SWAMP from "./SWAMP_ENCOUNTERS";
import TUNDRA from "./TUNDRA_ENCOUNTERS";
import UNDERDARK from "./UNDERDARK_ENCOUNTERS";
import VOLCANIC from "./VOLCANIC_ENCOUNTERS";
import ASTRAL from "./ASTRAL_FRACTURES_ENCOUNTERS";
import ARCANE from "./ARCANE_LABS_ENCOUNTERS";
import NEXUS from "./ARCANE_NEXUS_ENCOUNTERS";

// Table de mapping
const BIOME_TABLES: Record<string, EncounterTableEntry[]> = {
  caves: CAVES,
  coast: COAST,
  desert: DESERT,
  dungeon: DUNGEON,
  ethereal: ETHEREAL,
  feywild: FEYWILD,
  forest: FOREST,
  haunted: HAUNTED,
  hills: HILLS,
  jungle: JUNGLE,
  lava: LAVA,
  mana: MANA,
  moonlight: MOONLIGHT,
  mountain: MOUNTAIN,
  ocean: OCEAN,
  overgrown: OVERGROWN,
  plains: PLAINS,
  ruins: RUINS,
  swamp: SWAMP,
  tundra: TUNDRA,
  underdark: UNDERDARK,
  volcanic: VOLCANIC,
  astral: ASTRAL,
  arcane: ARCANE,
  nexus: NEXUS,
};

// API
export function loadBiomeTable(biome: string): EncounterTableEntry[] {
  return BIOME_TABLES[biome] ?? [];
}

export default BIOME_TABLES;
