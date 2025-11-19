// packages/engine/src/index.ts
export * from "./types/worlds";
export { worlds, fantasyEras } from "./content/worlds";
import { worlds as allWorlds } from "./content/worlds";
export function getWorlds() {
    return allWorlds;
}
export function getWorldById(id) {
    return allWorlds.find((w) => w.id === id);
}
export function getErasForWorld(worldId) {
    const w = getWorldById(worldId);
    return w?.eras ?? [];
}
export function getEraById(eraId) {
    for (const w of allWorlds) {
        const era = w.eras.find((e) => e.id === eraId);
        if (era)
            return era;
    }
    return undefined;
}
