export const TYPE_SUPPORT = {
  role: "Support",
  description: "Améliore ses alliés, affaiblit les ennemis, soigne légèrement.",
  stats: {
    hp: "Faibles à moyens",
    ac: "Faible",
    damage: "Faible",
    mobility: "Moyenne",
  },
  traits: [
    "Buffs et debuffs",
    "Soins légers ou régénération",
    "Amélioration du groupe",
  ],
  examples: [
    "Prêtre guérisseur",
    "Chaman tribal",
    "Oracle luminescent",
  ],
} as const;
