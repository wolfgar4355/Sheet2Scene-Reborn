import type { SpellTier } from "./types";
export interface SpellTierDef {
    id: SpellTier;
    label: string;
    powerHint: string;
}
export declare const SPELL_TIERS: SpellTierDef[];
export default SPELL_TIERS;
