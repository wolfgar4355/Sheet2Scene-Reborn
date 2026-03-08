/**
 * build-weapon-showcase.ts — Générateur MQ pour rendu fiche d’objet
 */
export interface WeaponShowcaseOptions {
    seed?: number | null;
    aspectRatio?: string;
    quality?: "low" | "medium" | "high" | "ultra";
    negative?: string;
    rarity?: "common" | "uncommon" | "rare" | "epic" | "mythic";
}
/** Cadres visuels selon rareté MQ */
export declare const RARITY_STYLES: Record<string, string>;
/** Bonus MQ par rareté */
export declare const RARITY_ENHANCEMENT: Record<string, string>;
/** buildWeaponShowcase("katana") */
export declare function buildWeaponShowcase(weaponKey: string, opts?: WeaponShowcaseOptions): {
    key: string;
    prompt: string;
    negativePrompt: string;
    options: any;
};
