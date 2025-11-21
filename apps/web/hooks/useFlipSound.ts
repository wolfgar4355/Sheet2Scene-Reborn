"use client";

import { useCallback } from "react";
// Si tu n'utilises pas l'alias "@", remplace par: "../utils/bookSounds"
import bookAudio from "@utils/bookSounds";

/**
 * Retourne un callback qui joue le son de "page flip"
 * @param volume 0..1 (défaut 0.35)
 */
export default function useFlipSound(volume = 0.35) {
  return useCallback(() => {
    bookAudio.flip(volume).catch(() => {});
  }, [volume]);
}
