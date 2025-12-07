// @ts-nocheck
// schema.ts — Types unifiés du système de magie S2S / Mithril-Quest
// ---------------------------------------------------------------
// Importation centralisée depuis types.ts (full MQ)

export type {
  WorldId,
  SpellTier,
  SpellComponents,
  CastingTimeId,
  SpellRangeType,
  SpellRange,
  SpellScaling,
  SpellTagId,
  SpellSchoolId,
  Spell
} from "./types";

// ---------------------------------------------------------------
// Ères officielles de Mithril-Quest (compatibles MQ canon + bonus)
// ---------------------------------------------------------------

export type EraId =
  | "ancient-age"          // Âge Ancien (premiers empires, magie brute)
  | "age-of-heroes"        // Âge des Héros (épopées, grands champions)
  | "dark-age"             // Âge Sombre (nécromancie, déchéance)
  | "high-kingdoms"        // Royaumes Suprêmes (magies établies)
  | "arcane-renaissance"   // Renaissance Arcanique (innovation, runes)
  | "mythic-age";          // Âge Mythique (puissance divine, légendes)

// NOTE : Si tu ajoutes Galactic Saga / Pathseeker / Darknight,
// tu étendras WorldId dans types.ts — cette interface est prête.

// ---------------------------------------------------------------
// Spell MQ — Redéfinition pour importer proprement
// ---------------------------------------------------------------

export interface MQSpell {
  key: string;                // identifiant unique
  name: string;               // nom complet
  world: "mithril-quest";     // fixé pour MQ canon

  tier: SpellTier;
  school: SpellSchoolId;

  castingTime: CastingTimeId;

  range: SpellRange;

  duration: string;
  concentration: boolean;

  components: SpellComponents;

  tags: SpellTagId[];

  availableInEras: EraId[];    // ères où ce sort existe

  shortSummary: string;        // résumé court
  description: string;         // texte long

  scaling?: SpellScaling;

  // Hooks MQ (pour VFX, SFX et génération d’assets)
  visualCue?: string;          // ex: "flammes bleues en spirale"
  sfxCue?: string;             // ex: "crépitement électrique"
}
