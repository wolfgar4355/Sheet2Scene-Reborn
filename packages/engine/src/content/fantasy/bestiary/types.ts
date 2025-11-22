// /lib/s2s/fantasy/bestiary/types.ts
// =========================================================
// S2S BESTIARY — TYPES CANONIQUES
// =========================================================

// ---------------------------------------------------------
// BASE TYPES
// ---------------------------------------------------------
export type CreatureSize =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "gargantuan";

export type CreatureType =
  | "beast"
  | "humanoid"
  | "construct"
  | "elemental"
  | "undead"
  | "dragon"
  | "fiend"
  | "celestial"
  | "fey"
  | "aberration";

// ---------------------------------------------------------
// STATBLOCK
// ---------------------------------------------------------
export interface StatBlock {
  hitPoints: number;
  armorClass: number;
  speed: number | string;
  abilities: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
}

// ---------------------------------------------------------
// ATTACKS & TRAITS
// ---------------------------------------------------------
export interface AttackAction {
  key: string;
  label: string;
  toHit: number;
  damage: string;    // "2d8+3 slashing"
  type: string;      // "slashing" | "fire" | "necrotic" etc.
  description?: string;
}

export interface Trait {
  key: string;
  label: string;
  description: string;
}

// ---------------------------------------------------------
// OPTIONAL FACTION SYSTEM
// ---------------------------------------------------------
export type FactionTag =
  | "neutral"
  | "wild"
  | "corrupted"
  | "arcane"
  | "undead"
  | "demonic"
  | "celestial"
  | "fey"
  | "tribal"
  | "royalty"
  | "none"; // default safe

// ---------------------------------------------------------
// CANONICAL MONSTER DEFINITION
// ---------------------------------------------------------
export interface MonsterDefinition {
  key: string;         // ex: "fire-wymling"
  name: string;        // ex: "Dragon de Feu Wymling"
  label?: string;      // optional UI alias

  type: CreatureType;
  size: CreatureSize;

  challenge: number;   // CR
  habitat: string[];   // ex: ["forest", "ruins"]
  era?: string[];      // optional time periods

  statBlock: StatBlock;
  attacks: AttackAction[];
  traits: Trait[];

  lootTable?: string[];
  faction?: FactionTag;
}
