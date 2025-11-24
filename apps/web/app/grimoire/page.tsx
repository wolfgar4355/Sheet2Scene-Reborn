// apps/web/app/grimoire/page.tsx
import Link from "next/link";
import { BookShell } from "@components/BookShell";
import { readAll } from "@engine";
import WORLDS from "@engine"; // <-- si tu veux les mondes

export default async function GrimoireHome() {
  const items = await readAll();

  return (
    <BookShell>
      <h1 className="text-2xl font-serif mb-6">📖 Grimoire 2.0</h1>

      <p className="opacity-70 mb-4">
        Répertoire complet des entrées du grimoire.  
        <br />
        Clique pour consulter, éditer ou lier avec un monde.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/grimoire/${item.id}`}
            className="block rounded-xl border border-amber-300 bg-white/80 hover:bg-white p-4"
          >
            <div className="text-xl font-serif flex gap-2">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <div className="opacity-60 text-sm mt-2">
              {item.tags?.join(", ") || "Aucun tag"}
            </div>
          </Link>
        ))}
      </div>
    </BookShell>
  );
}
