// @ts-nocheck
export const TYPE_SKIRMISHER = {
  role: "Skirmisher",
  description:
    "Rapide, mobile, frappe puis se replie. Parfait pour harceler et contrôler la pression.",
  stats: {
    hp: "Moyens",
    ac: "Moyenne",
    damage: "Modéré",
    mobility: "Élevée",
  },
  traits: [
    "Attaques en mouvement",
    "Frappe et fuite",
    "Difficile à verrouiller en combat",
  ],
  examples: [
    "Loup rapide",
    "Bandit éclaireur",
    "Gobelin rôdeur",
  ],
} as const;
