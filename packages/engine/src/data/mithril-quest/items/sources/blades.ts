// blades.ts — Armes tranchantes / lames

export const BLADES = [
  {
    key: "shortsword",
    label: "Épée Courte",
    damage: "1d6",
    type: "martial",
    style: "blade",
    rarity: "common",
    value: 10,
    weight: 2,
    properties: ["finesse", "light"],
    eras: ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms"],
    description: "Une lame courte et polyvalente, appréciée des voleurs et éclaireurs."
  },

  {
    key: "longsword",
    label: "Épée Longue",
    damage: "1d8",
    type: "martial",
    style: "blade",
    rarity: "common",
    value: 15,
    weight: 3,
    properties: ["versatile (1d10)"],
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description: "L’arme emblématique des chevaliers et soldats entraînés."
  },

  {
    key: "greatsword",
    label: "Espadon",
    damage: "2d6",
    type: "martial",
    style: "blade",
    rarity: "common",
    value: 50,
    weight: 6,
    properties: ["two-handed", "heavy"],
    eras: ["dark-age", "high-kingdoms"],
    description: "Une immense lame maniée à deux mains, capable de fendre une armure."
  },

  {
    key: "scimitar",
    label: "Cimeterre",
    damage: "1d6",
    type: "martial",
    style: "blade",
    rarity: "common",
    value: 25,
    weight: 3,
    properties: ["finesse", "light"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description: "Une lame courbe prisée des nomades et des marins."
  },

  {
    key: "rapier",
    label: "Rapière",
    damage: "1d8",
    type: "martial",
    style: "blade",
    rarity: "uncommon",
    value: 30,
    weight: 2,
    properties: ["finesse"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description: "Une arme d'estoc élégante, parfaite pour les duellistes."
  },

  {
    key: "falchion",
    label: "Fauchon",
    damage: "2d4",
    type: "martial",
    style: "blade",
    rarity: "uncommon",
    value: 40,
    weight: 5,
    properties: ["heavy"],
    eras: ["age-of-heroes", "dark-age"],
    description: "Une lourde lame courbe, redoutable en taille."
  },

  {
    key: "katana",
    label: "Katana",
    damage: "1d8",
    type: "martial",
    style: "blade",
    rarity: "rare",
    value: 60,
    weight: 3,
    properties: ["finesse", "versatile (1d10)"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description: "Une lame légendaire forgée avec art, symbole de discipline guerrière."
  },

  {
    key: "dual-blades",
    label: "Lames Jumelles",
    damage: "1d6",
    type: "martial",
    style: "blade",
    rarity: "rare",
    value: 75,
    weight: 4,
    properties: ["dual-wield", "light"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description: "Une paire de lames équilibrées conçues pour des frappes rapides."
  },

  {
    key: "runic-blade",
    label: "Lame Runique",
    damage: "1d8",
    type: "martial",
    style: "blade",
    rarity: "legendary",
    value: 500,
    weight: 3,
    properties: ["magic", "versatile (1d10)"],
    eras: ["mythic-age", "high-kingdoms"],
    description: "Forgée dans un acier ancien, cette lame rayonne d’inscriptions mystiques."
  },

  {
    key: "void-edge",
    label: "Tranche-Vide",
    damage: "1d10",
    type: "martial",
    style: "blade",
    rarity: "mythic",
    value: 1200,
    weight: 2,
    properties: ["finesse", "magic", "soulcut"],
    eras: ["mythic-age"],
    description:
      "Une lame noire qui déchire la réalité elle-même. Les blessures qu’elle inflige refusent de guérir."
  }
] as const;
