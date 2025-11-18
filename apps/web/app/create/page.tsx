"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

/* -----------------------------------------------------------
 * 🎨 Données locales (worlds, eras, classes, poses)
 * 100% compatibles avec ton système (pré-Mithril 1.5)
 ----------------------------------------------------------- */

const WORLDS = {
  scifi: {
    label: "Galactic",
    eras: [
      { key: "new-republic", label: "New Republic" },
      { key: "massive-commonwealth", label: "Massive Commonwealth" },
      { key: "synthetic-uprising", label: "Synthetic Uprising" },
      { key: "outer-colony", label: "Outer Colony" },
      { key: "star-pilot", label: "Star Pilot" },
    ],
    classes: [
      { key: "scout", label: "Scout" },
      { key: "engineer", label: "Engineer" },
      { key: "adept", label: "Order Adept" },
      { key: "legionnaire", label: "Sovereign Legionnaire" },
      { key: "pilot", label: "Star Pilot" }
    ]
  },

  fantasy: {
    label: "Fantasy",
    eras: [
      { key: "medieval-high", label: "Medieval (High Fantasy)" },
      { key: "dark-ages", label: "Dark Ages" },
      { key: "renaissance", label: "Renaissance Arcana" }
    ],
    classes: [
      { key: "mage", label: "Mage" },
      { key: "ranger", label: "Ranger" },
      { key: "druid", label: "Druid" },
      { key: "paladin", label: "Paladin" },
      { key: "monk", label: "Monk" }
    ]
  },

  pathseeker: {
    label: "Pathseeker",
    eras: [
      { key: "runes-era", label: "Age des Runes" },
      { key: "fallen", label: "Fallen Age" },
      { key: "spellblade", label: "Spellblade" }
    ],
    classes: [
      { key: "scout", label: "Scout" },
      { key: "sentinel", label: "Sentinel" },
      { key: "warden", label: "Warden" }
    ]
  },

  darknight: {
    label: "The Darknight Chronicles",
    eras: [
      { key: "dark-medieval", label: "Dark Medieval" },
      { key: "occult", label: "Occultiste" }
    ],
    classes: [
      { key: "vigilante", label: "Vigilante" },
      { key: "occultist", label: "Occultiste" }
    ]
  },
};

/* Poses universelles */
const POSES = [
  { key: "combat", label: "Combat" },
  { key: "neutral", label: "Neutre" },
  { key: "casting", label: "Sort / Magie" },
  { key: "travel", label: "Exploration" },
];

/* Types */
type WorldKey = keyof typeof WORLDS;

/* -----------------------------------------------------------
 * 🌀 Composant principal
 ----------------------------------------------------------- */

export default function CreatePage() {
  const router = useRouter();

  const [world, setWorld] = useState<WorldKey | "">("");
  const [era, setEra] = useState("");
  const [cls, setCls] = useState("");
  const [pose, setPose] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    router.prefetch("/grimoire");
  }, [router]);

  /* Soumission */
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!world || !era || !cls || !pose) return alert("Tous les champs sont requis.");

    setIsGenerating(true);

    try {
      const r = await fetch("/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ world, era, cls, pose }),
      });

      const data = await r.json();

      if (!data?.id) {
        alert("Erreur de génération.");
      } else {
        router.push(`/grimoire/${data.id}`);
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau.");
    }

    setIsGenerating(false);
  }

  /* Helpers */
  function labelOf(path: string, list?: { key: string; label: string }[]) {
    if (!list) return path;
    const found = list.find((i) => i.key === path);
    return found ? found.label : path;
  }

  /* -----------------------------------------------------------
   * Rendu
   ----------------------------------------------------------- */

  return (
    <main className="min-h-screen w-full flex flex-col items-center mt-10 gap-6 px-4">
      <h1 className="text-5xl font-semibold text-white">Créer une scène ✨</h1>

      <form onSubmit={onSubmit} className="w-full max-w-lg bg-zinc-900 p-6 rounded-xl shadow-xl space-y-6">

        {/* Monde */}
        <div>
          <label className="text-white text-xl">Monde</label>
          <select
            className="mt-2 w-full bg-zinc-800 border border-zinc-700 p-2 rounded"
            value={world}
            onChange={(e) => {
              setWorld(e.target.value as WorldKey);
              setEra("");
              setCls("");
            }}
          >
            <option value="">Choisir…</option>
            {Object.entries(WORLDS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        {/* Époque */}
        {!!world && (
          <div>
            <label className="text-white text-xl">Époque</label>
            <select
              className="mt-2 w-full bg-zinc-800 border border-zinc-700 p-2 rounded"
              value={era}
              onChange={(e) => setEra(e.target.value)}
            >
              <option value="">Choisir…</option>
              {WORLDS[world].eras.map((er) => (
                <option key={er.key} value={er.key}>{er.label}</option>
              ))}
            </select>
          </div>
        )}

{/* --- Classe -------------------------------------------------------- */}
{!!era && (
  <div className="w-full mt-6">
    <label className="block text-lg font-semibold text-white mb-2">
      Classe
    </label>

    {/* Sélection sécurisée : si world est vide, classes = [] */}
    {(() => {
      const worldData = world ? WORLDS[world] : null;
      const classes = worldData?.classes ?? [];

      return (
        <select
          className="w-full bg-zinc-800 border border-zinc-700 rounded p-2"
          value={cls}
          onChange={(e) => setCls(e.target.value)}
        >
          <option value="">Choisir…</option>

          {classes.map((cl) => (
            <option key={cl.key} value={cl.key}>
              {cl.label}
            </option>
          ))}
        </select>
      );
    })()}
  </div>
)}

        {/* Pose */}
        {!!cls && (
          <div>
            <label className="text-white text-xl">Pose & Génération</label>
            <select
              className="mt-2 w-full bg-zinc-800 border border-zinc-700 p-2 rounded"
              value={pose}
              onChange={(e) => setPose(e.target.value)}
            >
              <option value="">Choisir…</option>
              {POSES.map((p) => (
                <option key={p.key} value={p.key}>{p.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* Submit */}
        {!!pose && (
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={isGenerating}
            className={`w-full mt-4 text-xl p-3 rounded-lg text-white shadow-lg ${
              isGenerating ? "bg-zinc-700 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {isGenerating ? "Génération…" : "Générer la scène"}
          </motion.button>
        )}
      </form>
    </main>
  );
}
