export interface MQIngredient {
    key: string;
    label: string;
    rarity: "common" | "uncommon" | "rare" | "very-rare" | "legendary" | "mythic";
    value: number;
    effects: string[];
    eras?: string[];
    description: string;
}
export declare const MQ_INGREDIENTS: MQIngredient[];
export type MQIngredientType = (typeof MQ_INGREDIENTS)[number];
