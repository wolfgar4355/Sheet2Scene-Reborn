export type SpellEventKind = "cast" | "impact";
export interface SpellSoundMap {
    castId?: string;
    impactId?: string;
}
export declare function getSpellSounds(spellId: string): SpellSoundMap | undefined;
