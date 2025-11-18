// lib/s2s/fantasy/player/index.ts

import { FANTASY_SKILLS, type FantasySkill } from "./skills";
import { FANTASY_BACKGROUNDS, type FantasyBackgroundDef } from "./backgrounds";
import { FANTASY_LEVELS, type LevelProgression } from "./progression";
import { FANTASY_RACES, type FantasyRace } from "../races";
import { FANTASY_CLASSES, type FantasyClass } from "../classes";
import { FANTASY_ERAS, type FantasyEra } from "../eras";

export interface FantasyPlayerHandbook {
  races: FantasyRace[];
  classes: FantasyClass[];
  eras: FantasyEra[];
  skills: FantasySkill[];
  backgrounds: FantasyBackgroundDef[];
  levels: LevelProgression[];
}

export const FANTASY_PLAYER_HANDBOOK: FantasyPlayerHandbook = {
  races: FANTASY_RACES as FantasyRace[],
  classes: FANTASY_CLASSES as FantasyClass[],
  eras: FANTASY_ERAS as FantasyEra[],
  skills: FANTASY_SKILLS,
  backgrounds: FANTASY_BACKGROUNDS,
  levels: FANTASY_LEVELS,
};
