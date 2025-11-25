// packages/engine/src/adapters/encounters.adapter.ts
import * as TABLES from "../../content/mithril-quest/encounters";

export function getEncounterTable(biome: string) {
  return TABLES[biome.toUpperCase()] ?? [];
}

export function getAllEncounterTables() {
  return TABLES;
}
