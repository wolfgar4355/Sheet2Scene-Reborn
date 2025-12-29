import { redirect } from "next/navigation";
import { getServerUser } from "@/lib/supabase/server";
import IntroClient from "./IntroClient";

export default async function IntroPage() {
  const user = await getServerUser();

  if (!user) {
    redirect("/"); // landing page
  }

  return <IntroClient />;
}
