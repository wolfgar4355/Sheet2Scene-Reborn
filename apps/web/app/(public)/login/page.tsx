"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const password = String(fd.get("password") ?? "");
    if (!email || !password) return;

    setLoading(true);
    // TODO: brancher ton auth ici. Pour la démo on “réussit” toujours :
    await new Promise((r) => setTimeout(r, 350));
    router.replace("/toc"); // ouvre la table des matières après “login”
  }

  return (
    <main className="min-h-[100svh] flex items-center justify-center p-4 md:p-8 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(0,0,0,.4),transparent_60%),#0b0b0b]">
      {/* Carte grimoire */}
      <div className="relative w-full max-w-[720px] mx-auto">
        {/* Image du grimoire */}
        <Image
          src="/assets/props/grimoire.png"
          alt="Grimoire Sheet2Scene"
          width={1440}
          height={2048}
          priority
          className="w-full h-auto select-none pointer-events-none drop-shadow-[0_40px_60px_rgba(0,0,0,.6)]"
        />

        {/* Formulaire centré SUR la couverture */}
        <form
          onSubmit={onSubmit}
          className="
            absolute inset-0
            flex items-center justify-center
          "
        >
          {/* zone intérieure de la couverture */}
          <div
            className="
              w-[72%] max-w-[520px]
              bg-white/80 dark:bg-black/30 backdrop-blur
              rounded-md shadow-[0_10px_30px_rgba(0,0,0,.35)]
              border border-black/10 dark:border-white/10
              px-5 py-6 md:px-6 md:py-7
            "
            // Ajuste précisément la position au centre du panneau
            style={{
              // léger décalage vertical pour épouser la “fenêtre” du livre
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
              // optionnel : petite perspective de profondeur
              boxShadow:
                "inset 0 0 0.5px rgba(0,0,0,.25), 0 18px 36px rgba(0,0,0,.35)",
            }}
          >
            <h1 className="text-center text-lg md:text-xl font-semibold tracking-wide mb-4 text-neutral-900 dark:text-amber-100">
              Se connecter
            </h1>

            <div className="grid gap-3">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Courriel
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-md border border-neutral-300/70 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="votre@email.com"
                />
              </label>

              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Mot de passe
                <input
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-1 w-full rounded-md border border-neutral-300/70 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="••••••••"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-amber-700 hover:bg-amber-800 disabled:opacity-60 text-white px-4 py-2 font-medium transition"
              >
                {loading ? "Ouverture..." : "Entrer"}
              </button>

              <a
                href="/join"
                className="text-center text-sm text-neutral-700/80 dark:text-amber-200/90 hover:underline mt-2"
              >
                Nouveau ? Créer un compte
              </a>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
