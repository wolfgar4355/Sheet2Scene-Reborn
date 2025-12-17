"use client";
import { useEffect, useState, useRef, useCallback } from "react";
export function useCamera() {
    const [cam, setCam] = useState({
        x: 0,
        y: 1.4, // hauteur yeux
        z: 3, // distance initiale
        yaw: 0,
        pitch: 0,
        zoom: 1,
    });
    const idleRef = useRef(0);
    /**
     * Idle animation (breathing + subtle sway)
     */
    useEffect(() => {
        let raf = 0;
        const loop = (t) => {
            idleRef.current = t / 1000;
            const breath = Math.sin(idleRef.current * 0.7) * 0.05;
            const sway = Math.sin(idleRef.current * 0.3) * 0.03;
            setCam((prev) => ({
                ...prev,
                y: 1.4 + breath,
                x: sway,
            }));
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);
    /**
     * Calcul du vecteur forward à partir du yaw/pitch
     */
    const forward = {
        x: Math.sin(cam.yaw) * Math.cos(cam.pitch),
        y: Math.sin(cam.pitch),
        z: Math.cos(cam.yaw) * Math.cos(cam.pitch) * -1, // vers l'avant
    };
    /**
     * API — Déplacement absolu
     */
    const set = useCallback((fn) => {
        setCam((prev) => fn(prev));
    }, []);
    /**
     * API — Déplacement relatif
     */
    const move = useCallback((dx, dy, dz) => {
        setCam((prev) => ({
            ...prev,
            x: prev.x + dx,
            y: prev.y + dy,
            z: prev.z + dz,
        }));
    }, []);
    /**
     * API — Rotation caméra
     */
    const rotate = useCallback((dyaw, dpitch) => {
        setCam((prev) => ({
            ...prev,
            yaw: prev.yaw + dyaw,
            pitch: Math.max(-1.3, Math.min(1.3, prev.pitch + dpitch)), // clamp
        }));
    }, []);
    /**
     * API — Zoom caméra
     */
    const zoom = useCallback((amount) => {
        setCam((prev) => ({
            ...prev,
            zoom: Math.max(0.3, Math.min(2.5, prev.zoom + amount)),
        }));
    }, []);
    return {
        ...cam,
        forward,
        set,
        move,
        rotate,
        zoom,
    };
}
