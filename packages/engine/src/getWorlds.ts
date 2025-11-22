import { WORLDS } from "./content/fantasy/worlds";
import { ERAS_BY_WORLD } from "./content/fantasy/eras";
import type { EraDefinition, WorldDefinition } from "./content/fantasy/types-worlds"; 
// (ou le bon fichier type — envoie-moi ls si tu n’es pas sûr)

export function getWorlds(): WorldDefinition[] {
  return WORLDS;
}

export function getErasForWorld(worldId: string): EraDefinition[] {
  return ERAS_BY_WORLD[worldId] ?? [];
}

export default WORLDS;
