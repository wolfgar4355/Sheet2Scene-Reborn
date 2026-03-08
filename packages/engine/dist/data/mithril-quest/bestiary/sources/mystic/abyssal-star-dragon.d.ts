export type MythicPhase = {
    key: string;
    name: string;
    cr: number;
    hp: number;
    ac: number;
    role: string;
    description: string;
    tactics: string[];
    abilities: string[];
    phaseTriggers?: string[];
};
export type MythicBoss = {
    id: string;
    name: string;
    epithet: string;
    category: string;
    tags: string[];
    lairs: string[];
    phases: MythicPhase[];
    loot: string[];
    summary?: string;
    encounterDifficulty?: "hard" | "deadly" | "mythic";
    mythicActions?: string[];
    aiProfile?: string;
};
export declare const ABYSSAL_STAR_DRAGON: MythicBoss;
export default ABYSSAL_STAR_DRAGON;
