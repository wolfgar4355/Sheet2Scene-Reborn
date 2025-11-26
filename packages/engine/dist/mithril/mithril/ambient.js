"use client";
import { useState, useEffect } from "react";
export function useAmbient() {
    const [volume, setVolume] = useState(1);
    useEffect(() => {
        const audio = document.getElementById("ambient-audio");
        if (audio)
            audio.volume = volume;
    }, [volume]);
    return {
        volume,
        setVolume,
    };
}
