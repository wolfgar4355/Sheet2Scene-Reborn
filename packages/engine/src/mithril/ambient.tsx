"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";

/* --------------------------------------------------------------------------
 * 🎧 Ambient System – Mithril Engine v2 (AAA)
 * - Musique avec fade in/out
 * - Ambiances bouclées
 * - SFX ponctuels
 * - Volume master
 * -------------------------------------------------------------------------- */

export type AmbientState = {
  music: string | null;
  ambience: string | null;
  sfx: string | null;
  volume: number;
};

const defaultValue: AmbientState = {
  music: null,
  ambience: null,
  sfx: null,
  volume: 1,
};

export const AmbientContext = createContext<{
  ambient: AmbientState;
  setAmbient: (v: AmbientState) => void;

  playMusic: (file: string, fadeDuration?: number) => void;
  stopMusic: (fadeDuration?: number) => void;

  playAmbience: (file: string) => void;
  stopAmbience: () => void;

  playSfx: (file: string) => void;

  setVolume: (vol: number) => void;
}>({
  ambient: defaultValue,
  setAmbient: () => {},

  playMusic: () => {},
  stopMusic: () => {},

  playAmbience: () => {},
  stopAmbience: () => {},

  playSfx: () => {},

  setVolume: () => {},
});

export function AmbientProvider({ children }: { children: ReactNode }) {
  const [ambient, setAmbient] = useState<AmbientState>(defaultValue);

  // Références audio
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const ambienceRef = useRef<HTMLAudioElement | null>(null);
  const sfxRef = useRef<HTMLAudioElement | null>(null);

  /* ------------------------------------------------------------------------
   * Utilitaires: fade audio
   * ------------------------------------------------------------------------ */
  const fadeAudio = (
    audio: HTMLAudioElement,
    target: number,
    duration: number
  ) => {
    const step = 50; // ms
    const diff = target - audio.volume;
    const increment = diff / (duration / step);

    const interval = setInterval(() => {
      audio.volume = Math.min(Math.max(0, audio.volume + increment), 1);

      if (
        (increment > 0 && audio.volume >= target) ||
        (increment < 0 && audio.volume <= target)
      ) {
        clearInterval(interval);
      }
    }, step);
  };

  /* ------------------------------------------------------------------------
   * Play musique
   * ------------------------------------------------------------------------ */
  const playMusic = (file: string, fadeDuration = 1200) => {
    if (!musicRef.current) {
      musicRef.current = new Audio();
      musicRef.current.loop = true;
    }

    const audio = musicRef.current;

    // Fade out avant de changer
    if (audio.src) fadeAudio(audio, 0, fadeDuration);

    setTimeout(() => {
      audio.src = file;
      audio.volume = 0;
      audio.play().catch(() => {});

      fadeAudio(audio, ambient.volume, fadeDuration);
      setAmbient((a) => ({ ...a, music: file }));
    }, fadeDuration);
  };

  const stopMusic = (fadeDuration = 1000) => {
    if (!musicRef.current) return;
    fadeAudio(musicRef.current, 0, fadeDuration);

    setTimeout(() => {
      musicRef.current?.pause();
      setAmbient((a) => ({ ...a, music: null }));
    }, fadeDuration + 50);
  };

  /* ------------------------------------------------------------------------
   * Play ambience (loop)
   * ------------------------------------------------------------------------ */
  const playAmbience = (file: string) => {
    if (!ambienceRef.current) {
      ambienceRef.current = new Audio();
      ambienceRef.current.loop = true;
    }
    ambienceRef.current.src = file;
    ambienceRef.current.volume = ambient.volume * 0.6;
    ambienceRef.current.play().catch(() => {});
    setAmbient((a) => ({ ...a, ambience: file }));
  };

  const stopAmbience = () => {
    ambienceRef.current?.pause();
    setAmbient((a) => ({ ...a, ambience: null }));
  };

  /* ------------------------------------------------------------------------
   * Play SFX ponctuel
   * ------------------------------------------------------------------------ */
  const playSfx = (file: string) => {
    sfxRef.current = new Audio(file);
    sfxRef.current.volume = ambient.volume;
    sfxRef.current.play().catch(() => {});
    setAmbient((a) => ({ ...a, sfx: file }));
  };

  /* ------------------------------------------------------------------------
   * Volume global
   * ------------------------------------------------------------------------ */
  const setVolume = (v: number) => {
    const vol = Math.max(0, Math.min(1, v));
    setAmbient((a) => ({ ...a, volume: vol }));

    if (musicRef.current) musicRef.current.volume = vol;
    if (ambienceRef.current) ambienceRef.current.volume = vol * 0.6;
  };

  return (
    <AmbientContext.Provider
      value={{
        ambient,
        setAmbient,
        playMusic,
        stopMusic,
        playAmbience,
        stopAmbience,
        playSfx,
        setVolume,
      }}
    >
      {children}
    </AmbientContext.Provider>
  );
}

export const useAmbient = () => useContext(AmbientContext);
