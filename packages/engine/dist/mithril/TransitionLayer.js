"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useScene } from "./SceneController";
/**
 * Mithril Engine v2 — TransitionLayer AAA FINAL
 * ------------------------------------------------
 * Effets atmosphériques premium :
 * - Teinte saisonnière dynamique
 * - Glow nocturne
 * - Lumière directionnelle matin/soir
 * - Haze météo (rain / fog / snow / storm)
 * - Intensité météo (0–1)
 * - Ajustement selon luminosité
 * - Effet mystique de grimoire
 */
export default function TransitionLayer() {
    const { season, phase: dayPhase, weather, intensity, lightLevel } = useScene();
    // Palette saison (propre, calibrée)
    const seasonTint = useMemo(() => ({
        winter: "rgba(160,200,255,1)",
        spring: "rgba(170,255,210,1)",
        summer: "rgba(255,230,140,1)",
        autumn: "rgba(255,150,90,1)",
    }), []);
    // Glow nocturne (augmente avec obscurité)
    const nightGlow = `rgba(180,200,255,${0.15 + (1 - lightLevel) * 0.35})`;
    // Directional tint
    const directionalTint = dayPhase === "morning"
        ? `rgba(255,180,120,${0.4 + intensity * 0.1})`
        : dayPhase === "evening"
            ? `rgba(255,120,90,${0.4 + intensity * 0.1})`
            : "rgba(255,255,255,0.06)";
    // Haze météo dynamique
    const weatherHaze = weather === "fog"
        ? `rgba(200,200,255,${0.25 + intensity * 0.4})`
        : weather === "rain"
            ? `rgba(160,180,255,${0.10 + intensity * 0.3})`
            : weather === "snow"
                ? `rgba(255,255,255,${0.15 + intensity * 0.35})`
                : weather === "storm"
                    ? `rgba(200,220,255,${0.30 + intensity * 0.4})`
                    : "transparent";
    return (_jsxs("div", { className: "pointer-events-none absolute inset-0 z-[5] transition-all duration-700", children: [_jsx("div", { className: "absolute inset-0 mix-blend-screen", style: {
                    background: `radial-gradient(60% 60% at 50% 50%, ${nightGlow}, transparent 80%)`,
                    opacity: 1,
                } }), _jsx("div", { className: "absolute inset-0 mix-blend-soft-light", style: {
                    background: `radial-gradient(
            75% 75% at 50% 50%,
            ${seasonTint[season]},
            transparent 90%
          )`,
                    opacity: 0.45 * lightLevel,
                } }), _jsx("div", { className: "absolute inset-0 mix-blend-overlay", style: {
                    background: `linear-gradient(
            to ${dayPhase === "morning"
                        ? "right"
                        : dayPhase === "evening"
                            ? "left"
                            : "bottom"},
            ${directionalTint},
            transparent 70%
          )`,
                    opacity: 0.4,
                } }), _jsx("div", { className: "absolute inset-0 mix-blend-lighten", style: {
                    background: `radial-gradient(
            80% 80% at 50% 50%,
            ${weatherHaze},
            transparent
          )`,
                    opacity: weather !== "clear" ? 1 : 0,
                } }), _jsx("div", { className: "absolute inset-0 mix-blend-soft-light", style: {
                    background: `radial-gradient(circle at 50% 45%, rgba(255,255,255,0.12), transparent 70%)`,
                    opacity: 0.35,
                } })] }));
}
