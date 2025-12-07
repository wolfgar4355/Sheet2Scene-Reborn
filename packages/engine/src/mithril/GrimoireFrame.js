"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState, } from "react";
import AudioBoot from "./AudioBoot";
import useSeason from "./hooks/useSeason";
const MithrilContext = createContext(null);
export function useMithril() {
    const ctx = useContext(MithrilContext);
    if (!ctx) {
        throw new Error("useMithril must be used inside <GrimoireFrame>");
    }
    return ctx;
}
/**
 * 🧙‍♂️ GrimoireFrame — layout global du grimoire
 * Gestion du flip de page, saison, ambiance, etc.
 */
export default function GrimoireFrame({ children }) {
    const initialSeason = useSeason();
    const [season, setSeason] = useState(initialSeason);
    const [isFlipping, setFlipping] = useState(false);
    // Si le hook recalcule la saison (changement d’heure / de mois), on synchronise l’état
    useEffect(() => {
        setSeason(initialSeason);
    }, [initialSeason]);
    const flip = () => {
        setFlipping(true);
        setTimeout(() => setFlipping(false), 800);
    };
    const bg = "/images/bg_hall.png";
    const parchment = "/images/parchment.png";
    return (_jsx(MithrilContext.Provider, { value: { season, setSeason, flip, isFlipping }, children: _jsxs("main", { className: "relative w-full h-full overflow-hidden bg-black text-white", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-70 transition-all", style: { backgroundImage: `url(${bg})` } }), _jsx("div", { className: "absolute inset-0 pointer-events-none bg-no-repeat bg-contain mix-blend-lighten opacity-90 transition-all", style: { backgroundImage: `url(${parchment})` } }), _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { rotateY: 0, opacity: 1 }, animate: { rotateY: isFlipping ? 180 : 0, opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.8 }, className: "relative w-full h-full", children: children }, isFlipping ? "flip" : "idle") }), _jsx(AudioBoot, {})] }) }));
}
