// @ts-nocheck
import type { MQItemArtifact } from "../types";

export const MQ_ARTIFACTS_RELICS: MQItemArtifact[] = [
  {
    key: "echo_of_eternity",
    label: "Écho d’Éternité",
    description: "Un fragment sonore cristallisé provenant d’un chant divin oublié. Il résonne faiblement lorsque quelqu’un ment.",
    type: "artifact",
    category: "relic",
    subtype: "holy-fragment",
    metadata: {
      rarity: "legendary",
      value: 12000,
      weight: 0,
      attunement: true,
      tags: ["relic", "holy", "prophecy", "legendary"],
    },
    effects: [
      "Détecte les mensonges",
      "Amplification des sorts divins",
      "Résistance forte aux effets mentaux"
    ],
  },

  {
    key: "saintblade_shard",
    label: "Éclat de Lame Sainte",
    description: "Un morceau lumineux d’une épée sacrée brisée lors d’une guerre céleste.",
    type: "artifact",
    category: "relic",
    subtype: "holy-shard",
    metadata: {
      rarity: "very-rare",
      value: 8000,
      weight: 0,
      attunement: false,
      tags: ["relic", "holy", "war"],
    },
    effects: [
      "Repousse les morts-vivants",
      "Lumière sacrée aveuglante",
      "Renforcement des armes adjacentes"
    ],
  },

  {
    key: "veil_of_serenity",
    label: "Voile de Sérénité",
    description: "Un tissu immaculé porté autrefois par une prêtresse bienveillante. Il apaise toute forme de douleur.",
    type: "artifact",
    category: "relic",
    subtype: "healing-relic",
    metadata: {
      rarity: "rare",
      value: 4000,
      weight: 0,
      attunement: true,
      tags: ["relic", "holy", "healing"],
    },
    effects: [
      "Annulation de douleur (1/jour)",
      "Bonus de récupération accélérée",
      "Protection émotionnelle"
    ],
  },

  {
    key: "lamp_of_the_unseen",
    label: "Lampe de l’Invisible",
    description: "Une lampe sacrée qui n’éclaire que ce qui est caché — illusions, pièges, esprits dissimulés.",
    type: "artifact",
    category: "relic",
    subtype: "divination-tool",
    metadata: {
      rarity: "very-rare",
      value: 5500,
      weight: 2,
      attunement: false,
      tags: ["relic", "holy", "divination"],
    },
    effects: [
      "Détecte toutes les illusions",
      "Dévoile les pièges magiques",
      "Vision spirituelle"
    ],
  },

  {
    key: "tear_of_the_fallen_angel",
    label: "Larme de l’Ange Déchu",
    description: "Un cristal sombre contenant la tristesse éternelle d’un être céleste corrompu.",
    type: "artifact",
    category: "relic",
    subtype: "fallen-relic",
    metadata: {
      rarity: "legendary",
      value: 15000,
      weight: 1,
      attunement: true,
      tags: ["relic", "dark-holy", "legendary"],
    },
    effects: [
      "Bouclier émotionnel absolu",
      "Sort d’ombre sacrée",
      "Possibilité de purifier une âme (1/mois)"
    ],
  },

  {
    key: "oracle_circlet",
    label: "Diadème d’Oracle",
    description: "Une couronne ancienne qui permet d’entendre des fragments du futur.",
    type: "artifact",
    category: "relic",
    subtype: "prophecy",
    metadata: {
      rarity: "very-rare",
      value: 7200,
      weight: 1,
      attunement: true,
      tags: ["relic", "prophecy", "mental"],
    },
    effects: [
      "Prémonitions limitées (avantage sur initiative)",
      "Détection du danger imminent",
      "Compréhension de toutes les langues anciennes"
    ],
  },

  {
    key: "sunlit_scepter",
    label: "Sceptre Soleil-Éternel",
    description: "Un sceptre divin irradiant une chaleur apaisante.",
    type: "artifact",
    category: "relic",
    subtype: "solar-relic",
    metadata: {
      rarity: "rare",
      value: 5200,
      weight: 3,
      attunement: false,
      tags: ["relic", "light", "holy"],
    },
    effects: [
      "Lumière solaire intense",
      "Résistance aux malédictions",
      "Soins mineurs continus"
    ],
  },

  {
    key: "bones_of_the_first_martyr",
    label: "Os du Premier Martyr",
    description: "Des reliques enfermées dans un coffret, utilisées autrefois pour bénir des armées entières.",
    type: "artifact",
    category: "relic",
    subtype: "saint-relic",
    metadata: {
      rarity: "rare",
      value: 4800,
      weight: 2,
      attunement: false,
      tags: ["relic", "holy", "war"],
    },
    effects: [
      "Aura de courage",
      "Bonus de résistance magique",
      "Protection contre la peur"
    ],
  },

  {
    key: "echoing_tomb_key",
    label: "Clé-Tombeau Écho",
    description: "Une clé funéraire ouvrant n’importe quelle porte menant à un lieu hanté.",
    type: "artifact",
    category: "relic",
    subtype: "funeral-relic",
    metadata: {
      rarity: "uncommon",
      value: 2500,
      weight: 1,
      attunement: false,
      tags: ["relic", "spirit", "grave"],
    },
    effects: [
      "Accès automatique aux cryptes",
      "Protection contre les esprits",
      "Détection des morts cachés"
    ],
  },

  {
    key: "banner_of_valiance",
    label: "Bannière de Vaillance",
    description: "Une bannière sacrée portée par les héros d’anciennes batailles.",
    type: "artifact",
    category: "relic",
    subtype: "holy-banner",
    metadata: {
      rarity: "legendary",
      value: 10000,
      weight: 5,
      attunement: false,
      tags: ["relic", "holy", "heroic"],
    },
    effects: [
      "Inspire toutes les troupes alliées",
      "Résistance à la magie sombre",
      "Augmente le moral des alliés"
    ],
  },
];
