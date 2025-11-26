// ---------------------------------------------------------
// 3) Récupérer toutes les fiches Fantasy (lecture du dossier)
// ---------------------------------------------------------
import fs from "fs";
import path from "path";
import { loadExistingCharacterSheet } from "./loader";
const BASE_PATH = path.join(process.cwd(), "packages/engine/src/data/mithril-quest/character");
/**
 * Retourne toutes les fiches de personnage Fantasy
 */
export function getAllCharacters() {
    const files = fs
        .readdirSync(BASE_PATH)
        .filter((f) => f.endsWith(".json"));
    return files.map((file) => {
        const id = file.replace(".json", "");
        const raw = JSON.parse(fs.readFileSync(path.join(BASE_PATH, file), "utf8"));
        const { sheet } = loadExistingCharacterSheet("fantasy", raw, raw.identity?.era ?? "core");
        return { id, sheet };
    });
}
