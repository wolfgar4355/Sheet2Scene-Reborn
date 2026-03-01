// apps/web/hooks/useFlipSound.ts
"use client";

import { useCallback, useEffect, useRef } from "react";

export default function useFlipSound(volume = 0.35) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Init audio once (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio("/assets/sounds/page-flip.mp3");
    audio.volume = volume;
    audio.preload = "auto";

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Update volume dynamically
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playFlipSound = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch (err) {
      console.warn("Flip sound failed:", err);
    }
  }, []);

  return playFlipSound;
}
