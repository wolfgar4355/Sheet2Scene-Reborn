// @ts-nocheck
// ============================================================================
//  ITEMS METADATA — MQ ENGINE
//  Auto-métadonnées pour TOUS les items du système Mithril-Quest
//  Rareté, tags, types, poids, UI, époques, harmonisation, etc.
// ============================================================================

export type MQRarity =
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary"
  | "mythic";

export interface MQItemMetadata {
  rarity: MQRarity;
  weight: "light" | "medium" | "heavy" | "none";
  attunement?: boolean;
  tags: string[];
  uiIcon: string;               
  color: string;                
  eras: string[];               
  damageType?: string;
  armorType?: string;
  consumableType?: string;
  craftingMaterials?: string[];
}

// ============================================================================
//  TABLE DE METADATA PAR CATÉGORIE D’ITEMS
//  (Valable pour toute la génération automatique d’items MQ)
// ============================================================================

export const ITEM_CATEGORY_METADATA: Record<string, Partial<MQItemMetadata>> = {
  armors: {
    weight: "medium",
    rarity: "common",
    armorType: "standard",
    tags: ["armor", "defense"],
    uiIcon: "🛡️",
    color: "#6fa8dc",
    eras: ["fantasy", "dark-age", "mq"],
  },

  weapons: {
    weight: "medium",
    rarity: "common",
    damageType: "physical",
    tags: ["weapon", "combat"],
    uiIcon: "⚔️",
    color: "#e06666",
    eras: ["fantasy", "mq", "dark-age"],
  },

  consumables: {
    weight: "none",
    rarity: "common",
    consumableType: "potion",
    tags: ["consumable"],
    uiIcon: "🧪",
    color: "#93c47d",
    eras: ["fantasy", "mq"],
  },

  scrolls: {
    weight: "none",
    rarity: "uncommon",
    consumableType: "scroll",
    tags: ["magic", "scroll"],
    uiIcon: "📜",
    color: "#ffd966",
    eras: ["fantasy", "arcane", "mq"],
  },

  artifacts: {
    weight: "light",
    rarity: "legendary",
    attunement: true,
    tags: ["artifact", "unique", "legendary"],
    uiIcon: "💠",
    color: "#b4a7d6",
    eras: ["mq", "ancient", "cosmic"],
  },

  ingredients: {
    weight: "none",
    rarity: "common",
    tags: ["craft", "material"],
    uiIcon: "🌿",
    color: "#6aa84f",
    eras: ["any"],
  },

  gear: {
    weight: "light",
    rarity: "common",
    tags: ["utility"],
    uiIcon: "🎒",
    color: "#c27ba0",
    eras: ["any"],
  },

  tools: {
    weight: "light",
    rarity: "common",
    tags: ["tool"],
    uiIcon: "🧰",
    color: "#d9d9d9",
    eras: ["any"],
  },

  exotic: {
    rarity: "epic",
    weight: "light",
    tags: ["exotic", "rare"],
    uiIcon: "🔥",
    color: "#ff9900",
    eras: ["mq", "fantasy", "otherworld"],
  },
};

// ============================================================================
//  Fonction utilitaire pour obtenir les métadonnées d’un item
// ============================================================================
export function getItemMetadata(category: string): MQItemMetadata {
  const base = ITEM_CATEGORY_METADATA[category] ?? {};

  return {
    rarity: base.rarity ?? "common",
    weight: base.weight ?? "light",
    attunement: base.attunement ?? false,
    tags: base.tags ?? [],
    craftingMaterials: base.craftingMaterials ?? [],
    uiIcon: base.uiIcon ?? "📦",
    color: base.color ?? "#ffffff",
    eras: base.eras ?? ["any"],
    damageType: base.damageType,
    armorType: base.armorType,
    consumableType: base.consumableType,
  };
}
