"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
/**
 * Mithril Engine v2 – PageTurner
 */
export default function PageTurner({ step, pages }) {
    return (_jsx("div", { className: "relative w-full h-full overflow-hidden", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: -90, opacity: 0 }, transition: { duration: 0.8, ease: "easeInOut" }, className: "absolute inset-0 bg-[url('/images/parchment.png')] bg-cover bg-center shadow-xl p-8 overflow-y-auto", children: pages[step] }, step) }) }));
}
