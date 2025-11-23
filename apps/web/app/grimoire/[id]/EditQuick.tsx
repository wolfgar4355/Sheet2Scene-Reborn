"use client";

import { useRouter } from "next/navigation";

type PageProps = {
  params: { id: string };
};

export default function EditQuickPage({ params }: PageProps) {
  const router = useRouter();

  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Édition rapide (WIP)</h1>
      <p className="text-sm text-zinc-400">
        La page d&apos;édition rapide du grimoire sera reliée au moteur Mithril plus tard.
        Pour l&apos;instant, cette version est juste là pour que le build passe proprement.
      </p>

      <div className="rounded-lg border border-zinc-700 p-3 text-sm">
        <p>
          ID de l&apos;entrée : <code>{params.id}</code>
        </p>
      </div>

      <button
        type="button"
        className="self-start rounded-md border border-zinc-700 px-3 py-1 text-sm"
        onClick={() => router.back()}
      >
        ⟵ Retour au grimoire
      </button>
    </main>
  );
}
