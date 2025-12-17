"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
/**
 * 📖 Mithril Engine v2 — PageTurner AAA
 * + flip 3D amélioré
 * + sécurité bounds
 * + décor cohérent avec GrimoireFrame
 */
export default function PageTurner({ step, pages }) {
    // Sécurise le step (évite crash)
    const safeStep = Math.max(0, Math.min(step, pages.length - 1));
    return (_jsx("div", { className: "relative w-full h-full overflow-hidden perspective-[2000px]", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { rotateY: 90, opacity: 0, skewY: "6deg" }, animate: { rotateY: 0, opacity: 1, skewY: "0deg" }, exit: { rotateY: -90, opacity: 0, skewY: "-6deg" }, transition: { duration: 0.8, ease: "easeInOut" }, className: "\n            absolute inset-0 \n            shadow-[0_0_50px_rgba(0,0,0,0.45)]\n            bg-[url('/images/parchment.png')]\n            bg-contain bg-center bg-no-repeat\n            p-8 overflow-y-auto\n          ", style: {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                }, children: pages[safeStep] }, safeStep) }) }));
}
