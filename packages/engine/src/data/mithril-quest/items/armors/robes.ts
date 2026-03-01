// @ts-nocheck
// robes.ts — Robes, habits d’érudits, tenues arcanes & robes enchantées MQ

export const MQ_ROBES = [
  //
  // ───────────────────────────────────────────
  //  COMMUNS (10)
  // ───────────────────────────────────────────
  //
  {
    key: "simple_cloth_robe",
    label: "Robe en Tissu Simple",
    rarity: "common",
    armor: 1,
    weight: 1,
    value: 5,
    material: "tissu",
    properties: ["light"],
    eras: ["ancient-age", "age-of-heroes"],
    description:
      "Une robe simple portée par les érudits, novices ou acolytes."
  },

  {
    key: "initiate_mage_robe",
    label: "Robe de Mage Initié",
    rarity: "common",
    armor: 1,
    weight: 1,
    value: 12,
    material: "tissu épais",
    properties: ["light"],
    eras: ["arcane-renaissance"],
    description:
      "Robe standard des apprentis mages, tissée pour résister à la chaleur des sorts ratés."
  },

  {
    key: "traveler_robe",
    label: "Robe de Voyageur",
    rarity: "common",
    armor: 1,
    weight: 2,
    value: 10,
    material: "lin renforcé",
    properties: ["light"],
    eras: ["age-of-heroes"],
    description:
      "Une robe robuste conçue pour les longs voyages, dotée de poches secrètes."
  },

  {
    key: "acolyte_robe",
    label: "Robe d’Acolyte",
    rarity: "common",
    armor: 1,
    weight: 1,
    value: 8,
    material: "tissu religieux",
    properties: ["light"],
    eras: ["ancient-age", "high-kingdoms"],
    description:
      "Tenue portée par les jeunes prêtres, simple mais respectée."
  },

  {
    key: "forest_druid_robe",
    label: "Robe du Druide Forestier",
    rarity: "common",
    armor: 2,
    weight: 2,
    value: 15,
    material: "fibres naturelles",
    properties: ["nature-attuned"],
    eras: ["age-of-heroes"],
    description:
      "Tissée à partir de fibres végétales, elle favorise la connexion à la nature."
  },

  {
    key: "scholar_robe",
    label: "Robe d’Érudit",
    rarity: "common",
    armor: 1,
    weight: 1,
    value: 14,
    material: "laine fine",
    properties: ["light"],
    eras: ["ancient-age", "arcane-renaissance"],
    description:
      "La tenue traditionnelle des bibliothécaires et chercheurs."
  },

  {
    key: "battlecloth_robe",
    label: "Robe de Tissu de Bataille",
    rarity: "common",
    armor: 2,
    weight: 2,
    value: 18,
    material: "tissu renforcé",
    properties: ["light"],
    eras: ["high-kingdoms"],
    description:
      "Une robe légèrement renforcée, portée par les guérisseurs en zone de guerre."
  },

  {
    key: "desert_wanderer_robe",
    label: "Robe du Marcheur du Désert",
    rarity: "common",
    armor: 1,
    weight: 1,
    value: 15,
    material: "tissu respirant",
    properties: ["heat-resist"],
    eras: ["ancient-age"],
    description:
      "Robe légère conçue pour les climats arides, protège du sable et du soleil brûlant."
  },

  {
    key: "shadow_adept_robe",
    label: "Robe d’Adepte de l’Ombre",
    rarity: "common",
    armor: 1,
    weight: 1,
    value: 18,
    material: "tissu noir",
    properties: ["stealth"],
    eras: ["dark-age"],
    description:
      "Une robe sombre privilégiée par ceux qui opèrent dans les ruelles et les cryptes."
  },

  {
    key: "ritual_robe",
    label: "Robe de Rituel",
    rarity: "common",
    armor: 1,
    weight: 1,
    value: 12,
    material: "tissu cérémonial",
    properties: ["ritual"],
    eras: ["ancient-age"],
    description:
      "Portée lors de cérémonies diverses, elle est souvent marquée de symboles mystiques."
  },

  //
  // ───────────────────────────────────────────
  //  RARES (5)
  // ───────────────────────────────────────────
  //
  {
    key: "runebound_robe",
    label: "Robe Runeblie",
    rarity: "rare",
    armor: 3,
    weight: 1,
    value: 220,
    material: "tissu runique",
    properties: ["magic", "spell-focus"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Des runes cousues dans la fibre amplifient la concentration et la puissance des sorts."
  },

  {
    key: "druidic_wildrobe",
    label: "Robe Sauvage Druidiques",
    rarity: "rare",
    armor: 3,
    weight: 2,
    value: 260,
    material: "fibres vivantes",
    properties: ["nature-attuned", "regen"],
    eras: ["high-kingdoms"],
    description:
      "Une robe vivante qui se régénère lentement et renforce la magie naturelle."
  },

  {
    key: "celestial_priest_robe",
    label: "Robe du Prêtre Céleste",
    rarity: "rare",
    armor: 4,
    weight: 1,
    value: 300,
    material: "tissu radiant",
    properties: ["radiant-resist", "holy"],
    eras: ["mythic-age"],
    description:
      "Un tissu lumineux qui protège contre l’énergie sacrée et renforce les bénédictions."
  },

  {
    key: "void_silks",
    label: "Soieries du Vide",
    rarity: "rare",
    armor: 3,
    weight: 0,
    value: 350,
    material: "soie d’ombre",
    properties: ["stealth", "dark-resonance"],
    eras: ["dark-age", "mythic-age"],
    description:
      "Une matière soyeuse qui semble absorber la lumière, idéale pour les adeptes de l’occulte."
  },

  {
    key: "astral_arcane_garment",
    label: "Habit Arcanique Astral",
    rarity: "rare",
    armor: 4,
    weight: 0,
    value: 420,
    material: "tissu astral",
    properties: ["magic", "force-resist"],
    eras: ["mythic-age"],
    description:
      "Un vêtement tissé à partir de filaments astrals, améliorant la manipulation de l’énergie brute."
  }
] as const;
