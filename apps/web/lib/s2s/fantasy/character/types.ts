// lib/s2s/fantasy/character/types.ts

import type { FantasyRace } from "../races";
import type { FantasyClass } from "../classes";
import type { FantasyEra } from "../eras";

export type FantasyRaceKey = FantasyRace["key"];
export type FantasyClassKey = FantasyClass["key"];
export type FantasyEraKey = FantasyEra["key"];

export interface FantasyAttributes {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface FantasySkills {
  combat: number;
  survival: number;
  magic: number;
  diplomacy: number;
  stealth: number;
  crafting: number;
}

export interface FantasyInventoryItem {
  id: string;
  name: string;
  qty: number;
  description?: string;
}

export interface FantasyBackground {
  origin: string;        // village, cité, tribu, ordre…
  occupation: string;    // métier / rôle avant l’aventure
  faction?: string;      // guilde, ordre, royaume
  personalGoal?: string; // objectif perso
  flaw?: string;         // faiblesse / défaut
  trait?: string;        // trait de caractère
  notes?: string;        // notes libres
}

export interface FantasyIdentity {
  name: string;
  age: number | null;
  gender: string;
  race: FantasyRaceKey | "";
  subrace?: string;
  class: FantasyClassKey | "";
  archetype?: string;
  era: FantasyEraKey | "";
  subworld?: string; // ex: "shadow-domains", "skyshard-empires"
}
export interface FantasyMagic {
  school: string;
  focus: string;
  spells: string[];
  rituals: string[];
}

export interface FantasyCharacterSheet {
  id: string;
  world: "fantasy";
  variant: "core"; // plus tard: "shadow-domains", "highlands", etc.
  identity: FantasyIdentity;
  attributes: FantasyAttributes;
  skills: FantasySkills;
  inventory: FantasyInventoryItem[];
  background: FantasyBackground;
  magic: FantasyMagic;
  portraitUrl?: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

// valeur de base (pour un nouveau perso)
export const DEFAULT_FANTASY_SHEET: FantasyCharacterSheet = {
  id: "",
  world: "fantasy",
  variant: "core",
  identity: {
    name: "",
    age: null,
    gender: "",
    race: "",
    subrace: "",
    class: "",
    archetype: "",
    era: "",
    subworld: "",
  },
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  skills: {
    combat: 0,
    survival: 0,
    magic: 0,
    diplomacy: 0,
    stealth: 0,
    crafting: 0,
  },
  inventory: [],
  background: {
    origin: "",
    occupation: "",
    faction: "",
    personalGoal: "",
    flaw: "",
    trait: "",
    notes: "",
  },
  portraitUrl: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// petite factory pratique
export function createEmptyFantasySheet(id: string): FantasyCharacterSheet {
  const now = new Date().toISOString();
  return {
    ...DEFAULT_FANTASY_SHEET,
    id,
    createdAt: now,
    updatedAt: now,
},
  };
}
