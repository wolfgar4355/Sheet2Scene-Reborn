import { NextResponse } from "next/server";
import { getServerUser } from "@/lib/supabase/server";

export const runtime = "nodejs";

/* ---------- Types ---------- */
type ReqBody = {
  prompt?: string;
  world?: string;
  era?: string;
  cls?: string;
  pose?: string;
  [k: string]: unknown;
};

/* ---------- Utils ---------- */
function trimTrailingSlash(u: string) {
  return u.replace(/\/+$/, "");
}

/** Attention: laisser les expressions longues AVANT les courtes */
const REPLACEMENTS: Array<[RegExp, string]> = [
  // univers spatial (neutres & légaux)
  [/new republic/gi, "Nova Republic"],
  [/old republic/gi, "Ancient Commonwealth"],
  [/before[-\s]?yavin/gi, "Meridian"],
  [/clone wars/gi, "Synthetic Uprising"],
  [/coruscant/gi, "Auric Prime"],
  [/tatooine/gi, "Dunehaven"],
  [/hoth/gi, "Frostreach"],
  [/mandalorian/gi, "Clanborn Ranger"],
  [/stormtrooper/gi, "Sovereign Legionnaire"],
  [/x-?wing/gi, "Arrow-class starfighter"],
  [/lightsaber/gi, "plasma blade"],

  // termes de castes / ordres
  [/\bjedi\b/gi, "Light Order Adept"],
  [/\bjedi knight\b/gi, "Light Order Adept"],
  [/\bpadawan\b/gi, "Light Order Novice"],
  [/\bsith\b/gi, "Dread Order Adept"],
];

function sanitizeText(s: string) {
  return REPLACEMENTS.reduce((acc, [re, sub]) => acc.replace(re, sub), s);
}

function sanitizeBody(b: ReqBody): ReqBody {
  const out: ReqBody = { ...b };
  if (typeof out.prompt === "string") out.prompt = sanitizeText(out.prompt);
  for (const key of ["world", "era", "cls", "pose"]) {
    const v = out[key];
    if (typeof v === "string") out[key] = sanitizeText(v);
  }
  return out;
}

/* ---------- Route ---------- */
export async function POST(req: Request) {
  // Optionnel : sécuriser la route (décommenter si le test réussi)
  const user = await getServerUser();
  if (!user) {
    return NextResponse.json({ error: "Non autorisé, veuillez consulter le Grimoire" }, { status: 401 });
  }

  let body: ReqBody = {};
  try {
    body = (await req.json()) as ReqBody;
  } catch {
    // body vide => ok
  }

  // Neutralisation IP avant tout appel externe
  body = sanitizeBody(body);

  const rawPrompt = `You are a game master storytelling an immersive scene in a tabletop RPG. 
World context: ${body.world} (${body.era}). 
The hero is a ${body.cls}.
Action taken: ${body.pose}.
Current prompt / overrides: ${body.prompt || "Describe what is happening right now with high descriptive evocative quality."}
Format your response as a direct narrative directed to the player using 'you'.`;

  const messages = [{ role: "user", content: rawPrompt }];

  // 1) Proxy vers RunPod vLLM si configuré
  const runpodKey = process.env.RUNPOD_API_KEY;
  const runpodEndpoint = process.env.RUNPOD_ENDPOINT_ID;
  
  if (runpodKey && runpodEndpoint) {
    console.log("[LLM] Using RunPod vLLM for scene generation...");
    try {
      const r = await fetch(`https://api.runpod.ai/v2/${runpodEndpoint}/openai/v1/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${runpodKey}`,
        },
        body: JSON.stringify({
          model: "s2s-model", // RunPod ignore souvent ce champ, mais il est requis par le format natif OpenAI
          messages,
          temperature: 0.7,
        }),
      });
      
      if (r.ok) {
        const data = await r.json().catch(() => ({}));
        const messageContent = data.choices?.[0]?.message?.content || "Les dieux sont silencieux.";
        return NextResponse.json({ result: messageContent }, { status: 200 });
      } else {
        console.warn(`[LLM] RunPod failed with status ${r.status}, falling back to OpenAI...`);
      }
    } catch (err: any) {
      console.error("[LLM] Error connecting to RunPod:", err.message);
    }
  } else {
      console.log("[LLM] RunPod environment variables missing, falling back to OpenAI...");
  }

  // 2) Fallback direct OpenAI (facultatif / Dev local)
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    return NextResponse.json(
      {
        error:
          "Le générateur n'est pas configuré. Veuillez contacter l'Archimage (Manque RUNPOD_API_KEY/ENDPOINT_ID ou OPENAI_API_KEY).",
      },
      { status: 501 }
    );
  }

  try {
    console.log("[LLM] Using OpenAI fallback (gpt-4o-mini)...");
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
      }),
    });
    
    if (!r.ok) {
        throw new Error(`OpenAI responded with ${r.status}`);
    }
    
    const data = await r.json().catch(() => ({}));
    const messageContent = data.choices?.[0]?.message?.content || "Les dieux sont silencieux.";
    
    return NextResponse.json({ result: messageContent }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erreur interne de magie." },
      { status: 500 }
    );
  }
}
