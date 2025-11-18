"use client";
import { useCallback, useMemo } from "react";

export default function useFlipSound(volume = 0.35) {
  const audio = useMemo(() => {
    if (typeof window === "undefined") return null;
    const a = new Audio("/assets/sounds/page-flip.mp3");
    a.volume = volume;
    return a;
  }, [volume]);

  const playFlipSound = useCallback(() => {
    if (!audio) return;
    try {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch (e) {
      console.warn("Flip sound failed:", e);
    }
  }, [audio]);

  return playFlipSound;
}
