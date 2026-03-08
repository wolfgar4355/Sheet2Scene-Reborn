export interface EncounterTableEntry {
    roll: [number, number];
    monsters: string[];
    habitat?: string;
    difficulty?: "easy" | "standard" | "hard" | "deadly";
    description?: string;
}
export declare const LAVA_ENCOUNTERS: EncounterTableEntry[];
export default LAVA_ENCOUNTERS;
