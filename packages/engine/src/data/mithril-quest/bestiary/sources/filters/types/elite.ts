// @ts-nocheck
export const TYPE_ELITE = {
  role: "Elite",
  description:
    "Créature exceptionnelle, plus puissante que la moyenne : meilleure défense, attaques uniques, capacités spéciales ou résistance accrue.",
  stats: {
    hp: "Élevés",
    ac: "Élevée",
    damage: "Élevé",
    mobility: "Variable",
  },
  traits: [
    "Attaques spéciales ou capacités uniques",
    "Peut résister aux effets de contrôle",
    "Peut avoir une action légendaire ou une réaction améliorée",
    "Plus dangereux et intelligent que les créatures standard",
  ],
  examples: [
    "Champion draconique",
    "Sentinelle runique",
    "Chevalier spectral",
    "Garde royal abyssal",
  ],
} as const;
