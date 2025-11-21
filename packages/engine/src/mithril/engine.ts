/**
 * ✨ Mithril Engine v1.5 — Point d’entrée unique UI
 * Centralise les exports pour le grimoire.
 */

export {
  default as MithrilProvider,
  useMithril
} from "@lib/mithril/GrimoireFrame";

export {
  default as SceneController
} from "@lib/mithril/SceneController";

export {
  default as TransitionLayer
} from "@lib/mithril/TransitionLayer";

// Ré-exporte la config d’ambiance pour plus de confort
export * from "@engine/ambient";
