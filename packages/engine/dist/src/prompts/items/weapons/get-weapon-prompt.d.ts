/**
 * get-weapon-prompt.ts — utilitaire MQ pour récupérer un prompt d’arme
 */
import type { WeaponPrompt, WeaponCategoryId } from "./types";
/**
 * Récupérer un prompt d’arme par catégorie + key.
 * Exemple :
 *   getWeaponPrompt("blades", "katana")
 *   getWeaponPrompt("cosmic", "astral_sword")
 */
export declare function getWeaponPrompt(category: WeaponCategoryId, weaponKey: string): WeaponPrompt | null;
/**
 * Raccourci : recherche globale sur TOUTES les catégories
 * Exemple :
 *   getWeaponPromptAuto("katana")
 */
export declare function getWeaponPromptAuto(weaponKey: string): WeaponPrompt | null;
