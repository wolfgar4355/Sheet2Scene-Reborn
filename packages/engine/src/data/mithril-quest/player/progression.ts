// @ts-nocheck
// ============================================================================
// 📈 LEVEL PROGRESSION — MQ ENGINE
// ============================================================================
//
// Définition de la progression des niveaux : bonus de maîtrise,
// augmentations de caractéristiques et jalons narratifs/techniques.
//
// ============================================================================

export interface LevelProgression {
  level: number;
  proficiencyBonus: number;
  abilityScoreIncrease?: boolean;
  feat?: boolean;
  notes?: string;
}

export const FANTASY_LEVELS: LevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    notes: "Compétences de base, origine, classe choisie"
  },
  {
    level: 2,
    proficiencyBonus: 2,
    notes: "Premiers talents / capacités de classe"
  },
  {
    level: 3,
    proficiencyBonus: 2,
    notes: "Spécialisation / archétype"
  },
  {
    level: 4,
    proficiencyBonus: 2,
    abilityScoreIncrease: true,
    notes: "Augmentation de caractéristiques ou don"
  },
  {
    level: 5,
    proficiencyBonus: 3,
    notes: "Capacités renforcées, techniques améliorées"
  },
  {
    level: 6,
    proficiencyBonus: 3,
    notes: "Nouvelle capacité de classe"
  },
  {
    level: 7,
    proficiencyBonus: 3,
    notes: "Renforcement de niche (magie, combat, soutien)"
  },
  {
    level: 8,
    proficiencyBonus: 3,
    abilityScoreIncrease: true
  },
  {
    level: 9,
    proficiencyBonus: 4,
    notes: "Capacités avancées"
  },
  {
    level: 10,
    proficiencyBonus: 4,
    notes: "Spécialisation poussée"
  },
  {
    level: 11,
    proficiencyBonus: 4,
    notes: "Maîtrise intermédiaire"
  },
  {
    level: 12,
    proficiencyBonus: 4,
    abilityScoreIncrease: true
  },
  {
    level: 13,
    proficiencyBonus: 5,
    notes: "Pouvoirs supérieurs"
  },
  {
    level: 14,
    proficiencyBonus: 5,
    notes: "Capacité majeure de classe"
  },
  {
    level: 15,
    proficiencyBonus: 5,
    notes: "Expertise dans la voie choisie"
  },
  {
    level: 16,
    proficiencyBonus: 5,
    abilityScoreIncrease: true
  },
  {
    level: 17,
    proficiencyBonus: 6,
    notes: "Pouvoir quasi-légendaire"
  },
  {
    level: 18,
    proficiencyBonus: 6,
    notes: "Apex de classe"
  },
  {
    level: 19,
    proficiencyBonus: 6,
    abilityScoreIncrease: true
  },
  {
    level: 20,
    proficiencyBonus: 6,
    notes: "Capstone légendaire — accomplissement du destin"
  }
];
