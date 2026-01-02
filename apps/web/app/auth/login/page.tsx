"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = getSupabaseBrowser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/grimoire/intro");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-6 bg-black/60 rounded-xl"
      >
        <h1 className="text-xl font-bold text-white text-center">Connexion</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="px-3 py-2 rounded bg-white/10 text-white"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="px-3 py-2 rounded bg-white/10 text-white"
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white"
        >
          {loading ? "Connexion..." : "Login"}
        </button>
      </form>
    </main>
  );
}
