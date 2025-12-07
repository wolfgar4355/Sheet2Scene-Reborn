// @ts-nocheck
import type { MQItemArmor } from "../types";

export const MQ_ITEMS_ARMORS_GAUNTLETS: MQItemArmor[] = [
  // ---------------------------------------------------------
  // 🟦 COMMUN (10)
  // ---------------------------------------------------------
  {
    key: "cloth-gloves",
    label: "Cloth Gloves",
    description: "De simples gants en tissu, offrant une protection minimale.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 0 },
    metadata: { rarity: "common", value: 2, weight: 0.2, tags: ["hands", "light"] }
  },
  {
    key: "leather-gloves",
    label: "Leather Gloves",
    description: "Gants en cuir souple, améliorant la prise et la précision.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 0 },
    metadata: { rarity: "common", value: 5, weight: 0.5, tags: ["hands", "light"] }
  },
  {
    key: "studded-gloves",
    label: "Studded Gloves",
    description: "Gants de cuir renforcés de petits clous métalliques.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 12, weight: 1, tags: ["hands"] }
  },
  {
    key: "hunter-gauntlets",
    label: "Hunter Gauntlets",
    description: "Gants robustes utilisés pour le tir à l’arc et la chasse.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 10, weight: 0.8, tags: ["hands", "ranger"] }
  },
  {
    key: "chain-gloves",
    label: "Chain Gloves",
    description: "Gants de mailles protégeant les doigts et le poignet.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 18, weight: 2, tags: ["hands", "chain"] }
  },
  {
    key: "iron-gauntlets",
    label: "Iron Gauntlets",
    description: "Gantelets de fer standard, utilisés par les soldats.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 2 },
    metadata: { rarity: "common", value: 25, weight: 3, tags: ["hands", "metal"] }
  },
  {
    key: "worker-gauntlets",
    label: "Worker Gauntlets",
    description: "Gants épais conçus pour les artisans et mineurs.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 15, weight: 1.5, tags: ["hands", "craft"] }
  },
  {
    key: "scout-gloves",
    label: "Scout Gloves",
    description: "Gants légers améliorant la prise et la discrétion.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 8, weight: 0.3, tags: ["hands", "stealth"] }
  },
  {
    key: "frost-lined-gloves",
    label: "Frost-Lined Gloves",
    description: "Gants isolés conçus pour le climat glacial.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 1 },
    metadata: { rarity: "common", value: 12, weight: 0.6, tags: ["hands", "cold"] }
  },
  {
    key: "soldier-gauntlets",
    label: "Soldier Gauntlets",
    description: "Protection standard des troupes régulières.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 2 },
    metadata: { rarity: "common", value: 30, weight: 3, tags: ["hands", "metal"] }
  },

  // ---------------------------------------------------------
  // 🟪 RARE (5)
  // ---------------------------------------------------------
  {
    key: "dragonclaw-gauntlets",
    label: "Dragonclaw Gauntlets",
    description: "Forgés avec des fragments d'écailles draconiques.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 600, weight: 2, tags: ["hands", "dragon", "magic"] }
  },
  {
    key: "obsidian-grips",
    label: "Obsidian Grips",
    description: "Gants sombres résonnant d’une énergie abyssale.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 550, weight: 2.5, tags: ["hands", "dark", "cursed"] }
  },
  {
    key: "celestial-hands",
    label: "Celestial Hands",
    description: "Gantelets bénis irradiant une douce aura protectrice.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 750, weight: 1.5, tags: ["hands", "holy", "radiant"] }
  },
  {
    key: "stormbind-gauntlets",
    label: "Stormbind Gauntlets",
    description: "Chargés d’énergie orageuse, ils crépitent à chaque mouvement.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 3 },
    metadata: { rarity: "rare", value: 700, weight: 2, tags: ["hands", "thunder"] }
  },
  {
    key: "infernal-gauntlets",
    label: "Infernal Gauntlets",
    description: "Gantelets brûlants infusés d’un feu démoniaque.",
    type: "armor",
    category: "gauntlets",
    rpg: { armorClass: 4 },
    metadata: { rarity: "rare", value: 900, weight: 3, tags: ["hands", "fire", "demon"] }
  }
];
