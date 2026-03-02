import { NextResponse } from "next/server";
import { runpodService } from "@/lib/runpod/service";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
    try {
        const supabase = createClient();

        // 1. Vérification de l'authentification
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
        }

        // 2. Récupérer le payload du client
        const body = await req.json();
        const { characterId, customPrompt } = body;

        if (!characterId && !customPrompt) {
            return NextResponse.json({ error: "characterId ou customPrompt requis" }, { status: 400 });
        }

        // TODO: Si characterId fourni, on pourrait récupérer la description de la BD pour forger le prompt
        // const { data: char } = await supabase.from('characters').select('appearance').eq('id', characterId).single();
        // const prompt = char?.appearance || "A fantasy adventurer";

        const prompt = customPrompt || "A fantasy adventurer portrait, masterpiece, high quality, digital painting";

        // 3. Appel de RunPod via le service côté serveur
        const output = await runpodService.runSync({
            prompt,
            negative_prompt: "low quality, bad anatomy, worst quality",
            width: 512,
            height: 768,
            num_inference_steps: 20
        });

        // 4. Retour au client
        return NextResponse.json({
            ok: true,
            output,
            message: "Génération RunPod réussie"
        });

    } catch (error: any) {
        console.error("[RunPod Route Error]", error);
        return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
}
