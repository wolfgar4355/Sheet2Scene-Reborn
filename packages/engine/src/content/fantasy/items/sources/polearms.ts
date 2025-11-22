// polearms.ts — Armes d’hast : lances, hallebardes, bardiches, etc.

export const POLEARMS = [
  {
    key: "spear",
    label: "Lance",
    damage: "1d6",
    type: "simple",
    style: "polearm",
    rarity: "common",
    value: 1,
    weight: 3,
    properties: ["thrown (20/60)", "versatile (1d8)"],
    eras: ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une arme simple mais efficace, utilisée depuis les premières batailles de l’histoire."
  },

  {
    key: "pike",
    label: "Pique",
    damage: "1d10",
    type: "martial",
    style: "polearm",
    rarity: "common",
    value: 5,
    weight: 9,
    properties: ["two-handed", "reach", "heavy"],
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une longue arme conçue pour briser les charges de cavalerie ou repousser des monstres imposants."
  },

  {
    key: "halberd",
    label: "Hallebarde",
    damage: "1d10",
    type: "martial",
    style: "polearm",
    rarity: "common",
    value: 10,
    weight: 6,
    properties: ["two-handed", "reach", "heavy"],
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une arme polyvalente combinant lame, pique et crochet, redoutable sur un champ de bataille."
  },

  {
    key: "glaive",
    label: "Glaive",
    damage: "1d10",
    type: "martial",
    style: "polearm",
    rarity: "uncommon",
    value: 20,
    weight: 6,
    properties: ["two-handed", "reach"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Une grande lame fixée au bout d’un long manche, parfaite pour des frappes larges et contrôlées."
  },

  {
    key: "bardiche",
    label: "Bardiche",
    damage: "1d12",
    type: "martial",
    style: "polearm",
    rarity: "uncommon",
    value: 25,
    weight: 7,
    properties: ["two-handed", "heavy", "reach"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Une massive hache à long manche, maniée avec puissance par les fantassins lourds."
  },

  {
    key: "fauchard",
    label: "Fauchard",
    damage: "1d10",
    type: "martial",
    style: "polearm",
    rarity: "uncommon",
    value: 18,
    weight: 5,
    properties: ["two-handed", "reach"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Un long manche terminé par une lame courbe, idéale pour accrocher les ennemis."
  },

  {
    key: "naginata",
    label: "Naginata",
    damage: "1d8",
    type: "martial",
    style: "polearm",
    rarity: "rare",
    value: 35,
    weight: 4,
    properties: ["two-handed", "reach", "finesse"],
    eras: ["high-kingdoms"],
    description:
      "Une arme élancée originaire d’une culture lointaine, réputée pour sa grâce et sa précision."
  },

  {
    key: "storm_spear",
    label: "Lance-Tempête",
    damage: "1d8",
    type: "martial",
    style: "polearm",
    rarity: "rare",
    value: 120,
    weight: 4,
    properties: ["magic", "thunder", "versatile (1d10)"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Une lance imprégnée d’énergie orageuse, libérant un choc électrique à l’impact."
  },

  {
    key: "celestial_halberd",
    label: "Hallebarde Céleste",
    damage: "1d12",
    type: "martial",
    style: "polearm",
    rarity: "legendary",
    value: 800,
    weight: 5,
    properties: ["magic", "radiant", "reach"],
    eras: ["mythic-age"],
    description:
      "Une hallebarde forgée dans les hauteurs du Royaume Céleste, brillante d’une lumière divine."
  },

  {
    key: "titan_spike",
    label: "Pointe-Titan",
    damage: "2d8",
    type: "martial",
    style: "polearm",
    rarity: "mythic",
    value: 2500,
    weight: 10,
    properties: ["magic", "heavy", "two-handed", "reach"],
    eras: ["mythic-age"],
    description:
      "Une arme colossale conçue pour percer les écailles des dragons anciens et les armures des titans."
  }
] as const;
