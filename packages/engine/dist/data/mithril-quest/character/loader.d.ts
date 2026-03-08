import type { WorldKey } from "../worlds";
import { type MQCharacterSheet } from "./types";
export type AnyCharacterSheet = MQCharacterSheet;
export interface CharacterSheetSchema {
    sections: {
        key: string;
        label: string;
        description?: string;
        fields: {
            path: string;
            type: "text" | "number" | "textarea" | "select";
            width?: "full" | "half";
            options?: {
                value: string;
                label: string;
            }[];
        }[];
    }[];
}
export interface LoadedSheet {
    world: WorldKey;
    sheet: AnyCharacterSheet;
    schema: CharacterSheetSchema;
}
export declare function loadEmptyCharacterSheet(world: WorldKey, id: string, subworldKey?: string): LoadedSheet;
export declare function loadExistingCharacterSheet(world: WorldKey, data: AnyCharacterSheet, subworldKey?: string): LoadedSheet;
