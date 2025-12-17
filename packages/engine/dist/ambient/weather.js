// packages/engine/src/ambient/weather.ts
export function getWeatherProfile(ctx) {
    switch (ctx.weather) {
        case "light-rain":
            return { ambientLoopId: "weather.rain.light.loop", stormIntensity: 0 };
        case "heavy-rain":
            return { ambientLoopId: "weather.rain.heavy.loop", stormIntensity: 1 };
        case "storm":
            return { ambientLoopId: "weather.rain.heavy.loop", stormIntensity: 2 };
        case "snow":
            return { ambientLoopId: "weather.snow.blizzard.loop", stormIntensity: 0 };
        case "blizzard":
            return { ambientLoopId: "weather.snow.blizzard.loop", stormIntensity: 2 };
        case "sandstorm":
            return { ambientLoopId: "weather.sandstorm.loop", stormIntensity: 2 };
        case "magic-storm":
            return { ambientLoopId: "weather.rain.heavy.loop", stormIntensity: 2 };
        default:
            return { ambientLoopId: undefined, stormIntensity: 0 };
    }
}
