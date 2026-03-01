// @ts-nocheck
// armored_skirts.ts — Jupes blindées, tassettes avancées, protections lourdes MQ

export const MQ_ARMORED_SKIRTS = [
  //
  // ───────────────────────────────────────────
  //  COMMUNS (10)
  // ───────────────────────────────────────────
  //
  {
    key: "iron_segmented_skirt",
    label: "Jupe Segmentée en Fer",
    rarity: "common",
    armor: 4,
    weight: 5,
    value: 25,
    material: "fer",
    properties: ["metal"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Des bandes de fer superposées offrant une protection correcte sans bloquer complètement les mouvements."
  },

  {
    key: "steel_battle_skirt",
    label: "Jupe de Combat en Acier",
    rarity: "common",
    armor: 5,
    weight: 6,
    value: 35,
    material: "acier",
    properties: ["metal"],
    eras: ["high-kingdoms"],
    description:
      "Une jupe blindée simple composée de plaques d’acier rivetées sur un support en cuir."
  },

  {
    key: "brigandine_warskirt",
    label: "Jupe Brigandine",
    rarity: "common",
    armor: 4,
    weight: 4,
    value: 30,
    material: "brigandine",
    properties: ["reinforced"],
    eras: ["dark-age", "age-of-heroes"],
    description:
      "Tissu épais doublé de petites plaques métalliques. Bon compromis mobilité/armure."
  },

  {
    key: "leather_plate_skirt",
    label: "Jupe Cuir-Platé",
    rarity: "common",
    armor: 3,
    weight: 3,
    value: 22,
    material: "cuir + métal",
    properties: ["reinforced"],
    eras: ["age-of-heroes"],
    description:
      "Cuir rigide rehaussé de plaques fines, populaire auprès des mercenaires."
  },

  {
    key: "chainmail_skirt",
    label: "Jupe de Maille",
    rarity: "common",
    armor: 4,
    weight: 5,
    value: 28,
    material: "maille",
    properties: ["metal", "flexible"],
    eras: ["dark-age"],
    description:
      "Anneaux de maille protégeant efficacement le haut des jambes."
  },

  {
    key: "steel_tassets",
    label: "Tassettes en Acier",
    rarity: "common",
    armor: 5,
    weight: 5,
    value: 26,
    material: "acier",
    properties: ["metal"],
    eras: ["high-kingdoms"],
    description:
      "Deux plaques en acier couvrant l’avant et les côtés des cuisses."
  },

  {
    key: "legion_plate_skirt",
    label: "Jupe de Légion",
    rarity: "common",
    armor: 5,
    weight: 6,
    value: 32,
    material: "acier riveté",
    properties: ["metal"],
    eras: ["age-of-heroes", "dark-age"],
    description:
      "Modèle inspiré des armures de légionnaires, offrant une bonne défense frontale."
  },

  {
    key: "heavy_lamellar_skirt",
    label: "Jupe Lamellaire Lourde",
    rarity: "common",
    armor: 4,
    weight: 5,
    value: 24,
    material: "lamelles métalliques",
    properties: ["metal"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Lamelles épaisses montées sur un tissu robuste. Design traditionnel guerrier."
  },

  {
    key: "reinforced_warkilt",
    label: "Kilt de Guerre Renforcé",
    rarity: "common",
    armor: 3,
    weight: 3,
    value: 20,
    material: "cuir renforcé",
    properties: ["reinforced"],
    eras: ["age-of-heroes"],
    description:
      "Un kilt tribal auquel on a ajouté une couche de plaques légères."
  },

  {
    key: "soldier_platewrap",
    label: "Tablier Blindé du Soldat",
    rarity: "common",
    armor: 4,
    weight: 4,
    value: 23,
    material: "acier + cuir",
    properties: ["metal"],
    eras: ["high-kingdoms"],
    description:
      "Plaques métalliques cousues sur une base en cuir, couvrant le bas du torse et les hanches."
  },

  //
  // ───────────────────────────────────────────
  //  RARES (5)
  // ───────────────────────────────────────────
  //
  {
    key: "runic_plate_skirt",
    label: "Jupe de Plaques Runiques",
    rarity: "rare",
    armor: 7,
    weight: 5,
    value: 240,
    material: "acier runique",
    properties: ["magic-resist"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Chaque plaque est gravée de runes protectrices réduisant les dégâts magiques."
  },

  {
    key: "obsidian_warskirt",
    label: "Jupe de Guerre Obsidienne",
    rarity: "rare",
    armor: 8,
    weight: 4,
    value: 320,
    material: "obsidienne vivante",
    properties: ["cursed", "dark-resonance"],
    eras: ["dark-age", "mythic-age"],
    description:
      "L’obsidienne semble vibrer, absorbant partiellement les impacts et la lumière."
  },

  {
    key: "stormguard_tassets",
    label: "Tassettes Garde-Tempête",
    rarity: "rare",
    armor: 7,
    weight: 5,
    value: 280,
    material: "acier-tempête",
    properties: ["thunder-resist"],
    eras: ["arcane-renaissance"],
    description:
      "Forgées dans un alliage imprégné d’énergie orageuse, elles dissipent les charges électriques."
  },

  {
    key: "celestial_plate_kilt",
    label: "Kilt de Plaques Céleste",
    rarity: "rare",
    armor: 8,
    weight: 4,
    value: 350,
    material: "acier radiant",
    properties: ["radiant-resist", "magic"],
    eras: ["mythic-age"],
    description:
      "Un éclat doux émane de ses plaques, réduisant les dégâts radiants et lumineux."
  },

  {
    key: "astral_segmented_skirt",
    label: "Jupe Segmentée Astrale",
    rarity: "rare",
    armor: 9,
    weight: 3,
    value: 420,
    material: "alliage astral",
    properties: ["light", "force-resist"],
    eras: ["mythic-age"],
    description:
      "Un alliage astral fluide qui absorbe une partie de l’impact, même contre l’énergie pure."
  }
] as const;
