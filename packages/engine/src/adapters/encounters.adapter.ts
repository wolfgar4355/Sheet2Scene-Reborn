import ENCOUNTER_TABLES from "../data/mithril-quest/bestiary/sources/encounters";

export function getAllEncounters() {
    return Object.values(ENCOUNTER_TABLES).flat();
}
