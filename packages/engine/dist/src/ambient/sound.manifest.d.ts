export type SoundCategory = "ui" | "ambient" | "weather" | "storm" | "thunder" | "spells" | "world";
export declare const SoundManifest: {
    readonly ui: {
        readonly clickSoft: "/sounds/ui/ui_click_soft.mp3";
        readonly clickHeavy: "/sounds/ui/ui_click_heavy.mp3";
        readonly hover: "/sounds/ui/ui_hover.mp3";
        readonly error: "/sounds/ui/ui_error.mp3";
        readonly pageDrag: "/sounds/ui/page_drag.mp3";
        readonly scrollMove: "/sounds/ui/scroll_move.mp3";
    };
    readonly ambient: {
        readonly fire: "/sounds/ambient/fire_loop.mp3";
        readonly wind: "/sounds/ambient/wind_loop.mp3";
        readonly candles: "/sounds/ambient/candles.mp3";
        readonly hallEcho: "/sounds/ambient/hall_echo.mp3";
    };
    readonly weather: {
        readonly rainLight: "/sounds/weather/rain_light_loop.mp3";
        readonly rainMedium: "/sounds/weather/rain_medium_loop.mp3";
        readonly rainHeavy: "/sounds/weather/rain_heavy_loop.mp3";
        readonly rainRoof: "/sounds/weather/rain_on_roof_loop.mp3";
        readonly windLight: "/sounds/weather/wind_light_loop.mp3";
        readonly windMedium: "/sounds/weather/wind_medium_loop.mp3";
        readonly windStrong: "/sounds/weather/wind_strong_loop.mp3";
        readonly snowSoft: "/sounds/weather/snow_soft_wind.mp3";
        readonly snowBlizzard: "/sounds/weather/snow_blizzard_loop.mp3";
        readonly fogRumble: "/sounds/weather/fog_rumble_bed.mp3";
        readonly fogLowWind: "/sounds/weather/fog_low_wind.mp3";
    };
    readonly storm: {
        readonly stormBed: "/sounds/storm/storm_bed_loop.mp3";
        readonly stormHeavy: "/sounds/storm/storm_heavy_bed_loop.mp3";
        readonly gusts: "/sounds/storm/storm_wind_gusts.mp3";
        readonly rainMix: "/sounds/storm/storm_rain_mix_loop.mp3";
    };
    /**
     * ⚡ IMPORTANT
     * Les clés correspondent AUX DISTANCES,
     * PAS aux variantId logiques (voir helper plus bas)
     */
    readonly thunder: {
        readonly close: readonly ["/sounds/thunder/impact_close_01.mp3", "/sounds/thunder/impact_close_02.mp3", "/sounds/thunder/impact_close_03.mp3"];
        readonly mid: readonly ["/sounds/thunder/impact_mid_01.mp3", "/sounds/thunder/impact_mid_02.mp3", "/sounds/thunder/impact_mid_03.mp3"];
        readonly far: readonly ["/sounds/thunder/impact_far_01.mp3", "/sounds/thunder/impact_far_02.mp3", "/sounds/thunder/impact_far_03.mp3"];
        readonly rumble: readonly ["/sounds/thunder/rumble_deep_01.mp3", "/sounds/thunder/rumble_deep_02.mp3", "/sounds/thunder/rumble_deep_03.mp3"];
        readonly echo: readonly ["/sounds/thunder/echo_wide_01.mp3", "/sounds/thunder/echo_wide_02.mp3"];
        readonly aftershock: readonly ["/sounds/thunder/aftershock_01.mp3", "/sounds/thunder/aftershock_02.mp3"];
    };
    readonly spells: {
        readonly fire: {
            readonly fireboltCast: "/sounds/spells/fire/firebolt_cast_01.mp3";
            readonly fireballExplosion: "/sounds/spells/fire/fireball_explosion_01.mp3";
            readonly flameBurst: "/sounds/spells/fire/flame_burst_01.mp3";
        };
        readonly lightning: {
            readonly lightningCast: "/sounds/spells/lightning/lightning_cast_01.mp3";
            readonly lightningChain: "/sounds/spells/lightning/lightning_chain_01.mp3";
            readonly lightningImpact: "/sounds/spells/lightning/lightning_impact_01.mp3";
        };
        readonly ice: {
            readonly frostCast: "/sounds/spells/ice/frost_cast_01.mp3";
            readonly iceCrack: "/sounds/spells/ice/ice_crack_01.mp3";
            readonly iceBlast: "/sounds/spells/ice/ice_blast_01.mp3";
        };
        readonly arcane: {
            readonly charge: "/sounds/spells/arcane/arcane_charge_01.mp3";
            readonly burst: "/sounds/spells/arcane/arcane_burst_01.mp3";
            readonly runeHum: "/sounds/spells/arcane/arcane_rune_hum_01.mp3";
        };
        readonly healing: {
            readonly healCast: "/sounds/spells/healing/heal_cast_01.mp3";
            readonly healWave: "/sounds/spells/healing/heal_wave_01.mp3";
        };
        readonly shadow: {
            readonly whispers: "/sounds/spells/shadow/shadow_whispers_01.mp3";
            readonly burst: "/sounds/spells/shadow/shadow_burst_01.mp3";
        };
    };
    readonly world: {
        readonly forest: {
            readonly day: "/sounds/world/forest/forest_day_loop.mp3";
            readonly night: "/sounds/world/forest/forest_night_crickets.mp3";
            readonly creaking: "/sounds/world/forest/branches_creaking.mp3";
        };
        readonly dungeon: {
            readonly rumble: "/sounds/world/dungeon/stone_rumble_low.mp3";
            readonly water: "/sounds/world/dungeon/drip_water_01.mp3";
            readonly chains: "/sounds/world/dungeon/chain_clink_01.mp3";
            readonly wind: "/sounds/world/dungeon/wind_deep_cavern.mp3";
        };
        readonly desert: {
            readonly wind: "/sounds/world/desert/desert_wind_howl.mp3";
            readonly sandStep: "/sounds/world/desert/sandstep_01.mp3";
            readonly ruinsEcho: "/sounds/world/desert/ruins_echo.mp3";
        };
    };
};
export type SoundManifestType = typeof SoundManifest;
export type ThunderDistance = "close" | "mid" | "far";
export declare function getSoundUrl(category: keyof SoundManifestType, id: string): string | null;
/**
 * Résout un ThunderEvent → URL audio
 * 👉 À utiliser dans LightningEngine / LightningFX
 */
export declare function resolveThunderSound(distance: ThunderDistance): string;
