export type MQRarity = "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic";
export interface MQItemMetadata {
    rarity: MQRarity;
    weight: "light" | "medium" | "heavy" | "none";
    attunement?: boolean;
    tags: string[];
    uiIcon: string;
    color: string;
    eras: string[];
    damageType?: string;
    armorType?: string;
    consumableType?: string;
    craftingMaterials?: string[];
}
export declare const ITEM_CATEGORY_METADATA: Record<string, Partial<MQItemMetadata>>;
export declare function getItemMetadata(category: string): MQItemMetadata;
