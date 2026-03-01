// @ts-nocheck
// Base schema pour tous les rituels Fantasy
// Utilisé par ritual_divine.ts, ritual_necromancy.ts, ritual_arcane.ts,
// ritual_nature.ts, ritual_spirit.ts

// Type strict pour les écoles de rituel
export type RitualSchool =
  | "divine"
  | "nature"
  | "arcane"
  | "necromancy"
  | "spirit";

// (Optionnel) Niveau standardisé, 1 à 10
export type RitualLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

// Schéma principal de tout rituel
export interface Ritual {
  id: string;              // identifiant unique interne
  label: string;           // nom visible
  school: RitualSchool;    // école : divine, nature, etc.
  level: number;           // difficulté approximative 1–10
  castTime: string;        // "1 heure", "3 heures", "une nuit"
  ingredients: string[];   // objets requis
  description: string;     // effet narratif
}
