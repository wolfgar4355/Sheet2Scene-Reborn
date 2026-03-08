/**
 * build-weapon-image.ts — Générateur MQ pour prompts d’images d’armes
 */
export interface BuildWeaponImageOptions {
    negative?: string[];
    quality?: "low" | "medium" | "high" | "ultra";
    seed?: number | null;
    aspectRatio?: string;
}
/**
 * Exemple :
 * buildWeaponImagePrompt("katana")
 */
export declare function buildWeaponImagePrompt(weaponKey: string, opts?: BuildWeaponImageOptions): {
    key: string;
    prompt: string;
    negativePrompt: string;
    qualityBoost: 1 | 0.4 | 0.7 | 1.3;
    seed: number | null;
    aspectRatio: string;
};
