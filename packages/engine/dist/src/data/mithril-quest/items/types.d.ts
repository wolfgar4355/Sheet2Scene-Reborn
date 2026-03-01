export type ItemRarity = "common" | "uncommon" | "rare" | "very-rare" | "legendary";
export type DamageType = "slashing" | "piercing" | "bludgeoning" | "fire" | "cold" | "lightning" | "necrotic" | "radiant" | "poison" | "psychic";
export interface BaseItem {
    key: string;
    label: string;
    description: string;
    rarity: ItemRarity;
    value: number;
    weight?: number;
    tags?: string[];
}
export interface Weapon extends BaseItem {
    type: "weapon";
    handed: "one-handed" | "two-handed" | "versatile";
    damage: string;
    damageType: DamageType;
    range?: string;
    properties?: string[];
}
export interface Armor extends BaseItem {
    type: "armor";
    armorType: "light" | "medium" | "heavy" | "shield";
    armorClass: number;
    maxDexBonus?: number | null;
    penaltyStealth?: boolean;
}
export interface Gear extends BaseItem {
    type: "gear";
}
export interface Consumable extends BaseItem {
    type: "consumable";
    effect: string;
    uses: number;
}
export interface Artifact extends BaseItem {
    type: "artifact";
    attunement?: boolean;
    effect: string;
}
export type AnyItem = Weapon | Armor | Gear | Consumable | Artifact;
export type MQItemArmor = Armor;
export type MQItemArtifact = Artifact;
export type MQWeapon = Weapon;
export interface MQAccessory extends BaseItem {
    type: "accessory";
    slot: string;
}
