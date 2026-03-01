// packages/engine/src/ambient/spells.ts

export type SpellEventKind = "cast" | "impact";

export interface SpellSoundMap {
  castId?: string;
  impactId?: string;
}

const SPELL_SOUNDS: Record<string, SpellSoundMap> = {
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

export function getSpellSounds(spellId: string): SpellSoundMap | undefined {
  return SPELL_SOUNDS[spellId];
}
