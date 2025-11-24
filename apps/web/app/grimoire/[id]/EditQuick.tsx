"use client";

import { useRouter } from "next/navigation";

type EditQuickProps = {
  id: string;
  title: string;
};

export default function EditQuick({ id, title }: EditQuickProps) {
  const router = useRouter();

  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Édition rapide (WIP)</h1>

      <p className="text-sm text-zinc-400">
        La page d&apos;édition rapide du grimoire sera reliée au moteur Mithril plus
        tard. Pour l&apos;instant, cette version est juste là pour que le build
        passe proprement.
      </p>

      <div className="rounded-lg border border-zinc-700 p-3 text-sm">
        <p>
          <span className="font-semibold">ID de l&apos;entrée :</span>{" "}
          <code>{id}</code>
        </p>
        <p className="mt-1">
          <span className="font-semibold">Titre :</span>{" "}
          <span>{title}</span>
        </p>
      </div>

      <button
        type="button"
        className="self-start rounded-md border border-zinc-700 px-3 py-1 text-sm"
        onClick={() => router.back()}
      >
        ← Retour au grimoire
      </button>
    </main>
  );
}
