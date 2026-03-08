export declare const ERAS: readonly ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms", "arcane-renaissance", "mystic-age"];
export type Era = typeof ERAS[number];
export declare const SPELL_SCHOOLS: readonly ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "transmutation", "spirit", "primal", "astral"];
export type SpellSchool = typeof SPELL_SCHOOLS[number];
export declare const SPELL_RANGES: readonly ["self", "touch", "cone", "line", "ray", "sphere", "area", "multi-target", "aura", "sight"];
export type SpellRangeType = typeof SPELL_RANGES[number];
export interface SpellComponents {
    verbal: boolean;
    somatic: boolean;
    material?: string;
}
export type SpellCasting = "action" | "bonus-action" | "reaction" | "ritual" | "instant";
export interface Spell {
    id: string;
    name: string;
    level: number;
    school: SpellSchool;
    description: string;
    range?: {
        type: SpellRangeType;
        value?: string;
        target?: string;
    };
    components: SpellComponents;
    casting: SpellCasting;
    duration: string;
    cooldown?: string;
}
export interface Monster {
    id: string;
    name: string;
    type: string;
    subType?: string;
    cr: number;
    size: "tiny" | "small" | "medium" | "large" | "huge" | "gargantuan";
    alignment?: string;
    hp: number;
    ac: number;
    stats: {
        str: number;
        dex: number;
        con: number;
        int: number;
        wis: number;
        cha: number;
    };
    abilities?: Record<string, string>;
    actions?: Record<string, string>;
    traits?: Record<string, string>;
}
export interface EncounterTableEntry {
    key: string;
    weight: number;
}
export interface Role {
    id: string;
    label: string;
    hitDice: string;
    primaryStat: string;
    saves: string[];
}
export interface Ritual {
    id: string;
    name: string;
    circle: number;
    description: string;
    duration: string;
    cost?: string;
    component?: string;
}
export interface Faction {
    id: string;
    label: string;
    description?: string;
}
export interface GMFile {
    id: string;
    type: string;
    name: string;
    content: any;
}
export type GMData = Record<string, GMFile>;
