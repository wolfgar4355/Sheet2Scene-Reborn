"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useRef, } from "react";
const defaultValue = {
    music: null,
    ambience: null,
    sfx: null,
    volume: 1,
};
export const AmbientContext = createContext({
    ambient: defaultValue,
    setAmbient: () => { },
    playMusic: () => { },
    stopMusic: () => { },
    playAmbience: () => { },
    stopAmbience: () => { },
    playSfx: () => { },
    setVolume: () => { },
});
export function AmbientProvider({ children }) {
    const [ambient, setAmbient] = useState(defaultValue);
    // Références audio
    const musicRef = useRef(null);
    const ambienceRef = useRef(null);
    const sfxRef = useRef(null);
    /* ------------------------------------------------------------------------
     * Utilitaires: fade audio
     * ------------------------------------------------------------------------ */
    const fadeAudio = (audio, target, duration) => {
        const step = 50; // ms
        const diff = target - audio.volume;
        const increment = diff / (duration / step);
        const interval = setInterval(() => {
            audio.volume = Math.min(Math.max(0, audio.volume + increment), 1);
            if ((increment > 0 && audio.volume >= target) ||
                (increment < 0 && audio.volume <= target)) {
                clearInterval(interval);
            }
        }, step);
    };
    /* ------------------------------------------------------------------------
     * Play musique
     * ------------------------------------------------------------------------ */
    const playMusic = (file, fadeDuration = 1200) => {
        if (!musicRef.current) {
            musicRef.current = new Audio();
            musicRef.current.loop = true;
        }
        const audio = musicRef.current;
        // Fade out avant de changer
        if (audio.src)
            fadeAudio(audio, 0, fadeDuration);
        setTimeout(() => {
            audio.src = file;
            audio.volume = 0;
            audio.play().catch(() => { });
            fadeAudio(audio, ambient.volume, fadeDuration);
            setAmbient((a) => ({ ...a, music: file }));
        }, fadeDuration);
    };
    const stopMusic = (fadeDuration = 1000) => {
        if (!musicRef.current)
            return;
        fadeAudio(musicRef.current, 0, fadeDuration);
        setTimeout(() => {
            musicRef.current?.pause();
            setAmbient((a) => ({ ...a, music: null }));
        }, fadeDuration + 50);
    };
    /* ------------------------------------------------------------------------
     * Play ambience (loop)
     * ------------------------------------------------------------------------ */
    const playAmbience = (file) => {
        if (!ambienceRef.current) {
            ambienceRef.current = new Audio();
            ambienceRef.current.loop = true;
        }
        ambienceRef.current.src = file;
        ambienceRef.current.volume = ambient.volume * 0.6;
        ambienceRef.current.play().catch(() => { });
        setAmbient((a) => ({ ...a, ambience: file }));
    };
    const stopAmbience = () => {
        ambienceRef.current?.pause();
        setAmbient((a) => ({ ...a, ambience: null }));
    };
    /* ------------------------------------------------------------------------
     * Play SFX ponctuel
     * ------------------------------------------------------------------------ */
    const playSfx = (file) => {
        sfxRef.current = new Audio(file);
        sfxRef.current.volume = ambient.volume;
        sfxRef.current.play().catch(() => { });
        setAmbient((a) => ({ ...a, sfx: file }));
    };
    /* ------------------------------------------------------------------------
     * Volume global
     * ------------------------------------------------------------------------ */
    const setVolume = (v) => {
        const vol = Math.max(0, Math.min(1, v));
        setAmbient((a) => ({ ...a, volume: vol }));
        if (musicRef.current)
            musicRef.current.volume = vol;
        if (ambienceRef.current)
            ambienceRef.current.volume = vol * 0.6;
    };
    return (_jsx(AmbientContext.Provider, { value: {
            ambient,
            setAmbient,
            playMusic,
            stopMusic,
            playAmbience,
            stopAmbience,
            playSfx,
            setVolume,
        }, children: children }));
}
export const useAmbient = () => useContext(AmbientContext);
