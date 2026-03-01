// @ts-nocheck
export interface MQPlayerSheet {
  name: string;
  race: string;               // key from ALL_RACES
  class: string;              // key from ALL_CLASSES
  era: string;                // key from MQ_ERAS
  background: string;         // key from FANTASY_BACKGROUNDS
  alignement: string;         // key from ALIGNEMENTS
  abilityScores: PlayerAbilityScores;
  languages: string[];        // keys from languages.ts
  tools: string[];            // keys from tools.ts
  skills: string[];           // keys from FANTASY_SKILLS
  level: number;
  progression: any;           // automatically fetched from FANTASY_LEVELS
  appearance?: PlayerAppearance;
  notes?: string;
}
