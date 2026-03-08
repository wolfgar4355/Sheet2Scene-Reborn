import type { SpellTagId } from "./types";
export interface SpellTag {
    id: SpellTagId;
    label: string;
    description: string;
}
export declare const SPELL_TAGS: SpellTag[];
export default SPELL_TAGS;
