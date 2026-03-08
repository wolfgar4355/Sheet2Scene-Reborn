/******************************************************************************************
 * MQ — ACCESSORY PROMPT GENERATOR
 * Combine toutes les variantes de styles, thèmes et palettes
 * Produit un tableau complet de prompts utilisables dans toute la pipeline.
 ******************************************************************************************/
import { MQAccessoryCategory } from "./accessories_prompts";
export declare const ALL_ACCESSORY_CATEGORIES: MQAccessoryCategory[];
/**
 * Génère toutes les combinaisons possibles :
 * 6 catégories × 8 styles × 10 thèmes × 8 palettes
 * = 3840 prompts (auto-scalable)
 */
export declare function generateAllAccessoryPrompts(): import("./accessories_prompts").MQAccessoryPrompt[];
/**
 * Export direct : un seul appel = tout le dataset MQ accessoires.
 */
export declare const MQ_ACCESSORY_PROMPT_DATASET: import("./accessories_prompts").MQAccessoryPrompt[];
