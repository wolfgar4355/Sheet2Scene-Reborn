"use client";

import { useWeather } from "@hooks/useWeather";

/**
 * ⚠️ Doit correspondre EXACTEMENT
 * aux valeurs supportées par ambientManager
 */
type WeatherKind =
  | "clear"
  | "rain"
  | "storm"
  | "snow"
  | "wind"
  | "fog";

export default function WeatherControls() {
  const { weather, update } = useWeather();

  return (
    <div className="p-4 bg-black/40 rounded-xl text-white space-y-3">
      <h3 className="font-bold text-lg">🌦️ Météo</h3>

      <select
        value={weather.kind}
        onChange={(e) =>
          update(e.target.value as WeatherKind, weather.intensity)
        }
        className="bg-gray-800 p-2 rounded"
      >
        <option value="clear">Clear</option>
        <option value="rain">Rain</option>
        <option value="storm">Storm</option>
        <option value="snow">Snow</option>
        <option value="wind">Wind</option>
        <option value="fog">Fog</option>
      </select>

      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={weather.intensity}
        onChange={(e) =>
          update(weather.kind, parseFloat(e.target.value))
        }
        className="w-full"
      />

      <p>Intensity: {(weather.intensity * 100).toFixed(0)}%</p>
    </div>
  );
}
