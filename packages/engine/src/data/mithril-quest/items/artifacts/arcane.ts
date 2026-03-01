// @ts-nocheck
// arcane.ts — Objets arcanique : essences, catalyseurs, grimoires, éclats et outils de mages

export const ARCANE_ITEMS = [
  //
  // ───────────────────────────────────────────
  //  A — COMMON (10)
  // ───────────────────────────────────────────
  //
  {
    key: "mana_spark",
    label: "Étincelle de Mana",
    type: "arcane",
    rarity: "common",
    value: 12,
    weight: 0.1,
    properties: ["mana"],
    eras: ["ancient-age", "arcane-renaissance"],
    description:
      "Un fragment d’énergie brute, utilisé comme composant mineur dans divers rituels."
  },

  {
    key: "arcane_dust",
    label: "Poussière Arcanique",
    type: "arcane",
    rarity: "common",
    value: 8,
    weight: 0.1,
    properties: ["craft"],
    eras: ["age-of-heroes", "dark-age"],
    description:
      "Poudre issue de la dégradation d’artefacts magiques."
  },

  {
    key: "focus_crystal",
    label: "Cristal de Focalisation",
    type: "arcane",
    rarity: "common",
    value: 15,
    weight: 0.2,
    properties: ["spell-focus"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Un cristal brut aidant à stabiliser les incantations simples."
  },

  {
    key: "scroll_fragment",
    label: "Fragment de Parchemin",
    type: "arcane",
    rarity: "common",
    value: 5,
    weight: 0.1,
    properties: ["scribe"],
    eras: ["ancient-age"],
    description:
      "Un morceau d’ancien texte arcanique, parfois encore imprégné d’énergie."
  },

  {
    key: "glyph_ink",
    label: "Encre à Glyphes",
    type: "arcane",
    rarity: "common",
    value: 9,
    weight: 0.1,
    properties: ["ritual"],
    eras: ["arcane-renaissance"],
    description:
      "Une encre métallique utilisée pour tracer des symboles magiques."
  },

  {
    key: "minor_spell_reagent",
    label: "Réactif Mineur",
    type: "arcane",
    rarity: "common",
    value: 4,
    weight: 0.1,
    properties: ["material"],
    eras: ["age-of-heroes"],
    description:
      "Un composant de base utilisé dans de petits sorts pratiques."
  },

  {
    key: "shimmer_leaf",
    label: "Feuille Scintillante",
    type: "arcane",
    rarity: "common",
    value: 11,
    weight: 0.1,
    properties: ["illusion"],
    eras: ["high-kingdoms"],
    description:
      "Une feuille lumineuse utilisée dans les illusions simples."
  },

  {
    key: "binding_thread",
    label: "Fil de Liaison",
    type: "arcane",
    rarity: "common",
    value: 10,
    weight: 0.1,
    properties: ["binding"],
    eras: ["arcane-renaissance"],
    description:
      "Un fil infusé permettant de créer de petites attaches magiques."
  },

  {
    key: "rune_stone",
    label: "Pierre Runique",
    type: "arcane",
    rarity: "common",
    value: 14,
    weight: 0.3,
    properties: ["rune"],
    eras: ["ancient-age", "dark-age"],
    description:
      "Une pierre gravée d’un symbole ancien, réagissant à la magie ambiante."
  },

  {
    key: "weak_focus_orb",
    label: "Orbe de Focalisation Mineure",
    type: "arcane",
    rarity: "common",
    value: 20,
    weight: 0.5,
    properties: ["focus"],
    eras: ["high-kingdoms"],
    description:
      "Un petit orbe utilisé par les apprentis pour canaliser leurs premiers sorts."
  },

  //
  // ───────────────────────────────────────────
  //  B — RARE (5)
  // ───────────────────────────────────────────
  //
  {
    key: "arcane_heart",
    label: "Cœur Arcanique",
    type: "arcane",
    rarity: "rare",
    value: 250,
    weight: 1,
    properties: ["mana", "magic"],
    eras: ["mythic-age"],
    description:
      "Un noyau vibrant d’énergie pure, considéré comme la source parfaite de mana."
  },

  {
    key: "spellweave_cloth",
    label: "Tissu Tisse-Sorts",
    type: "arcane",
    rarity: "rare",
    value: 180,
    weight: 0.5,
    properties: ["enchant"],
    eras: ["arcane-renaissance"],
    description:
      "Un tissu rare permettant de renforcer enchantements et glyphes."
  },

  {
    key: "rune_core",
    label: "Noyau Runique",
    type: "arcane",
    rarity: "rare",
    value: 300,
    weight: 1,
    properties: ["rune", "magic"],
    eras: ["mythic-age", "dark-age"],
    description:
      "Un ancien cœur de pierre chargé d’un puissant symbole ancestral."
  },

  {
    key: "mirror_crystal",
    label: "Cristal-Miroir",
    type: "arcane",
    rarity: "rare",
    value: 220,
    weight: 0.5,
    properties: ["illusion", "reflect"],
    eras: ["arcane-renaissance"],
    description:
      "Capable de refléter ou parfois renvoyer une portion d’un sort."
  },

  {
    key: "void_ink",
    label: "Encre du Néant",
    type: "arcane",
    rarity: "rare",
    value: 280,
    weight: 0.1,
    properties: ["void", "cursed", "magic"],
    eras: ["dark-age", "mythic-age"],
    description:
      "Une encre noire abyssale, utilisée dans des rituels interdits."
  }
] as const;
