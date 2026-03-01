// @ts-nocheck
import type { MQItemArmor } from "../types";

export const MQ_ITEMS_ARMORS_GREAVES: MQItemArmor[] = [
  // ---------------------------------------------------------
  // 🟦 COMMUN (10)
  // ---------------------------------------------------------
  {
    key: "cloth-legwraps",
    label: "Cloth Legwraps",
    description: "Bandages légers utilisés pour un minimum de protection.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 0 },
    metadata: { rarity: "common", value: 2, weight: 0.2, tags: ["legs", "light"] }
  },
  {
    key: "leather-greaves",
    label: "Leather Greaves",
    description: "Jambières en cuir renforcé, polyvalentes et abordables.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 8, weight: 1, tags: ["legs", "light"] }
  },
  {
    key: "scout-legguards",
    label: "Scout Legguards",
    description: "Jambières légères pour les éclaireurs et chasseurs.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 12, weight: 1, tags: ["legs", "stealth"] }
  },
  {
    key: "studded-greaves",
    label: "Studded Greaves",
    description: "Cuir renforcé par des clous métalliques.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 15, weight: 1.5, tags: ["legs"] }
  },
  {
    key: "chain-greaves",
    label: "Chain Greaves",
    description: "Jambières en mailles protectrices.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 2 },
    metadata: { rarity: "common", value: 20, weight: 3, tags: ["legs", "chain"] }
  },
  {
    key: "iron-greaves",
    label: "Iron Greaves",
    description: "Protection standard en fer utilisées par les soldats.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 2 },
    metadata: { rarity: "common", value: 25, weight: 4, tags: ["legs", "metal"] }
  },
  {
    key: "ranger-leggings",
    label: "Ranger Leggings",
    description: "Jambières flexibles permettant une grande mobilité.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 10, weight: 1, tags: ["legs", "ranger"] }
  },
  {
    key: "winter-greaves",
    label: "Winter Greaves",
    description: "Jambières isolées contre le froid intense.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 14, weight: 1.2, tags: ["legs", "cold"] }
  },
  {
    key: "worker-legguards",
    label: "Worker Legguards",
    description: "Protection robuste utilisée par les mineurs et artisans.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 2 },
    metadata: { rarity: "common", value: 18, weight: 2.5, tags: ["legs", "craft"] }
  },
  {
    key: "militia-greaves",
    label: "Militia Greaves",
    description: "Équipement standard des forces locales et débutants.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 2 },
    metadata: { rarity: "common", value: 22, weight: 3, tags: ["legs", "metal"] }
  },

  // ---------------------------------------------------------
  // 🟪 RARE (5)
  // ---------------------------------------------------------
  {
    key: "dragonbone-greaves",
    label: "Dragonbone Greaves",
    description: "Forgées à partir d’os draconiques durcis par la magie.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 600, weight: 3, tags: ["legs", "dragon", "magic"] }
  },
  {
    key: "obsidian-legguards",
    label: "Obsidian Legguards",
    description: "Jambières sombres taillées dans une obsidienne étrange.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 550, weight: 2.5, tags: ["legs", "dark", "cursed"] }
  },
  {
    key: "celestial-greaves",
    label: "Celestial Greaves",
    description: "Équipement béni émettant une chaleur douce et protectrice.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 750, weight: 2, tags: ["legs", "radiant", "holy"] }
  },
  {
    key: "stormstride-greaves",
    label: "Stormstride Greaves",
    description: "Chargées d’énergie orageuse, elles améliorent la rapidité.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 700, weight: 2.5, tags: ["legs", "thunder"] }
  },
  {
    key: "infernal-greaves",
    label: "Infernal Greaves",
    description: "Infusées d’un feu infernal brûlant d’un rouge inquiétant.",
    type: "armor",
    category: "greaves",
    rpg: { armorClass: 4 },
    metadata: { rarity: "rare", value: 900, weight: 3.5, tags: ["legs", "fire", "demon"] }
  }
];
