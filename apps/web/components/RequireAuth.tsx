"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/client";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseBrowser();

    let alive = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!alive) return;

      if (!data.session) {
        router.replace("/auth/login");
        return;
      }

      setReady(true);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace("/auth/login");
    });

    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-[100svh] grid place-items-center text-white">
        Chargement...
      </div>
    );
  }

  return <>{children}</>;
}
