/**
 * get-weapon-prompt.ts — utilitaire MQ pour récupérer un prompt d’arme
 */
import { ALL_WEAPON_PROMPTS } from "./generate-all-weapons-prompts";
/**
 * Récupérer un prompt d’arme par catégorie + key.
 * Exemple :
 *   getWeaponPrompt("blades", "katana")
 *   getWeaponPrompt("cosmic", "astral_sword")
 */
export function getWeaponPrompt(category, weaponKey) {
    const list = ALL_WEAPON_PROMPTS[category];
    if (!list)
        return null;
    const found = list.find((w) => w.key === weaponKey);
    return found ?? null;
}
/**
 * Raccourci : recherche globale sur TOUTES les catégories
 * Exemple :
 *   getWeaponPromptAuto("katana")
 */
export function getWeaponPromptAuto(weaponKey) {
    const categories = Object.values(ALL_WEAPON_PROMPTS);
    for (const list of categories) {
        const found = list.find((w) => w.key === weaponKey);
        if (found)
            return found;
    }
    return null;
}
