// src/mithril/PageTurner.tsx
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
/**
 * 📖 Mithril Engine v2 — PageTurner AAA
 *
 * - Flip 3D naturel façon grimoire
 * - Compatible GrimoireFrame (perspective globale)
 * - Animation déclenchée par `page`
 * - API React standard (children)
 * - Zéro dépendance au contenu interne
 */
export default function PageTurner({ page, children, }) {
    return (_jsx("div", { className: "relative w-full h-full overflow-hidden", style: { perspective: "2000px" }, children: _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: {
                    rotateY: 90,
                    opacity: 0,
                    skewY: "4deg",
                    z: 20,
                }, animate: {
                    rotateY: 0,
                    opacity: 1,
                    skewY: "0deg",
                    z: 0,
                }, exit: {
                    rotateY: -90,
                    opacity: 0,
                    skewY: "-4deg",
                    z: -20,
                }, transition: {
                    duration: 0.85,
                    ease: "easeInOut",
                }, className: "\n            absolute inset-0\n            shadow-[0_0_60px_rgba(0,0,0,0.55)]\n            bg-no-repeat bg-cover bg-center\n            overflow-hidden\n            rounded-[8px]\n          ", style: {
                    backgroundImage: "url('/engine/grimoire/page-texture.webp')",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                }, children: [_jsx("div", { className: "absolute inset-0 pointer-events-none\n                       bg-[rgba(0,0,0,0.08)]\n                       mix-blend-multiply" }), _jsx("div", { className: "relative z-10 w-full h-full", children: children })] }, page) }) }));
}
