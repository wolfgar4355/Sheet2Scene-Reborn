/**
 * 🌩️ Mithril Engine – Ambient System AAA
 * Config centrale : saisons, météo, lumière, ambiances, tempêtes, tonnerre.
 */
export type AmbientSource = {
    id: string;
    file: string;
    x: number;
    y: number;
    z: number;
    maxDistance?: number;
    volume?: number;
    refDistance?: number;
    rolloffFactor?: number;
};
export type AmbientWeather = "clear" | "windy" | "rain" | "snow" | "fog";
export declare const AmbientConfig: {
    enableSpatialAudio: boolean;
    ambientLight: {
        morning: string;
        day: string;
        evening: string;
        night: string;
    };
    /**
     * 🔊 Sources spatialisées
     * NOTE : Tous les `file:` sont SANS extension.
     * Le moteur charge auto : .ogg → .mp3
     */
    sources: AmbientSource[];
};
