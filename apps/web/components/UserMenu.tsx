"use client";

import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function UserMenu() {
  const router = useRouter();
  const supabase = createSupabaseBrowser();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, [supabase]);

  async function logout() {
    await fetch("/auth/logout", { method: "POST" });
    router.push("/auth/login");
    router.refresh(); // 🔥 TRÈS IMPORTANT
  }

  if (!email) return null;

  return (
    <div className="flex items-center gap-4 text-sm text-amber-200">
      <span>{email}</span>

      <button
        onClick={logout}
        className="px-3 py-1 rounded bg-amber-700 hover:bg-amber-600 text-black"
      >
        Logout
      </button>
    </div>
  );
}
