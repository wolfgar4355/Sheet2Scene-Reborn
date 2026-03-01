/**
 * generate-all-weapons.ts
 * Combine tous les prompts d'armes MQ en un seul objet final.
 */

import { BLADES_PROMPTS } from "./weapons/blades_prompts";
import { BOWS_PROMPTS } from "./weapons/bows_prompts";
import { DAGGERS_PROMPTS } from "./weapons/daggers_prompts";
import { CROSSBOWS_PROMPTS } from "./weapons/crossbows_prompts";
import { FIREARMS_PROMPTS } from "./weapons/firearms_prompts";
import { EXOTIC_PROMPTS } from "./weapons/exotic_prompts";
import { ELEMENTAL_PROMPTS } from "./weapons/elemental_prompts";
import { COSMIC_PROMPTS } from "./weapons/cosmic_prompts";
import { POLEARMS_PROMPTS } from "./weapons/polearms_prompts";
import { VOIDTECH_PROMPTS } from "./weapons/voidtech_prompts";

// ---------------------------------------------------------------------------
// Objet readonly qui regroupe TOUTES les catégories d’armes
// ---------------------------------------------------------------------------

export const ALL_WEAPON_PROMPTS = {
  blades: BLADES_PROMPTS,
  bows: BOWS_PROMPTS,
  daggers: DAGGERS_PROMPTS,
  crossbows: CROSSBOWS_PROMPTS,
  firearms: FIREARMS_PROMPTS,
  exotic: EXOTIC_PROMPTS,
  elemental: ELEMENTAL_PROMPTS,
  cosmic: COSMIC_PROMPTS,
  polearms: POLEARMS_PROMPTS,
  voidtech: VOIDTECH_PROMPTS,
} as const;

// Type d’une catégorie (clé de l’objet ci-dessus)
export type WeaponCategoryId = keyof typeof ALL_WEAPON_PROMPTS;

// Type d’un prompt d’arme individuel
export type WeaponPrompt =
  (typeof ALL_WEAPON_PROMPTS)[WeaponCategoryId][number];

// ---------------------------------------------------------------------------
// Utilitaire JSON
// ---------------------------------------------------------------------------

export const generateAllWeaponsJSON = (): string => {
  return JSON.stringify(ALL_WEAPON_PROMPTS, null, 2);
};

// ---------------------------------------------------------------------------
// Petit hook CLI facultatif (pour usage node uniquement)
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
declare const process: any;

if (typeof process !== "undefined") {
  const entry = process.argv?.[1] ?? "";
  if (entry.endsWith("generate-all-weapons-prompts.ts")) {
    console.log("✨ ALL MQ WEAPON PROMPTS GENERATED ✨");
    console.log(generateAllWeaponsJSON());
  }
}
