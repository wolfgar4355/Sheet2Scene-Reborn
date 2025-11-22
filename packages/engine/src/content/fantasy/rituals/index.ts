import { RITUALS_DIVINE } from "./sources/ritual_divine.ts";
import { RITUALS_NATURE } from "./sources/ritual_nature.ts";
import { RITUALS_ARCANE } from "./sources/ritual_arcane.ts";
import { RITUALS_NECRO } from "./sources/ritual_necromancy.ts";
import { RITUALS_SPIRIT } from "./sources/ritual_spirit.ts";

export const ALL_RITUALS = [
  ...RITUALS_DIVINE,
  ...RITUALS_NATURE,
  ...RITUALS_ARCANE,
  ...RITUALS_NECRO,
  ...RITUALS_SPIRIT,
];
