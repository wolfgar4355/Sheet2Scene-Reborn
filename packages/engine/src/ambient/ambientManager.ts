// packages/engine/src/ambient/ambientManager.ts

import { WeatherState, pickWeatherSound } from "./weather";
import { generateThunderEvent } from "./thunder";

export class AmbientManager {
  private weather: WeatherState = { kind: "clear", intensity: 0 };
  private audio: HTMLAudioElement | null = null;

  constructor() {}

  setWeather(kind: WeatherState["kind"], intensity: number) {
    this.weather = { kind, intensity };
    this.updateWeatherAudio();
  }

  private updateWeatherAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }

    if (this.weather.kind === "clear") return;

    const sound = pickWeatherSound(this.weather.kind, this.weather.intensity);
    this.audio = new Audio(sound);
    this.audio.loop = true;
    this.audio.volume = 0.7 * this.weather.intensity;
    this.audio.play();
  }

  // ⚡ Ajoute d'un éclair dynamique
  triggerThunder(distance01: number) {
    const event = generateThunderEvent(distance01);
    setTimeout(() => {
      const sound = new Audio(event.url);
      sound.volume = event.distance === "close" ? 1 : event.distance === "mid" ? 0.6 : 0.3;
      sound.play();
    }, event.delayMs);
  }

  getWeather() {
    return this.weather;
  }
}

export const ambientManager = new AmbientManager();
