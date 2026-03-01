// @ts-nocheck
// /apps/web/lib/s2s/fantasy/bestiary/sources/categories.ts

import type { CreatureType, CreatureSize } from "./types";

// Ce fichier doit uniquement contenir les listes statiques
// de catégories, tailles, rôles, etc.

export const CREATURE_SIZES: CreatureSize[] = [
  "tiny",
  "small",
  "medium",
  "large",
  "huge",
  "gargantuan",
];

export const CREATURE_TYPES: CreatureType[] = [
  "beast",
  "humanoid",
  "construct",
  "elemental",
  "undead",
  "dragon",
  "fiend",
  "celestial",
  "fey",
  "aberration",
];

// Tu peux ajouter ici des ENUMS de biomes, habitats, factions, etc.
