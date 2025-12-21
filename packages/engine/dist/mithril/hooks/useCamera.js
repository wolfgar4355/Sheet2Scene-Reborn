"use client";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
}
export function useCamera() {
    const [cam, setCam] = useState({
        x: 0,
        y: 1.4,
        z: 3,
        yaw: 0,
        pitch: 0,
        zoom: 1,
        offsetX: 0,
        offsetY: 0,
        idleX: 0,
        idleY: 0,
        mode: "exploration",
        lock: false,
        target: null,
        bounds: null,
    });
    const idleRef = useRef(0);
    // ---------------------------------------------------------------------------
    // Idle animation (breathing + subtle sway) -> idleX/idleY uniquement
    // ---------------------------------------------------------------------------
    useEffect(() => {
        let raf = 0;
        const loop = (t) => {
            idleRef.current = t / 1000;
            const breath = Math.sin(idleRef.current * 0.7) * 0.05;
            const sway = Math.sin(idleRef.current * 0.3) * 0.03;
            setCam((prev) => ({
                ...prev,
                idleY: breath,
                idleX: sway,
            }));
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);
    // ---------------------------------------------------------------------------
    // Forward vector (pour plus tard)
    // ---------------------------------------------------------------------------
    const forward = useMemo(() => ({
        x: Math.sin(cam.yaw) * Math.cos(cam.pitch),
        y: Math.sin(cam.pitch),
        z: Math.cos(cam.yaw) * Math.cos(cam.pitch) * -1,
    }), [cam.yaw, cam.pitch]);
    // ---------------------------------------------------------------------------
    // API — set
    // ---------------------------------------------------------------------------
    const set = useCallback((fn) => {
        setCam((prev) => {
            const next = fn(prev);
            // clamp offset si bounds actives
            if (next.bounds) {
                next.offsetX = clamp(next.offsetX, next.bounds.minX, next.bounds.maxX);
                next.offsetY = clamp(next.offsetY, next.bounds.minY, next.bounds.maxY);
            }
            // clamp zoom hard
            next.zoom = clamp(next.zoom, 0.3, 2.5);
            // clamp pitch
            next.pitch = clamp(next.pitch, -1.3, 1.3);
            return next;
        });
    }, []);
    // ---------------------------------------------------------------------------
    // API — move (3D legacy)
    // ---------------------------------------------------------------------------
    const move = useCallback((dx, dy, dz) => {
        setCam((prev) => ({
            ...prev,
            x: prev.x + dx,
            y: prev.y + dy,
            z: prev.z + dz,
        }));
    }, []);
    // ---------------------------------------------------------------------------
    // API — rotate (legacy)
    // ---------------------------------------------------------------------------
    const rotate = useCallback((dyaw, dpitch) => {
        setCam((prev) => ({
            ...prev,
            yaw: prev.yaw + dyaw,
            pitch: clamp(prev.pitch + dpitch, -1.3, 1.3),
        }));
    }, []);
    // ---------------------------------------------------------------------------
    // API — zoom (bloquable si lock/mode encounter)
    // ---------------------------------------------------------------------------
    const zoom = useCallback((amount, opts) => {
        setCam((prev) => {
            if (!opts?.force && prev.lock && prev.mode === "encounter")
                return prev;
            return {
                ...prev,
                zoom: clamp(prev.zoom + amount, 0.3, 2.5),
            };
        });
    }, []);
    // ---------------------------------------------------------------------------
    // API — pan iso (translation écran) (bloquable en encounter)
    // ---------------------------------------------------------------------------
    const pan = useCallback((dx, dy, opts) => {
        setCam((prev) => {
            if (!opts?.force && prev.lock && prev.mode === "encounter")
                return prev;
            let nx = prev.offsetX + dx;
            let ny = prev.offsetY + dy;
            if (prev.bounds) {
                nx = clamp(nx, prev.bounds.minX, prev.bounds.maxX);
                ny = clamp(ny, prev.bounds.minY, prev.bounds.maxY);
            }
            return { ...prev, offsetX: nx, offsetY: ny };
        });
    }, []);
    const setTarget = useCallback((target, opts) => {
        setCam((prev) => {
            if (!opts?.force && prev.lock === false && prev.mode === "exploration") {
                // en exploration, target est optionnel (follow). On autorise quand même.
            }
            return { ...prev, target };
        });
    }, []);
    const setBounds = useCallback((bounds) => {
        setCam((prev) => {
            if (!bounds)
                return { ...prev, bounds: null };
            const nx = clamp(prev.offsetX, bounds.minX, bounds.maxX);
            const ny = clamp(prev.offsetY, bounds.minY, bounds.maxY);
            return { ...prev, bounds, offsetX: nx, offsetY: ny };
        });
    }, []);
    return {
        ...cam,
        forward,
        set,
        move,
        rotate,
        zoom,
        pan,
        setTarget,
        setBounds,
    };
}
