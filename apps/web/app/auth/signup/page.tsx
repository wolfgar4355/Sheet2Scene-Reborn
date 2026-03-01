"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const supabase = getSupabaseBrowser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      // optionnel: si tu veux email confirmation, tu peux ajouter options ici
      // options: { emailRedirectTo: `${location.origin}/auth/callback` }
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // ✅ compte créé → intro
    router.push("/grimoire/intro");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-6 bg-black/60 rounded-xl text-white"
      >
        <h1 className="text-xl font-bold text-center">Créer un compte</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 rounded bg-white/10"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          required
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 rounded bg-white/10"
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="py-2 rounded bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold"
        >
          {loading ? "Création..." : "Créer le compte"}
        </button>
      </form>
    </main>
  );
}
