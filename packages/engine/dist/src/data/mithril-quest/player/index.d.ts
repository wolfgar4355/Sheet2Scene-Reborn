import { type FantasySkill } from "./skills";
import { type FantasyBackgroundDef } from "./backgrounds";
import { type LevelProgression } from "./progression";
import { type FantasyClass } from "../classes";
import { type FantasyEra } from "../eras";
export interface FantasyPlayerHandbook {
    races: any[];
    classes: FantasyClass[];
    eras: FantasyEra[];
    skills: FantasySkill[];
    backgrounds: FantasyBackgroundDef[];
    levels: LevelProgression[];
}
export declare const FANTASY_PLAYER_HANDBOOK: FantasyPlayerHandbook;
