// packages/engine/src/ambient/SpellSFXManager.ts
// --------------------------------------------------
// Mithril Engine v2 — Spell SFX Manager
// --------------------------------------------------

import { SoundManifest } from "./sound.manifest";
import { audioBus } from "./audioBus";

export type SpellSchool =
  | "fire"
  | "lightning"
  | "ice"
  | "arcane"
  | "healing"
  | "shadow";

export type FireSpellId = "fireboltCast" | "fireballExplosion" | "flameBurst";
export type LightningSpellId =
  | "lightningCast"
  | "lightningChain"
  | "lightningImpact";
export type IceSpellId = "frostCast" | "iceCrack" | "iceBlast";
export type ArcaneSpellId = "charge" | "burst" | "runeHum";
export type HealingSpellId = "healCast" | "healWave";
export type ShadowSpellId = "whispers" | "burst";

export type SpellId =
  | FireSpellId
  | LightningSpellId
  | IceSpellId
  | ArcaneSpellId
  | HealingSpellId
  | ShadowSpellId;

export interface SpellSfxOptions {
  volume?: number; // 0–1
  /** délai avant de jouer, en ms (pratique pour sync anim) */
  delayMs?: number;
}

/**
 * Résout l'URL d'un son de sort en fonction de l'école + id
 */
export function getSpellUrl(
  school: SpellSchool,
  id: SpellId
): string | null {
  const s = SoundManifest.spells[school] as any;
  if (!s) return null;
  const url = s[id];
  return typeof url === "string" ? url : null;
}

/**
 * Joue le son d'un sort (one-shot)
 */
export function playSpellSfx(
  school: SpellSchool,
  id: SpellId,
  opts: SpellSfxOptions = {}
): void {
  const url = getSpellUrl(school, id);
  if (!url) return;

  const { volume = 1, delayMs = 0 } = opts;

  if (delayMs > 0) {
    window.setTimeout(() => audioBus.playOneShot(url, volume), delayMs);
  } else {
    audioBus.playOneShot(url, volume);
  }
}
