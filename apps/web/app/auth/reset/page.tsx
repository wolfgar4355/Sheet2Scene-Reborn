"use client";

import { useState } from "react";
import { createSupabaseBrowser } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createSupabaseBrowser();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/update-password`,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setSent(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-6 bg-black/60 rounded-xl"
      >
        <h1 className="text-xl font-bold text-center">
          Réinitialiser le mot de passe
        </h1>

        {sent ? (
          <p className="text-green-400 text-sm text-center">
            📧 Email envoyé. Vérifie ta boîte.
          </p>
        ) : (
          <>
            <input
              type="email"
              required
              placeholder="Ton email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded bg-white/10"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button className="py-2 rounded bg-amber-700 hover:bg-amber-600">
              Envoyer le lien
            </button>
          </>
        )}
      </form>
    </main>
  );
}
