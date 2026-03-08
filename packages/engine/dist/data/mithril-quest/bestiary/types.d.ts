export type CreatureSize = "tiny" | "small" | "medium" | "large" | "huge" | "gargantuan";
export type CreatureType = "beast" | "humanoid" | "construct" | "elemental" | "undead" | "dragon" | "fiend" | "celestial" | "fey" | "aberration";
export interface StatBlock {
    hitPoints: number;
    armorClass: number;
    speed: number | string;
    abilities: {
        str: number;
        dex: number;
        con: number;
        int: number;
        wis: number;
        cha: number;
    };
}
export interface AttackAction {
    key: string;
    label: string;
    iohlt: number;
    damage: string;
    type: string;
    description: string;
}
export interface Trait {
    key: string;
    label: string;
    description: string;
}
export type FactionTag = "neutral" | "wild" | "corrupted" | "arcane" | "undead" | "demonic" | "celestial" | "fey" | "tribal" | "royalty" | "none";
export interface MonsterDefinition {
    key: string;
    label?: string;
    type: CreatureType;
    size: CreatureSize;
    challenge: number;
    habitat: string[];
    era?: string[];
    statBlock: StatBlock;
    attacks: AttackAction[];
    traits: Trait[];
    lootTable?: string[];
    faction?: FactionTag;
}
export interface EncounterTableEntry {
    key: string;
    weight: number;
    min?: number;
    max?: number;
}
