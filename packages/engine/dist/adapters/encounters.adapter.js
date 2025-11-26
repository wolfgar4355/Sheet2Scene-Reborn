// src/adapters/encounters.adapter.ts
import * as ENCOUNTERS from "../content/fantasy/bestiary/sources/encounters";
export function getAllEncounters() {
    return Object.values(ENCOUNTERS).flat();
}
