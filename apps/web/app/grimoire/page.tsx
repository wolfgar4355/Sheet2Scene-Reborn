// /var/www/prozip/s2s_full/apps/web/app/grimoire/page.tsx
import Link from "next/link";
import { BookShell } from "@/components/BookShell";
import { WORLDS } from "@/config/worlds";

export default function GrimoireHome() {
  return (
    <BookShell>
      <h1 className="text-2xl font-serif mb-6">📖 Grimoire 2.0</h1>

      <p className="opacity-70 mb-4">
        Choisis un monde pour créer un personnage ou un synopsis avec le générateur IA.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {WORLDS.map((w) => (
          <Link
            key={w.id}
            href={`/grimoire/${w.id}`}
            className="block rounded-xl border border-amber-300 bg-white/80 hover:bg-white p-4"
          >
            <div className="text-xl font-serif">
              {w.emoji} {w.title}
            </div>
            <div className="opacity-60 text-sm mt-1">{w.specs.character?.fields.length ?? 0} champs personnage</div>
          </Link>
        ))}
      </div>
    </BookShell>
  );
}
