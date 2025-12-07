// @ts-nocheck
export const TYPE_TANK = {
  role: "Tank",
  description:
    "Encaisse les dégâts, bloque les lignes d’attaque et protège ses alliés.",
  stats: {
    hp: "Élevés",
    ac: "Élevée",
    damage: "Faible à modéré",
    mobility: "Faible",
  },
  traits: [
    "Résistance physique",
    "Bouclier naturel ou armure lourde",
    "Protection d’alliés",
  ],
  examples: [
    "Garde lourd",
    "Tortue géante cuirassée",
    "Golem de pierre",
  ],
} as const;
