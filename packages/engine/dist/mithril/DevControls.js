"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AmbientConfig } from "../ambient-config";
import { useCamera } from "./hooks/useCamera";
import { getSeason, getDayPhase } from "../time";
/**
 * Mithril Engine — DevControls v2.0
 * Panneau debug interne pour tester ambiance + caméra
 */
export default function DevControls() {
    const [visible, setVisible] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [season, setSeason] = useState(getSeason());
    const [phase, setPhase] = useState(getDayPhase());
    const camera = useCamera();
    // Accent visuel saison → bordure
    useEffect(() => {
        if (!visible)
            return;
        document.body.style.outline = `2px solid ${AmbientConfig.ambientLight[phase]}`;
    }, [phase, visible]);
    // Synchroniser dataset (utilisé par AmbientManager)
    useEffect(() => {
        if (!visible)
            return;
        document.body.dataset.season = season;
        document.body.dataset.phase = phase;
    }, [season, phase]);
    if (!visible)
        return (_jsx("button", { onClick: () => setVisible(true), className: "fixed bottom-3 right-3 z-[9999] bg-amber-800/80 text-white text-xs px-3 py-1.5 rounded-md shadow-lg", children: "\u2699\uFE0F Dev" }));
    return (_jsxs("div", { className: "fixed bottom-3 right-3 z-[9999] w-64 p-3 bg-neutral-900/95 text-white rounded-lg border border-amber-700 shadow-xl", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("h3", { className: "text-sm font-bold", children: "\u2699\uFE0F Dev Controls" }), _jsx("button", { onClick: () => setVisible(false), className: "text-amber-400 hover:text-amber-200", children: "\u2716" })] }), _jsx("div", { className: "mb-2", children: _jsxs("label", { className: "flex items-center space-x-2 text-xs", children: [_jsx("input", { type: "checkbox", checked: audioEnabled, onChange: () => setAudioEnabled(!audioEnabled) }), _jsx("span", { children: "Activer son spatial" })] }) }), _jsxs("div", { className: "mb-2", children: [_jsx("label", { className: "text-xs", children: "\uD83C\uDF38 Saison :" }), _jsxs("select", { value: season, onChange: (e) => setSeason(e.target.value), className: "w-full mt-1 bg-neutral-800 text-xs rounded px-1 py-0.5", children: [_jsx("option", { value: "winter", children: "\u2744\uFE0F Hiver" }), _jsx("option", { value: "spring", children: "\uD83C\uDF37 Printemps" }), _jsx("option", { value: "summer", children: "\u2600\uFE0F \u00C9t\u00E9" }), _jsx("option", { value: "autumn", children: "\uD83C\uDF42 Automne" })] })] }), _jsxs("div", { className: "mb-2", children: [_jsx("label", { className: "text-xs", children: "\uD83D\uDD53 Moment du jour :" }), _jsxs("select", { value: phase, onChange: (e) => setPhase(e.target.value), className: "w-full mt-1 bg-neutral-800 text-xs rounded px-1 py-0.5", children: [_jsx("option", { value: "morning", children: "\uD83C\uDF05 Matin" }), _jsx("option", { value: "day", children: "\uD83C\uDF1E Jour" }), _jsx("option", { value: "evening", children: "\uD83C\uDF07 Soir" }), _jsx("option", { value: "night", children: "\uD83C\uDF19 Nuit" })] })] }), _jsxs("div", { className: "mt-3 border-t border-neutral-700 pt-2", children: [_jsx("label", { className: "text-xs block mb-1", children: "\uD83C\uDFA5 Position cam\u00E9ra" }), ["x", "y", "z"].map((axis) => (_jsxs("div", { className: "flex items-center mb-1", children: [_jsx("span", { className: "w-4 text-right text-xs mr-1", children: axis.toUpperCase() }), _jsx("input", { type: "range", min: -5, max: 5, step: 0.1, value: camera[axis], onChange: (e) => camera.set({
                                    ...camera,
                                    [axis]: parseFloat(e.target.value),
                                }), className: "flex-1 accent-amber-500" })] }, axis)))] })] }));
}
