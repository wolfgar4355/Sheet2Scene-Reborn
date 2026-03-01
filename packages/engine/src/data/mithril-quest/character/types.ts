// @ts-nocheck
// ============================================================================
// 🪄 MITHRIL-QUEST — TYPES DE BASE (SPELL SYSTEM)
// ============================================================================

// Monde unique du système MQ
export type WorldId = "mithril-quest";

// Ères officielles du monde Mithril-Quest
export type EraId =
  | "ancient-age"
  | "age-of-heroes"
  | "dark-age"
  | "high-kingdoms"
  | "arcane-renaissance"
  | "mythic-age";

// ---------------------------------------------------------------------------
// TIERS
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// COMPOSANTS
// ---------------------------------------------------------------------------

export interface SpellComponents {
  verbal: boolean;
  somatic: boolean;
  material?: string;
}

// ---------------------------------------------------------------------------
// CASTING TIME
// ---------------------------------------------------------------------------

export type CastingTimeId =
  | "action"
  | "bonus-action"
  | "reaction"
  | "minute"
  | "ten-minutes"
  | "hour"
  | "ritual";

// ---------------------------------------------------------------------------
// RANGE
// ---------------------------------------------------------------------------

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
  value: string;      // ex: "9m", "18m", "cône 9m"
}

// ---------------------------------------------------------------------------
// SCALING
// ---------------------------------------------------------------------------

export interface SpellScaling {
  upcastText?: string;                                 // texte libre
  tierNotes?: Record<SpellTier, string | undefined>;   // notes par tier
}

// ---------------------------------------------------------------------------
// TAGS
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// ÉCOLES OFFICIELLES MITHRIL-QUEST
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// STRUCTURE COMPLETE D’UN SORT MITHRIL-QUEST
// ---------------------------------------------------------------------------

export interface Spell {
  key: string;
  name: string;

  world: WorldId;               // toujours "mithril-quest"

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

  // Options visuelles / SFX
  visualCue?: string;
  sfxCue?: string;
}
