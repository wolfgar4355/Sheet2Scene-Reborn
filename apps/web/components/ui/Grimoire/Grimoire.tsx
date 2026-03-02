"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, useCallback, useRef } from "react";
// Import temporaire pour le son. Si bookAudio n'est pas encore migré avec l'architecture Reborn,
// cela permet de prévenir les crash en SSR/CSR.
import bookAudio from "@/utils/bookSounds";

/**
 * Shell externe du Grimoire (Texture Cuir/Bois).
 * Conserve l'aspect sombre et le layout CSS Grid en deux colonnes (pour les deux pages).
 */
export function BookShell({ children }: PropsWithChildren) {
    return (
        <div className="mx-auto w-full max-w-5xl">
            <div className="relative rounded-2xl bg-[#3b2f2a] p-[10px] shadow-2xl">
                {/* Ligne centrale simulée (reliure / tranche) */}
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/40 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10" />

                {/* Conteneur des pages */}
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-inner gap-0 bg-[#f4e4bc] relative">
                    {children}
                </div>
            </div>
        </div>
    );
}

/**
 * Page Gauche du Grimoire.
 * Utilise Framer Motion pour donner un léger effet 3D asymétrique.
 */
export function PageLeft({ children }: PropsWithChildren) {
    const onFlip = useCallback(() => {
        if (typeof bookAudio !== "undefined" && bookAudio.flip) {
            bookAudio.flip().catch(() => { });
        }
    }, []);

    return (
        <motion.div
            initial={{ rotateY: -2, opacity: 0.98 }}
            whileHover={{ rotateY: -1 }}
            onPointerDown={onFlip}
            className="bg-[url('/images/parchment.png')] bg-cover bg-center p-6 md:p-10 relative overflow-hidden"
            style={{ transformOrigin: "right center", perspective: 1000 }}
        >
            {/* Ombre douce sur la droite près de la reliure */}
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

/**
 * Page Droite du Grimoire.
 * Utilise Framer Motion pour donner un léger effet 3D asymétrique inversé.
 */
export function PageRight({ children }: PropsWithChildren) {
    const onFlip = useCallback(() => {
        if (typeof bookAudio !== "undefined" && bookAudio.flip) {
            bookAudio.flip().catch(() => { });
        }
    }, []);

    return (
        <motion.div
            initial={{ rotateY: 2, opacity: 0.98 }}
            whileHover={{ rotateY: 1 }}
            onPointerDown={onFlip}
            className="bg-[url('/images/parchment.png')] bg-cover bg-center p-6 md:p-10 border-l border-black/10 relative overflow-hidden"
            style={{ transformOrigin: "left center", perspective: 1000 }}
        >
            {/* Ombre douce sur la gauche près de la reliure */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
