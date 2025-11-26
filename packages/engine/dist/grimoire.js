import data from "./content/grimoire/grimoire.json";
const GRIMOIRE = data;
export function readAll() {
    return GRIMOIRE;
}
export function readOne(id) {
    return GRIMOIRE.find((entry) => entry.id === id);
}
