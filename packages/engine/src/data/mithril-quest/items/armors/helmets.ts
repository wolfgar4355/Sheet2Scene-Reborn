// @ts-nocheck
import type { MQItemArmor } from "../types";

export const MQ_ITEMS_ARMORS_HELMETS: MQItemArmor[] = [
  // ---------------------------------------------------------
  // 🟦 COMMUN (10)
  // ---------------------------------------------------------
  {
    key: "leather-cap",
    label: "Leather Cap",
    description: "Un simple bonnet de cuir renforcé offrant une protection minimale.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 10 },
    metadata: { rarity: "common", value: 15, weight: 1, tags: ["helmet", "light"] }
  },
  {
    key: "padded-hood",
    label: "Padded Hood",
    description: "Capuche rembourrée couramment portée par les éclaireurs et archers.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 10 },
    metadata: { rarity: "common", value: 12, weight: 1, tags: ["helmet"] }
  },
  {
    key: "iron-skullcap",
    label: "Iron Skullcap",
    description: "Petit casque de fer couvrant le dessus du crâne.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 11 },
    metadata: { rarity: "common", value: 25, weight: 2, tags: ["helmet", "metal"] }
  },
  {
    key: "round-helm",
    label: "Round Helm",
    description: "Casque rond classique utilisé par la majorité des soldats.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 12 },
    metadata: { rarity: "common", value: 35, weight: 3, tags: ["helmet", "metal"] }
  },
  {
    key: "chain-coif",
    label: "Chain Coif",
    description: "Coiffe de mailles protégeant la tête et le cou.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 12 },
    metadata: { rarity: "common", value: 40, weight: 4, tags: ["helmet", "chain"] }
  },
  {
    key: "soldier-helm",
    label: "Soldier Helm",
    description: "Casque militaire standard avec protège-joues.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 13 },
    metadata: { rarity: "common", value: 45, weight: 3, tags: ["helmet"] }
  },
  {
    key: "reinforced-cap",
    label: "Reinforced Cap",
    description: "Bonnet en cuir renforcé de plaques de métal légères.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 11 },
    metadata: { rarity: "common", value: 30, weight: 2, tags: ["helmet", "hybrid"] }
  },
  {
    key: "iron-visored-helm",
    label: "Iron Visored Helm",
    description: "Casque de fer avec une visière simple protégeant les yeux.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 13 },
    metadata: { rarity: "common", value: 55, weight: 4, tags: ["helmet", "metal"] }
  },
  {
    key: "scout-hood",
    label: "Scout Hood",
    description: "Capuche renforcée utilisée par les éclaireurs pour une bonne visibilité.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 10 },
    metadata: { rarity: "common", value: 18, weight: 1, tags: ["helmet"] }
  },
  {
    key: "steel-cap",
    label: "Steel Cap",
    description: "Version améliorée du skullcap, plus résistante et mieux ajustée.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 13 },
    metadata: { rarity: "common", value: 50, weight: 3, tags: ["helmet", "metal"] }
  },

  // ---------------------------------------------------------
  // 🟪 RARE (5)
  // ---------------------------------------------------------
  {
    key: "dragonbone-helm",
    label: "Dragonbone Helm",
    description: "Casque sculpté dans un fragment d’os draconique, étonnamment léger.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 15 },
    metadata: { rarity: "rare", value: 550, weight: 2, tags: ["helmet", "dragon"] }
  },
  {
    key: "obsidian-mask",
    label: "Obsidian Mask",
    description: "Masque sombre en obsidienne vivante absorbant légèrement la lumière.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 14 },
    metadata: { rarity: "rare", value: 600, weight: 3, tags: ["helmet", "dark"] }
  },
  {
    key: "celestial-crown",
    label: "Celestial Crown",
    description: "Couronne lumineuse bénie par les plans célestes, offrant une protection sacrée.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 14 },
    metadata: { rarity: "rare", value: 700, weight: 1, tags: ["helmet", "holy", "radiant"] }
  },
  {
    key: "ethereal-veil",
    label: "Ethereal Veil",
    description: "Voile astral protégeant la tête avec une barrière magique légère.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 14 },
    metadata: { rarity: "rare", value: 650, weight: 0.5, tags: ["helmet", "arcane"] }
  },
  {
    key: "infernal-horns",
    label: "Infernal Horns",
    description: "Heaume cornu infusé d’énergie démoniaque, intimidant et puissant.",
    type: "armor",
    category: "helmet",
    rpg: { armorClass: 15 },
    metadata: { rarity: "rare", value: 720, weight: 4, tags: ["helmet", "fire", "demon"] }
  }
];
