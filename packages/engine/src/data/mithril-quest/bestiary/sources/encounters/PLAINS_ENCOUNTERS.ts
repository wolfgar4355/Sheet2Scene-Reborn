import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const PLAINS_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune commune
  {
    r,
oll: [1, 10],
    m,
onsters: ["wild-horses", "antelopes"],
    h,
abitat: "open-field",
    d,
ifficulty: "easy",
    description: "Un troupeau nerveux traverse les plaines."},

  // 11–20 : Prédateurs rapides
  {
    r,
oll: [11, 20],
    m,
onsters: ["plains-wolf", "steppe-lion"],
    h,
abitat: "grass-hollows",
    d,
ifficulty: "standard",
    description: "Des chasseurs agiles utilisent les herbes hautes comme couverture."},

  // 21–35 : Bandits + maraudeurs des routes
  {
    r,
oll: [21, 35],
    m,
onsters: ["road-bandit", "horse-raiders"],
    h,
abitat: "trade-route",
    d,
ifficulty: "standard",
    description: "Des voleurs montés à cheval, rapides et organisés."},

  // 36–50 : Horreurs des tempêtes
  {
    r,
oll: [36, 50],
    m,
onsters: ["dust-wraith", "thunder-beast"],
    h,
abitat: "stormfront",
    d,
ifficulty: "hard",
    description: "Une tempête approche… mais elle semble vivante."},

  // 51–65 : Géants errants
  {
    r,
oll: [51, 65],
    m,
onsters: ["hill-giant", "steppe-colossus"],
    h,
abitat: "wide-hills",
    d,
ifficulty: "hard",
    description: "Les collines chantent sous les pas d’un géant."},

  // 66–80 : Cavaliers mythiques
  {
    r,
oll: [66, 80],
    m,
onsters: ["ghost-rider", "wind-knight"],
    h,
abitat: "ancient-road",
    d,
ifficulty: "hard",
    description: "Les sabots résonnent mais aucun cheval ne touche le sol."},

  // 81–95 : Esprits du vent + anomalies
  {
    r,
oll: [81, 95],
    m,
onsters: ["wind-elemental", "sky-anomaly"],
    h,
abitat: "wind-rift",
    d,
ifficulty: "deadly",
    description: "L’air se déchire dans un sifflement aigu."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["thunder-colossus", "eternal-rider-mythic"],
    h,
abitat: "mythic-steppe",
    d,
ifficulty: "deadly",
    description: "Une tempête a une volonté… et elle charge vers vous."}];
