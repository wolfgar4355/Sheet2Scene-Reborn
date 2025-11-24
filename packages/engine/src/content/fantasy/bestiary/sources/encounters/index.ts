// ============================================================================
// FANTASY — ENCOUNTERS (Biomes) — INDEX
// Charge dynamiquement toutes les tables de rencontres par biome
// ============================================================================

import type { MonsterDefinition } from "../../types";

// Import statique de tous les biomes (tiré de ta structure réelle)
import CAVES from "./CAVES_ENCOUNTERS.ts";
import COAST from "./COAST_ENCOUNTERS.ts";
import DESERT from "./DESERT_ENCOUNTERS.ts";
import DUNGEON from "./DUNGEON_ENCOUNTERS.ts";
import ETHEREAL from "./ETHEREAL_MISTLANDS_ENCOUNTERS.ts";
import FEYWILD from "./FEYWILD_BLOOM_ENCOUNTERS.ts";
import FOREST from "./FOREST_ENCOUNTERS.ts";
import HAUNTED from "./HAUNTED_RUINS_ENCOUNTERS.ts";
import HILLS from "./HILLS_ENCOUNTERS.ts";
import JUNGLE from "./JUNGLE_ENCOUNTERS.ts";
import LAVA from "./LAVA_ENCOUNTERS.ts";
import MANA from "./MANA_FIELDS_ENCOUNTERS.ts";
import MOONLIGHT from "./MOONLIGHT_ENCOUNTERS.ts";
import MOUNTAIN from "./MOUNTAIM_ENCOUNTERS.ts";
import OCEAN from "./OCEAN_ENCOUNTERS.ts";
import OVERGROWN from "./OVERGROWN_TEMPLE_ENCOUNTERS.ts";
import PLAINS from "./PLAINS_ENCOUNTERS.ts";
import RUINS from "./RUINS_ENCOUNTERS.ts";
import SWAMP from "./SWAMP_ENCOUNTERS.ts";
import TUNDRA from "./TOUNDRA_ENCOUNTERS.ts";
import UNDERDARK from "./UNDERDARK_ENCOUNTERS.ts";
import VOLCANIC from "./VOLCANIC_ENCOUNTERS.ts";
import ASTRAL from "./ASTRAL_FRACTURES_ENCOUNTERS.ts";
import ARCANE from "./ARCANE_LABS_ENCOUNTERS.ts";
import NEXUS from "./ARCANE_NEXUS_ENCOUNTERS.ts";

// Table de mapping
const BIOME_TABLES: Record<string, MonsterDefinition[]> = {
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
export function loadBiomeTable(biome: string): MonsterDefinition[] {
  return BIOME_TABLES[biome] ?? [];
}
