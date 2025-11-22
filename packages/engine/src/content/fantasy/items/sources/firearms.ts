// firearms.ts — Armes à feu archaïques, poudre noire, arcanotech & armes mythiques

export const FIREARMS = [
  {
    key: "flintlock_pistol",
    label: "Pistolet à Silex",
    damage: "1d10",
    type: "martial",
    style: "firearm",
    rarity: "uncommon",
    value: 100,
    weight: 2,
    range: "40/160",
    misfire: 2,
    reload: "1 action",
    properties: ["one-handed", "loading", "loud"],
    eras: ["high-kingdoms", "age-of-powder"],
    description:
      "Un pistolet archaïque mais puissant, crachant un bruit assourdissant lorsqu’il est tiré."
  },

  {
    key: "flintlock_dual",
    label: "Paire de Pistolets à Silex",
    damage: "1d10",
    type: "martial",
    style: "firearm",
    rarity: "rare",
    value: 280,
    weight: 4,
    range: "40/160",
    misfire: 2,
    reload: "1 action chacun",
    properties: ["dual-wield", "loading", "loud"],
    eras: ["age-of-powder"],
    description:
      "Une paire de pistolets bien équilibrés, parfaite pour les duellistes et les pirates."
  },

  {
    key: "arquebus",
    label: "Arquebuse",
    damage: "1d12",
    type: "martial",
    style: "firearm",
    rarity: "common",
    value: 75,
    weight: 10,
    range: "60/240",
    misfire: 3,
    reload: "1 action",
    properties: ["two-handed", "loading", "heavy", "loud"],
    eras: ["high-kingdoms", "age-of-powder"],
    description:
      "Une arme primitive mais terriblement destructrice, souvent utilisée par les premières armées à poudre."
  },

  {
    key: "musket",
    label: "Mousquet",
    damage: "1d12",
    type: "martial",
    style: "firearm",
    rarity: "uncommon",
    value: 150,
    weight: 10,
    range: "80/320",
    misfire: 2,
    reload: "1 action",
    properties: ["two-handed", "loading", "heavy", "loud"],
    eras: ["age-of-powder"],
    description:
      "Une évolution de l’arquebuse, plus fiable et capable de tirs plus précis."
  },

  {
    key: "blunderbuss",
    label: "Tromblon",
    damage: "2d8 (spread)",
    type: "martial",
    style: "firearm",
    rarity: "rare",
    value: 200,
    weight: 8,
    range: "15/45",
    misfire: 3,
    reload: "1 action",
    properties: ["two-handed", "loading", "cone", "loud"],
    eras: ["age-of-powder"],
    description:
      "Un canon court projetant une nuée de plombs, dévastateur à courte portée."
  },

  {
    key: "gnome_hand_cannon",
    label: "Canon de Paume Gnome",
    damage: "2d6 (force)",
    type: "martial",
    style: "firearm",
    rarity: "rare",
    value: 350,
    weight: 3,
    range: "30/120",
    misfire: 1,
    reload: "bonus action",
    properties: ["light", "tech", "magic", "loud"],
    eras: ["arcane-renaissance"],
    description:
      "Une arme expérimentale infusée de magie. Elle surprend autant l’ennemi que le tireur."
  },

  {
    key: "arcane_rifle",
    label: "Fusil Arcanique",
    damage: "1d12 (force)",
    type: "martial",
    style: "firearm",
    rarity: "rare",
    value: 500,
    weight: 8,
    range: "120/480",
    misfire: 0,
    reload: "no reload",
    properties: ["two-handed", "magic", "silent"],
    eras: ["arcane-renaissance"],
    description:
      "Un fusil alimenté par des cristaux arcaniques, tirant des projectiles d’énergie pure."
  },

  {
    key: "runic_musket",
    label: "Mousquet Runique",
    damage: "2d6 (radiant)",
    type: "martial",
    style: "firearm",
    rarity: "legendary",
    value: 1000,
    weight: 10,
    range: "100/400",
    misfire: 1,
    reload: "1 action",
    properties: ["two-handed", "magic", "loud"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Un mousquet gravé de runes sacrées, tirant des balles bénies par la lumière."
  },

  {
    key: "infernal_rifle",
    label: "Fusil Infernal",
    damage: "2d8 (fire)",
    type: "martial",
    style: "firearm",
    rarity: "legendary",
    value: 1800,
    weight: 12,
    range: "90/360",
    misfire: 1,
    reload: "1 action",
    properties: ["two-handed", "magic", "cursed", "loud"],
    eras: ["dark-age", "mythic-age"],
    description:
      "Une arme imprégnée de flammes démoniaques, hurlant lorsqu’elle tire."
  },

  {
    key: "astral_longrifle",
    label: "Longrifle Astral",
    damage: "3d6 (force)",
    type: "martial",
    style: "firearm",
    rarity: "mythic",
    value: 3000,
    weight: 8,
    range: "200/800",
    misfire: 0,
    reload: "no reload",
    properties: ["two-handed", "magic", "silent"],
    eras: ["mythic-age"],
    description:
      "Un fusil forgé dans l'énergie du cosmos, capable de fendre les créatures d’un seul tir."
  }
] as const;
