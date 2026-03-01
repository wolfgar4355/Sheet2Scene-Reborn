// -----------------------------------------------------------------------------
// Weapon Types — Mithril Engine
// -----------------------------------------------------------------------------

export interface WeaponPrompt {
  key: string;

  /** Texte principal du prompt */
  prompt: string;

  /** Prompt négatif utilisé par les modèles IA */
  negativePrompt: string;

  /** Boost de qualité : 1, 0.4, 0.7, 1.3 */
  qualityBoost: 1 | 0.4 | 0.7 | 1.3;

  /** Seed personnalisée */
  seed: number | null;

  /** Ratio d’image */
  aspectRatio: string;

  /** Style visuel interne (ex: “hammered-steel”, “arcane-crystal”) */
  style?: string;

  /** Thème MQ (ex: “fire”, “frost”, “shadow”) */
  theme?: string;

  /** Palette de couleurs (ex: “ember”, “frostbite”, “obsidian”) */
  palette?: string;

  /** Options supplémentaires pour les fonctions d’aperçu / variations */
  options?: {
    qualityBoost?: number;
    seed?: number | null;
    aspectRatio?: string;
  };
}

/** ID d’une catégorie d’armes (blades, bows, voidtech, etc.) */
export type WeaponCategoryId = string;

/** Mapping interne */
export type WeaponPromptList = WeaponPrompt[];
export type WeaponPromptMatrix = WeaponPrompt[][];
