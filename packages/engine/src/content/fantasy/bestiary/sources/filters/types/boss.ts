export const TYPE_BOSS = {
  role: "Boss",
  description: "Créature majeure avec phases multiples, attaques puissantes et mécaniques uniques.",
  stats: {
    hp: "Très élevés",
    ac: "Bonne",
    damage: "Très élevé",
    mobility: "Variable",
  },
  traits: [
    "Mécaniques spéciales",
    "Phases évolutives",
    "Résistance aux contrôles",
  ],
  examples: [
    "Roi-spectre du tombeau",
    "Géant runique des tempêtes",
    "Hydre ancestrale",
  ],
} as const;
