import { WORLDS } from "./content/fantasy/worlds";
import { ERAS_BY_WORLD } from "./content/fantasy/eras";
import type { EraDefinition, WorldDefinition } from "./content/types/worlds";

export function getWorlds(): WorldDefinition[] {
  return WORLDS;
}

export function getErasForWorld(worldId: string): EraDefinition[] {
  return (ERAS_BY_WORLD as Record<string, EraDefinition[]>)[worldId] ?? [];
}

export default WORLDS;
