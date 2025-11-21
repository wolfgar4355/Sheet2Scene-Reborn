
// Bestiary Index — AAA v2
// Centralise toutes les sources du bestiaire Fantasy + générés

// --- Fichiers générés automatiques ---
export * from "./ALL_MONSTERS";
export * from "./UNIVERSAL_CREATURE";
export * from "./generate-all";

// --- Types ---
export * from "./types";

// --- Moteur d'encounters ---
export * from "./encounter-engine";
export * from "./test-encounter";

// --- Sources Fantasy ---
export * from "./sources/boss";
export * from "./sources/categories";
export * from "./sources/encounters";

// Sous-dossiers spécialisés
export * as CR from "./sources/cr";
export * as FILTERS from "./sources/filters";
export * as MYSTIC from "./sources/mystic";
export * as MINIONS from "./sources/minions";
