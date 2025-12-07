'use client';
import { useEffect, useState } from 'react';
export function useCamera() {
    const [pos, setPos] = useState({ x: 0, y: 0, z: 0 });
    useEffect(() => {
        let raf = 0;
        const t0 = performance.now();
        const loop = (t) => {
            const dt = (t - t0) / 1000;
            const breath = Math.sin(dt * 0.5) * 0.2; // -0.2..0.2
            setPos((p) => ({ ...p, z: breath }));
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);
    return { x: pos.x, y: pos.y, z: pos.z, set: setPos };
}
