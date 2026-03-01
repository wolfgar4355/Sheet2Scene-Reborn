// @ts-nocheck
// ============================================================================
// 🧩 MITHRIL-QUEST — TYPES JOUEUR (Player Core Types)
// Centralise TOUS les types du dossier /player/
// Compatible UI + Générateur + IA Sheet2Scene
// ============================================================================

// ------------------------------------------------------------
// 🔢 Compétences (importées de skills.ts)
// ------------------------------------------------------------
export interface FantasySkill {
  key: string;
  label: string;
  ability: AbilityKey;
  description: string;
}

export type AbilityKey =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

// ------------------------------------------------------------
// 🛠️ Outils et kits (tools.ts)
// ------------------------------------------------------------
export interface MQTool {
  key: string;
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 💬 Langues (languages.ts)
// ------------------------------------------------------------
export interface MQLanguage {
  key: string;
  label: string;
  script?: string;
  description: string;
}

// ------------------------------------------------------------
// 🧱 Backgrounds (origines sociales)
// ------------------------------------------------------------
export interface FantasyBackgroundDef {
  key: string;
  label: string;
  description: string;
  suggestedSkills: string[];
  suggestedTools?: string[];
  suggestedLanguages?: string[];
  startingWealth?: string;
  startingGear?: string[];
}

// ------------------------------------------------------------
// 📈 Progression de niveaux (progression.ts)
// ------------------------------------------------------------
export interface LevelProgression {
  level: number;
  proficiencyBonus: number;
  abilityScoreIncrease?: boolean;
  feat?: boolean;
  notes?: string;
}

// ------------------------------------------------------------
// ⭐ Traits de personnalité (traits.ts)
// ------------------------------------------------------------
export interface MQPersonalityTrait {
  key: string;
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 🎯 Motivations (motivations.ts)
// ------------------------------------------------------------
export interface MQMotivation {
  key: string;
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 🌌 Origines mythiques (origins.ts)
// ------------------------------------------------------------
export interface MQMythicOrigin {
  key: string;
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 🔥 Affinités élémentaires (elementals.ts)
// ------------------------------------------------------------
export interface MQElementalAffinity {
  key: string;
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 🐺 Totems animaux (totems.ts)
// ------------------------------------------------------------
export interface MQTotem {
  key: string;
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 🩸 Marques du destin (marks.ts)
// ------------------------------------------------------------
export interface MQMark {
  key: string;
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 🌟 Auras (aura + conseils IA)
// ------------------------------------------------------------
export interface MQAura {
  key: string;
  label: string;
  description: string;
  visualHint: string; // Conseils pour générateur IA
}

// ------------------------------------------------------------
// 🛡️ Factions du joueur (factions-player.ts)
// ------------------------------------------------------------
export interface MQPlayerFaction {
  key: string;
  label: string;
  reputationStart: number; // 0–100
}

// ------------------------------------------------------------
// ⚖️ Alignements (alignements.ts)
// ------------------------------------------------------------
export interface MQAlignment {
  key: string;  // ex: "lawful-good"
  label: string;
  description: string;
}

// ------------------------------------------------------------
// 🧭 Icônes d’alignements (alignements-icons.ts)
// ------------------------------------------------------------
export interface MQAlignmentIcon {
  key: string;
  icon: string; // unicode, emoji, URL ou nom d’icône UI
}

// ------------------------------------------------------------
// 🧍‍♂️ Poses IA selon alignement (alignements-poses.ts)
// ------------------------------------------------------------
export interface MQAlignmentPose {
  key: string;         // ex: "lawful-neutral"
  stablePrompt: string;
  cinematicPrompt: string;
  heroicPrompt: string;
}

// ------------------------------------------------------------
// 🌀 Axe moral (law–chaos / good–evil)
// ------------------------------------------------------------
export interface MQMoralAxis {
  lawChaos: -2 | -1 | 0 | 1 | 2;
  goodEvil: -2 | -1 | 0 | 1 | 2;
}

// ------------------------------------------------------------
// ⚙️ Traits mécaniques jouables (mechanics.ts)
// ------------------------------------------------------------
export interface MQMechanicalTrait {
  key: string;
  label: string;
  description: string;
  effect: string; // ex: "+1 AC", "+20m vision"
}

// ============================================================================
// 🎭 LE PROFIL JOUEUR FINAL — COMBINÉ (pour UI + IA S2S)
// ============================================================================
export interface MQPlayerProfile {
  // Identité
  name: string;
  race: string;     // key MQ_RACES
  class: string;    // key MQ_CLASSES
  era: string;      // key MQ_ERAS
  faction?: string; // key MQ_PLAYER_FACTIONS

  // Personnalité & Destin
  background: string;
  traits?: string[];
  motivations?: string[];
  origin?: string;
  totem?: string;
  elemental?: string;
  mark?: string;

  // Mentalité
  alignment?: string; // ex: "neutral-good"
  moralAxis?: MQMoralAxis;
  aura?: string;

  // Capacités
  skills?: string[];
  tools?: string[];
  languages?: string[];
  mechanicalTraits?: string[];

  // Progression
  level: number;
  experience?: number;

  // Pour l’IA Sheet2Scene
  aiPose?: string;         // key MQAlignmentPose
  aiPromptOverride?: string;
}

// ============================================================================
// 🎒 EXPORT GLOBAL POUR generate-all-players.ts
// ----------------------------------------------------------------------------
// Le générateur va lire tous les fichiers de /player et produire un fichier unique
// ============================================================================
export interface MQPlayerDictionary {
  skills: FantasySkill[];
  tools: MQTool[];
  languages: MQLanguage[];
  backgrounds: FantasyBackgroundDef[];
  levels: LevelProgression[];
  traits: MQPersonalityTrait[];
  motivations: MQMotivation[];
  origins: MQMythicOrigin[];
  elementals: MQElementalAffinity[];
  totems: MQTotem[];
  marks: MQMark[];
  auras: MQAura[];
  factions: MQPlayerFaction[];
  alignments: MQAlignment[];
  alignmentIcons: MQAlignmentIcon[];
  alignmentPoses: MQAlignmentPose[];
  mechanics: MQMechanicalTrait[];
}
