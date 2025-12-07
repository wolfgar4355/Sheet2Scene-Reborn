// @ts-nocheck
// thrown.ts — Armes de jet : javelots, chakrams, haches de jet, bolas, etc.

export const THROWN_WEAPONS = [
  {
    key: "throwing_knife",
    label: "Couteau de Jet",
    damage: "1d4",
    type: "simple",
    style: "thrown",
    rarity: "common",
    value: 2,
    weight: 1,
    range: "20/60",
    properties: ["light", "finesse", "thrown"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Un couteau équilibré conçu pour être lancé avec précision."
  },

  {
    key: "throwing_axe",
    label: "Hachette de Jet",
    damage: "1d6",
    type: "martial",
    style: "thrown",
    rarity: "common",
    value: 5,
    weight: 2,
    range: "20/60",
    properties: ["light", "thrown"],
    eras: ["ancient-age", "age-of-heroes", "high-kingdoms"],
    description:
      "Une petite hache parfaitement équilibrée pour un lancer puissant."
  },

  {
    key: "javelin",
    label: "Javelot",
    damage: "1d6",
    type: "simple",
    style: "thrown",
    rarity: "common",
    value: 1,
    weight: 2,
    range: "30/120",
    properties: ["thrown"],
    eras: ["ancient-age", "age-of-heroes", "dark-age"],
    description:
      "Une arme de jet polyvalente utilisée depuis les premiers champs de bataille."
  },

  {
    key: "tribal_javelin",
    label: "Javelot Tribal",
    damage: "1d6",
    type: "simple",
    style: "thrown",
    rarity: "uncommon",
    value: 4,
    weight: 2,
    range: "25/100",
    properties: ["thrown"],
    eras: ["ancient-age"],
    description:
      "Un javelot orné de plumes et gravures rituelles, utilisé par les chasseurs des tribus anciennes."
  },

  {
    key: "bola",
    label: "Bolas",
    damage: "1d4",
    type: "simple",
    style: "thrown",
    rarity: "uncommon",
    value: 10,
    weight: 2,
    range: "20/60",
    properties: ["thrown", "entangle"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Deux poids reliés par une corde, conçus pour entraver les jambes des ennemis."
  },

  {
    key: "sling",
    label: "Fronde",
    damage: "1d4",
    type: "simple",
    style: "thrown",
    rarity: "common",
    value: 1,
    weight: 0,
    range: "30/120",
    properties: ["ranged"],
    eras: ["ancient-age", "age-of-heroes"],
    description:
      "Une arme humble mais efficace, capable de lancer des projectiles avec une grande vitesse."
  },

  {
    key: "chakram",
    label: "Chakram",
    damage: "1d6",
    type: "martial",
    style: "thrown",
    rarity: "uncommon",
    value: 15,
    weight: 1,
    range: "30/120",
    properties: ["finesse", "thrown"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Un disque affûté capable de sectionner les chairs avant de ricocher."
  },

  {
    key: "storm_chakram",
    label: "Chakram Orageux",
    damage: "1d6 (lightning)",
    type: "martial",
    style: "thrown",
    rarity: "rare",
    value: 90,
    weight: 1,
    range: "40/160",
    properties: ["thrown", "magic", "returning"],
    eras: ["arcane-renaissance"],
    description:
      "Un disque chargé d’énergie orageuse qui revient à son lanceur dans un éclair."
  },

  {
    key: "shadow_disc",
    label: "Disque de l’Ombre",
    damage: "1d8 (necrotic)",
    type: "martial",
    style: "thrown",
    rarity: "legendary",
    value: 600,
    weight: 1,
    range: "60/240",
    properties: ["magic", "thrown", "phase"],
    eras: ["dark-age", "mythic-age"],
    description:
      "Une arme spectrale capable de traverser la matière solide avant de frapper sa cible."
  },

  {
    key: "astral_javelin",
    label: "Javelot Astral",
    damage: "2d6 (force)",
    type: "martial",
    style: "thrown",
    rarity: "mythic",
    value: 2000,
    weight: 1,
    range: "120/480",
    properties: ["magic", "thrown", "pierce-reality"],
    eras: ["mythic-age"],
    description:
      "Un javelot formé d’énergie pure capable de percer les protections magiques les plus absolues."
  }
] as const;
