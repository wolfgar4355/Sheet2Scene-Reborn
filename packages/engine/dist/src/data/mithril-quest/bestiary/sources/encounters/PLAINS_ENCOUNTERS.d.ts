export interface EncounterTableEntry {
    roll: [number, number];
    monsters: string[];
    habitat?: string;
    difficulty?: "easy" | "standard" | "hard" | "deadly";
    description?: string;
}
export declare const PLAINS_ENCOUNTERS: EncounterTableEntry[];
