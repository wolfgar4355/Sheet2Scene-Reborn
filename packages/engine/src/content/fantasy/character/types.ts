// ==========================================================================
// FANTASY — Character Types
// ==========================================================================

import type { FantasyRace } from "../races";
import type { FantasyClass } from "../classes";
import type { FantasyEra } from "../eras";

// keys dérivés
export type FantasyRaceKey = FantasyRace["key"];
export type FantasyClassKey = FantasyClass["key"];
export type FantasyEraKey = FantasyEra["key"];

// --------------------------------------------------------------------------
// ATTRIBUTS
// --------------------------------------------------------------------------
export interface FantasyAttributes {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

// --------------------------------------------------------------------------
// SKILLS
// --------------------------------------------------------------------------
export interface FantasySkills {
  combat: number;
  survival: number;
  magic: number;
  diplomacy: number;
  stealth: number;
  crafting: number;
}

// --------------------------------------------------------------------------
// INVENTORY ITEM
// --------------------------------------------------------------------------
export interface FantasyInventoryItem {
  id: string;
  name: string;
  qty: number;
  description?: string;
}

// --------------------------------------------------------------------------
// BACKGROUND
// --------------------------------------------------------------------------
export interface FantasyBackground {
  origin: string;          // village, cité, tribu
  occupation: string;      // métier
  faction?: string;        // ordre / guilde
  personalGoal?: string;
  flaw?: string;
  trait?: string;
  notes?: string;
}

// --------------------------------------------------------------------------
// IDENTITY
// --------------------------------------------------------------------------
export interface FantasyIdentity {
  name: string;
  age: number | null;
  gender: string;
  race: FantasyRaceKey | "";
  subrace?: string;
  class: FantasyClassKey | "";
  archetype?: string;
  era: FantasyEraKey | "";
  subworld?: string; // ex : skyshard-empires
}

// --------------------------------------------------------------------------
// MAGIC
// --------------------------------------------------------------------------
export interface FantasyMagic {
  school: string;
  focus: string;
  spells: string[];
  rituals: string[];
}

// --------------------------------------------------------------------------
// CHARACTER SHEET
// --------------------------------------------------------------------------
export interface FantasyCharacterSheet {
  id: string;
  world: "fantasy";
  variant: "core";
  identity: FantasyIdentity;
  attributes: FantasyAttributes;
  skills: FantasySkills;
  inventory: FantasyInventoryItem[];
  background: FantasyBackground;
  magic: FantasyMagic;
  portraitUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// --------------------------------------------------------------------------
// DEFAULT SHEET
// --------------------------------------------------------------------------
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
  magic: {
    school: "",
    focus: "",
    spells: [],
    rituals: [],
  },
  portraitUrl: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// --------------------------------------------------------------------------
// FACTORY — crée une nouvelle fiche vide
// --------------------------------------------------------------------------
export function createEmptyFantasySheet(id: string): FantasyCharacterSheet {
  const now = new Date().toISOString();
  return {
    ...DEFAULT_FANTASY_SHEET,
    id,
    createdAt: now,
    updatedAt: now,
  };
}
