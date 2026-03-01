// @ts-nocheck
// -----------------------------------------------------------------------------
//  Index global — rassemble tous les rituels des différentes écoles
// -----------------------------------------------------------------------------

export * from "./sources/ritual_divine";
export * from "./sources/ritual_nature";
export * from "./sources/ritual_arcane";
export * from "./sources/ritual_necromancy";
export * from "./sources/ritual_spirit";

import { RITUAL_DIVINE } from "./sources/ritual_divine";
import { RITUAL_NATURE } from "./sources/ritual_nature";
import { RITUAL_ARCANE } from "./sources/ritual_arcane";
import { RITUAL_NECRO } from "./sources/ritual_necromancy";
import { RITUAL_SPIRIT } from "./sources/ritual_spirit";

// -----------------------------------------------------------------------------
//  ALL_RITUALS — Fusionne toutes les écoles de magie
// -----------------------------------------------------------------------------

export const ALL_RITUALS = [
  ...RITUAL_DIVINE,
  ...RITUAL_NATURE,
  ...RITUAL_ARCANE,
  ...RITUAl_NECRO,
  ...RITUAL_SPIRIT,
];
