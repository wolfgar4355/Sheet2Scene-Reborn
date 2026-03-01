export declare const ROLES: {
    readonly damage: "Spécialiste des dégâts directs, attaques puissantes.";
    readonly defense: "Protection, tanking, garde du corps.";
    readonly mobility: "Déplacements rapides, contrôle de terrain.";
    readonly support: "Buffs, debuffs, soins, utilitaires.";
    readonly magic: "Sorts, pouvoirs occultes, arcanes.";
    readonly stealth: "Furtivité, embuscades, élimination rapide.";
    readonly corruption: "Malédictions, altérations, nécromancie.";
};
export type Role = keyof typeof ROLES;
/**
 * Retourne la description d’un rôle.
 * Exemple : getRoleDescription("magic")
 */
export declare function getRoleDescription(role: Role): string;
/**
 * Retourne la liste des rôles disponibles.
 * Exemple : ["damage", "defense", "mobility", ...]
 */
export declare function getAllRoles(): Role[];
