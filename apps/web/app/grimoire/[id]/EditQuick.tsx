"use client";

import React from "react";
import { WORLDS } from "@config/worlds";

// Type local pour les champs du formulaire
type Field = {
  id: string;
  title: string;
  type: "short" | "long" | string;
  placeholder?: string;
};

export default function EditQuick({ id }: { id: string }) {
  const world = WORLDS.find((w) => w.id === id);
  const [mode, setMode] = React.useState<"character" | "story">("character");

  const fields: Field[] =
    mode === "character"
      ? world?.specs.characters?.fields ?? []
      : world?.specs.story?.fields ?? [];

  const [data, setData] = React.useState<Record<string, any>>({});
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string>("");

  async function onGenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/grimoire/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          world: id,
          mode,
          data,
        }),
      });

      const json = await res.json();
      if (!json.ok) {
        setResult(`Erreur: ${json.text ?? "Erreur"}`);
      } else {
        setResult(json.text);
      }
    } catch (err) {
      setResult(`Erreur réseau: ${String(err)}`);
    }
    setLoading(false);
  }

  return (
    <div className="rounded-lg border border-amber-300 bg-white p-4">
      {/* Sélecteur de mode */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setMode("character")}
          className={
            "px-3 py-1 rounded border " +
            (mode === "character" ? "bg-amber-100" : "bg-white")
          }
        >
          Personnage
        </button>

        <button
          onClick={() => setMode("story")}
          className={
            "px-3 py-1 rounded border " +
            (mode === "story" ? "bg-amber-100" : "bg-white")
          }
        >
          Synopsis
        </button>
      </div>

      {/* Titre du monde */}
      <div className="ml-auto opacity-60 text-sm">{world?.title}</div>

      {/* Formulaire */}
      <div className="grid gap-3 mt-3">
        {fields.map((f) => (
          <div key={f.id} className="grid gap-1">
            <label className="text-sm font-semibold">{f.title}</label>

            {f.type === "long" ? (
              <textarea
                className="rounded border p-2"
                rows={4}
                placeholder={f.placeholder}
                onChange={(e) =>
                  setData((d) => ({ ...d, [f.id]: e.target.value }))
                }
              />
            ) : (
              <input
                className="rounded border p-2"
                placeholder={f.placeholder}
                onChange={(e) =>
                  setData((d) => ({ ...d, [f.id]: e.target.value }))
                }
              />
            )}
          </div>
        ))}
      </div>

      {/* Bouton Générer */}
      <div className="mt-4 flex items-center gap-3">
        <button
          disabled={loading}
          onClick={onGenerate}
          className="rounded-md bg-black text-white px-4 py-2 hover:opacity-90 disabled:opacity-40"
        >
          {loading ? "Génération..." : "Générer"}
        </button>
      </div>

      {/* Résultat */}
      {result && (
        <div className="mt-4 rounded-md border bg-white/70 p-4 whitespace-pre-wrap text-sm leading-6">
          {result}
        </div>
      )}
    </div>
  );
}
