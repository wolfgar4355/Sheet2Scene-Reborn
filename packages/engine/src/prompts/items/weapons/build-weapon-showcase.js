/**
 * build-weapon-showcase.ts — Générateur MQ pour rendu fiche d’objet
 */
import { buildWeaponImagePrompt } from "./build-weapon-image";
import { ALL_WEAPON_PROMPTS, } from "./generate-all-weapons-prompts";
/** Cadres visuels selon rareté MQ */
const RARITY_STYLES = {
    common: "simple parchment backdrop, faint vignette",
    uncommon: "soft green vignette glow, subtle runes",
    rare: "blue arcane glow, elegant framing, faint particles",
    epic: "purple mystical aura, shimmering edge, floating dust",
    mythic: "golden celestial halo, sacred radiance, divine depth",
};
/** Bonus MQ par rareté */
const RARITY_ENHANCEMENT = {
    common: "",
    uncommon: "slightly enhanced magical presence",
    rare: "light magical glow, dramatic contrast",
    epic: "strong arcane radiance, perfect clarity, ethereal aura",
    mythic: "intense divine energy, golden shimmer",
};
/**
 * Exemple :
 *   buildWeaponShowcase("katana")
 */
export function buildWeaponShowcase(weaponKey, opts = {}) {
    const { seed = null, aspectRatio = "3:4", quality = "high", negative = [], rarity = "rare", } = opts;
    /** ✔ Vérification existence — typage strict */
    const categories = Object.values(ALL_WEAPON_PROMPTS);
    const exists = categories.some((list) => list.some((w) => w.key === weaponKey));
    if (!exists) {
        throw new Error(`❌ Weapon '${weaponKey}' not found in MQ data.`);
    }
    /** ✔ Récupère prompt de base HQ */
    const base = buildWeaponImagePrompt(weaponKey, {
        quality,
        seed,
        aspectRatio,
        negative,
    });
    /** ✔ Ajouter style showcase HQ */
    const showcasePrompt = `
${base.prompt}

--mq-showcase: "angled 45-degree view, centered weapon presentation"
--mq-base: "premium parchment backdrop, soft vignette, clean lighting"
--mq-shadow: "soft contact shadow under weapon, realistic"
--mq-rarity-frame: "${RARITY_STYLES[rarity]}"
--mq-enhance: "${RARITY_ENHANCEMENT[rarity]}"

Ultra-detailed object render.
Perfect symmetry adjusted for showcase.
`;
    /** Regroupe tout proprement */
    return {
        key: weaponKey,
        rarity,
        prompt: showcasePrompt.trim(),
        negativePrompt: base.negativePrompt,
        options: {
            ...base.options,
            seed,
            aspectRatio,
            qualityBoost: base.options.qualityBoost,
        },
    };
}
