// @ts-nocheck
// roles/index.ts — Archétypes de gameplay pour Mithril-Quest (MQ)
// -----------------------------------------------------------------------------
//  Liste des rôles MQ (archétypes de combat / gameplay)
// -----------------------------------------------------------------------------
export const ROLES = {
    damage: "Spécialiste des dégâts directs, attaques puissantes.",
    defense: "Protection, tanking, garde du corps.",
    mobility: "Déplacements rapides, contrôle de terrain.",
    support: "Buffs, debuffs, soins, utilitaires.",
    magic: "Sorts, pouvoirs occultes, arcanes.",
    stealth: "Furtivité, embuscades, élimination rapide.",
    corruption: "Malédictions, altérations, nécromancie.",
};
// -----------------------------------------------------------------------------
//  Helpers MQ
// -----------------------------------------------------------------------------
/**
 * Retourne la description d’un rôle.
 * Exemple : getRoleDescription("magic")
 */
export function getRoleDescription(role) {
    return ROLES[role];
}
/**
 * Retourne la liste des rôles disponibles.
 * Exemple : ["damage", "defense", "mobility", ...]
 */
export function getAllRoles() {
    return Object.keys(ROLES);
}
