// @ts-nocheck
// index.ts — Point d’entrée du module de sorts Mithril-Quest (MQ)
// Types unifiés du système MQ
export * from "./schema";
// Écoles de magie MQ
export * from "./schools";
// Tags fonctionnels MQ
export * from "./tags";
// Tiers de puissance MQ
export * from "./tiers";
// Regroupements de sorts par catégorie (sources MQ)
export * from "./sources/offense";
export * from "./sources/defense";
export * from "./sources/healing";
export * from "./sources/utility";
// Si plus tard tu ajoutes un ALL_SPELLS généré automatiquement :
export * from "./ALL_SPELLS"; // ← optionnel, ne casse rien si absent
