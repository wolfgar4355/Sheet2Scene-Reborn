"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export default function TransitionLayer({ scene }) {
    return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: scene.state ? 1 : 0 }, transition: { duration: 0.4 }, className: "pointer-events-none fixed inset-0 bg-black/60 z-40" }));
}
