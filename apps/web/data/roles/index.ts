// Roles (Gameplay Archetypes)

export const ROLES = {
  damage: "Spécialisé dans les dégâts directs",
  defense: "Absorption, tanking, garde du corps",
  mobility: "Déplacements rapides, contrôle de terrain",
  support: "Buffs, debuffs, heal, utilités",
  magic: "Sorts, pouvoirs occultes, arcanes",
  stealth: "Furtivité, embuscades, élimination rapide",
  corruption: "Malédictions, altérations, nécromancie",
};

export type Role = keyof typeof ROLES;
