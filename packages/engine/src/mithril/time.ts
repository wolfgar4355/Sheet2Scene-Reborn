// --- Saisons ---
export function getSeason(month = new Date().getMonth() + 1): string {
  if (month === 12 || month <= 2) return "winter";
  if (month <= 5) return "spring";
  if (month <= 8) return "summer";
  return "autumn";
}

// --- Jour / nuit ---
export function getDayPhase(hour = new Date().getHours()): string {
  return hour < 6 || hour > 20 ? "night" : "day";
}

// --- Météo (placeholder AI plus tard) ---
export async function getWeather(): Promise<string> {
  return "clear";
}

// --- Couleur ambiance ---
export function getAmbientColor(): string {
  return "#ffffff";
}
