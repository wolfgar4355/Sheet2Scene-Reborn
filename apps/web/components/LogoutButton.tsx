"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/auth/logout", { method: "POST" });

    // ⛔ coupe l'accès aux layouts protégés
    router.push("/auth/login");
    router.refresh(); // 🔥 ESSENTIEL
  }

  return (
    <button
      onClick={logout}
      className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
    >
      Logout
    </button>
  );
}
