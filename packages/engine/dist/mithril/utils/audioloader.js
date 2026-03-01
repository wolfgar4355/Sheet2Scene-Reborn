// -----------------------------------------------------------------------------
// audioLoader.ts — Loader Audio AAA (OGG/MP3, Promises, Cache)
// -----------------------------------------------------------------------------
const audioCache = new Map();
/**
 * Teste correctement si un format est supporté
 */
function supports(type) {
    const a = document.createElement("audio");
    return !!a.canPlayType(type)?.replace(/no/, "");
}
/**
 * Charge un son (OGG ou MP3), en respectant un cache interne.
 * Renvoie une PROMESSE.
 */
export async function loadAudio(srcBase) {
    // Déjà chargé ?
    if (audioCache.has(srcBase)) {
        return audioCache.get(srcBase).element;
    }
    const audio = document.createElement("audio");
    const ogg = `${srcBase}.ogg`;
    const mp3 = `${srcBase}.mp3`;
    let chosen = null;
    if (supports("audio/ogg"))
        chosen = ogg;
    else if (supports("audio/mpeg"))
        chosen = mp3;
    // Fallback si aucun format n’est détecté
    if (!chosen)
        chosen = mp3;
    audio.src = chosen;
    audio.preload = "auto";
    // On retourne une promesse qui attend le chargement
    const promise = new Promise((resolve, reject) => {
        const onLoaded = () => {
            cleanup();
            audioCache.set(srcBase, { element: audio, src: chosen });
            resolve(audio);
        };
        const onError = () => {
            cleanup();
            console.warn(`[AudioLoader] Échec du chargement : ${chosen}`);
            reject(new Error("Audio load error"));
        };
        const cleanup = () => {
            audio.removeEventListener("canplaythrough", onLoaded);
            audio.removeEventListener("error", onError);
        };
        audio.addEventListener("canplaythrough", onLoaded, { once: true });
        audio.addEventListener("error", onError, { once: true });
    });
    // Lance silencieusement le load
    audio.load();
    return promise;
}
