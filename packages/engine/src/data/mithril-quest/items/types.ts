// @ts-nocheck
// lib/s2s/fantasy/items/types.ts

export type ItemRarity = "common" | "uncommon" | "rare" | "very-rare" | "legendary";

export type DamageType =
  | "slashing"
  | "piercing"
  | "bludgeoning"
  | "fire"
  | "cold"
  | "lightning"
  | "necrotic"
  | "radiant"
  | "poison"
  | "psychic";

export interface BaseItem {
  key: string;
  label: string;
  description: string;
  rarity: ItemRarity;
  value: number;   // en pièces d'or (conversion possible plus tard)
  weight?: number; // en kg ou unité arbitraire
  tags?: string[]; // "weapon", "light", "ranged", "holy", "cursed"...
}

export interface Weapon extends BaseItem {
  type: "weapon";
  handed: "one-handed" | "two-handed" | "versatile";
  damage: string;      // "1d6", "2d4+2", etc.
  damageType: DamageType;
  range?: string;      // "corps-à-corps", "9m", etc.
  properties?: string[]; // "finesse", "lancer", "lourd", etc.
}

export interface Armor extends BaseItem {
  type: "armor";
  armorType: "light" | "medium" | "heavy" | "shield";
  armorClass: number;
  maxDexBonus?: number | null; // null = illimité
  penaltyStealth?: boolean;
}

export interface Gear extends BaseItem {
  type: "gear";
}

export interface Consumable extends BaseItem {
  type: "consumable";
  effect: string;        // texte libre
  uses: number;          // nb d’utilisations
}

export interface Artifact extends BaseItem {
  type: "artifact";
  attunement?: boolean;  // nécessite harmonisation
  effect: string;
}

export type AnyItem = Weapon | Armor | Gear | Consumable | Artifact;

// --- Mithril Quest aliases (pour les datasets MQ) ---

// Armure générique utilisée par mithril-quest
export type MQItemArmor = Armor;

// Artefact générique utilisée par mithril-quest
export type MQItemArtifact = Artifact;

// Arme générique utilisée par mithril-quest
export type MQWeapon = Weapon;

// Accessoire : petit objet porté (anneau, amulette, etc.)
export interface MQAccessory extends BaseItem {
  type: "accessory";
  slot: string; // "ring", "amulet", "belt", etc.
}
