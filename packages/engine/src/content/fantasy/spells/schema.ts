// schema.ts — Types de base pour le système de magie S2S (Fantasy)

export type EraId =
  | "ancient-age"
  | "age-of-heroes"
  | "dark-age"
  | "high-kingdoms"
  | "arcane-renaissance"
  | "mythic-age";

// On garde ça extensible si plus tard tu ajoutes Galactic Saga, etc.
export type WorldId = "fantasy" | "pathseeker" | "darknight" | "galactic-saga" | "custom";

export type SpellTier =
  | "cantrip"   // 0
  | "tier1"
  | "tier2"
  | "tier3"
  | "tier4"
  | "tier5"
  | "tier6"
  | "tier7"
  | "tier8"
  | "tier9";

export interface SpellComponents {
  verbal: boolean;
  somatic: boolean;
  material?: string; // texte libre (“poudre d’argent”, “branche de gui”, etc.)
}

export type CastingTimeId =
  | "action"
  | "bonus-action"
  | "reaction"
  | "minute"
  | "ten-minutes"
  | "hour"
  | "ritual";

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
  // ex: "9m", "18m", "cône 9m", "ligne 18m x 1.5m"
  value: string;
}

export interface SpellScaling {
  // ex: “+1d6 dégâts par tier au-dessus de tier3”
  upcastText?: string;
  // ex: “au tier5, la zone passe à 6m”
  tierNotes?: Record<SpellTier, string | undefined>;
}

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

export type SpellSchoolId =
  | "pyromancy"      // feu, magma
  | "frostbinding"   // glace, ralentissement
  | "stormcalling"   // tonnerre, éclair, vent
  | "terraforge"     // terre, pierre, métal
  | "aethercraft"    // énergie pure, force, gravité
  | "vitae"          // soins, bénédictions, protection
  | "umbramancy"     // ombre, nécrotique, malédictions
  | "mindweave"      // mental, illusions, contrôle
  | "spiritbond"     // esprits, divin, ancêtres
  | "wildgrowth";    // nature, plantes, animaux, météo

export interface Spell {
  key: string;                 // identifiant interne unique (ex: "fire_bolt", "shadow_lash")
  name: string;                // nom affiché
  world: WorldId;              // pour distinguer plus tard (Fantasy vs Galactic Saga)
  tier: SpellTier;
  school: SpellSchoolId;
  castingTime: CastingTimeId;
  range: SpellRange;
  duration: string;            // ex: "instantané", "1 minute", "concentration, 10 minutes"
  concentration: boolean;
  components: SpellComponents;
  tags: SpellTagId[];
  availableInEras: EraId[];    // à quelles ères ce sort existe
  shortSummary: string;        // 1 phrase : pitch du sort
  description: string;         // texte long
  scaling?: SpellScaling;      // comment il se scale
  // Placeholders pour ton VTT plus tard :
  visualCue?: string;          // ex: "flammes en spirale", "aura violette"
  sfxCue?: string;             // ex: "orbe électrique crépitante"
}
