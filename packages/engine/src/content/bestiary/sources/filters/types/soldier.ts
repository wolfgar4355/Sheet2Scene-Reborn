export const TYPE_SOLDIER = {
  role: "Soldier",
  description: "Combattant polyvalent, équilibré, fiable sur la ligne de front.",
  stats: {
    hp: "Moyens à élevés",
    ac: "Bonne",
    damage: "Modéré",
    mobility: "Moyenne",
  },
  traits: [
    "Polyvalent en mêlée",
    "Compétent en défense et attaque",
    "Peut maintenir la pression sur la durée",
  ],
  examples: [
    "Guerrier vétéran",
    "Sentinelle impériale",
    "Champion tribal",
  ],
} as const;
