export type SpellSchool = "fire" | "lightning" | "ice" | "arcane" | "healing" | "shadow";
export type FireSpellId = "fireboltCast" | "fireballExplosion" | "flameBurst";
export type LightningSpellId = "lightningCast" | "lightningChain" | "lightningImpact";
export type IceSpellId = "frostCast" | "iceCrack" | "iceBlast";
export type ArcaneSpellId = "charge" | "burst" | "runeHum";
export type HealingSpellId = "healCast" | "healWave";
export type ShadowSpellId = "whispers" | "burst";
export type SpellId = FireSpellId | LightningSpellId | IceSpellId | ArcaneSpellId | HealingSpellId | ShadowSpellId;
export interface SpellSfxOptions {
    volume?: number;
    /** délai avant de jouer, en ms (pratique pour sync anim) */
    delayMs?: number;
}
/**
 * Résout l'URL d'un son de sort en fonction de l'école + id
 */
export declare function getSpellUrl(school: SpellSchool, id: SpellId): string | null;
/**
 * Joue le son d'un sort (one-shot)
 */
export declare function playSpellSfx(school: SpellSchool, id: SpellId, opts?: SpellSfxOptions): void;
