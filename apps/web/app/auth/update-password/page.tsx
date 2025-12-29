"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/client";

export default function UpdatePasswordPage() {
  const supabase = getSupabaseBrowser();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  // Optionnel mais utile: si le user arrive ici sans session (pas en recovery),
  // on évite une page "mystère".
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { data, error } = await supabase.auth.getUser();
      if (cancelled) return;

      // Si pas de session/user, on laisse quand même la page s’afficher,
      // mais on peut donner un message clair.
      if (error || !data.user) {
        setError(
          "Session de réinitialisation manquante. Recommence via “Mot de passe oublié”."
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (password.trim().length < 8) {
      setError("Mot de passe trop court (minimum 8 caractères).");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setDone(true);
    setTimeout(() => {
      router.push("/grimoire/intro");
      router.refresh();
    }, 900);
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-6 bg-black/60 rounded-xl w-[min(420px,92vw)]"
      >
        <h1 className="text-xl font-bold text-center">Nouveau mot de passe</h1>

        {done ? (
          <p className="text-green-400 text-center">
            ✅ Mot de passe mis à jour
          </p>
        ) : (
          <>
            <input
              type="password"
              required
              autoComplete="new-password"
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded bg-white/10"
            />

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="py-2 rounded bg-amber-700 hover:bg-amber-600 disabled:opacity-50 font-semibold"
            >
              {loading ? "Mise à jour..." : "Mettre à jour"}
            </button>
          </>
        )}
      </form>
    </main>
  );
}
