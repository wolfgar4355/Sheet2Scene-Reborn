import { WORLDS } from "./content/fantasy/worlds";
import { ERAS_BY_WORLD } from "./content/fantasy/eras";

export function getWorlds() {
  return WORLDS;
}

export function getErasForWorld(worldId: string) {
  return ERAS_BY_WORLD[worldId] ?? [];
}
export default WORLDS;
