/**
 * Charge un son (OGG ou MP3), en respectant un cache interne.
 * Renvoie une PROMESSE.
 */
export declare function loadAudio(srcBase: string): Promise<HTMLAudioElement>;
