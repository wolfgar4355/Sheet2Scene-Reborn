export interface MQScroll {
    key: string;
    label: string;
    description: string;
    flavor?: string;
    type: "consumable";
    category: "scroll";
    spell: string;
    school: string;
    rank: number;
    castType: "ranged" | "burst" | "touch" | "self";
    curse?: boolean;
    blessing?: boolean;
    mythic?: boolean;
    craft?: {
        ink: string;
        method: string;
        difficulty: "easy" | "medium" | "hard" | "master";
        reagents?: string[];
    };
    metadata: {
        rarity: "common" | "uncommon" | "rare" | "very-rare" | "legendary" | "mythic" | "cursed";
        value: number;
        weight: number;
        tags?: string[];
    };
}
export declare const MQ_SCROLLS: MQScroll[];
