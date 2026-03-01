export interface UniversalCreature {
    id: string;
    name: string;
    rarity: "common" | "uncommon" | "rare" | "elite" | "legendary" | "mythic";
    type: string;
    category: string;
    faction?: string;
    biome?: string;
    habitat?: string;
    tags: string[];
    cr: number;
    threatTier: "minion" | "standard" | "elite" | "solo" | "boss" | "mythic";
    xpValue?: number;
    aiProfile?: string;
    stats: {
        hp: number;
        tempHp?: number;
        ac: number;
        speed: number | {
            walk?: number;
            fly?: number;
            swim?: number;
            burrow?: number;
        };
        abilities: {
            str: number;
            dex: number;
            con: number;
            int: number;
            wis: number;
            cha: number;
        };
        saves?: {
            fortitude?: number;
            reflex?: number;
            will?: number;
        };
        senses?: {
            darkvision?: number;
            tremorsense?: number;
            blindsight?: number;
            truesight?: number;
        };
    };
    attacks: AttackAction[];
    offensiveTraits?: string[];
    resistances?: string[];
    immunities?: string[];
    vulnerabilities?: string[];
    defensiveTraits?: string[];
    behavior: {
        aggression: "passive" | "defensive" | "aggressive" | "berserk";
        intelligenceLevel: "animal" | "low" | "average" | "tactical" | "genius";
        tactics: {
            prefersAmbush?: boolean;
            fightsToDeath?: boolean;
            retreatsAt?: number;
            prioritizesTargets?: "weakest" | "strongest" | "caster" | "random";
        };
    };
    loot?: {
        currencies?: string[];
        items?: string[];
        tables?: string[];
    };
    traits?: string[];
    actions?: ActionEntry[];
    reactions?: ActionEntry[];
    legendaryActions?: ActionEntry[];
    mythicActions?: ActionEntry[];
    variants?: {
        corrupted?: boolean;
        elemental?: "fire" | "cold" | "acid" | "lightning" | "radiant" | "necrotic" | null;
        ascendedForm?: string;
    };
    model3D?: {
        seed?: number;
        style?: string;
        pose?: string;
        bodyTemplate?: string;
        scale?: number;
        meshData?: string;
    };
    source?: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface AttackAction {
    name: string;
    type: "melee" | "ranged" | "spell" | "special";
    hitBonus?: number;
    damage?: {
        dice: string;
        type?: string;
    };
    range?: number | string;
    tags?: string[];
}
export interface ActionEntry {
    name: string;
    description: string;
    tags?: string[];
}
