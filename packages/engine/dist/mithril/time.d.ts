export type SeasonName = "winter" | "spring" | "summer" | "autumn";
export type DayPhase = "night" | "morning" | "day" | "evening";
export type WeatherKind = "clear" | "rain" | "snow" | "fog" | "storm";
export declare function getSeason(month: number): SeasonName;
export declare function getDayPhase(hour: number): DayPhase;
export declare function getWeather(): Promise<WeatherKind>;
export declare function getAmbientColor(season: SeasonName, phase: DayPhase): string;
