/**
 * build-weapon-showcase.ts — Générateur MQ pour rendu fiche d’objet
 */

import { buildWeaponImagePrompt } from "./build-weapon-image";
import { ALL_WEAPON_PROMPTS } from "./generate-all-weapons-prompts";
import type { WeaponPrompt } from "./types";

export interface WeaponShowcaseOptions {
  seed?: number | null;
  aspectRatio?: string;
  quality?: "low" | "medium" | "high" | "ultra";
  negative?: string;
  rarity?: "common" | "uncommon" | "rare" | "epic" | "mythic";
}

/** Cadres visuels selon rareté MQ */
export const RARITY_STYLES: Record<string, string> = {
  common: "simple parchment backdrop. faint vignette.",
  uncommon: "soft green vignette glow. subtle runes.",
  rare: "blue arcane glow. elegant framing. faint particles.",
  epic: "purple mystical aura. shimmering edge. floating dust.",
  mythic: "golden celestial halo. sacred radiance. divine depth",
};

/** Bonus MQ par rareté */
export const RARITY_ENHANCEMENT: Record<string, string> = {
  common: "",
  uncommon: "slightly enhanced magical presence",
  rare: "high-clarity glow. dramatic contrast",
  epic: "strong arcane radiance, perfect clarity, ethereal aura",
  mythic: "ultra-enhanced glow, greater shimmer",
};

/** buildWeaponShowcase("katana") */
export function buildWeaponShowcase(
  weaponKey: string,
  opts: WeaponShowcaseOptions = {}
) {
  const {
    seed = null,
    aspectRatio = "3:4",
    quality = "high",
    negative = "",
    rarity = "rare",
  } = opts;

  /** Vérifie existence */
  const categories = Object.values(ALL_WEAPON_PROMPTS) as WeaponPrompt[][];

  const exists = categories.some((list) =>
    list.some((w) => w.key === weaponKey)
  );

  if (!exists) {
    throw new Error(`❌ Weapon "${weaponKey}" not found in MQ data.`);
  }

  /** Prompt de base */
  const base = buildWeaponImagePrompt(weaponKey, {
    quality,
    seed,
    aspectRatio,
    negative: [negative],
  });

  /** Prompt MQ amélioré */
  const showcasePrompt = `
mq-showcase: "angled 45-degree view. centered weapon presentation"
mq-base: "premium parchment backdrop. soft vignette. clean lighting"
mq-shadow: "soft contact shadow under weapon. realistic"
mq-frame: "${RARITY_STYLES[rarity]}"
mq-enhance: "${RARITY_ENHANCEMENT[rarity]}"
${base.prompt}
`.trim();

  /** Retour final */
  return {
    key: base.key,
    prompt: showcasePrompt,
    negativePrompt: base.negativePrompt ?? "",

    options: {
      ...(base as any).options,
      seed,
      aspectRatio,
      qualityBoost: (base as any).options?.qualityBoost ?? 1,
    },
  };
}
