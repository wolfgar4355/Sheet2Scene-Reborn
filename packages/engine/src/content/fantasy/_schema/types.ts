// _schema/types.ts — canon
export type EraId =
  | "age-of-heroes" | "ancient-age" | "arcane-renaissance"
  | "dark-ages" | "high-kingdoms" | "mystic-age";

export type SpellSchoolId =
  | "abjuration" | "conjuration" | "divination" | "enchantment"
  | "evocation" | "illusion" | "necromancy" | "transmutation";

export type SpellRangeType = "self" | "touch" | "cone" | "line" | "ray" | "sphere" | "area";

export type SpellTagId =
  | "healing" | "damage" | "control" | "utility" | "ritual" | "summon";

export type SpellComponents = { verbal: true; somatic: true } | { verbal: true; somatic: false } | { verbal: false; somatic: true } | { verbal: false; somatic: false };

export type Monster = {
  id: string;
  name: string;
  cr: number;
  category: string;
  biome: string | "any";
  type: string;
  hp?: number;
  abilities?: string[];
  notes?: string;
};
export type EncounterTableEntry = { key: string; weight: number };
