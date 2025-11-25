// packages/engine/src/index.ts
// Ré-exports publics du Mithril Engine (Mithril Quest)

// Worlds & Eras
export { getWorlds, getErasForWorld } from "./getWorlds";

// Adapters de contenu Mithril Quest
export * as MQBestiary from "./adapters/bestiary.adapter";
export * as MQSpells from "./adapters/spells.adapter";
export * as MQEncounters from "./adapters/encounters.adapter";
export * as MQHabitats from "./adapters/habitats.adapter";

// GM / Encounter engine
export * from "./gm";

// Types publics si tu veux
export * from "./types";
