"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PortraitButtonProps {
    characterId?: string;
    customPrompt?: string;
}

export default function PortraitButton({ characterId, customPrompt }: PortraitButtonProps) {
    const [busy, setBusy] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const run = async () => {
        setBusy(true);
        setErrorMsg("");
        setSuccessMsg("");

        try {
            // Appel de la NOUVELLE route interne sans divulguer de clés API clientes !
            const res = await fetch("/api/generate/portrait", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ characterId, customPrompt }),
            });

            const json = await res.json();

            if (!res.ok || !json?.ok) {
                throw new Error(json?.error || "Échec de la génération sur RunPod.");
            }

            setSuccessMsg("Portrait généré avec succès ! Le grimoire mettra à jour l'image sous peu.");

            // Si une logique de refresh est prévue, elle peut être déclenchée ici via un callback onComplete.

        } catch (e: any) {
            setErrorMsg(e.message || "Erreur de communication avec le serveur.");
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <motion.button
                className="relative overflow-hidden rounded-md border border-amber-900/40 bg-[url('/images/parchment.png')] bg-cover bg-center px-6 py-2 text-sm font-semibold text-amber-950 shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                onClick={run}
                disabled={busy}
                whileHover={!busy ? { scale: 1.05, rotateZ: 1 } : {}}
                whileTap={!busy ? { scale: 0.95, rotateZ: -1 } : {}}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Lueur subtile (Grimoire magic effect) */}
                {!busy && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                )}

                <span className="relative z-10 flex items-center gap-2">
                    {busy ? (
                        <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-amber-900 border-t-transparent" />
                            Incantation en cours...
                        </>
                    ) : (
                        "Générer portrait IA"
                    )}
                </span>
            </motion.button>

            {/* Messages de retour de sortilège */}
            {errorMsg && (
                <span className="text-xs text-red-500 font-medium bg-black/50 px-2 py-1 rounded">
                    {errorMsg}
                </span>
            )}
            {successMsg && (
                <span className="text-xs text-green-400 font-medium bg-black/50 px-2 py-1 rounded">
                    {successMsg}
                </span>
            )}
        </div>
    );
}
