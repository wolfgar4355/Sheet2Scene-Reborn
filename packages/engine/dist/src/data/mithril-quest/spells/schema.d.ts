import type { WorldId, SpellTier, SpellComponents, CastingTimeId, SpellRangeType, SpellRange, SpellScaling, SpellTagId, SpellSchoolId, Spell } from "./types";
export type { WorldId, SpellTier, SpellComponents, CastingTimeId, SpellRangeType, SpellRange, SpellScaling, SpellTagId, SpellSchoolId, Spell };
export type EraId = "ancient-age" | "age-of-heroes" | "dark-age" | "high-kingdoms" | "arcane-renaissance" | "mythic-age";
export interface MQSpell {
    key: string;
    name: string;
    world: "mithril-quest";
    tier: SpellTier;
    school: SpellSchoolId;
    castingTime: CastingTimeId;
    range: SpellRange;
    duration: string;
    concentration: boolean;
    components: SpellComponents;
    tags: SpellTagId[];
    availableInEras: EraId[];
    shortSummary: string;
    description: string;
    scaling?: SpellScaling;
    visualCue?: string;
    sfxCue?: string;
}
