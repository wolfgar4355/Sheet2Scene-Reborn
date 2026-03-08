/**
 * SYSTÈME DE MAGIE — Sheet2Scene Fantasy
 * Niveaux 0 à 9, progression par classe, 100% original.
 */
export type MagicSchool = "elemental" | "nature" | "shadow" | "light" | "spirit" | "arcane";
export declare const MAGIC_SCHOOL_LABELS: Record<MagicSchool, string>;
export type SpellRank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export interface Spell {
    key: string;
    name: string;
    rank: SpellRank;
    school: MagicSchool;
    shortDescription: string;
    effect: string;
    castingTime: "action" | "bonus-action" | "reaction" | "minute" | "hour";
    duration: "instant" | "rounds" | "minutes" | "hours" | "permanent" | "concentration";
    range: string;
    target: string;
    classTags: any[];
}
export declare const FANTASY_SPELLS: Spell[];
export declare const BASIC_SPELLS: Spell[];
export type CasterType = "full" | "half" | "martial";
export interface ClassMagicProgression {
    classKey: any;
    casterType: CasterType;
    maxRank: SpellRank;
    manaPerLevel: number[];
}
export declare const FANTASY_MAGIC_PROGRESSION: ClassMagicProgression[];
export declare function getSpellsForClass(classKey: any, maxRank?: SpellRank): Spell[];
export declare function getMagicProgressionForClass(classKey: any): ClassMagicProgression | undefined;
export declare function getManaForLevel(classKey: any, level: number): number | null;
