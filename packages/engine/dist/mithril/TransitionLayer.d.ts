type SeasonName = "winter" | "spring" | "summer" | "autumn";
type DayPhase = "morning" | "day" | "evening" | "night";
type WeatherKind = "clear" | "rain" | "snow" | "fog" | "storm";
interface TransitionLayerProps {
    overrideSeason?: SeasonName;
    overridePhase?: DayPhase;
    overrideWeather?: WeatherKind;
    overrideIntensity?: number;
    overrideLightLevel?: number;
}
/**
 * Mithril Engine v2 — TransitionLayer AAA (CANON)
 * ------------------------------------------------
 * - Teinte saisonnière dynamique
 * - Glow nocturne dépendant de la lumière
 * - Lumière directionnelle matin / soir
 * - Haze météo (rain / fog / snow / storm)
 * - Intensité météo normalisée
 * - Glow mystique du grimoire
 */
export default function TransitionLayer(props?: TransitionLayerProps): JSX.Element;
export {};
