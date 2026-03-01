// apps/web/lib/engine.ts
// =====================================================
// ⚠️ PASSERELLE WEB → DATA ENGINE UNIQUEMENT
// ⚠️ AUCUN runtime, AUCUN manager, AUCUN side-effect
// =====================================================

// Worlds & eras (DATA ONLY – SAFE)
export { getWorlds, getErasForWorld } from "../../../packages/engine/src/getWorlds";

// Grimoire content (DATA ONLY)
export * from "../../../packages/engine/src/content/grimoire";
