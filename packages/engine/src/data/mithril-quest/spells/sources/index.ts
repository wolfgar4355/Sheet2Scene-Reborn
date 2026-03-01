// @ts-nocheck
// index.ts — Regroupe toutes les sources de sorts MQ (défense / offense / soin / utilité)

export * from "./defense";
export * from "./healing";
export * from "./offense";
export * from "./utility";

// Import interne pour fusionner
import { DEFENSE_SPELLS } from "./defense";
import { HEALING_SPELLS } from "./healing";
import { OFFENSE_SPELLS } from "./offense";
import { UTILITY_SPELLS } from "./utility";

import type { Spell } from "../schema";

// ===============================================
// ALL_SPELLS — Tous les sorts MQ combinés
// ===============================================
export const ALL_SPELLS: Spell[] = [
  ...DEFENSE_SPELLS,
  ...HEALING_SPELLS,
  ...OFFENSE_SPELLS,
  ...UTILITY_SPELLS,
] as const;

// Type helper
export type AnySpell = (typeof ALL_SPELLS)[number];
