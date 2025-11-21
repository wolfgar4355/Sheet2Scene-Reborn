// ================================================
// S2S FANTASY — FILTERS (MITHRIL ENGINE FORMAT)
// ================================================

import * as biomes from "./biomes";
import * as categories from "./categories";
import * as encounters from "./encounters";
import * as factions from "./factions";
import * as habitats from "./habitats";
import * as types from "./types";

export const FILTERS = {
  biomes,
  categories,
  encounters,
  factions,
  habitats,
  types,
} as const;

export type FilterRegistry = typeof FILTERS;
