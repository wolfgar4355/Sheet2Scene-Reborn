export function loadAudio(src) {
    const audio = document.createElement("audio");
    const ogg = src + ".ogg";
    const mp3 = src + ".mp3";
    if (audio.canPlayType("audio/ogg")) {
        audio.src = ogg;
    }
    else {
        audio.src = mp3;
    }
    audio.preload = "auto";
    return audio;
}
