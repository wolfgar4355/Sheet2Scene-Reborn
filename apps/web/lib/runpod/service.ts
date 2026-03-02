/**
 * Service pour interagir avec RunPod Serverless API en toute sécurité côté serveur.
 */

export interface RunPodInput {
    prompt: string;
    negative_prompt?: string;
    width?: number;
    height?: number;
    num_inference_steps?: number;
    [key: string]: any;
}

export interface RunPodResponse {
    id: string;
    status: "IN_QUEUE" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    output?: any;
    error?: string;
}

export class RunPodService {
    private apiKey: string;
    private endpointId: string;
    private baseUrl: string;

    constructor() {
        this.apiKey = process.env.RUNPOD_API_KEY || "";
        this.endpointId = process.env.RUNPOD_ENDPOINT_ID || "";

        if (!this.apiKey || !this.endpointId) {
            console.warn("⚠️ RUNPOD_API_KEY ou RUNPOD_ENDPOINT_ID manquant dans les variables d'environnement.");
        }

        this.baseUrl = `https://api.runpod.ai/v2/${this.endpointId}`;
    }

    /**
     * Appelle l'API en mode synchrone (runsync).
     * La requête bloquera jusqu'à ce que le worker renvoie le résultat ou qu'un timeout soit atteint.
     */
    async runSync(input: RunPodInput): Promise<any> {
        if (!this.apiKey || !this.endpointId) {
            throw new Error("Configuration RunPod incomplète côté serveur.");
        }

        const response = await fetch(`${this.baseUrl}/runsync`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify({ input }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erreur HTTP RunPod: ${response.status} - ${errorText}`);
        }

        const data: RunPodResponse = await response.json();

        if (data.status === "FAILED") {
            throw new Error(`Erreur interne du worker RunPod: ${data.error}`);
        }

        // Le format exact de 'output' dépend de l'image Docker utilisée sur RunPod (ex: ComfyUI, Auto1111)
        // En général, il renvoie un tableau d'URLs ou de base64.
        return data.output;
    }
}

export const runpodService = new RunPodService();
