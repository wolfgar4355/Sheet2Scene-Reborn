export interface EncounterTableEntry {
    roll: [number, number];
    monsters: string[];
    habitat: string;
    difficulty: "easy" | "standard" | "hard" | "deadly";
    description: string;
}
export declare const DUNGEON_ENCOUNTERS: EncounterTableEntry[];
export default DUNGEON_ENCOUNTERS;
