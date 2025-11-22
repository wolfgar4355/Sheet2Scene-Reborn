import { WORLDS } from "./content/fantasy/worlds";
import { ERAS_BY_WORLD } from "./content/fantasy/eras";

// Liste complète des mondes
export function getWorlds() {
  return WORLDS;
}

// Retourne la liste des ères pour un monde donné
export function getErasForWorld(worldId: string) {
  return ERAS_BY_WORLD[worldId] ?? [];
}
