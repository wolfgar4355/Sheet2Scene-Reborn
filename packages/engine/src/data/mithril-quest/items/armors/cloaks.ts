// @ts-nocheck
import type { MQItemArmor } from "../types";

export const MQ_ITEMS_ARMORS_CLOAKS: MQItemArmor[] = [
  // ---------- COMMON (10) ----------
  {
    key: "traveler-cloak",
    label: "Cape du Voyageur",
    description: "Cape épaisse, résistante aux intempéries. Très répandue chez les aventuriers.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 35, weight: 2, tags: ["armor", "cloak", "travel"] }
  },
  {
    key: "scout-cloak",
    label: "Cape d'Éclaireur",
    description: "Légère et flexible, conçue pour se déplacer discrètement dans la nature.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 40, weight: 1, tags: ["armor", "cloak", "scout"] }
  },
  {
    key: "wool-cloak",
    label: "Cape de Laine",
    description: "Cape simple mais chaude, idéale pour les régions froides.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 30, weight: 2, tags: ["armor", "cloak", "cold"] }
  },
  {
    key: "linen-cloak",
    label: "Cape de Lin",
    description: "Cape légère souvent portée dans les régions chaudes.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 20, weight: 1, tags: ["armor", "cloak", "light"] }
  },
  {
    key: "forest-cloak",
    label: "Cape Forestière",
    description: "Cape verte conçue pour se fondre dans les forêts et broussailles.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 38, weight: 1, tags: ["armor", "cloak", "forest"] }
  },
  {
    key: "dust-cloak",
    label: "Cape de Poussière",
    description: "Couvre tout le corps pour protéger du sable et du vent.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 35, weight: 1, tags: ["armor", "cloak", "desert"] }
  },
  {
    key: "pilgrim-cloak",
    label: "Cape du Pèlerin",
    description: "Cape robuste portée par ceux qui voyagent sur de longues distances.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 32, weight: 2, tags: ["armor", "cloak", "pilgrim"] }
  },
  {
    key: "rider-cloak",
    label: "Cape du Cavalier",
    description: "Conçue pour ne pas gêner le mouvement en selle.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 28, weight: 1, tags: ["armor", "cloak", "rider"] }
  },
  {
    key: "harbor-cloak",
    label: "Cape des Ports",
    description: "Cape imperméable utilisée par les marins et pêcheurs.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 33, weight: 2, tags: ["armor", "cloak", "water"] }
  },
  {
    key: "nomad-cloak",
    label: "Cape du Nomade",
    description: "Cape ample permettant de se protéger du soleil et des tempêtes.",
    type: "armor",
    category: "cloak",
    subtype: "common",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "common", value: 38, weight: 2, tags: ["armor", "cloak", "nomad"] }
  },

  // ---------- RARE (5) ----------
  {
    key: "shadow-cloak",
    label: "Cape de l’Ombre",
    description: "Tissu sombre absorbant la lumière, prisé des espions et assassins.",
    type: "armor",
    category: "cloak",
    subtype: "rare",
    rpg: { armorClass: 0, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 260, weight: 1, tags: ["armor", "cloak", "stealth", "shadow"] }
  },
  {
    key: "warden-cloak",
    label: "Cape du Gardien",
    description: "Cape robuste ornée de broderies représentant des symboles protecteurs.",
    type: "armor",
    category: "cloak",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 300, weight: 2, tags: ["armor", "cloak", "guardian"] }
  },
  {
    key: "frost-cloak",
    label: "Cape Givrée",
    description: "Sa surface est froide au toucher, conçue pour résister au climat polaire.",
    type: "armor",
    category: "cloak",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 290, weight: 2, tags: ["armor", "cloak", "frost"] }
  },
  {
    key: "druid-cloak",
    label: "Cape du Druide",
    description: "Cape tissée de fibres naturelles, empreinte d’une présence tranquille.",
    type: "armor",
    category: "cloak",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 310, weight: 1, tags: ["armor", "cloak", "nature", "druid"] }
  },
  {
    key: "phoenix-cloak",
    label: "Cape du Phénix",
    description: "Cape flamboyante aux reflets rouges et or, chaude même sous la pluie.",
    type: "armor",
    category: "cloak",
    subtype: "rare",
    rpg: { armorClass: 1, maxDexBonus: null, penaltyStealth: false },
    metadata: { rarity: "rare", value: 420, weight: 1, tags: ["armor", "cloak", "fire", "phoenix"] }
  }
];
