// packages/engine/src/index.ts

// --- Worlds & Eras ---
export { getWorlds, getErasForWorld } from "./getWorlds";

// --- Content (Fantasy / AAA univers) ---
export * from "./content/fantasy/worlds";
export * from "./content/fantasy/eras";
export * from "./content/fantasy/bestiary";
export * from "./content/fantasy/spells";

// --- GM / Encounter Engine ---
export * from "./gm";

// --- Agents Engine ---
export * from "./agents/registry";
export * from "./agents/groups";
export * from "./agents/chat";
export * from "./agents/run";
export * from "./agents/sync";

export * as lib from "./utils";
export * from "./utils/ai";
export * from "./utils/discord";
export * from "./utils/ambient";
