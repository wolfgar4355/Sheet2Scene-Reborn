/**
 * get-weapon-prompt.ts — utilitaire MQ pour récupérer un prompt d’arme
 */

import { ALL_WEAPON_PROMPTS } from "./generate-all-weapons-prompts";

import type {
  WeaponPrompt,
  WeaponCategoryId,
  WeaponPromptMatrix,
} from "./types";

/**
 * Récupérer un prompt d’arme par catégorie + key.
 * Exemple :
 *   getWeaponPrompt("blades", "katana")
 *   getWeaponPrompt("cosmic", "astral_sword")
 */
export function getWeaponPrompt(
  category: WeaponCategoryId,
  weaponKey: string
): WeaponPrompt | null {
  const list = ALL_WEAPON_PROMPTS[category];

  if (!list) return null;

  const found = list.find((w: WeaponPrompt) => w.key === weaponKey);
  return found ?? null;
}

/**
 * Raccourci : recherche globale sur TOUTES les catégories
 * Exemple :
 *   getWeaponPromptAuto("katana")
 */
export function getWeaponPromptAuto(weaponKey: string): WeaponPrompt | null {
  const categories = Object.values(ALL_WEAPON_PROMPTS) as WeaponPromptMatrix;

  for (const list of categories) {
    const found = list.find((w: WeaponPrompt) => w.key === weaponKey);
    if (found) return found;
  }

  return null;
}
