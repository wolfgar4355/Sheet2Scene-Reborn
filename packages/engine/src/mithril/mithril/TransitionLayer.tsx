"use client";

import { motion } from "framer-motion";
import SceneController from "./SceneController";

export default function TransitionLayer({ scene }: { scene: SceneController }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scene.state ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none fixed inset-0 bg-black/60 z-40"
        />
    );
}
