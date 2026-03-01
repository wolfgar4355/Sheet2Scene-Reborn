import type { SpellSchoolId } from "./types";
export interface SpellSchool {
    id: SpellSchoolId;
    label: string;
    colorHint: string;
    iconHint: string;
    themes: string[];
    typicalCasters: string[];
    description: string;
}
export declare const SPELL_SCHOOLS: readonly SpellSchool[];
export default SPELL_SCHOOLS;
