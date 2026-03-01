"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";

export type CameraMode = "exploration" | "encounter";

export type CameraBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

export type CameraTarget = { x: number; y: number };

export type CameraState = {
  // (gardé pour futur 3D / yaw/pitch)
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;

  // zoom global (utile en iso)
  zoom: number;

  // iso camera (translation écran)
  offsetX: number;
  offsetY: number;

  // idle (n’écrase PAS offsetX/offsetY)
  idleX: number;
  idleY: number;

  // modes encounter
  mode: CameraMode;
  lock: boolean;
  target: CameraTarget | null;

  // clamp translation (optionnel)
  bounds: CameraBounds | null;
};

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

export function useCamera() {
  const [cam, setCam] = useState<CameraState>({
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

    const loop = (t: number) => {
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
  const forward = useMemo(
    () => ({
      x: Math.sin(cam.yaw) * Math.cos(cam.pitch),
      y: Math.sin(cam.pitch),
      z: Math.cos(cam.yaw) * Math.cos(cam.pitch) * -1,
    }),
    [cam.yaw, cam.pitch]
  );

  // ---------------------------------------------------------------------------
  // API — set
  // ---------------------------------------------------------------------------
  const set = useCallback((fn: (c: CameraState) => CameraState) => {
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
  const move = useCallback((dx: number, dy: number, dz: number) => {
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
  const rotate = useCallback((dyaw: number, dpitch: number) => {
    setCam((prev) => ({
      ...prev,
      yaw: prev.yaw + dyaw,
      pitch: clamp(prev.pitch + dpitch, -1.3, 1.3),
    }));
  }, []);

  // ---------------------------------------------------------------------------
  // API — zoom (bloquable si lock/mode encounter)
  // ---------------------------------------------------------------------------
  const zoom = useCallback((amount: number, opts?: { force?: boolean }) => {
    setCam((prev) => {
      if (!opts?.force && prev.lock && prev.mode === "encounter") return prev;
      return {
        ...prev,
        zoom: clamp(prev.zoom + amount, 0.3, 2.5),
      };
    });
  }, []);

  // ---------------------------------------------------------------------------
  // API — pan iso (translation écran) (bloquable en encounter)
  // ---------------------------------------------------------------------------
  const pan = useCallback((dx: number, dy: number, opts?: { force?: boolean }) => {
    setCam((prev) => {
      if (!opts?.force && prev.lock && prev.mode === "encounter") return prev;

      let nx = prev.offsetX + dx;
      let ny = prev.offsetY + dy;

      if (prev.bounds) {
        nx = clamp(nx, prev.bounds.minX, prev.bounds.maxX);
        ny = clamp(ny, prev.bounds.minY, prev.bounds.maxY);
      }

      return { ...prev, offsetX: nx, offsetY: ny };
    });
  }, []);

  const setTarget = useCallback((target: CameraTarget | null, opts?: { force?: boolean }) => {
    setCam((prev) => {
      if (!opts?.force && prev.lock === false && prev.mode === "exploration") {
        // en exploration, target est optionnel (follow). On autorise quand même.
      }
      return { ...prev, target };
    });
  }, []);

  const setBounds = useCallback((bounds: CameraBounds | null) => {
    setCam((prev) => {
      if (!bounds) return { ...prev, bounds: null };

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
