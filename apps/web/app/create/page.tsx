"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BookShell, PageLeft, PageRight } from "@/components/Grimoire";
import { WORLDS, POSES, WorldKey } from "./options";
import { triggerPageTurn, triggerBookIntro } from "@/components/BookAnimation";
import { GrimoireFrame } from "engine";

export default function CreatePage() {
  const router = useRouter();
  const [world, setWorld] = useState<WorldKey | "">("");
  const [era, setEra] = useState<string>("");
  const [cls, setCls] = useState<string>("");
  const [pose, setPose] = useState<typeof POSES[number]["key"] | "">("");

  // Restore previous selections from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("s2s:create:last") || "null");
      if (saved) {
        setWorld(saved.world ?? "");
        setEra(saved.era ?? "");
        setCls(saved.cls ?? "");
        setPose(saved.pose ?? "");
      }
    } catch {}
    
    // Jouer une animation réactive d'ouverture de page pour l'immersion
    triggerBookIntro();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("s2s:create:last", JSON.stringify({ world, era, cls, pose }));
    } catch {}
  }, [world, era, cls, pose]);

  const worldObj = useMemo(() => (world ? WORLDS[world] : null), [world]);
  const canPickEra = Boolean(worldObj);
  const canPickClass = Boolean(worldObj && era);
  const canGenerate = Boolean(world && era && cls && pose);

  const [isGenerating, setIsGenerating] = useState(false);
  const [apiResult, setApiResult] = useState<any>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canGenerate || isGenerating) return;
    setIsGenerating(true);
    setApiResult(null);
    triggerPageTurn(); // Animation sonore + visuelle contextuelle

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ world, era, cls, pose }),
      });
      const data = await res.json();
      setApiResult(data);
      try { (navigator as any)?.vibrate?.(20); } catch {}
    } catch (err: any) {
      setApiResult({ error: "Erreur réseau. Impossible de contacter les dieux du code." });
    } finally {
      setIsGenerating(false);
    }
  }

  // Helper pour afficher le label
  const labelOf = (key: string, list?: Readonly<{ key: string; label: string }[]> | { key: string; label: string }[]) => {
    if (!key) return "";
    if (!list) return (WORLDS[key as WorldKey]?.label) ?? key;
    return list.find((x) => x.key === key)?.label ?? key;
  };

  return (
    <GrimoireFrame worldId={world || "mithril-quest"} page={1}>
      <BookShell>
        {/* PAGE GAUCHE — formulaire */}
        <PageLeft>
          <form onSubmit={onSubmit} className="grid gap-6">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-[#4a3b2b] uppercase tracking-wider title-shadow">
              Tisser une Scène
            </h1>

            {/* Monde */}
            <div className="grid gap-2">
              <label className="text-[#594632] font-semibold tracking-wide">Monde</label>
              <select
                className="w-full bg-[#faedd9]/90 border border-[#bfa282] rounded p-2 text-[#3b2f2a] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8b5e34]"
                value={world}
                onChange={(e) => { setWorld((e.target.value || "") as WorldKey | ""); setEra(""); setCls(""); }}
              >
                <option value="">{`— choisir l'univers —`}</option>
                {Object.entries(WORLDS).map(([k, v]) => (
                  <option key={k} value={k}>{v.label}</option>
                ))}
              </select>
            </div>

            {/* Ère */}
            <div className="grid gap-2">
              <label className="text-[#594632] font-semibold tracking-wide">Ère d'Histoire</label>
              <select
                className="w-full bg-[#faedd9]/90 border border-[#bfa282] rounded p-2 text-[#3b2f2a] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8b5e34] disabled:opacity-50"
                value={era}
                onChange={(e) => setEra(e.target.value)}
                disabled={!canPickEra}
              >
                <option value="">{`— choisir la période —`}</option>
                {worldObj?.eras.map((er) => (
                  <option key={er.key} value={er.key}>{er.label}</option>
                ))}
              </select>
            </div>

            {/* Classe */}
            <div className="grid gap-2">
              <label className="text-[#594632] font-semibold tracking-wide">Archétype / Classe</label>
              <select
                className="w-full bg-[#faedd9]/90 border border-[#bfa282] rounded p-2 text-[#3b2f2a] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8b5e34] disabled:opacity-50"
                value={cls}
                onChange={(e) => setCls(e.target.value)}
                disabled={!canPickClass}
              >
                <option value="">{`— choisir l'archétype —`}</option>
                {worldObj?.classes.map((c) => (
                  <option key={c.key} value={c.key}>{c.label}</option>
                ))}
              </select>
            </div>

            {/* Poses */}
            <section aria-labelledby="poses" className="mt-2">
              <h2 id="poses" className="text-xl font-semibold mb-3 text-[#4a3b2b]">Action / Posture</h2>
              <div className="grid grid-cols-2 gap-3">
                {POSES.map((p) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => { setPose(p.key); triggerPageTurn(); }}
                    className={`inline-flex items-center justify-center border-2 rounded-xl px-2 py-2 text-sm font-semibold transition-all duration-300
                                ${pose === p.key 
                                  ? "bg-[#6b4e2e] border-[#3b2f2a] text-[#faedd9] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]" 
                                  : "bg-transparent border-[#bfa282] text-[#594632] hover:bg-[#e6ccaa]"}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Submit */}
            <div className="mt-4">
              <button
                type="submit"
                disabled={!canGenerate || isGenerating}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-md ${
                  isGenerating ? "bg-[#8b5e34]/70 text-[#faedd9]/80 cursor-wait" :
                  canGenerate ? "bg-[#8b5e34] hover:bg-[#6b4e2e] text-[#faedd9] shadow-[#6b4e2e]/50 hover:shadow-lg" : "bg-[#c5b8a6] text-[#8e8578] cursor-not-allowed"}`}
              >
                {isGenerating ? "Incantation en cours..." : "Révéler la scène"}
              </button>
            </div>
            
            <p className="mt-2 text-xs text-[#8e8578] text-center italic">
              Cette magie sollicite directement les serveurs d'IA. Soyez patient.
            </p>
          </form>
        </PageLeft>

        {/* PAGE DROITE — aperçu / résultat de l'IA */}
        <PageRight>
          <div className="space-y-6 h-full flex flex-col">
            <h2 className="text-2xl font-semibold text-[#4a3b2b] uppercase tracking-wider border-b-2 border-[#bfa282]/50 pb-2">
              Chronique Révélée
            </h2>
            
            {!apiResult && !isGenerating && (
              <div className="flex-1 flex flex-col items-center justify-center text-[#8e8578] opacity-70 italic text-center space-y-4">
                <p>Les pages sont encore vierges, Maître du Jeu.</p>
                <p>Complétez votre requête pour invoquer l'historique.</p>
                <div className="text-sm mt-4 p-4 border border-[#bfa282] rounded-lg bg-[#faedd9]/30">
                  <p className="font-semibold text-[#594632] not-italic mb-1">Résumé de la configuration :</p>
                  <ul className="text-left not-italic">
                    <li>Monde : <span className="font-semibold">{labelOf(world, undefined)}</span></li>
                    <li>Ère : <span className="font-semibold">{labelOf(era, worldObj?.eras)}</span></li>
                    <li>Classe : <span className="font-semibold">{labelOf(cls, worldObj?.classes)}</span></li>
                    <li>Action : <span className="font-semibold">{labelOf(pose, POSES)}</span></li>
                  </ul>
                </div>
              </div>
            )}

            {isGenerating && (
              <div className="flex-1 flex items-center justify-center text-[#6b4e2e] animate-pulse font-serif text-lg">
                <p>Les runes brillent... connexion à l'Œil d'Odin...</p>
              </div>
            )}

            {apiResult && (
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-[#3b2f2a] leading-relaxed">
                {apiResult.error ? (
                  <div className="p-4 bg-red-900/10 text-red-900 border border-red-900/30 rounded md">
                    <p className="font-bold mb-1">Échec de l'Invocation</p>
                    <p className="text-sm">{apiResult.error}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-serif mb-4 text-[#8b5e34]">
                      Résultat de la Scène
                    </h3>
                    <div className="prose prose-stone prose-sm">
                      <pre className="whitespace-pre-wrap font-serif text-[15px] bg-[#faedd9]/40 p-4 border border-[#bfa282]/40 rounded-lg shadow-inner">
                        {JSON.stringify(apiResult, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </PageRight>
      </BookShell>
    </GrimoireFrame>
  );
}
