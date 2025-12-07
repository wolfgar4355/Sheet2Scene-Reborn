// @ts-nocheck
// hauberks.ts — Hauberts, cottes longues, tuniques renforcées et variantes enchantées (MQ)

export const MQ_HAUBERKS = [
  //
  // ───────────────────────────────────────────
  //  COMMUNS (10)
  // ───────────────────────────────────────────
  //
  {
    key: "leather_hauberk",
    label: "Haubert de Cuir Souple",
    rarity: "common",
    armor: 4,
    weight: 8,
    value: 35,
    material: "cuir tanné",
    properties: ["light"],
    eras: ["age-of-heroes", "dark-age"],
    description:
      "Un haubert simple mais efficace, conçu pour protéger le torse et les hanches."
  },

  {
    key: "reinforced_leather_hauberk",
    label: "Haubert Cuir Renforcé",
    rarity: "common",
    armor: 5,
    weight: 10,
    value: 50,
    material: "cuir + plaques fines",
    properties: ["light"],
    eras: ["dark-age"],
    description:
      "De fines plaques métalliques cousues sous le cuir lui offrent une protection améliorée."
  },

  {
    key: "studded_hauberk",
    label: "Haubert Clouté",
    rarity: "common",
    armor: 5,
    weight: 11,
    value: 55,
    material: "cuir clouté",
    properties: ["light"],
    eras: ["high-kingdoms"],
    description:
      "Un modèle robuste où des clous de métal renforcent la surface du cuir."
  },

  {
    key: "chain_hauberk",
    label: "Haubert de Mailles",
    rarity: "common",
    armor: 6,
    weight: 20,
    value: 75,
    material: "mailles d’acier",
    properties: ["medium"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Une cotte longue couvrant torse, cuisses et bras. Très répandue dans les armées."
  },

  {
    key: "ring_hauberk",
    label: "Haubert Anneaux",
    rarity: "common",
    armor: 5,
    weight: 18,
    value: 65,
    material: "anneaux en fer",
    properties: ["medium"],
    eras: ["dark-age"],
    description:
      "Une version plus légère utilisant des anneaux plus espacés que la maille traditionnelle."
  },

  {
    key: "scale_hauberk",
    label: "Haubert d’Écailles",
    rarity: "common",
    armor: 6,
    weight: 25,
    value: 90,
    material: "plaques écaille",
    properties: ["medium"],
    eras: ["high-kingdoms"],
    description:
      "De petites plaques se superposent pour offrir une excellente protection."
  },

  {
    key: "brigandine_hauberk",
    label: "Haubert Brigandine",
    rarity: "common",
    armor: 6,
    weight: 22,
    value: 85,
    material: "tissu + plaques rivetées",
    properties: ["medium"],
    eras: ["age-of-heroes"],
    description:
      "Un vêtement matelassé renforcé par de nombreuses plaques internes."
  },

  {
    key: "nomad_hauberk",
    label: "Haubert Nomade",
    rarity: "common",
    armor: 4,
    weight: 6,
    value: 30,
    material: "cuir léger",
    properties: ["light"],
    eras: ["ancient-age"],
    description:
      "Souple et pratique pour les longs déplacements dans les steppes et déserts."
  },

  {
    key: "border_guard_hauberk",
    label: "Haubert des Gardes Frontaliers",
    rarity: "common",
    armor: 5,
    weight: 12,
    value: 48,
    material: "cuir + renforts métal",
    properties: ["light"],
    eras: ["age-of-heroes"],
    description:
      "Un modèle adopté par les forces stationnées dans les régions difficiles."
  },

  {
    key: "militia_hauberk",
    label: "Haubert de Milice",
    rarity: "common",
    armor: 5,
    weight: 10,
    value: 40,
    material: "cuir grossier",
    properties: ["light"],
    eras: ["dark-age"],
    description:
      "Peu coûteux, rapidement fabriqué et distribué aux milices locales."
  },

  //
  // ───────────────────────────────────────────
  //  RARES (5)
  // ───────────────────────────────────────────
  //
  {
    key: "runeforged_hauberk",
    label: "Haubert Forgé-Rune",
    rarity: "rare",
    armor: 7,
    weight: 14,
    value: 350,
    material: "acier runique",
    properties: ["magic", "warding"],
    eras: ["high-kingdoms"],
    description:
      "La surface est parcourue de runes protectrices qui renforcent la résistance du porteur."
  },

  {
    key: "druidic_living_hauberk",
    label: "Haubert Vivant des Druides",
    rarity: "rare",
    armor: 6,
    weight: 8,
    value: 420,
    material: "écorce vivante",
    properties: ["magic", "nature-bond"],
    eras: ["age-of-heroes"],
    description:
      "Un haubert organique qui s’adapte au mouvement et se régénère lentement."
  },

  {
    key: "shadowwoven_hauberk",
    label: "Haubert Ombre-Tissé",
    rarity: "rare",
    armor: 6,
    weight: 4,
    value: 460,
    material: "tissu d’ombre",
    properties: ["stealth", "dark-resonance", "magic"],
    eras: ["dark-age"],
    description:
      "Tissé dans des filaments d’ombre condensée, idéal pour les éclaireurs nocturnes."
  },

  {
    key: "celestial_chain_hauberk",
    label: "Haubert de Chaînes Célestes",
    rarity: "rare",
    armor: 7,
    weight: 10,
    value: 600,
    material: "alliage radiant",
    properties: ["magic", "radiant", "holy"],
    eras: ["mythic-age"],
    description:
      "Les maillons brillent d’une lumière douce, renforçant la protection spirituelle."
  },

  {
    key: "titanbone_hauberk",
    label: "Haubert en Os de Titan",
    rarity: "rare",
    armor: 8,
    weight: 16,
    value: 800,
    material: "os mythique",
    properties: ["heavy", "mythic", "magic"],
    eras: ["mythic-age"],
    description:
      "Forgé dans les restes d’un titan, offrant une défense quasi inégalable."
  }
] as const;
