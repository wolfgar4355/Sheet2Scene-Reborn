// @ts-nocheck
m
// ===============================================
// S2S — TYPES DE BASE MITHRIL-QUEST
// ===============================================

// Monde unique du système MQ
export type WorldId = "mithril-quest";

// Ères du monde Mithril-Quest
export type EraId =
  | "ancient-age"
  | "age-of-heroes"
  | "dark-age"
  | "high-kingdoms"
  | "arcane-renaissance"
  | "mythic-age";

// ------------------------------------------------
// TIERS
// ------------------------------------------------

export type SpellTier =
  | "cantrip"
  | "tier1"
  | "tier2"
  | "tier3"
  | "tier4"
  | "tier5"
  | "tier6"
  | "tier7"
  | "tier8"
  | "tier9";

// ------------------------------------------------
// COMPOSANTS
// ------------------------------------------------

export interface SpellComponents {
  verbal: boolean;
  somatic: boolean;
  material?: string;
}

// ------------------------------------------------
// CASTING TIME
// ------------------------------------------------

export type CastingTimeId =
  | "action"
  | "bonus-action"
  | "reaction"
  | "minute"
  | "ten-minutes"
  | "hour"
  | "ritual";

// ------------------------------------------------
// RANGE
// ------------------------------------------------

export type SpellRangeType =
  | "self"
  | "touch"
  | "cone"
  | "line"
  | "sphere"
  | "cube"
  | "radius"
  | "special";

export interface SpellRange {
  type: SpellRangeType;
  value: string;
}

// ------------------------------------------------
// SCALING
// ------------------------------------------------

export interface SpellScaling {
  upcastText?: string;
  tierNotes?: Record<SpellTier, string | undefined>;
}

// ------------------------------------------------
// TAGS
// ------------------------------------------------

export type SpellTagId =
  | "damage"
  | "damage-fire"
  | "damage-cold"
  | "damage-lightning"
  | "damage-radiant"
  | "damage-necrotic"
  | "heal"
  | "buff-offense"
  | "buff-defense"
  | "buff-utility"
  | "control"
  | "summon"
  | "movement"
  | "teleport"
  | "vision"
  | "debuff"
  | "charm"
  | "fear"
  | "ritual"
  | "area-large"
  | "single-target"
  | "multi-target";

// ------------------------------------------------
// ÉCOLES DE MAGIE
// ------------------------------------------------

export type SpellSchoolId =
  | "pyromancy"
  | "frostbinding"
  | "stormcalling"
  | "terraforge"
  | "aethercraft"
  | "vitae"
  | "umbramancy"
  | "mindweave"
  | "spiritbond"
  | "wildgrowth";

// ------------------------------------------------
// STRUCTURE DU SORT
// ------------------------------------------------

export interface Spell {
  key: string;
  name: string;

  world: WorldId;                  // tjrs "mithril-quest"

  tier: SpellTier;
  school: SpellSchoolId;

  castingTime: CastingTimeId;
  range: SpellRange;

  duration: string;
  concentration: boolean;

  components: SpellComponents;

  tags: SpellTagId[];
  availableInEras: EraId[];

  shortSummary: string;
  description: string;

  scaling?: SpellScaling;

  visualCue?: string;
  sfxCue?: string;
}
