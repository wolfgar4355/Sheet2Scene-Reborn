// packages/engine/src/ambient/manifest.ts
const f = (base) => ({
    mp3: `${base}.mp3`,
    ogg: `${base}.ogg`,
});
export const SOUND_MANIFEST = [
    // UI / livre
    {
        id: "ui.book.open",
        label: "Grimoire open",
        category: "book",
        loop: false,
        files: [
            { format: "mp3", url: "/sounds/sound-book-open.mp3" },
            { format: "ogg", url: "/sounds/sound-book-open.ogg" },
        ],
        volume: 0.9,
    },
    {
        id: "ui.book.close",
        label: "Grimoire close",
        category: "book",
        loop: false,
        files: [
            { format: "mp3", url: "/sounds/sound-book-close.mp3" },
            { format: "ogg", url: "/sounds/sound-book-close.ogg" },
        ],
        volume: 0.9,
    },
    {
        id: "ui.book.page",
        label: "Page flip",
        category: "book",
        loop: false,
        files: [
            { format: "mp3", url: "/sounds/sound-page-flip.mp3" },
            { format: "ogg", url: "/sounds/sound-page-flip.ogg" },
        ],
        volume: 0.8,
    },
    // WEATHER — boucles
    {
        id: "weather.rain.light.loop",
        category: "weather",
        loop: true,
        volume: 0.6,
        files: [
            { format: "mp3", url: f("/sounds/weather/rain_light_loop_01").mp3 },
            { format: "ogg", url: f("/sounds/weather/rain_light_loop_01").ogg },
        ],
    },
    {
        id: "weather.rain.heavy.loop",
        category: "weather",
        loop: true,
        volume: 0.75,
        files: [
            { format: "mp3", url: f("/sounds/weather/rain_heavy_loop_01").mp3 },
            { format: "ogg", url: f("/sounds/weather/rain_heavy_loop_01").ogg },
        ],
    },
    {
        id: "weather.snow.blizzard.loop",
        category: "weather",
        loop: true,
        volume: 0.7,
        files: [
            { format: "mp3", url: f("/sounds/weather/blizzard_loop_01").mp3 },
            { format: "ogg", url: f("/sounds/weather/blizzard_loop_01").ogg },
        ],
    },
    {
        id: "weather.sandstorm.loop",
        category: "weather",
        loop: true,
        volume: 0.7,
        files: [
            { format: "mp3", url: f("/sounds/weather/sandstorm_loop_01").mp3 },
            { format: "ogg", url: f("/sounds/weather/sandstorm_loop_01").ogg },
        ],
    },
    // THUNDER — liés à THUNDER_VARIANTS
    {
        id: "thunder.close.01",
        category: "thunder",
        loop: false,
        prioritize: true,
        volume: 1,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_close_01").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_close_01").ogg },
        ],
    },
    {
        id: "thunder.close.02",
        category: "thunder",
        loop: false,
        prioritize: true,
        volume: 1,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_close_02").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_close_02").ogg },
        ],
    },
    {
        id: "thunder.close.03",
        category: "thunder",
        loop: false,
        prioritize: true,
        volume: 1,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_close_03").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_close_03").ogg },
        ],
    },
    {
        id: "thunder.mid.01",
        category: "thunder",
        loop: false,
        volume: 0.9,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_mid_01").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_mid_01").ogg },
        ],
    },
    {
        id: "thunder.mid.02",
        category: "thunder",
        loop: false,
        volume: 0.9,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_mid_02").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_mid_02").ogg },
        ],
    },
    {
        id: "thunder.mid.03",
        category: "thunder",
        loop: false,
        volume: 0.9,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_mid_03").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_mid_03").ogg },
        ],
    },
    {
        id: "thunder.far.01",
        category: "thunder",
        loop: false,
        volume: 0.7,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_far_01").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_far_01").ogg },
        ],
    },
    {
        id: "thunder.far.02",
        category: "thunder",
        loop: false,
        volume: 0.7,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_far_02").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_far_02").ogg },
        ],
    },
    {
        id: "thunder.far.03",
        category: "thunder",
        loop: false,
        volume: 0.7,
        files: [
            { format: "mp3", url: f("/sounds/thunder/thunder_far_03").mp3 },
            { format: "ogg", url: f("/sounds/thunder/thunder_far_03").ogg },
        ],
    },
    // AMBIENT — biomes
    {
        id: "ambient.forest.day",
        category: "ambient",
        loop: true,
        volume: 0.55,
        files: [
            { format: "mp3", url: f("/sounds/ambient/forest_day_loop_01").mp3 },
            { format: "ogg", url: f("/sounds/ambient/forest_day_loop_01").ogg },
        ],
    },
    {
        id: "ambient.forest.night",
        category: "ambient",
        loop: true,
        volume: 0.5,
        files: [
            { format: "mp3", url: f("/sounds/ambient/forest_night_loop_01").mp3 },
            { format: "ogg", url: f("/sounds/ambient/forest_night_loop_01").ogg },
        ],
    },
    {
        id: "ambient.city.tavern",
        category: "ambient",
        loop: true,
        volume: 0.6,
        files: [
            { format: "mp3", url: f("/sounds/ambient/tavern_loop_01").mp3 },
            { format: "ogg", url: f("/sounds/ambient/tavern_loop_01").ogg },
        ],
        reverb: "hall",
    },
    // SPELLS — quelques exemples
    {
        id: "spell.fireball.cast",
        category: "spell",
        loop: false,
        prioritize: true,
        volume: 1,
        files: [
            { format: "mp3", url: f("/sounds/spells/fireball_cast_01").mp3 },
            { format: "ogg", url: f("/sounds/spells/fireball_cast_01").ogg },
        ],
    },
    {
        id: "spell.fireball.impact",
        category: "spell",
        loop: false,
        prioritize: true,
        volume: 1,
        files: [
            { format: "mp3", url: f("/sounds/spells/fireball_impact_01").mp3 },
            { format: "ogg", url: f("/sounds/spells/fireball_impact_01").ogg },
        ],
    },
    {
        id: "spell.lightning.cast",
        category: "spell",
        loop: false,
        volume: 0.9,
        files: [
            { format: "mp3", url: f("/sounds/spells/lightning_cast_01").mp3 },
            { format: "ogg", url: f("/sounds/spells/lightning_cast_01").ogg },
        ],
    },
    {
        id: "spell.lightning.strike",
        category: "spell",
        loop: false,
        volume: 1,
        prioritize: true,
        files: [
            { format: "mp3", url: f("/sounds/spells/lightning_strike_01").mp3 },
            { format: "ogg", url: f("/sounds/spells/lightning_strike_01").ogg },
        ],
    },
];
export function getSoundById(id) {
    return SOUND_MANIFEST.find((s) => s.id === id);
}
