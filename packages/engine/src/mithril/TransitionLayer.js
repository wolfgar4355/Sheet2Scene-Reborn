"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useScene } from "./SceneController";
import { getSeason, getDayPhase } from "./time";
export default function TransitionLayer() {
    const { lightLevel } = useScene();
    const seasonTint = useMemo(() => {
        return {
            winter: "#80b3ff",
            spring: "#88dcc7",
            summer: "#ffd74a",
            autumn: "#ff995a",
        };
    }, []);
    const season = getSeason();
    const dayPhase = getDayPhase();
    const baseTint = dayPhase === "night" ? "#ffffff" : "#ffffff";
    return (_jsxs("div", { className: "pointer-events-none absolute inset-0 z-[5] mix-blend-soft-light transition-all duration-700", children: [_jsx("div", { className: "absolute inset-0", style: {
                    background: `radial-gradient(60% 60% at 50% 50%, ${baseTint}, transparent 80%)`,
                    opacity: 0.65,
                } }), _jsx("div", { className: "absolute inset-0", style: {
                    background: `radial-gradient(70% 70% at 50% 50%, ${seasonTint[season]}, transparent 90%)`,
                    opacity: 0.45 * lightLevel,
                } })] }));
}
