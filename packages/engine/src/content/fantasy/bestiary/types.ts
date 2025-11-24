// ============================================================================
// S2S BESTIARY — TYPES CANONIQUES
// ============================================================================

// ---------------------------------------------------------------------------
// BASE TYPES
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// STATBLOCK
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// ATTACKS & TRAITS
// ---------------------------------------------------------------------------
export interface AttackAction {
  key: string;
  label: string;
  iohlt: number; // "to-hit"
  damage: string; // ex: "2d8+3 slashing"
  type: string; // "slashing" | "fire" | "necrotic" | etc.
  description: string;
}

export interface Trait {
  key: string;
  label: string;
  description: string;
}

// ---------------------------------------------------------------------------
// OPTIONAL FACTION TAGS
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// MONSTER DEFINITION (canonical internal source of truth)
// ---------------------------------------------------------------------------
export interface MonsterDefinition {
  key: string; // ex: "fire-wyrmling"
  label?: string; // optional UI alias

  type: CreatureType;
  size: CreatureSize;

  challenge: number; // CR
  habitat: string[]; // ex: ["forest", "ruins"]
  era?: string[]; // optional eras like ["ancient", "mythic"]

  statBlock: StatBlock;
  attacks: AttackAction[];
  traits: Trait[];

  lootTable?: string[];
  faction?: FactionTag;
}

// ---------------------------------------------------------------------------
// ENCOUNTER TABLE ENTRY (used by encounter tables)
// Must be **compatible** with MonsterDefinition
// ---------------------------------------------------------------------------
export interface EncounterTableEntry {
  key: string;       // monster key reference
  weight: number;    // spawn weight
  min?: number;      // optional min quantity
  max?: number;      // optional max quantity
}
