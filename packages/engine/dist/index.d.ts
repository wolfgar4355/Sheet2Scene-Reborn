export * from "./types/worlds";
export { worlds, fantasyEras } from "./content/worlds";
import type { WorldId, EraId, WorldDefinition, EraDefinition } from "./types/worlds";
export declare function getWorlds(): WorldDefinition[];
export declare function getWorldById(id: WorldId): WorldDefinition | undefined;
export declare function getErasForWorld(worldId: WorldId): EraDefinition[];
export declare function getEraById(eraId: EraId): EraDefinition | undefined;
