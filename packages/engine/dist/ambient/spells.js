// packages/engine/src/ambient/spells.ts
const SPELL_SOUNDS = {
    "fireball": {
        castId: "spell.fireball.cast",
        impactId: "spell.fireball.impact",
    },
    "lightning-bolt": {
        castId: "spell.lightning.cast",
        impactId: "spell.lightning.strike",
    },
    // Twinspell Fireball (exemple custom)
    "twinspell-fireball": {
        castId: "spell.fireball.cast",
        impactId: "spell.fireball.impact",
    },
};
export function getSpellSounds(spellId) {
    return SPELL_SOUNDS[spellId];
}
