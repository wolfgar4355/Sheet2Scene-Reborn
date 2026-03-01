export interface MQPotion {
    key: string;
    label: string;
    flavor?: string;
    description: string;
    type: "consumable";
    category: "potion";
    stats?: {
        heal?: string | number;
        mana?: string | number;
        buff?: string[];
        resist?: string[];
        special?: string;
    };
    alchemy?: {
        tier: 1 | 2 | 3 | 4 | 5;
        school: string;
        duration?: string;
        difficulty?: "easy" | "medium" | "hard" | "master";
        reagents?: string[];
    };
    metadata: {
        rarity: "common" | "uncommon" | "rare" | "very-rare" | "legendary" | "mythic";
        value: number;
        weight: number;
        tags?: string[];
    };
}
export declare const MQ_POTIONS: MQPotion[];
