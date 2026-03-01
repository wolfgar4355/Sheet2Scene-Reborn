// @ts-nocheck
import type { MQItemArmor } from "../types";

export const MQ_ARMORS_MANTLES: MQItemArmor[] = [
  // ---------------------
  // ⭐ COMMUNS (10)
  // ---------------------
  {
    key: "simple-mantle",
    label: "Mantelet Simple",
    description: "Tissu léger posé sur les épaules, souvent utilisé pour briser le vent.",
    type: "armor",
    category: "mantle",
    subtype: "light",
    rpg: {
      armorClass: 0,
      maxDexBonus: null,
      penaltyStealth: false
    },
    metadata: {
      rarity: "common",
      value: 25,
      weight: 1,
      tags: ["mantle", "light"]
    }
  },
  {
    key: "quilted-mantle",
    label: "Mantelet Matelassé",
    description: "Couches de tissu cousues offrant une légère isolation.",
    type: "armor",
    category: "mantle",
    subtype: "light",
    rpg: {
      armorClass: 1,
      maxDexBonus: null,
      penaltyStealth: false
    },
    metadata: {
      rarity: "common",
      value: 40,
      weight: 2,
      tags: ["mantle", "light"]
    }
  },
  {
    key: "leather-mantle",
    label: "Mantelet de Cuir",
    description: "Pièce de cuir souple portée par les éclaireurs et chasseurs.",
    type: "armor",
    category: "mantle",
    subtype: "light",
    rpg: {
      armorClass: 1,
      maxDexBonus: null,
      penaltyStealth: false
    },
    metadata: {
      rarity: "common",
      value: 60,
      weight: 2,
      tags: ["mantle", "scout"]
    }
  },
  {
    key: "fur-mantle",
    label: "Mantelet de Fourrure",
    description: "Fourrure épaisse, idéale pour les climats froids.",
    type: "armor",
    category: "mantle",
    subtype: "light",
    rpg: {
      armorClass: 0,
      maxDexBonus: null,
      penaltyStealth: true
    },
    metadata: {
      rarity: "common",
      value: 50,
      weight: 3,
      tags: ["mantle", "winter"]
    }
  },
  {
    key: "scout-mantle",
    label: "Mantelet d’Éclaireur",
    description: "Coupe courte pour ne pas gêner les mouvements.",
    type: "armor",
    category: "mantle",
    subtype: "light",
    rpg: {
      armorClass: 1,
      maxDexBonus: null,
      penaltyStealth: false
    },
    metadata: {
      rarity: "common",
      value: 75,
      weight: 1,
      tags: ["mantle", "agility"]
    }
  },
  {
    key: "chain-mantle",
    label: "Mantelet à Mailles",
    description: "Anneaux métalliques légers couvrant les épaules contre les coups obliques.",
    type: "armor",
    category: "mantle",
    subtype: "medium",
    rpg: {
      armorClass: 2,
      maxDexBonus: 3,
      penaltyStealth: true
    },
    metadata: {
      rarity: "common",
      value: 110,
      weight: 4,
      tags: ["mantle", "medium"]
    }
  },
  {
    key: "reinforced-mantle",
    label: "Mantelet Renforcé",
    description: "Tiges de bois durci insérées dans le tissu pour dévier les lames.",
    type: "armor",
    category: "mantle",
    subtype: "medium",
    rpg: {
      armorClass: 2,
      maxDexBonus: 2,
      penaltyStealth: false
    },
    metadata: {
      rarity: "common",
      value: 120,
      weight: 3,
      tags: ["mantle", "medium"]
    }
  },
  {
    key: "bronze-mantle",
    label: "Mantelet de Bronze",
    description: "Plaques de bronze martelées protégeant le haut du torse.",
    type: "armor",
    category: "mantle",
    subtype: "medium",
    rpg: {
      armorClass: 3,
      maxDexBonus: 1,
      penaltyStealth: true
    },
    metadata: {
      rarity: "common",
      value: 150,
      weight: 6,
      tags: ["mantle", "bronze"]
    }
  },
  {
    key: "scalemail-mantle",
    label: "Mantelet à Écailles",
    description: "Écailles métalliques superposées offrant une protection correcte.",
    type: "armor",
    category: "mantle",
    subtype: "medium",
    rpg: {
      armorClass: 3,
      maxDexBonus: 2,
      penaltyStealth: true
    },
    metadata: {
      rarity: "common",
      value: 170,
      weight: 5,
      tags: ["mantle", "medium"]
    }
  },
  {
    key: "pilgrim-mantle",
    label: "Mantelet de Pèlerin",
    description: "Tissu robuste marqué de symboles religieux simples.",
    type: "armor",
    category: "mantle",
    subtype: "light",
    rpg: {
      armorClass: 0,
      maxDexBonus: null,
      penaltyStealth: false
    },
    metadata: {
      rarity: "common",
      value: 30,
      weight: 1,
      tags: ["mantle", "religious"]
    }
  },

  // ---------------------
  // 💎 RARES (5)
  // ---------------------
  {
    key: "mantle-of-the-sun",
    label: "Mantelet du Soleil",
    description: "Tissu doré qui semble briller sous la lumière, favorisé par les paladins.",
    type: "armor",
    category: "mantle",
    subtype: "rare",
    rpg: {
      armorClass: 3,
      maxDexBonus: 3,
      penaltyStealth: false
    },
    metadata: {
      rarity: "rare",
      value: 600,
      weight: 2,
      tags: ["mantle", "radiant"]
    }
  },
  {
    key: "void-mantle",
    label: "Mantelet du Néant",
    description: "Tissu sombre absorbant la lumière, réduisant presque toute détection visuelle.",
    type: "armor",
    category: "mantle",
    subtype: "rare",
    rpg: {
      armorClass: 1,
      maxDexBonus: null,
      penaltyStealth: false
    },
    metadata: {
      rarity: "rare",
      value: 750,
      weight: 1,
      tags: ["mantle", "stealth", "void"]
    }
  },
  {
    key: "storm-mantle",
    label: "Mantelet des Tempêtes",
    description: "Crackles faintly with static energy, offering resistance to lightning.",
    type: "armor",
    category: "mantle",
    subtype: "rare",
    rpg: {
      armorClass: 2,
      maxDexBonus: 2,
      penaltyStealth: false
    },
    metadata: {
      rarity: "rare",
      value: 850,
      weight: 2,
      tags: ["mantle", "storm"]
    }
  },
  {
    key: "druidic-moon-mantle",
    label: "Mantelet Druidique de la Lune",
    description: "Brodé d'argent, protège des esprits sauvages et renforce la perception.",
    type: "armor",
    category: "mantle",
    subtype: "rare",
    rpg: {
      armorClass: 1,
      maxDexBonus: null,
      penaltyStealth: false
    },
    metadata: {
      rarity: "rare",
      value: 900,
      weight: 1,
      tags: ["mantle", "nature", "moon"]
    }
  },
  {
    key: "dragoncrest-mantle",
    label: "Mantelet du Dragoncrest",
    description: "Plumes draconiques solidifiées, légères mais extrêmement résistantes.",
    type: "armor",
    category: "mantle",
    subtype: "rare",
    rpg: {
      armorClass: 4,
      maxDexBonus: 3,
      penaltyStealth: true
    },
    metadata: {
      rarity: "rare",
      value: 1200,
      weight: 3,
      tags: ["mantle", "dragon"]
    }
  }
];
