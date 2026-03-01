import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerUser } from "@/lib/supabase/server";
import UserMenu from "@/components/UserMenu";

export default async function GrimoireLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getServerUser();

  if (!user) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
