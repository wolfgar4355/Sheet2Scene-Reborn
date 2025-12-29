// apps/web/lib/supabase/admin.ts
import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

export function getAdmin() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
