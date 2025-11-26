// --------------------
// FANTASY INDEX LOADER
// packages/engine/src/content/fantasy/index.ts
// --------------------

import { getAllSpells } from "../../adapters/spells.adapter";
const spells = getAllSpells();

import { getAllClasses } from "../../adapters/classes.adapter";
const classes = getAllClasses();

import { getAllRaces } from "../../adapters/races.adapter";
const races = getAllRaces();

import { getAllEras } from "../../adapters/eras.adapter";
const eras = getAllEras();

import { getAllRoles } from "../../adapters/roles.adapter";
const roles = getAllRoles();

import { getAllItems } from "../../adapters/items.adapter";
const items = getAllItems();

import { getAllMonsters } from "../../adapters/bestiary.adapter";
const bestiary = getAllMonsters();

import { getAllFactions } from "../../adapters/factions.adapter";
const factions = getAllFactions();

import { getAllHabitats } from "../../adapters/habitats.adapter";
const habitats = getAllHabitats();

import { getAllGMData } from "../../adapters/gm.adapter";
const gm = getAllGMData();

import { getAllRituals } from "../../adapters/rituals.adapter";
const rituals = getAllRituals();


// --------------------
// EXPORTS DU CONTENU
// --------------------

export * from "./worlds";       // fichier worlds.ts
export * from "./eras";
export * from "./bestiary";
export * from "./spells";
export * from "./classes";
export * from "./races";
export * from "./items";
export * from "./roles";
export * from "./rituals";
export * from "./factions";
export * from "./habitats";
export * from "./gm";
export * from "./character";
export * from "./player";
export * from "./tags";


// --------------------
// EXPORTS DES DONNÉES
// --------------------

export const FANTASY_DATA = {
  spells,
  classes,
  races,
  eras,
  roles,
  items,
  bestiary,
  factions,
  habitats,
  gm,
  rituals,
} as const;
