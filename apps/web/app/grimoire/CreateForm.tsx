"use client";

import { useState, FormEvent } from "react";

type ApiCreateResponse = {
  ok: boolean;
  item?: { id: string; title?: string };
  error?: string;
};

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [tags, setTags] = useState("");
  const [saving, setSaving] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) {
      alert("Titre requis");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/grimoire", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          icon: icon.trim() || undefined,
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
        }),
      });

      const j = (await res.json()) as ApiCreateResponse;

      if (res.ok && j.item?.id) {
        window.location.href = `/grimoire/${j.item.id}`;
      } else {
        alert(j.error ?? `Erreur HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Titre</label>
        <input
          className="w-full rounded border px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nom de l’entrée..."
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Icône (optionnel)</label>
        <input
          className="w-full rounded border px-3 py-2"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="ex: 🧙‍♂️"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Tags (séparés par des virgules)</label>
        <input
          className="w-full rounded border px-3 py-2"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="ex: magie, feu"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-black text-white px-4 py-2 disabled:opacity-50"
        disabled={saving}
      >
        {saving ? "Création..." : "Créer"}
      </button>
    </form>
  );
}
