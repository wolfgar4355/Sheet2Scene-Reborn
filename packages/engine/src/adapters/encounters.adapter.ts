// packages/engine/src/adapters/encounters.adapter.ts
import * as ENCOUNTERS from "../content/fantasy/eras"; // ou le bon fichier/table de rencontres

export function getAllEncounters() {
  return Object.values(ENCOUNTERS).flat();
}}
