// @ts-nocheck
// elemental.ts — Artefacts et ressources élémentaires

export const ELEMENTAL_ITEMS = [
  //
  // ───────────────────────────────────────────
  //  A — COMMON (10)
  // ───────────────────────────────────────────
  //
  {
    key: "ember_shard",
    label: "Éclat de Braise",
    type: "elemental",
    rarity: "common",
    value: 8,
    weight: 0.1,
    properties: ["fire"],
    eras: ["ancient-age", "age-of-heroes"],
    description:
      "Un fragment incandescent qui conserve une chaleur légère mais constante."
  },

  {
    key: "frost_petals",
    label: "Pétales de Givre",
    type: "elemental",
    rarity: "common",
    value: 6,
    weight: 0.1,
    properties: ["cold"],
    eras: ["ancient-age", "high-kingdoms"],
    description:
      "Des pétales gelés qui ne fondent jamais, utilisés en herboristerie arcanique."
  },

  {
    key: "stone_heart",
    label: "Cœur de Pierre",
    type: "elemental",
    rarity: "common",
    value: 12,
    weight: 1,
    properties: ["earth"],
    eras: ["ancient-age"],
    description:
      "Un noyau rocailleux vibrant d’une pulsation lente et profonde."
  },

  {
    key: "spark_crystal",
    label: "Cristal-Étincelle",
    type: "elemental",
    rarity: "common",
    value: 10,
    weight: 0.2,
    properties: ["lightning"],
    eras: ["age-of-heroes"],
    description:
      "Un petit cristal chargé d’électricité statique, crépitant faiblement."
  },

  {
    key: "mist_tear",
    label: "Larme de Brume",
    type: "elemental",
    rarity: "common",
    value: 7,
    weight: 0.1,
    properties: ["water"],
    eras: ["ancient-age"],
    description:
      "Une goutte d’eau solidifiée, scellée dans une forme translucide."
  },

  {
    key: "whisper_leaf",
    label: "Feuille Murmurante",
    type: "elemental",
    rarity: "common",
    value: 5,
    weight: 0.1,
    properties: ["wind"],
    eras: ["age-of-heroes"],
    description:
      "Une feuille légère qui bruisse même sans vent, comme si elle parlait."
  },

  {
    key: "ember_powder",
    label: "Poudre de Braise",
    type: "elemental",
    rarity: "common",
    value: 6,
    weight: 0.1,
    properties: ["fire"],
    eras: ["age-of-heroes"],
    description:
      "Une poudre rougeoyante utilisée dans des mixtures alchimiques ignées."
  },

  {
    key: "glacial_seed",
    label: "Graine Glaciale",
    type: "elemental",
    rarity: "common",
    value: 8,
    weight: 0.1,
    properties: ["cold"],
    eras: ["high-kingdoms"],
    description:
      "Une graine givrée qui refroidit tout ce qu’elle touche."
  },

  {
    key: "dust_core",
    label: "Noyau de Poussière",
    type: "elemental",
    rarity: "common",
    value: 5,
    weight: 0.3,
    properties: ["earth"],
    eras: ["ancient-age"],
    description:
      "Un petit amas de particules compactées lié à la terre primordiale."
  },

  {
    key: "storm_feather",
    label: "Plume d’Orage",
    type: "elemental",
    rarity: "common",
    value: 11,
    weight: 0.1,
    properties: ["lightning", "wind"],
    eras: ["arcane-renaissance"],
    description:
      "Une plume électrique arrachée à un oiseau mythique des tempêtes."
  },

  //
  // ───────────────────────────────────────────
  //  B — RARE (5)
  // ───────────────────────────────────────────
  //
  {
    key: "inferno_core",
    label: "Noyau d’Inferno",
    type: "elemental",
    rarity: "rare",
    value: 180,
    weight: 1,
    properties: ["fire", "magic"],
    eras: ["mythic-age"],
    description:
      "Un cœur ardent conservant la chaleur d’un volcan ancien."
  },

  {
    key: "glacial_orb",
    label: "Orbe Glaciaire",
    type: "elemental",
    rarity: "rare",
    value: 150,
    weight: 1,
    properties: ["cold", "magic"],
    eras: ["mythic-age"],
    description:
      "Une sphère de glace éternelle emprisonnant un souffle hivernal."
  },

  {
    key: "geomant_stone",
    label: "Pierre Géomancienne",
    type: "elemental",
    rarity: "rare",
    value: 200,
    weight: 2,
    properties: ["earth", "magic"],
    eras: ["mythic-age"],
    description:
      "Une pierre animée d’un esprit terrestre ancien, fréquemment utilisée en rituels."
  },

  {
    key: "tempest_core",
    label: "Noyau de Tempête",
    type: "elemental",
    rarity: "rare",
    value: 220,
    weight: 1,
    properties: ["lightning", "wind", "magic"],
    eras: ["mythic-age"],
    description:
      "Un condensé de foudre et de vent formant un micro-orage stable."
  },

  {
    key: "tidal_shell",
    label: "Coquille Marée",
    type: "elemental",
    rarity: "rare",
    value: 170,
    weight: 1,
    properties: ["water", "magic"],
    eras: ["mythic-age"],
    description:
      "Une coquille modelée par les courants, contenant l’essence d’une vague."
  }
] as const;
