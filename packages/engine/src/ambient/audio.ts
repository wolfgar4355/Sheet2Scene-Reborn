// packages/engine/src/ambient/audio.ts
"use client";

import { SoundManifest } from "./sound.manifest";

/**
 * Audio helper simple (AAA minimal)
 * - pas de state
 * - pas de preload ici
 */

export function playSound(url: string, volume = 1) {
  try {
    const audio = new Audio(url);
    audio.volume = Math.min(1, Math.max(0, volume));
    audio.play().catch(() => {});
  } catch {}
}

/**
 * Utilitaire : joue un son depuis le manifest
 */
export function playFromManifest(
  category: keyof typeof SoundManifest,
  key: string,
  volume = 1
) {
  const group = SoundManifest[category] as any;
  if (!group) return;

  const entry = group[key];
  if (!entry) return;

  const url = Array.isArray(entry)
    ? entry[Math.floor(Math.random() * entry.length)]
    : entry;

  playSound(url, volume);
}
