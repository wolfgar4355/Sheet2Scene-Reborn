/******************************************************************************************
 * MQ — ACCESSORY PROMPTS (Medium AAA Quality)
 * Génération d’items : anneaux, amulettes, ceintures, capes, talismans, reliques…
 * Style : medium → descriptions riches mais optimisées pour agents spécialisés.
 ******************************************************************************************/
export type MQAccessoryCategory = "ring" | "amulet" | "cloak" | "belt" | "trinket" | "relic";
/******************************************************************************************
 * MQ — OPTIONS ESTHÉTIQUES
 ******************************************************************************************/
export declare const MQStyleOptions: readonly ["runic", "celestial", "abyssal", "primal", "arcane", "elemental", "astral", "nature"];
export declare const MQThemeOptions: readonly ["holy", "shadow", "mythic", "ancient", "forgeborn", "spirit", "void", "storm", "frost", "ember"];
export declare const MQColorPalettes: readonly ["obsidian", "golden", "emerald", "sunfire", "frost", "storm", "amethyst", "crimson"];
/******************************************************************************************
 * STRUCTURES DE PROMPTS
 ******************************************************************************************/
export interface MQAccessoryPrompt {
    category: MQAccessoryCategory;
    title: string;
    style: typeof MQStyleOptions[number];
    theme: typeof MQThemeOptions[number];
    palette: typeof MQColorPalettes[number];
    prompt: string;
}
/******************************************************************************************
 * FONCTION PRINCIPALE
 * Remplace {style}, {theme}, {palette}
 ******************************************************************************************/
export declare function getAccessoryPrompt(category: MQAccessoryCategory, style: typeof MQStyleOptions[number], theme: typeof MQThemeOptions[number], palette: typeof MQColorPalettes[number]): MQAccessoryPrompt;
