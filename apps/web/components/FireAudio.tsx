"use client";
import { useEffect, useRef } from "react";

export default function FireAudio() {
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = 0.35; // volume doux
    ref.current.play().catch(() => {});
  }, []);

  return (
    <audio
      ref={ref}
      src="/sounds/ambient/fireplace-loop.mp3"
      preload="auto"
      loop
    />
  );
}
