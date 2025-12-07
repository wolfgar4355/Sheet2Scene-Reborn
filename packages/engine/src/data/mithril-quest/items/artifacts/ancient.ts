// @ts-nocheck
// ancient.ts — Reliques antiques, outils rituels, artefacts perdus

export const ANCIENT_ITEMS = [
  //
  // ───────────────────────────────────────────
  //  A — COMMON (10)
  // ───────────────────────────────────────────
  //
  {
    key: "clay_tablet",
    label: "Tablette d’Argile Gravée",
    type: "ancient",
    rarity: "common",
    value: 5,
    weight: 2,
    properties: ["fragile"],
    eras: ["ancient-age"],
    description:
      "Une tablette portant des marques oubliées. Les érudits en cherchent constamment."
  },

  {
    key: "bronze_amulet",
    label: "Amulette de Bronze",
    type: "ancient",
    rarity: "common",
    value: 12,
    weight: 1,
    properties: ["trinket"],
    eras: ["ancient-age"],
    description:
      "Un pendentif simple mais ancien, peut-être porté par un prêtre mineur."
  },

  {
    key: "stone_idol",
    label: "Idole de Pierre",
    type: "ancient",
    rarity: "common",
    value: 15,
    weight: 4,
    properties: ["ritual"],
    eras: ["ancient-age"],
    description:
      "Une petite idole représentant un esprit oublié. Les villageois en faisaient des offrandes."
  },

  {
    key: "broken_censer",
    label: "Encensoir Brisé",
    type: "ancient",
    rarity: "common",
    value: 8,
    weight: 2,
    properties: ["ritual"],
    eras: ["ancient-age"],
    description:
      "Un encensoir en cuivre fendu, encore marqué par des résidus parfumés."
  },

  {
    key: "ceremonial_cup",
    label: "Coupe Cérémonielle",
    type: "ancient",
    rarity: "common",
    value: 10,
    weight: 1,
    properties: ["ritual"],
    eras: ["ancient-age"],
    description:
      "Une coupe d’offrande utilisée lors de rites saisonniers."
  },

  {
    key: "suneater_shard",
    label: "Éclat Mange-Soleil",
    type: "ancient",
    rarity: "common",
    value: 25,
    weight: 1,
    properties: ["oddity"],
    eras: ["ancient-age"],
    description:
      "Un fragment sombre absorbant légèrement la lumière autour de lui."
  },

  {
    key: "old_bone_talisman",
    label: "Talisman d’Os Ancien",
    type: "ancient",
    rarity: "common",
    value: 6,
    weight: 0.5,
    properties: ["trinket"],
    eras: ["ancient-age"],
    description:
      "Un os poli gravé de motifs primitifs."
  },

  {
    key: "ritual_bowl",
    label: "Bol Rituel",
    type: "ancient",
    rarity: "common",
    value: 7,
    weight: 1,
    properties: ["ritual"],
    eras: ["ancient-age"],
    description:
      "Un récipient utilisé pour stocker des huiles sacrées."
  },

  {
    key: "sunmarked_token",
    label: "Jeton Marqué du Soleil",
    type: "ancient",
    rarity: "common",
    value: 5,
    weight: 0.2,
    properties: ["symbol"],
    eras: ["ancient-age"],
    description:
      "Un jeton portant un symbole solaire ancien."
  },

  {
    key: "chipped_scroll_case",
    label: "Étui à Parchemin Ébréché",
    type: "ancient",
    rarity: "common",
    value: 9,
    weight: 1,
    properties: ["container"],
    eras: ["ancient-age"],
    description:
      "Un étui en bois incrusté de résine. Vide aujourd’hui."
  },

  //
  // ───────────────────────────────────────────
  //  B — RARE (5)
  // ───────────────────────────────────────────
  //
  {
    key: "seer_eye_orb",
    label: "Orbe Œil-du-Voyant",
    type: "ancient",
    rarity: "rare",
    value: 120,
    weight: 2,
    properties: ["magic", "divination"],
    eras: ["ancient-age"],
    description:
      "Une sphère brillante utilisée pour lire les signes des astres."
  },

  {
    key: "serpent_stone",
    label: "Pierre-Serpent",
    type: "ancient",
    rarity: "rare",
    value: 140,
    weight: 1,
    properties: ["magic", "ward"],
    eras: ["ancient-age"],
    description:
      "Une pierre gravée d’un serpent stylisé, censée repousser les esprits mauvais."
  },

  {
    key: "amber_fang",
    label: "Croc d’Ambre",
    type: "ancient",
    rarity: "rare",
    value: 180,
    weight: 0.5,
    properties: ["magic"],
    eras: ["ancient-age"],
    description:
      "Un croc fossile enfermé dans l’ambre, vibrant d’une énergie ancienne."
  },

  {
    key: "oracle_mask",
    label: "Masque de l’Oracle",
    type: "ancient",
    rarity: "rare",
    value: 220,
    weight: 2,
    properties: ["ritual", "magic"],
    eras: ["ancient-age"],
    description:
      "Porté par un oracle lors de visions sacrées, son visage semble changer de forme."
  },

  {
    key: "sunken_relic",
    label: "Relique Engloutie",
    type: "ancient",
    rarity: "rare",
    value: 260,
    weight: 3,
    properties: ["magic", "waterbound"],
    eras: ["ancient-age"],
    description:
      "Un artefact perdu dans les profondeurs d’un ancien temple inondé."
  }
] as const;
