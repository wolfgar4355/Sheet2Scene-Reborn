// @ts-nocheck
// ===============================================================
//   Mithril-Quest — Index des classes
//   Assemble toutes les classes MQ_*_* en un seul tableau
// ===============================================================

// Imports des classes individuelles
import { MQ_CLASS_ALCHEMIST } from "./alchemist";
import { MQ_CLASS_ARTIFICER } from "./artificer";
import { MQ_CLASS_ASSASSIN } from "./assassin";
import { MQ_CLASS_BARD } from "./bard";
import { MQ_CLASS_BATTLEMAGE } from "./battlemage";
import { MQ_CLASS_BERSERKER } from "./berserker";
import { MQ_CLASS_BLOODMAGE } from "./bloodmage";
import { MQ_CLASS_CLERIC } from "./cleric";
import { MQ_CLASS_DRUID } from "./druid";
import { MQ_CLASS_DUELIST } from "./duelist";
import { MQ_CLASS_FIGHTER } from "./fighter";
import { MQ_CLASS_HUNTER } from "./hunter";
import { MQ_CLASS_INQUISITOR } from "./inquisitor";
import { MQ_CLASS_KNIGHT } from "./knight";
import { MQ_CLASS_MAGE } from "./mage";
import { MQ_CLASS_MONK } from "./monk";
import { MQ_CLASS_MYSTIC } from "./mystic";
import { MQ_CLASS_NECROMANCER } from "./necromancer";
import { MQ_CLASS_PALADIN } from "./paladin";
import { MQ_CLASS_PSION } from "./psion";
import { MQ_CLASS_RANGER } from "./ranger";
import { MQ_CLASS_ROGUE } from "./rogue";
import { MQ_CLASS_RUNEGUARD } from "./runeguard";
import { MQ_CLASS_SHAMAN } from "./shaman";
import { MQ_CLASS_SORCERER } from "./sorcerer";
import { MQ_CLASS_SPELLSWORD } from "./spellsword";
import { MQ_CLASS_WARLOCK } from "./warlock";
import { MQ_CLASS_WARPRIEST } from "./warpriest";
import { MQ_CLASS_WITCH_HUNTER } from "./witch_hunter";

// Tableau global : toutes les classes MQ
export const MQ_CLASSES = [
  ...MQ_CLASS_ALCHEMIST,
  ...MQ_CLASS_ARTIFICER,
  ...MQ_CLASS_ASSASSIN,
  ...MQ_CLASS_BARD,
  ...MQ_CLASS_BATTLEMAGE,
  ...MQ_CLASS_BERSERKER,
  ...MQ_CLASS_BLOODMAGE,
  ...MQ_CLASS_CLERIC,
  ...MQ_CLASS_DRUID,
  ...MQ_CLASS_DUELIST,
  ...MQ_CLASS_FIGHTER,
  ...MQ_CLASS_HUNTER,
  ...MQ_CLASS_INQUISITOR,
  ...MQ_CLASS_KNIGHT,
  ...MQ_CLASS_MAGE,
  ...MQ_CLASS_MONK,
  ...MQ_CLASS_MYSTIC,
  ...MQ_CLASS_NECROMANCER,
  ...MQ_CLASS_PALADIN,
  ...MQ_CLASS_PSION,
  ...MQ_CLASS_RANGER,
  ...MQ_CLASS_ROGUE,
  ...MQ_CLASS_RUNEGUARD,
  ...MQ_CLASS_SHAMAN,
  ...MQ_CLASS_SORCERER,
  ...MQ_CLASS_SPELLSWORD,
  ...MQ_CLASS_WARLOCK,
  ...MQ_CLASS_WARPRIEST,
  ...MQ_CLASS_WITCH_HUNTER,
] as const;

export type MQClass = (typeof MQ_CLASSES)[number];
