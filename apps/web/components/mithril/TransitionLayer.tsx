"use client";

import { useEffect, useMemo } from "react";
import { AmbientConfig } from "@/lib/mithril/ambient.config";
import { getSeason, getDayPhase } from "@/lib/mithril/ambient.config";
import { useScene } from "./SceneController";

/**
 * Mithril Engine 1.5.1 — TransitionLayer
 * ✦ Dual Ambient Layer (moment + season)
 * ✦ Used for subtle global lighting tint behind the grimoire
 */

export default function TransitionLayer() {
    const { lightLevel } = useScene();

    // 🎨 Couleur par saison
    const seasonTintMap: Record<string, string> = {
        winter: "#80b3ff",  // bleu froid
        spring: "#9fe79c",  // vert clair
        summer: "#ffe186",  // jaune chaud
        autumn: "#ff995a",  // orange
    };

    const computed = useMemo(() => {
        // --- Moment du jour ---
        const phase = getDayPhase(); // morning / day / evening / night

        // --- Teinte de base selon phase ---
        const base = AmbientConfig.ambientLight[phase];

        // --- Teinte saisonnière ---
        const season = getSeason();
        const seasonTint = seasonTintMap[season] ?? "#ffffff";

        return { base, seasonTint };
    }, [lightLevel]);

    return (
        <div className="pointer-events-none absolute inset-0 z-[5] mix-blend-soft-light transition-all duration-700">
            {/* Couche 1 : moment de la journée */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        `radial-gradient(60% 60% at 50% 50%, ${computed.base}, transparent 80%)`,
                    opacity: 0.65,
                }}
            />

            {/* Couche 2 : saison */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        `radial-gradient(70% 70% at 50% 50%, ${computed.seasonTint}, transparent 90%)`,
                    opacity: 0.45,
                }}
            />
        </div>
    );
}
