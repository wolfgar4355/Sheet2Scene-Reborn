/******************************************************************************************
 * MQ — ACCESSORY PROMPT GENERATOR
 * Combine toutes les variantes de styles, thèmes et palettes
 * Produit un tableau complet de prompts utilisables dans toute la pipeline.
 ******************************************************************************************/

import {
  MQAccessoryCategory,
  MQStyleOptions,
  MQThemeOptions,
  MQColorPalettes,
  getAccessoryPrompt,
} from "./accessories_prompts";

export const ALL_ACCESSORY_CATEGORIES: MQAccessoryCategory[] = [
  "ring",
  "amulet",
  "cloak",
  "belt",
  "trinket",
  "relic",
];

/**
 * Génère toutes les combinaisons possibles :
 * 6 catégories × 8 styles × 10 thèmes × 8 palettes
 * = 3840 prompts (auto-scalable)
 */
export function generateAllAccessoryPrompts() {
  const results = [];

  for (const category of ALL_ACCESSORY_CATEGORIES) {
    for (const style of MQStyleOptions) {
      for (const theme of MQThemeOptions) {
        for (const palette of MQColorPalettes) {
          results.push(getAccessoryPrompt(category, style, theme, palette));
        }
      }
    }
  }

  return results;
}

/**
 * Export direct : un seul appel = tout le dataset MQ accessoires.
 */
export const MQ_ACCESSORY_PROMPT_DATASET = generateAllAccessoryPrompts();
