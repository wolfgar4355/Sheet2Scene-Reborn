// app/grimoire/[id]/page.tsx
import path from "path";
import { promises as fs } from "fs";
import type { GrimoireEntry } from "@/config/grimoire";
import { BookShell, PageLeft, PageRight } from "@/components/BookShell";
import FlipLink from "@/components/FlipLink";
import EditQuick from "./EditQuick";

/** Petite utilitaire serveur pour charger toutes les entrées */
async function readAll(): Promise<GrimoireEntry[]> {
  const DATA = path.join(process.cwd(), "data/grimoire.json");
  try {
    const raw = await fs.readFile(DATA, "utf8");
    return JSON.parse(raw) as GrimoireEntry[];
  } catch {
    return [];
  }
}

/** Page serveur – Next 15.5: params est un Promise */
export default async function Page(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // <-- IMPORTANT: on “await” les params

  const items = await readAll();
  const item = items.find((e) => e.id === id);

  // --- Entrée introuvable ----------------------------------------------------
  if (!item) {
    return (
      <main className="p-6">
        <p>Entrée introuvable.</p>
        <FlipLink href="/grimoire" className="text-blue-700 underline">
          &larr; Retour au grimoire
        </FlipLink>
      </main>
    );
  }

  // --- Vue pro ----------------------------------------------------------------
  return (
    <main className="p-6">
      <BookShell>
        <PageLeft>
          <h1 className="text-2xl font-serif mb-4 flex items-center gap-2">
            {item.icon ?? "📖"} {item.title}
          </h1>
          <p className="opacity-70 text-sm">ID&nbsp;: {item.id}</p>

          {/* Ici, place ton rendu riche (markdown, résumé, etc.) */}
          {item.excerpt ? (
            <p className="mt-4 leading-relaxed">{item.excerpt}</p>
          ) : null}
          {item.body ? (
            <div className="prose prose-invert mt-6 whitespace-pre-wrap">
              {item.body}
            </div>
          ) : (
            <p className="mt-6 opacity-70">
              Aucun contenu détaillé pour le moment.
            </p>
          )}
        </PageLeft>

        <PageRight>
          <h2 className="text-xl font-serif mb-3">✏️ Édition rapide</h2>
          <EditQuick id={item.id} title={item.title} />

          <div className="mt-6">
            <FlipLink href="/grimoire" className="text-blue-700 underline">
              &larr; Retour au grimoire
            </FlipLink>
          </div>
        </PageRight>
      </BookShell>
    </main>
  );
}
