// ⚠️ Fichier passerelle unique vers le moteur
// ⚠️ Ne jamais importer @engine ailleurs dans le web

export { getWorlds, getErasForWorld } from "../../../packages/engine/src/getWorlds";

// Ambient (safe)
export { ambientManager } from "../../../packages/engine/src/ambient/weather";

// Grimoire content (data uniquement)
export * from "../../../packages/engine/src/content/grimoire";
