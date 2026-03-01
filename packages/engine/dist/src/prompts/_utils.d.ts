import { MQBasePromptConfig, MQGeneratedPrompt, MQImageStyle, MQImageVariant, MQPromptCategory, MQRarity } from "./_types";
export declare const MQ_DEFAULT_NEGATIVE_PROMPT: string;
/**
 * Description textuelle d’un style d’image.
 * Cette chaîne est ajoutée au prompt final pour guider le modèle.
 */
export declare function describeStyle(style: MQImageStyle): string;
/**
 * Description textuelle de la variante de cadrage.
 */
export declare function describeVariant(variant: MQImageVariant): string;
export interface MQBuildPromptOptions {
    key: string;
    label?: string;
    style: MQImageStyle;
    variant?: MQImageVariant;
    /** Catégorie logique pour logs / analytics / UI */
    category?: MQPromptCategory;
    /** Rareté MQ (optionnelle mais utile pour l’UI et la pondération) */
    rarity?: MQRarity;
    /** Base principale, si tu ne passes pas de config */
    basePrompt?: string;
    /** Config spécialisée (basePrompt + hints) stockée dans un dictionnaire */
    config?: MQBasePromptConfig;
    /** Éléments textuels à ajouter à la fin (tags, contraintes spécifiques, etc.) */
    extraParts?: string[];
    /** Tags supplémentaires à mettre dans meta.tags */
    tags?: string[];
    /** Tags de lore supplémentaires (en plus de ceux de la config) */
    loreTags?: string[];
    /** Override du négatif final (sinon on fusionne) */
    negativeOverride?: string;
}
/**
 * Construit un MQGeneratedPrompt à partir d’une config + options.
 * Utilisé par tous les générateurs spécialisés (shields, weapons, races, etc.).
 */
export declare function buildMQPrompt(options: MQBuildPromptOptions): MQGeneratedPrompt;
