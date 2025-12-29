"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase/client";

export default function UpdatePasswordPage() {
  const supabase = createSupabaseBrowser();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setDone(true);
    setTimeout(() => {
      router.push("/grimoire/intro");
      router.refresh();
    }, 1000);
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-6 bg-black/60 rounded-xl"
      >
        <h1 className="text-xl font-bold text-center">
          Nouveau mot de passe
        </h1>

        {done ? (
          <p className="text-green-400 text-center">
            ✅ Mot de passe mis à jour
          </p>
        ) : (
          <>
            <input
              type="password"
              required
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded bg-white/10"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button className="py-2 rounded bg-amber-700 hover:bg-amber-600">
              Mettre à jour
            </button>
          </>
        )}
      </form>
    </main>
  );
}
