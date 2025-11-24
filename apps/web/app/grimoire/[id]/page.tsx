// apps/web/app/grimoire/[id]/page.tsx
import path from "path";
import { promises as fs } from "fs";
import { BookShell, PageLeft, PageRight } from "@components/BookShell";
import FlipLink from "@components/FlipLink";
import EditQuick from "./EditQuick";
import { readOne } from "@grimoire/grimoire.json";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await readOne(id);

  if (!item) {
    return (
      <main className="p-6">
        <p>Entrée introuvable.</p>
        <FlipLink href="/grimoire" className="text-blue-700 underline">
          ← Retour au grimoire
        </FlipLink>
      </main>
    );
  }

  return (
    <main className="p-6">
      <BookShell>
        <PageLeft>
          <h1 className="text-2xl font-serif mb-4 flex items-center gap-2">
            {item.icon} {item.title}
          </h1>

          <p className="opacity-70 text-sm">ID : {item.id}</p>

          {/* Excerpt */}
          {item.excerpt && (
            <p className="prose prose-invert mt-4 leading-relaxed">
              {item.excerpt}
            </p>
          )}

          {/* Body */}
          {item.body ? (
            <div className="prose prose-invert mt-6 whitespace-pre-wrap">
              {item.body}
            </div>
          ) : (
            <p className="mt-6 opacity-70">Aucun contenu détaillé pour le moment.</p>
          )}
        </PageLeft>

        <PageRight>
          <h2 className="text-xl font-serif mb-3">⚙️ Édition rapide</h2>
          <EditQuick id={item.id} title={item.title} />

          <div className="mt-6">
            <FlipLink href="/grimoire" className="text-blue-700 underline">
              ← Retour au grimoire
            </FlipLink>
          </div>
        </PageRight>
      </BookShell>
    </main>
  );
}
