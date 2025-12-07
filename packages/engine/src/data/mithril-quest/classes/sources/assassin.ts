// @ts-nocheck
// classes/sources/assassin.ts
// ===============================================================
// ⚔️ Classe MQ — Assassin
// ===============================================================

export const MQ_CLASS_ASSASSIN = [
  {
    key: "assassin",
    label: "Assassin",

    description:
      "Tueur spécialisé dans les cibles prioritaires, poisons et attaques décisives.",

    hitdice: "d8",
    primaryAbility: "Dextérité",

    archetypes: [
      "Lame Silencieuse",
      "Venin du Scorpion",
      "Ombre du Crépuscule"
    ],
  },
] as const;
