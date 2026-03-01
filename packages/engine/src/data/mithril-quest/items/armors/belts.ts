// @ts-nocheck
import type { MQItemArmor } from "../types";

export const MQ_ITEMS_ARMORS_BELTS: MQItemArmor[] = [
  // ---------- COMMON (10) ----------
  {
    key: "leather-belt",
    label: "Ceinture de Cuir",
    description: "Simple ceinture renforcée, utilisée par la plupart des aventuriers.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 25, weight: 1, tags: ["armor", "belt", "leather"] }
  },
  {
    key: "traveler-belt",
    label: "Ceinture du Voyageur",
    description: "Large ceinture tissée avec petites poches cousues à la main.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 35, weight: 1, tags: ["armor", "belt", "utility"] }
  },
  {
    key: "rope-belt",
    label: "Ceinture de Corde",
    description: "Une corde solide nouée autour de la taille. Rustique mais fiable.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 10, weight: 1, tags: ["armor", "belt", "rope"] }
  },
  {
    key: "smith-belt",
    label: "Ceinture de Forgeron",
    description: "Épaisse ceinture résistante à la chaleur et à l’usure.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 40, weight: 2, tags: ["armor", "belt", "craft"] }
  },
  {
    key: "hunter-belt",
    label: "Ceinture du Chasseur",
    description: "Ceinture comportant des attaches pour petits outils et trophées.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 45, weight: 1, tags: ["armor", "belt", "hunter"] }
  },
  {
    key: "scout-belt",
    label: "Ceinture d'Éclaireur",
    description: "Légère et flexible, conçue pour ceux qui se déplacent rapidement.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 30, weight: 1, tags: ["armor", "belt", "scout"] }
  },
  {
    key: "cloth-belt",
    label: "Ceinture en Tissu",
    description: "Ceinture nouée en tissu solide. Courante chez les mages et érudits.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 15, weight: 0.5, tags: ["armor", "belt", "cloth"] }
  },
  {
    key: "scavenger-belt",
    label: "Ceinture du Pilleur",
    description: "Fait de matériaux de récupération, pratique mais peu esthétique.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 20, weight: 1, tags: ["armor", "belt", "scavenger"] }
  },
  {
    key: "farmer-belt",
    label: "Ceinture de Fermier",
    description: "Simple ceinture de travail robuste, tachée de terre.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 18, weight: 1, tags: ["armor", "belt", "worker"] }
  },
  {
    key: "mercenary-belt",
    label: "Ceinture de Mercenaire",
    description: "Sangles multiples permettant d’accrocher dagues et bourses.",
    type: "armor",
    category: "belt",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 50, weight: 2, tags: ["armor", "belt", "mercenary"] }
  },

  // ---------- RARE (5) ----------
  {
    key: "storm-belt",
    label: "Ceinture de Tempête",
    description: "Vibre d’une énergie statique, légère mais étrangement chaude.",
    type: "armor",
    category: "belt",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 250, weight: 1, tags: ["armor", "belt", "storm", "magic"] }
  },
  {
    key: "warden-belt",
    label: "Ceinture du Gardien",
    description: "Renforcée de plaques gravées. Protection stable pour les défenseurs.",
    type: "armor",
    category: "belt",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 300, weight: 2, tags: ["armor", "belt", "guardian"] }
  },
  {
    key: "shadow-belt",
    label: "Ceinture de l’Ombre",
    description: "Tissu sombre absorbant la lumière, prisé des assassins.",
    type: "armor",
    category: "belt",
    subtype: "rare",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 280, weight: 0.5, tags: ["armor", "belt", "stealth", "shadow"] }
  },
  {
    key: "runic-belt",
    label: "Ceinture Runique",
    description: "Gravée de runes anciennes, renforçant le centre du corps.",
    type: "armor",
    category: "belt",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 320, weight: 1, tags: ["armor", "belt", "runic"] }
  },
  {
    key: "phoenix-belt",
    label: "Ceinture du Phénix",
    description: "Souple, chaude au toucher, ornée de plumes rougeoyantes.",
    type: "armor",
    category: "belt",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 400, weight: 1, tags: ["armor", "belt", "fire", "phoenix"] }
  }
];
