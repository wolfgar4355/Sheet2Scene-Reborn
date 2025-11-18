// app/s/[slug]/page.tsx

type Character = {
  id: string;
  name: string;
  system: string;
  data: any;
};

async function getData(slug: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const res = await fetch(`${base}/api/public/s/${slug}`, {
    cache: "no-store", // fresh à chaque fois
  });
  if (!res.ok) return null;
  const j = (await res.json()) as { character?: Character };
  return j?.character ?? null;
}

type PageParams = { slug: string };
type PageCtx = { params: Promise<PageParams> };

export default async function PublicSheet({ params }: PageCtx) {
  const { slug } = await params;     // ⬅️ important

  const ch = await getData(slug);
  if (!ch) {
    return (
      <main className="min-h-screen grid place-items-center bg-[#0B0C10] text-white">
        <div className="max-w-xl w-full rounded-lg border border-white/10 p-6 bg-white/5">
          <h1 className="text-xl font-semibold">Lien invalide ou expiré</h1>
          <p className="text-sm text-white/70 mt-2">
            Impossible de charger la fiche partagée. Vérifie l’URL ou re-génère un lien.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid place-items-center bg-[#0B0C10] text-white">
      <div className="max-w-3xl w-full rounded-lg border border-white/10 p-6 bg-white/5">
        <h1 className="text-2xl font-bold mb-2">{ch.name}</h1>
        <p className="text-sm mb-4">Système&nbsp;: {ch.system}</p>
        <pre className="text-xs overflow-auto bg-black/50 p-3 rounded">
          {JSON.stringify(ch.data, null, 2)}
        </pre>
      </div>
    </main>
  );
}
