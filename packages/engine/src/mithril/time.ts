// src/mithril/time.ts

// ---------------------------------------------------------------------------
// Types de base
// ---------------------------------------------------------------------------

export type SeasonName = "winter" | "spring" | "summer" | "autumn";
export type DayPhase = "night" | "morning" | "day" | "evening";
export type WeatherKind = "clear" | "rain" | "snow" | "fog" | "storm";

// ---------------------------------------------------------------------------
// Saison selon le mois (1–12)
// ---------------------------------------------------------------------------

export function getSeason(month: number): SeasonName {
  if (month === 12 || month <= 2) return "winter";
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  return "autumn";
}

// ---------------------------------------------------------------------------
// Phase de la journée selon l’heure (0–23)
// ---------------------------------------------------------------------------

export function getDayPhase(hour: number): DayPhase {
  if (hour < 5) return "night";
  if (hour < 11) return "morning";
  if (hour < 18) return "day";
  return "evening";
}

// ---------------------------------------------------------------------------
// Météo “back-end” (pour plus tard : API, préférences, etc.)
// Pour l’instant : toujours "clear" pour laisser le moteur
// côté client (useSeason) piloter la météo.
// ---------------------------------------------------------------------------

export async function getWeather(): Promise<WeatherKind> {
  return "clear";
}

// ---------------------------------------------------------------------------
// Couleur d’ambiance selon saison + phase
// ---------------------------------------------------------------------------

const AMBIENT_COLORS: Record<
  SeasonName,
  Record<DayPhase, string>
> = {
  winter: {
    night: "#020617",   // bleu très sombre
    morning: "#1e293b", // bleu froid
    day: "#e0f2fe",     // ciel pâle
    evening: "#0f172a", // bleu nuit
  },
  spring: {
    night: "#020617",
    morning: "#bbf7d0",
    day: "#dcfce7",
    evening: "#4ade80",
  },
  summer: {
    night: "#020617",
    morning: "#fed7aa",
    day: "#fee2e2",
    evening: "#fb923c",
  },
  autumn: {
    night: "#020617",
    morning: "#f97316",
    day: "#fed7aa",
    evening: "#9a3412",
  },
};

export function getAmbientColor(
  season: SeasonName,
  phase: DayPhase
): string {
  return AMBIENT_COLORS[season][phase];
}
