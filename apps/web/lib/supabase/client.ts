import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

export function createSupabaseBrowser() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Optionnel mais pratique: compat avec du code qui fait `import { supabase } ...`
export const supabase = createSupabaseBrowser();
