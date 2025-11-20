"use client";

import { useEffect } from "react";
import bookAudio from "@utils/bookSounds";

/**
 * Réveille l'AudioContext et précharge silencieusement au 1er geste utilisateur
 * (nécessaire sur iOS/Safari & mobiles).
 */
export default function AudioBoot() {
  useEffect(() => {
    const boot = async () => {
      try {
        // lecture silencieuse => réveille le contexte + précharge
        await bookAudio.open(0);
      } catch {}
    };

    const once = () => {
      boot();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("pointerdown", once);
      window.removeEventListener("touchstart", once);
      window.removeEventListener("keydown", once);
    };

    window.addEventListener("pointerdown", once, { once: true });
    window.addEventListener("touchstart", once, { once: true });
    window.addEventListener("keydown", once, { once: true });

    return cleanup;
  }, []);

  return null;
}
