// src/grimoire.ts
// Loader officiel pour ton Grimoire (notes, lore, règles, etc.)
import data from "./content/grimoire/grimoire.json";
import { promises as fs } from "node:fs";
import path from "node:path";
/**
 * Base de données du grimoire statique (fallback)
 */
const GRIMOIRE = data;
const DATA_PATH = path.join(process.cwd(), "packages/engine/src/content/grimoire/grimoire.json");
/**
 * S'assure que le fichier existe, utile en dev local
 */
async function ensureDataFile() {
    await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
    try {
        await fs.access(DATA_PATH);
    }
    catch {
        await fs.writeFile(DATA_PATH, "[]", "utf-8");
    }
}
/**
 * Retourne toutes les entrées
 */
export async function readAll() {
    try {
        await ensureDataFile();
        const raw = await fs.readFile(DATA_PATH, "utf-8");
        const json = JSON.parse(raw);
        return Array.isArray(json) ? json : GRIMOIRE;
    }
    catch {
        return GRIMOIRE;
    }
}
/**
 * Retourne toutes les entrées (Synchrone, fallback)
 */
export function readAllSync() {
    return GRIMOIRE;
}
/**
 * Recherche une entrée par ID
 */
export async function readOne(id) {
    const all = await readAll();
    return all.find((entry) => entry.id === id);
}
/**
 * Écrit l'ensemble des entrées dans le fichier
 */
export async function writeAll(items) {
    await ensureDataFile();
    await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), "utf-8");
}
/**
 * Crée ou met à jour une seule entrée
 */
export async function saveEntry(entry) {
    const current = await readAll();
    const existingIdx = current.findIndex((e) => e.id === entry.id);
    if (existingIdx >= 0) {
        current[existingIdx] = { ...current[existingIdx], ...entry, updatedAt: Date.now() };
    }
    else {
        current.push({ ...entry, createdAt: Date.now(), updatedAt: Date.now() });
    }
    await writeAll(current);
}
export default {
    readAll,
    readAllSync,
    readOne,
    writeAll,
    saveEntry
};
