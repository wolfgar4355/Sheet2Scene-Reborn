export type WeatherKind = "clear" | "rain" | "storm" | "snow" | "fog";
/**
 * État météo global utilisé par le moteur
 * → toujours un objet (TS strict-safe)
 */
export type WeatherState = {
    kind: "clear";
    intensity: 0;
} | {
    kind: "rain";
    intensity: number;
} | {
    kind: "snow";
    intensity: number;
} | {
    kind: "fog";
    intensity: number;
} | {
    kind: "storm";
    intensity: number;
};
export interface WeatherSound {
    mp3: string;
    ogg: string;
}
/**
 * Retourne les chemins audio pour un état météo donné
 */
export declare function pickWeatherSound(weather: WeatherState): WeatherSound;
/**
 * Helper utilitaire pour créer un WeatherState
 * (pratique pour SceneController, generators, etc.)
 */
export declare function createWeatherState(kind: WeatherKind, intensity?: number): WeatherState;
