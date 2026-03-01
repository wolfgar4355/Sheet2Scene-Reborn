// @ts-nocheck
import type { MQItemArmor } from "../types";

export const MQ_ITEMS_ARMORS_CHESTPLATES: MQItemArmor[] = [
  // ---------------------------------------------------------
  // 🟦 COMMUN (10)
  // ---------------------------------------------------------
  {
    key: "padded-vest",
    label: "Padded Vest",
    description: "Un gilet rembourré offrant une protection minimale mais confortable.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 10 },
    metadata: { rarity: "common", value: 10, weight: 2, tags: ["chest", "light"] }
  },
  {
    key: "leather-armor",
    label: "Leather Armor",
    description: "Armure de cuir flexible, populaire chez les éclaireurs et les rôdeurs.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 11 },
    metadata: { rarity: "common", value: 25, weight: 4, tags: ["chest", "light"] }
  },
  {
    key: "hide-armor",
    label: "Hide Armor",
    description: "Armure rustique faite de peaux épaisses et de fourrures.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 12 },
    metadata: { rarity: "common", value: 30, weight: 6, tags: ["chest"] }
  },
  {
    key: "studded-leather",
    label: "Studded Leather",
    description: "Cuir renforcé de clous métalliques pour une meilleure protection.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 12 },
    metadata: { rarity: "common", value: 45, weight: 6, tags: ["chest", "light"] }
  },
  {
    key: "bronze-breastplate",
    label: "Bronze Breastplate",
    description: "Ancienne armure de bronze, simple mais étonnamment robuste.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 13 },
    metadata: { rarity: "common", value: 55, weight: 8, tags: ["chest", "metal"] }
  },
  {
    key: "chainshirt",
    label: "Chainshirt",
    description: "Chemise de mailles protégeant efficacement le torse sans trop gêner.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 13 },
    metadata: { rarity: "common", value: 75, weight: 10, tags: ["chest", "chain"] }
  },
  {
    key: "iron-cuirass",
    label: "Iron Cuirass",
    description: "Cuirasse en fer martelé couramment portée par les gardes.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 14 },
    metadata: { rarity: "common", value: 90, weight: 12, tags: ["chest", "metal"] }
  },
  {
    key: "scale-mail",
    label: "Scale Mail",
    description: "Armure d’écailles métalliques offrant une bonne protection générale.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 14 },
    metadata: { rarity: "common", value: 85, weight: 14, tags: ["chest", "metal"] }
  },
  {
    key: "ranger-tunic",
    label: "Ranger Tunic",
    description: "Tunique renforcée favorisant la discrétion et la mobilité.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 12 },
    metadata: { rarity: "common", value: 40, weight: 3, tags: ["chest", "light"] }
  },
  {
    key: "soldier-breastplate",
    label: "Soldier Breastplate",
    description: "Armure standard des patrouilles royales.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 15 },
    metadata: { rarity: "common", value: 120, weight: 14, tags: ["chest", "metal"] }
  },

  // ---------------------------------------------------------
  // 🟪 RARE (5)
  // ---------------------------------------------------------
  {
    key: "dragon-scale-cuirass",
    label: "Dragon Scale Cuirass",
    description: "Cuirasse forgée à partir d’écailles de dragon, quasi indestructible.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 17 },
    metadata: { rarity: "rare", value: 850, weight: 10, tags: ["chest", "dragon"] }
  },
  {
    key: "obsidian-chestguard",
    label: "Obsidian Chestguard",
    description: "Armure sombre taillée dans une obsidienne vibrante et maudite.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 16 },
    metadata: { rarity: "rare", value: 900, weight: 12, tags: ["chest", "dark"] }
  },
  {
    key: "celestial-breastplate",
    label: "Celestial Breastplate",
    description: "Cuirasse bénie irradiant une douce aura lumineuse.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 16 },
    metadata: { rarity: "rare", value: 1000, weight: 8, tags: ["chest", "holy", "radiant"] }
  },
  {
    key: "stormforged-cuirass",
    label: "Stormforged Cuirass",
    description: "Armure martelée dans un métal chargé d’énergie orageuse.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 16 },
    metadata: { rarity: "rare", value: 950, weight: 9, tags: ["chest", "thunder"] }
  },
  {
    key: "infernal-plate",
    label: "Infernal Plate",
    description: "Plastron corrompu par les flammes d’un plan démoniaque.",
    type: "armor",
    category: "chestplate",
    rpg: { armorClass: 17 },
    metadata: { rarity: "rare", value: 1200, weight: 14, tags: ["chest", "fire", "demon"] }
  }
];
