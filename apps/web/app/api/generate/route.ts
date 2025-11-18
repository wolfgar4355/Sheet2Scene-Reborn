import { NextResponse } from "next/server";

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
  let body: ReqBody = {};
  try {
    body = (await req.json()) as ReqBody;
  } catch {
    // body vide => ok
  }

  // Neutralisation IP avant tout appel externe
  body = sanitizeBody(body);

  // 1) Proxy vers ton backend externe si configuré (S2S)
  const s2sUrl = process.env.S2S_API_URL;
  const s2sToken = process.env.S2S_API_TOKEN;
  if (s2sUrl && s2sToken) {
    try {
      const r = await fetch(`${trimTrailingSlash(s2sUrl)}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${s2sToken}`,
        },
        body: JSON.stringify(body),
      });
      const data = await r.json().catch(() => ({}));
      return NextResponse.json(data, { status: r.status });
    } catch (err: any) {
      return NextResponse.json(
        { error: err?.message ?? "Proxy error" },
        { status: 502 }
      );
    }
  }

  // 2) Fallback direct OpenAI (facultatif)
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    return NextResponse.json(
      {
        error:
          "Generator not configured (set S2S_API_URL+S2S_API_TOKEN or OPENAI_API_KEY).",
      },
      { status: 501 }
    );
  }

  try {
    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input:
          body.prompt ??
          "Generate a neutral, legally distinct RPG scene description.",
      }),
    });
    const data = await r.json().catch(() => ({}));
    return NextResponse.json(data, { status: r.status });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Internal error" },
      { status: 500 }
    );
  }
}
