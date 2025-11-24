// ===============================================
// S2S FANTASY SPELLS - TYPES DE BASE
// (Utilisé par schema.ts + toutes les sources)
// ===============================================

// Si tu veux ajouter Galactic Saga plus tard,
// le WorldId est déjà extensible
export type WorldId =
  | "fantasy"
  | "pathseeker"
  | "draknight"
  | "galactic-saga"
  | "custom";

// ------------------------------------------------
// TIERS
// ------------------------------------------------

export type SpellTier =
  | "tier0"
  | "tier1"
  | "tier2"
  | "tier3"
  | "tier4"
  | "tier5"
  | "tier6"
  | "tier7"
  | "tier8";

// ------------------------------------------------
// VERBAL / SOMATIC / MATERIAL
// ------------------------------------------------
export interface SpellComponents {
  verbal: boolean;
  somatic: boolean;
  material?: string; // ex: "poudre d'argent"
}

// ------------------------------------------------
// CASTING TIME
// ------------------------------------------------
export type CastingTimeId =
  | "action"
  | "bonus"
  | "reaction"
  | "minute"
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
  | "radius";

export interface SpellRange {
  type: SpellRangeType;
  value?: string; // ex: "18m", "ligne 18m", "rayon 6m"
}

// ------------------------------------------------
// SCALING
// ------------------------------------------------

export interface SpellScaling {
  upcast?: string; // ex: "+1d6 dégâts par tier"
  tierNotes?: Record<SpellTier, string | undefined>;
}

// ------------------------------------------------
// TAGS (fonction du sort)
// ------------------------------------------------
export type SpellTagId =
  | "damage"
  | "damage-fire"
  | "damage-cold"
  | "damage-lightning"
  | "damage-radiant"
  | "damage-necrotic"
  | "buff-offense"
  | "buff-defense"
  | "buff-utility"
  | "control"
  | "summon"
  | "heal"
  | "cure"
  | "fear"
  | "charm"
  | "push"
  | "pull"
  | "area"
  | "single-target"
  | "multi-target";

// ------------------------------------------------
// SCHOOLS (écoles de magie S2S Fantasy)
// ------------------------------------------------

export type SpellSchoolId =
  | "pyromancy"
  | "stormcalling"
  | "aquamancy"
  | "geomancy"
  | "lunamancy"
  | "chronomancy"
  | "bloodmancy"
  | "arcanism"
  | "wildgrowth";

// ------------------------------------------------
// SPELL (définition d’un sort S2S)
// ------------------------------------------------

export interface Spell {
  key: string;
  name: string;
  world: WorldId;

  tier: SpellTier;
  school: SpellSchoolId;

  castingTime: CastingTimeId;

  range: SpellRange;

  components: SpellComponents;

  tags: SpellTagId[];

  duration: string;          // "instantané", "1 minute", "concentration 10 min"
  concentration: boolean;

  description: string;       // description longue
  short?: string;            // courte phrase pitch du sort

  scaling?: SpellScaling;

  visualCue?: string;        // ex: "flammes bleues", "aura violette"
  fxCue?: string;            // ex: "étincelles électriques"
}
