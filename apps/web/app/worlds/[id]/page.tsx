// app/worlds/[id]/page.tsx
import { notFound } from "next/navigation";
import path from "path";
import { promises as fs } from "fs";
import { BookShell, PageLeft, PageRight } from "@components/BookShell";
import FlipLink from "@components/FlipLink";

type World = {
  id: string;
  name: string;
  epoch?: string;
  description?: string;
  aiAgent?: string;
};

async function readAllWorlds(): Promise<World[]> {
  const DATA = path.join(process.cwd(), "data/worlds.json");
  try {
    const raw = await fs.readFile(DATA, "utf8");
    return JSON.parse(raw) as World[];
  } catch {
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const worlds = await readAllWorlds();
  const world = worlds.find((w) => w.id === id);

  if (!world) {
    notFound();
  }

  return (
    <main className="p-6">
      <BookShell>
        <PageLeft>
          <h1 className="text-3xl font-serif mb-4">{world.name}</h1>
          <p className="opacity-70 text-sm">
            Époque : {world.epoch ?? "Non définie"}
          </p>
          <p className="mt-4 whitespace-pre-wrap">{world.description}</p>
        </PageLeft>

        <PageRight>
          <h2 className="text-xl font-serif mb-3">Agent IA associé</h2>
          <p className="opacity-80">
            {world.aiAgent ?? "Aucun agent IA défini pour ce monde."}
          </p>

          <div className="mt-6">
            <FlipLink href="/worlds" className="text-blue-700 underline">
              &larr; Retour aux mondes
            </FlipLink>
          </div>
        </PageRight>
      </BookShell>
    </main>
  );
}
