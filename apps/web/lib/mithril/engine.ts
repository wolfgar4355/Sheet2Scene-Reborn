/**
 * ✨ Mithril Engine v1.5 – Point d'entrée unique UI
 * Centralise les exports pour le grimoire.
 */

export { default as MithrilProvider, useMithril } from "@components/mithril/GrimoireFrame";
export { default as SceneController } from "@components/mithril/SceneController";
export { default as TransitionLayer } from "@components/mithril/TransitionLayer";

// Ré-exporte la config d'ambiance pour plus de confort
export * from "./ambient.config";
