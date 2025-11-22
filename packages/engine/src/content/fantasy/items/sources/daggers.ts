// daggers.ts — Armes : dagues, poignards et lames légères

export const DAGGERS = [
  {
    key: "simple_dagger",
    label: "Dague Simple",
    damage: "1d4",
    type: "simple",
    style: "dagger",
    rarity: "common",
    value: 2,
    weight: 1,
    properties: ["finesse", "light", "thrown (20/60)"],
    eras: ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une dague de base, utilisée par presque toutes les cultures depuis la nuit des temps."
  },

  {
    key: "steel_knife",
    label: "Couteau d’Acier",
    damage: "1d4",
    type: "simple",
    style: "dagger",
    rarity: "common",
    value: 3,
    weight: 1,
    properties: ["finesse", "light"],
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Un couteau bien équilibré, utilisé autant en cuisine qu'en combat rapproché."
  },

  {
    key: "throwing_dagger",
    label: "Dague de Jet",
    damage: "1d4",
    type: "simple",
    style: "dagger",
    rarity: "common",
    value: 4,
    weight: 1,
    properties: ["finesse", "light", "thrown (30/90)"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Une dague légère conçue pour être lancée avec précision."
  },

  {
    key: "assassin_stiletto",
    label: "Stiletto de l’Assassin",
    damage: "1d4",
    type: "martial",
    style: "dagger",
    rarity: "uncommon",
    value: 25,
    weight: 1,
    properties: ["finesse", "light"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Une fine lame d’estoc, idéale pour perforer les jointures d’armure."
  },

  {
    key: "ceremonial_knife",
    label: "Couteau Cérémonial",
    damage: "1d4",
    type: "simple",
    style: "dagger",
    rarity: "uncommon",
    value: 15,
    weight: 1,
    properties: ["finesse"],
    eras: ["ancient-age", "dark-age"],
    description:
      "Une lame rituelle décorée de symboles anciens, utilisée dans des cérémonies ésotériques."
  },

  {
    key: "shadowfang",
    label: "Croche-Ombre",
    damage: "1d6",
    type: "martial",
    style: "dagger",
    rarity: "rare",
    value: 80,
    weight: 1,
    properties: ["finesse", "light", "magic"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Une dague forgée dans un métal noirâtre, absorbant la lumière autour d'elle."
  },

  {
    key: "runic_dirk",
    label: "Dague Runique",
    damage: "1d6",
    type: "martial",
    style: "dagger",
    rarity: "rare",
    value: 150,
    weight: 1,
    properties: ["magic", "finesse"],
    eras: ["high-kingdoms", "mythic-age"],
    description:
      "Une dague imprégnée de runes anciennes, amplifiant la précision de chaque coup porté."
  },

  {
    key: "poisoner_blade",
    label: "Lame du Toxineux",
    damage: "1d4",
    type: "martial",
    style: "dagger",
    rarity: "rare",
    value: 120,
    weight: 1,
    properties: ["finesse", "light", "poison-ready"],
    eras: ["dark-age"],
    description:
      "Une dague creuse permettant de libérer des toxines dans la plaie de la victime."
  },

  {
    key: "moonsteel_knife",
    label: "Couteau en Lune-Argent",
    damage: "1d6",
    type: "martial",
    style: "dagger",
    rarity: "legendary",
    value: 600,
    weight: 1,
    properties: ["magic", "radiant", "finesse"],
    eras: ["high-kingdoms", "mythic-age"],
    description:
      "Une lame brillante forgée dans un métal béni par la lumière lunaire."
  },

  {
    key: "void_stinger",
    label: "Aiguillon du Vide",
    damage: "1d6",
    type: "martial",
    style: "dagger",
    rarity: "mythic",
    value: 1800,
    weight: 1,
    properties: ["magic", "finesse", "soulcut"],
    eras: ["mythic-age"],
    description:
      "Une dague d’ombre pure, capable de frapper directement l’essence vitale d’une créature."
  }
] as const;
