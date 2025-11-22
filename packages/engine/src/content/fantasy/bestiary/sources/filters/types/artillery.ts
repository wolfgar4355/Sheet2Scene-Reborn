export const TYPE_ARTILLERY = {
  role: "Artillery",
  description: "Spécialiste du combat à distance, inflige des dégâts massifs mais fragile en mêlée.",
  stats: {
    hp: "Faibles",
    ac: "Faible",
    damage: "Très élevé (distance)",
    mobility: "Moyenne",
  },
  traits: [
    "Dégâts à longue portée",
    "Faible résistance physique",
    "Dangerosité accrue si protégé",
  ],
  examples: [
    "Arbalétrier lourd",
    "Mage pyromancien",
    "Canon vivant cristallin",
  ],
} as const;
