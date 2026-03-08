import type { Vec2 } from "../iso/isoMath";
export type EncounterZone = {
    id: string;
    center: Vec2;
    radius: number;
    once?: boolean;
};
export declare const ENCOUNTER_ZONES: EncounterZone[];
