// @ts-nocheck
// ============================================================================
// MITHRIL-QUEST — CORE TYPES
// ============================================================================

//
// ─────────────────────────────────────────────────────────────
// 1) ERAS DU MONDE
// ─────────────────────────────────────────────────────────────
//

export const ERAS = [
  "ancient-age",
  "age-of-heroes",
  "dark-age",
  "high-kingdoms",
  "arcane-renaissance",
  "mystic-age",
] as const;

export type Era = typeof ERAS[number];

//
// ─────────────────────────────────────────────────────────────
// 2) MAGIC — Schools, Ranges, Components, Casting
// ─────────────────────────────────────────────────────────────
//

// School of Magic
export const SPELL_SCHOOLS = [
  "abjuration",
  "conjuration",
  "divination",
  "enchantment",
  "evocation",
  "illusion",
  "necromancy",
  "transmutation",

  // MQ BONUS — Écoles spéciales
  "spirit",
  "primal",
  "astral",
] as const;

export type SpellSchool = typeof SPELL_SCHOOLS[number];

// Ranges
export const SPELL_RANGES = [
  "self",
  "touch",
  "cone",
  "line",
  "ray",
  "sphere",
  "area",
  "multi-target",

  // MQ BONUS
  "aura",
  "sight",
] as const;

export type SpellRangeType = typeof SPELL_RANGES[number];

// Components
export interface SpellComponents {
  verbal: boolean;
  somatic: boolean;
  material?: string;
}

// Casting Time
export type SpellCasting =
  | "action"
  | "bonus-action"
  | "reaction"
  | "ritual"
  | "instant";

//
// ─────────────────────────────────────────────────────────────
// 3) SPELL BASE
// ─────────────────────────────────────────────────────────────
//

export interface Spell {
  id: string;
  name: string;
  level: number;
  school: SpellSchool;
  description: string;

  range?: {
    type: SpellRangeType;
    value?: string;
    target?: string;
  };

  components: SpellComponents;

  casting: SpellCasting;

  duration: string;
  cooldown?: string;
}

//
// ─────────────────────────────────────────────────────────────
// 4) BESTIARY — Monster Definition
// ─────────────────────────────────────────────────────────────
//

export interface Monster {
  id: string;
  name: string;

  type: string;      // humanoid, beast, construct, undead...
  subType?: string;  // demon, golem, spirit...
  cr: number;
  size: "tiny" | "small" | "medium" | "large" | "huge" | "gargantuan";
  alignment?: string;

  hp: number;
  ac: number;

  stats: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };

  abilities?: Record<string, string>;
  actions?: Record<string, string>;
  traits?: Record<string, string>;
}

//
// ─────────────────────────────────────────────────────────────
// 5) ENCOUNTER TABLE ENTRY
// ─────────────────────────────────────────────────────────────
//

export interface EncounterTableEntry {
  key: string;
  weight: number;
}

//
// ─────────────────────────────────────────────────────────────
// 6) PLAYER ROLES (Class Archetypes)
// ─────────────────────────────────────────────────────────────
//

export interface Role {
  id: string;
  label: string;
  hitDice: string;
  primaryStat: string;
  saves: string[];
}

//
// ─────────────────────────────────────────────────────────────
// 7) RITUALS
// ─────────────────────────────────────────────────────────────
//

export interface Ritual {
  id: string;
  name: string;
  circle: number;
  description: string;
  duration: string;
  cost?: string;
  component?: string;
}

//
// ─────────────────────────────────────────────────────────────
// 8) FACTIONS
// ─────────────────────────────────────────────────────────────
//

export interface Faction {
  id: string;
  label: string;
  description?: string;
}

//
// ─────────────────────────────────────────────────────────────
// 9) WORLD-BUILDER FILES (GM Tools)
// ─────────────────────────────────────────────────────────────
//

export interface GMFile {
  id: string;
  type: string;   // map, lore, npc, quest, timeline...
  name: string;
  content: any;
}

export type GMData = Record<string, GMFile>;
