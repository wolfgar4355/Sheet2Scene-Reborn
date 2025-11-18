export type EncounterDifficulty = "easy" | "medium" | "hard" | "deadly";
export interface EncounterRequest {
    world: string;
    partyLevel: number;
    partySize: number;
    difficulty: EncounterDifficulty;
    minCR?: number;
    maxCR?: number;
    biome?: string;
    habitat?: string;
    tags?: string[];
}
export interface GmeMonster {
    id: string;
    name: string;
    world: string;
    cr: number;
    category?: string;
    biomeTags?: string[];
    habitatTags?: string[];
    ref?: {
        source: string;
        key: string;
    };
}
export interface GeneratedEncounter {
    monsters: GmeMonster[];
    totalCR: number;
    difficulty: EncounterDifficulty;
    request: EncounterRequest;
}
