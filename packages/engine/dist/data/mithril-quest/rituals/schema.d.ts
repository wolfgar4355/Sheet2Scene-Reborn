export type RitualSchool = "divine" | "nature" | "arcane" | "necromancy" | "spirit";
export type RitualLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export interface Ritual {
    id: string;
    label: string;
    school: RitualSchool;
    level: number;
    castTime: string;
    ingredients: string[];
    description: string;
}
