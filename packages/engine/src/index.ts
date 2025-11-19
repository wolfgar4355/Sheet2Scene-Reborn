// packages/engine/src/index.ts

export * from "./types/worlds";
export { worlds, fantasyEras } from "./content/worlds";

// Helpers simples
import type { WorldId, EraId, WorldDefinition, EraDefinition } from "./types/worlds";
import { worlds as allWorlds } from "./content/worlds";

export function getWorlds(): WorldDefinition[] {
  return allWorlds;
}

export function getWorldById(id: WorldId): WorldDefinition | undefined {
  return allWorlds.find((w) => w.id === id);
}

export function getErasForWorld(worldId: WorldId): EraDefinition[] {
  const w = getWorldById(worldId);
  return w?.eras ?? [];
}

export function getEraById(eraId: EraId): EraDefinition | undefined {
  for (const w of allWorlds) {
    const era = w.eras.find((e) => e.id === eraId);
    if (era) return era;
  }
  return undefined;
}
