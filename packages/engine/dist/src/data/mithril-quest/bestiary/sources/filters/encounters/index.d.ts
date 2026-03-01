import type { MonsterDefinition } from "../../../types";
declare const ENCOUNTER_FILTER_TABLES: Record<string, MonsterDefinition[]>;
export declare function loadEncounterFilters(name: string): MonsterDefinition[];
export default ENCOUNTER_FILTER_TABLES;
