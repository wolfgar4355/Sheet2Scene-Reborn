// potions.ts — Potions de soins, buffs, résistances, transformations & mythiques

export const POTIONS = [
  //
  // ────────────────────────────────────────
  //  A — POTIONS DE SOINS
  // ────────────────────────────────────────
  //
  {
    key: "healing_minor",
    label: "Potion de Soin Mineure",
    rarity: "common",
    value: 25,
    healing: "2d4+2",
    effects: ["Restaure des PV"],
    eras: ["age-of-heroes"],
    description: "Une petite fiole rougeâtre guérissant légèrement les blessures."
  },

  {
    key: "healing_standard",
    label: "Potion de Soin",
    rarity: "common",
    value: 50,
    healing: "2d8+4",
    effects: ["Restaure des PV modérés"],
    eras: ["high-kingdoms"],
    description: "Une potion standard utilisée par la plupart des aventuriers."
  },

  {
    key: "healing_greater",
    label: "Potion de Soin Supérieure",
    rarity: "uncommon",
    value: 150,
    healing: "4d8+8",
    effects: ["Soins importants"],
    eras: ["high-kingdoms"],
    description: "Un mélange alchimique puissant augmentant la régénération."
  },

  //
  // ────────────────────────────────────────
  //  B — POTIONS DE BOOST
  // ────────────────────────────────────────
  //
  {
    key: "potion_strength",
    label: "Potion de Force",
    rarity: "uncommon",
    value: 120,
    effects: ["+2 Force pendant 1h"],
    eras: ["age-of-heroes"],
    description: "Une potion virile donnant une force accrue temporaire."
  },

  {
    key: "potion_speed",
    label: "Potion de Rapidité",
    rarity: "rare",
    value: 220,
    effects: ["Double vitesse", "Avantage DEX"],
    eras: ["high-kingdoms"],
    description: "Une potion fulgurante offrant rapidité et réflexes améliorés."
  },

  //
  // ────────────────────────────────────────
  //  C — RÉSISTANCES ÉLÉMENTAIRES
  // ────────────────────────────────────────
  //
  {
    key: "resist_fire",
    label: "Potion de Résistance au Feu",
    rarity: "uncommon",
    value: 90,
    effects: ["Résistance Feu"],
    eras: ["high-kingdoms"],
    description: "Une potion chaude protégeant contre les brûlures."
  },

  {
    key: "resist_frost",
    label: "Potion de Résistance au Froid",
    rarity: "uncommon",
    value: 90,
    effects: ["Résistance Froid"],
    eras: ["high-kingdoms"],
    description: "Une fiole glacée empêchant les engelures sévères."
  },

  //
  // ────────────────────────────────────────
  //  D — POTIONS SPÉCIALES
  // ────────────────────────────────────────
  //
  {
    key: "potion_invisibility",
    label: "Potion d’Invisibilité",
    rarity: "rare",
    value: 300,
    effects: ["Invisibilité 1h ou jusqu’à action offensive"],
    eras: ["arcane-renaissance"],
    description: "Une fiole transparente qui rend son buveur invisible."
  },

  {
    key: "potion_giant_strength",
    label: "Force du Géant",
    rarity: "legendary",
    value: 1200,
    effects: ["Force = 25", "Dégâts +50%"],
    eras: ["mythic-age"],
    description: "Une potion mythique insufflant le pouvoir des géants anciens."
  },

  //
  // ────────────────────────────────────────
  //  E — POTIONS MYTHIQUES
  // ────────────────────────────────────────
  //
  {
    key: "potion_astral",
    label: "Potion Astrale",
    rarity: "mythic",
    value: 2500,
    effects: ["Marche-plan", "Résistance Force", "+2 AC"],
    eras: ["mythic-age"],
    description: "Une potion lumineuse connectée au Plan Astral."
  }
] as const;
