// packages/engine/src/ambient/sound.manifest.ts
// --------------------------------------------------
// Mithril Engine v2 — Sound Manifest AAA (CANON)
// --------------------------------------------------
/* --------------------------------------------------
 * MANIFEST
 * -------------------------------------------------- */
export const SoundManifest = {
    /* ---------------- UI ---------------- */
    ui: {
        clickSoft: "/sounds/ui/ui_click_soft.mp3",
        clickHeavy: "/sounds/ui/ui_click_heavy.mp3",
        hover: "/sounds/ui/ui_hover.mp3",
        error: "/sounds/ui/ui_error.mp3",
        pageDrag: "/sounds/ui/page_drag.mp3",
        scrollMove: "/sounds/ui/scroll_move.mp3",
    },
    /* -------------- AMBIENT ------------- */
    ambient: {
        fire: "/sounds/ambient/fire_loop.mp3",
        wind: "/sounds/ambient/wind_loop.mp3",
        candles: "/sounds/ambient/candles.mp3",
        hallEcho: "/sounds/ambient/hall_echo.mp3",
    },
    /* -------------- WEATHER ------------- */
    weather: {
        rainLight: "/sounds/weather/rain_light_loop.mp3",
        rainMedium: "/sounds/weather/rain_medium_loop.mp3",
        rainHeavy: "/sounds/weather/rain_heavy_loop.mp3",
        rainRoof: "/sounds/weather/rain_on_roof_loop.mp3",
        windLight: "/sounds/weather/wind_light_loop.mp3",
        windMedium: "/sounds/weather/wind_medium_loop.mp3",
        windStrong: "/sounds/weather/wind_strong_loop.mp3",
        snowSoft: "/sounds/weather/snow_soft_wind.mp3",
        snowBlizzard: "/sounds/weather/snow_blizzard_loop.mp3",
        fogRumble: "/sounds/weather/fog_rumble_bed.mp3",
        fogLowWind: "/sounds/weather/fog_low_wind.mp3",
    },
    /* --------------- STORM -------------- */
    storm: {
        stormBed: "/sounds/storm/storm_bed_loop.mp3",
        stormHeavy: "/sounds/storm/storm_heavy_bed_loop.mp3",
        gusts: "/sounds/storm/storm_wind_gusts.mp3",
        rainMix: "/sounds/storm/storm_rain_mix_loop.mp3",
    },
    /* -------------- THUNDER ------------- */
    /**
     * ⚡ IMPORTANT
     * Les clés correspondent AUX DISTANCES,
     * PAS aux variantId logiques (voir helper plus bas)
     */
    thunder: {
        close: [
            "/sounds/thunder/impact_close_01.mp3",
            "/sounds/thunder/impact_close_02.mp3",
            "/sounds/thunder/impact_close_03.mp3",
        ],
        mid: [
            "/sounds/thunder/impact_mid_01.mp3",
            "/sounds/thunder/impact_mid_02.mp3",
            "/sounds/thunder/impact_mid_03.mp3",
        ],
        far: [
            "/sounds/thunder/impact_far_01.mp3",
            "/sounds/thunder/impact_far_02.mp3",
            "/sounds/thunder/impact_far_03.mp3",
        ],
        rumble: [
            "/sounds/thunder/rumble_deep_01.mp3",
            "/sounds/thunder/rumble_deep_02.mp3",
            "/sounds/thunder/rumble_deep_03.mp3",
        ],
        echo: [
            "/sounds/thunder/echo_wide_01.mp3",
            "/sounds/thunder/echo_wide_02.mp3",
        ],
        aftershock: [
            "/sounds/thunder/aftershock_01.mp3",
            "/sounds/thunder/aftershock_02.mp3",
        ],
    },
    /* --------------- SPELLS ------------- */
    spells: {
        fire: {
            fireboltCast: "/sounds/spells/fire/firebolt_cast_01.mp3",
            fireballExplosion: "/sounds/spells/fire/fireball_explosion_01.mp3",
            flameBurst: "/sounds/spells/fire/flame_burst_01.mp3",
        },
        lightning: {
            lightningCast: "/sounds/spells/lightning/lightning_cast_01.mp3",
            lightningChain: "/sounds/spells/lightning/lightning_chain_01.mp3",
            lightningImpact: "/sounds/spells/lightning/lightning_impact_01.mp3",
        },
        ice: {
            frostCast: "/sounds/spells/ice/frost_cast_01.mp3",
            iceCrack: "/sounds/spells/ice/ice_crack_01.mp3",
            iceBlast: "/sounds/spells/ice/ice_blast_01.mp3",
        },
        arcane: {
            charge: "/sounds/spells/arcane/arcane_charge_01.mp3",
            burst: "/sounds/spells/arcane/arcane_burst_01.mp3",
            runeHum: "/sounds/spells/arcane/arcane_rune_hum_01.mp3",
        },
        healing: {
            healCast: "/sounds/spells/healing/heal_cast_01.mp3",
            healWave: "/sounds/spells/healing/heal_wave_01.mp3",
        },
        shadow: {
            whispers: "/sounds/spells/shadow/shadow_whispers_01.mp3",
            burst: "/sounds/spells/shadow/shadow_burst_01.mp3",
        },
    },
    /* ---------------- WORLD -------------- */
    world: {
        forest: {
            day: "/sounds/world/forest/forest_day_loop.mp3",
            night: "/sounds/world/forest/forest_night_crickets.mp3",
            creaking: "/sounds/world/forest/branches_creaking.mp3",
        },
        dungeon: {
            rumble: "/sounds/world/dungeon/stone_rumble_low.mp3",
            water: "/sounds/world/dungeon/drip_water_01.mp3",
            chains: "/sounds/world/dungeon/chain_clink_01.mp3",
            wind: "/sounds/world/dungeon/wind_deep_cavern.mp3",
        },
        desert: {
            wind: "/sounds/world/desert/desert_wind_howl.mp3",
            sandStep: "/sounds/world/desert/sandstep_01.mp3",
            ruinsEcho: "/sounds/world/desert/ruins_echo.mp3",
        },
    },
};
/* --------------------------------------------------
 * GENERIC HELPERS
 * -------------------------------------------------- */
export function getSoundUrl(category, id) {
    const group = SoundManifest[category];
    if (!group)
        return null;
    const entry = group[id];
    if (!entry)
        return null;
    if (Array.isArray(entry)) {
        return entry[Math.floor(Math.random() * entry.length)];
    }
    return entry;
}
/* --------------------------------------------------
 * ⚡ THUNDER HELPERS (CANON)
 * -------------------------------------------------- */
/**
 * Résout un ThunderEvent → URL audio
 * 👉 À utiliser dans LightningEngine / LightningFX
 */
export function resolveThunderSound(distance) {
    const pool = SoundManifest.thunder[distance];
    return pool[Math.floor(Math.random() * pool.length)];
}
