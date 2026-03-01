/**
 * build-weapon-image.ts — Générateur MQ pour prompts d’images d’armes
 */

import {
  ALL_WEAPON_PROMPTS,
} from "./generate-all-weapons-prompts";

import type {
  WeaponPrompt,
  WeaponCategoryId,
  WeaponPromptMatrix,
} from "./types";

export interface BuildWeaponImageOptions {
  negative?: string[];
  quality?: "low" | "medium" | "high" | "ultra";
  seed?: number | null;
  aspectRatio?: string;
}

// Négatifs MQ universels
const DEFAULT_NEGATIVES = [
  "blurry",
  "low resolution",
  "distorted",
  "extra fingers",
  "wrong anatomy",
  "crooked geometry",
  "overexposed",
  "underexposed",
  "nsfw",
  "loops",
  "text",
  "watermark",
];

// Pondération qualité
const QUALITY_MAP = {
  low: 0.4,
  medium: 0.7,
  high: 1.0,
  ultra: 1.3,
} as const;

/**
 * Exemple :
 * buildWeaponImagePrompt("katana")
 */
export function buildWeaponImagePrompt(
  weaponKey: string,
  opts: BuildWeaponImageOptions = {}
) {
  const {
    negative = [],
    quality = "high",
    seed = null,
    aspectRatio = "1:1",
  } = opts;

  // 🔥 Typage strict : on force TS à connaître la structure
  const categories = Object.values(ALL_WEAPON_PROMPTS) as WeaponPrompt[][];

  let found: WeaponPrompt | null = null;

  // Recherche dans toutes les catégories
  for (const category of categories) {
    const w = category.find((item) => item.key === weaponKey);
    if (w) {
      found = w;
      break;
    }
  }

  if (!found) {
    throw new Error(`❌ Weapon '${weaponKey}' not found in MQ prompts.`);
  }

  // Prompt final MQ
  const finalPrompt = `
${found.style}
${found.prompt}

- mq-style: "mythril-quest fantasy realism";
- mq-light: "soft enchanted glow + dramatic rimlight";
- mq-materials: "perfect steel rendering, polished edges, pure luminescence";
- mq-bg: "neutral parchment fantasy backdrop";
`.trim();

  // Négatifs finaux
  const negatives = [...DEFAULT_NEGATIVES, ...negative]
    .map((x) => `(${x}:1)`)
    .join(", ");

  const result = {
    key: found.key,
    prompt: finalPrompt,
    negativePrompt: negatives,
    qualityBoost: QUALITY_MAP[quality],
    seed,
    aspectRatio,
  };

  return result;
}
