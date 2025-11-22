// crossbows.ts — Arbalètes légères, lourdes, exotiques et magiques

export const CROSSBOWS = [
  {
    key: "light_crossbow",
    label: "Arbalète Légère",
    damage: "1d8",
    type: "simple",
    style: "crossbow",
    rarity: "common",
    value: 25,
    weight: 5,
    range: "80/320",
    properties: ["two-handed", "loading"],
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une arbalète facile à manier, idéale pour les soldats débutants et les tireurs embusqués."
  },

  {
    key: "heavy_crossbow",
    label: "Arbalète Lourde",
    damage: "1d10",
    type: "martial",
    style: "crossbow",
    rarity: "common",
    value: 50,
    weight: 14,
    range: "100/400",
    properties: ["two-handed", "heavy", "loading"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Puissante et précise, mais lente à recharger. Capable de transpercer des armures épaisses."
  },

  {
    key: "hand_crossbow",
    label: "Arbalète de Poing",
    damage: "1d6",
    type: "martial",
    style: "crossbow",
    rarity: "uncommon",
    value: 75,
    weight: 2,
    range: "30/120",
    properties: ["light", "finesse"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Une petite arbalète discrète, prisée des voleurs, assassins et aventuriers urbains."
  },

  {
    key: "siege_slinger",
    label: "Arbalète Portative de Siège",
    damage: "1d12",
    type: "martial",
    style: "crossbow",
    rarity: "uncommon",
    value: 150,
    weight: 18,
    range: "120/480",
    properties: ["two-handed", "heavy", "slow-reload"],
    eras: ["dark-age"],
    description:
      "Un modèle massif inspiré des balistes, miniature mais terriblement destructeur."
  },

  {
    key: "tribal_boltbow",
    label: "Arbalète Tribale",
    damage: "1d8",
    type: "simple",
    style: "crossbow",
    rarity: "uncommon",
    value: 20,
    weight: 6,
    range: "70/280",
    properties: ["loading"],
    eras: ["ancient-age"],
    description:
      "Une arbalète primitive faite de bois brut, renforcée de ligatures et de tendons."
  },

  {
    key: "precision_crossbow",
    label: "Arbalète de Précision",
    damage: "1d10",
    type: "martial",
    style: "crossbow",
    rarity: "rare",
    value: 200,
    weight: 12,
    range: "150/600",
    properties: ["two-handed", "loading"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Une arbalète finement calibrée, conçue pour les tireurs d’élite et les chasseurs de monstres."
  },

  {
    key: "arcane_repeatbow",
    label: "Arbalète Arcanique Répétition",
    damage: "1d8 (force)",
    type: "martial",
    style: "crossbow",
    rarity: "rare",
    value: 350,
    weight: 10,
    range: "120/480",
    properties: ["two-handed", "magic", "repeating"],
    eras: ["arcane-renaissance"],
    description:
      "Infusée d’énergie éthérique, cette arbalète peut tirer plusieurs carreaux avant d’être rechargée."
  },

  {
    key: "abyssal_crossbow",
    label: "Arbalète Abyssale",
    damage: "1d10 (necrotic)",
    type: "martial",
    style: "crossbow",
    rarity: "legendary",
    value: 900,
    weight: 9,
    range: "100/400",
    properties: ["magic", "cursed"],
    eras: ["dark-age", "mythic-age"],
    description:
      "Une arbalète imprégnée d’énergie du Néant, ses carreaux volent comme des ombres tranchantes."
  },

  {
    key: "solar_boltcaster",
    label: "Lance-Carreaux Solaire",
    damage: "1d12 (radiant)",
    type: "martial",
    style: "crossbow",
    rarity: "legendary",
    value: 1400,
    weight: 8,
    range: "160/640",
    properties: ["two-handed", "magic", "radiant"],
    eras: ["high-kingdoms", "mythic-age"],
    description:
      "Bénie par les prêtres du Soleil, cette arme tire des projectiles de lumière pure."
  },

  {
    key: "astral_arbalest",
    label: "Arbalète Astrale",
    damage: "2d8 (force)",
    type: "martial",
    style: "crossbow",
    rarity: "mythic",
    value: 2800,
    weight: 6,
    range: "200/800",
    properties: ["magic", "two-handed"],
    eras: ["mythic-age"],
    description:
      "Forgée dans les vents stellaires, elle projette des carreaux d’énergie pure capables de fendre la réalité."
  }
] as const;
