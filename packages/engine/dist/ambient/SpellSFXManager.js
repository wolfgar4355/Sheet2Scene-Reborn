// packages/engine/src/ambient/SpellSFXManager.ts
// --------------------------------------------------
// Mithril Engine v2 — Spell SFX Manager
// --------------------------------------------------
import { SoundManifest } from "./sound.manifest";
import { audioBus } from "./audioBus";
/**
 * Résout l'URL d'un son de sort en fonction de l'école + id
 */
export function getSpellUrl(school, id) {
    const s = SoundManifest.spells[school];
    if (!s)
        return null;
    const url = s[id];
    return typeof url === "string" ? url : null;
}
/**
 * Joue le son d'un sort (one-shot)
 */
export function playSpellSfx(school, id, opts = {}) {
    const url = getSpellUrl(school, id);
    if (!url)
        return;
    const { volume = 1, delayMs = 0 } = opts;
    if (delayMs > 0) {
        window.setTimeout(() => audioBus.playOneShot(url, volume), delayMs);
    }
    else {
        audioBus.playOneShot(url, volume);
    }
}
