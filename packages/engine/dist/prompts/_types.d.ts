export type MQImageStyle = "realistic_cinematic" | "realistic_dark_fantasy" | "anime_shonen" | "anime_seinen" | "manga_classic_bw" | "cartoon_us_modern" | "cartoon_minimalist" | "three_d_print_ready" | "lineart_blueprint" | "pixelart_16bit";
export type MQImageVariant = "front" | "isometric" | "battle_pose" | "turnaround" | "item_card" | "engraving";
export type MQPromptCategory = "item-weapon" | "item-armor" | "item-shield" | "item-artifact" | "item-consumable" | "item-ingredient" | "item-generic" | "race" | "class" | "era" | "world" | "faction" | "monster" | "boss" | "player" | "background" | "profession" | "alignment";
export type MQRarity = "common" | "uncommon" | "rare" | "very-rare" | "legendary" | "mythic";
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
export interface MQPromptMetaBase {
    key: string;
    label?: string;
    category?: MQPromptCategory;
    style: MQImageStyle;
    variant: MQImageVariant;
    rarity?: MQRarity;
    tags?: string[];
    loreTags?: string[];
}
export interface MQGeneratedPrompt {
    prompt: string;
    negativePrompt?: string;
    meta: MQPromptMetaBase;
}
export type MQPromptDictionary<TConfig extends MQBasePromptConfig = MQBasePromptConfig> = Record<string, TConfig>;
