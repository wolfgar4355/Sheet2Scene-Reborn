import { WORLDS } from "@fantasy/worlds";
import { ERAS_BY_WORLD } from "./content/fantasy/eras";
// (ou le bon fichier type — envoie-moi ls si tu n’es pas sûr)
export function getWorlds() {
    return WORLDS;
}
export function getErasForWorld(worldId) {
    return ERAS_BY_WORLD[worldId] ?? [];
}
export default WORLDS;
