"use client";

import { WORLDS } from "@config/worlds";
import useBookNav from "@hooks/useBookNav";

export default function WorldsList() {
  useBookNav();

  const goToWorld = (id: string) => {
    window.location.href = `/worlds/${id}`;
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mondes</h1>

      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {WORLDS.map((w) => (
          <li key={w.id}>
            <button
              onClick={() => goToWorld(w.id)}
              className="w-full text-left rounded-xl border p-4 hover:shadow transition"
            >
              <div className="text-3xl">{(w as any).emoji ?? "🌍"}</div>
              <div className="mt-2 font-semibold">{w.title}</div>

              {(w as any).tags?.length ? (
                <div className="text-xs opacity-70">
                  {(w as any).tags.join(", ")}
                </div>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
