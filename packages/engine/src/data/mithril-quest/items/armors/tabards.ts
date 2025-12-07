// @ts-nocheck
// tabards.ts — Tabards, surcots, habits héraldiques et versions enchantées (MQ)

export const MQ_TABARDS = [
  //
  // ─────────────────────────────────────────────
  //  COMMUNS (10)
  // ─────────────────────────────────────────────
  //
  {
    key: "plain_tabard",
    label: "Tabard Simple",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 4,
    material: "tissu épais",
    properties: [],
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Un tabard en tissu uni, porté par les milices ou pour masquer une armure simple."
  },

  {
    key: "militia_tabard",
    label: "Tabard de Milice",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 5,
    material: "tissu grossier",
    properties: [],
    eras: ["dark-age"],
    description:
      "Un tabard basique arborant des couleurs locales, souvent utilisé pour identifier les troupes civiles."
  },

  {
    key: "cotton_surcoat",
    label: "Surcot de Coton",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 6,
    material: "coton",
    properties: [],
    eras: ["age-of-heroes"],
    description:
      "Un vêtement léger souvent porté par-dessus une cotte de mailles ou une tunique."
  },

  {
    key: "scout_tabard",
    label: "Tabard d’Éclaireur",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 8,
    material: "tissu renforcé",
    properties: ["stealth"],
    eras: ["dark-age"],
    description:
      "De couleur mate, conçu pour éviter la détection lors des missions discrètes."
  },

  {
    key: "merchant_surcoat",
    label: "Surcot de Marchand",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 10,
    material: "lin décoré",
    properties: [],
    eras: ["high-kingdoms"],
    description:
      "Un surcot décoré de motifs simples, typiquement porté par les marchands itinérants."
  },

  {
    key: "borderlands_tabard",
    label: "Tabard des Marches Frontalières",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 7,
    material: "laine épaisse",
    properties: ["cold-resistant"],
    eras: ["dark-age"],
    description:
      "Un tabard plus chaud conçu pour les gardes patrouillant en régions froides."
  },

  {
    key: "forest_tabard",
    label: "Tabard Forestier",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 9,
    material: "tissu camouflé",
    properties: ["stealth"],
    eras: ["age-of-heroes"],
    description:
      "Porté par les chasseurs et éclaireurs des forêts profondes."
  },

  {
    key: "desert_surcoat",
    label: "Surcot du Désert",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 8,
    material: "lin respirant",
    properties: ["heat-resistant"],
    eras: ["ancient-age"],
    description:
      "Léger et respirant, parfait pour les climats arides."
  },

  {
    key: "heraldic_tabard",
    label: "Tabard Héraldiquement Brodé",
    rarity: "common",
    armor: 0,
    weight: 1,
    value: 12,
    material: "tissu brodé",
    properties: [],
    eras: ["high-kingdoms"],
    description:
      "Un tabard arborant les couleurs et symboles d’une maison noble mineure."
  },

  {
    key: "battle_surcoat",
    label: "Surcot de Bataille",
    rarity: "common",
    armor: 1,
    weight: 2,
    value: 18,
    material: "tissu + cuir fin",
    properties: [],
    eras: ["dark-age"],
    description:
      "Un surcot légèrement renforcé, porté par-dessus une armure pour absorber la saleté et les chocs mineurs."
  },

  //
  // ─────────────────────────────────────────────
  //  RARES (5)
  // ─────────────────────────────────────────────
  //
  {
    key: "runic_tabard",
    label: "Tabard Runique",
    rarity: "rare",
    armor: 1,
    weight: 1,
    value: 150,
    material: "tissu gravé de runes",
    properties: ["magic"],
    eras: ["high-kingdoms"],
    description:
      "Les runes discrètement brodées sur le tissu offrent une légère protection mystique."
  },

  {
    key: "shadow_tabard",
    label: "Tabard de l’Ombre",
    rarity: "rare",
    armor: 1,
    weight: 0.5,
    value: 220,
    material: "tissu d’ombre",
    properties: ["magic", "stealth", "dark-resonance"],
    eras: ["dark-age"],
    description:
      "Une étoffe surnaturelle qui absorbe la lumière et étouffe les sons."
  },

  {
    key: "celestial_surcoat",
    label: "Surcot Céleste",
    rarity: "rare",
    armor: 2,
    weight: 1,
    value: 300,
    material: "tissu radiant",
    properties: ["magic", "radiant"],
    eras: ["mythic-age"],
    description:
      "Un vêtement brillant faiblement, signe de faveur divine."
  },

  {
    key: "warden_tabard",
    label: "Tabard du Gardien",
    rarity: "rare",
    armor: 2,
    weight: 2,
    value: 260,
    material: "tissu enchanté + cuir",
    properties: ["magic", "warding"],
    eras: ["high-kingdoms"],
    description:
      "Renforcé d’un enchantement protecteur, souvent porté par les protecteurs des temples."
  },

  {
    key: "phoenix_tabard",
    label: "Tabard du Phénix",
    rarity: "rare",
    armor: 2,
    weight: 1,
    value: 350,
    material: "tissu ignifuge",
    properties: ["magic", "fire-resistant"],
    eras: ["mythic-age"],
    description:
      "Résistant aux flammes, souvent porté par les mages du feu et les guerriers flamboyants."
  }
] as const;
