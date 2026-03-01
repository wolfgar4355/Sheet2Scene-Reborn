// src/agents/prompts/_types.ts
// Types communs pour tous les prompts Mithril-Quest (items, races, classes, etc.)

// Styles d’images supportés (communs à tous les générateurs MQ)
export type MQImageStyle =
  | "realistic_cinematic"
  | "realistic_dark_fantasy"
  | "anime_shonen"
  | "anime_seinen"
  | "manga_classic_bw"
  | "cartoon_us_modern"
  | "cartoon_minimalist"
  | "three_d_print_ready"
  | "lineart_blueprint"
  | "pixelart_16bit";

// Variantes de cadrage / rendu
export type MQImageVariant =
  | "front"
  | "isometric"
  | "battle_pose"
  | "turnaround"
  | "item_card"
  | "engraving";

// Catégories générales MQ pour l’UI, les logs, la télémetry, etc.
export type MQPromptCategory =
  | "item-weapon"
  | "item-armor"
  | "item-shield"
  | "item-artifact"
  | "item-consumable"
  | "item-ingredient"
  | "item-generic"
  | "race"
  | "class"
  | "era"
  | "world"
  | "faction"
  | "monster"
  | "boss"
  | "player"
  | "background"
  | "profession"
  | "alignment";

// Raretés standard MQ (recyclables dans tout le système)
export type MQRarity =
  | "common"
  | "uncommon"
  | "rare"
  | "very-rare"
  | "legendary"
  | "mythic";

// Base commune de toutes les configs de prompts spécialisés
export interface MQBasePromptConfig {
  /** Description principale de l’objet / créature / concept */
  basePrompt: string;

  /** Négatif spécifique (complète ou remplace le default) */
  negativePrompt?: string;

  /** Tags d’univers, de thème (ex: "radiant", "giant", "void") */
  loreTags?: string[];

  /** Hints sur les matériaux (ex: "obsidian", "sun-metal") */
  materialHints?: string[];

  /** Palette indicative de couleurs */
  colorPalette?: string[];

  /** Indications de cadrage / caméra (ex: "centered", "orthographic") */
  cameraHints?: string[];
}

// Métadonnées attachées à chaque prompt généré
export interface MQPromptMetaBase {
  key: string;                    // ex: "aegis_of_dawnlord"
  label?: string;                 // ex: "Égide du Seigneur de l’Aube"
  category?: MQPromptCategory;    // ex: "item-shield"
  style: MQImageStyle;
  variant: MQImageVariant;
  rarity?: MQRarity;
  tags?: string[];                // ex: ["shield", "radiant"]
  loreTags?: string[];
}

// Structure standard de retour pour tous les générateurs de prompts MQ
export interface MQGeneratedPrompt {
  prompt: string;
  negativePrompt?: string;
  meta: MQPromptMetaBase;
}

// Dictionnaire de configs de prompts spécialisés par "key" interne
export type MQPromptDictionary<
  TConfig extends MQBasePromptConfig = MQBasePromptConfig
> = Record<string, TConfig>;
