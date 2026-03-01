// src/grimoire.ts
// Loader officiel pour ton Grimoire (notes, lore, règles, etc.)
import data from "./content/grimoire/grimoire.json";
/**
 * Base de données du grimoire
 */
const GRIMOIRE = data;
/**
 * Retourne toutes les entrées
 */
export function readAll() {
    return GRIMOIRE;
}
/**
 * Recherche une entrée par ID
 */
export function readOne(id) {
    return GRIMOIRE.find(entry => entry.id === id);
}
export default {
    readAll,
    readOne,
};
