// @ts-nocheck
// ============================================================================
// 🧬 MQ RACE POSES — Auto-generator for AI Character Poses
// ============================================================================
//
// ⚡ Fonctionne automatiquement : chaque nouvelle race MQ reçoit
//    une pose IA cohérente selon sa catégorie.
//
// Les catégories sont déduites du KEY :
//  - *void*, *echo*, *abys*, *shadow*     → dark / void / cosmic
//  - *fire*, *ember*, *frost*, *storm*    → elemental
//  - *orc*, *giant*, *brute*              → warrior / physical
//  - *elf*, *fae*, *sylv*, *thorn*        → mystic / nature
//  - *celes*, *angel*, *light*            → holy / radiant
//  - autre → generic heroic
//
// Résultat : chaque race reçoit une pose IA adaptée automatiquement.
//
// ============================================================================

import { ALL_FANTASY_RACES } from "../races/ALL_RACES";  

export interface MQRacePose {
  key: string;            // ex: "elf-default"
  raceKey: string;        // ex: "high-elf"
  label: string;          // ex: "Pose héroïque"
  camera: string;         // portrait / buste / mi-corps
  mood: string;           // heroic / mysterious / fierce…
  lighting: string;       // warm, arcane glow, shadows…
  environment: string;    // forest, void, battlefield…
  gesture: string;        // posture
  expression: string;     // facial expression
  style?: string;         // optional AI style preset
}

// ============================================================================
// 🔥 GÉNÉRATEUR DE POSES SELON LE TYPE DE RACE
// ============================================================================

function autoPoseForRace(raceKey: string): MQRacePose {

  const key = raceKey.toLowerCase();

  // ---- COSMIC / VOID / SHADOW ----
  if (key.includes("void") || key.includes("shadow") || key.includes("echo") || key.includes("abyss")) {
    return {
      key: `${raceKey}-void`,
      raceKey,
      label: "Émanation du Vide",
      camera: "portrait",
      mood: "mysterious",
      lighting: "void glow",
      environment: "fracture astrale sombre",
      gesture: "énergie sombre canalisée dans la main",
      expression: "regard énigmatique",
      style: "cosmic-dark"
    };
  }

  // ---- ELEMENTAL FIRE / FROST / STORM / EARTH ----
  if (key.includes("fire") || key.includes("ember") || key.includes("frost") || key.includes("storm")) {
    return {
      key: `${raceKey}-elemental`,
      raceKey,
      label: "Manifestation élémentaire",
      camera: "mi-corps",
      mood: "intense",
      lighting: "elemental aura",
      environment: "tourbillon élémentaire",
      gesture: "corps entouré d’énergie élémentaire",
      expression: "détermination brûlante",
      style: "elemental"
    };
  }

  // ---- ORC / BRUTE / GIANT ----
  if (key.includes("orc") || key.includes("brute") || key.includes("giant")) {
    return {
      key: `${raceKey}-warrior`,
      raceKey,
      label: "Guerrier imposant",
      camera: "mi-corps",
      mood: "fierce",
      lighting: "strong contrast",
      environment: "champ de bataille rocheux",
      gesture: "arme massive posée sur l’épaule",
      expression: "rage contenue",
      style: "heroic-brutal"
    };
  }

  // ---- ELVEN / FAE / SYLVAN ----
  if (key.includes("elf") || key.includes("fae") || key.includes("thorn") || key.includes("sylv")) {
    return {
      key: `${raceKey}-mystic`,
      raceKey,
      label: "Aura mystique",
      camera: "portrait",
      mood: "serene",
      lighting: "soft magical glow",
      environment: "clairière enchantée",
      gesture: "main ouverte, lumière douce",
      expression: "calme profond",
      style: "mystic-nature"
    };
  }

  // ---- CELESTIAL / HOLY ----
  if (key.includes("celes") || key.includes("light") || key.includes("angel")) {
    return {
      key: `${raceKey}-radiant`,
      raceKey,
      label: "Lueur divine",
      camera: "portrait",
      mood: "pure",
      lighting: "radiant halo",
      environment: "sanctuaire céleste",
      gesture: "bras ouverts, lumière descendante",
      expression: "bienveillance",
      style: "holy"
    };
  }

  // ---- DEFAULT HEROIC ----
  return {
    key: `${raceKey}-heroic`,
    raceKey,
    label: "Pose héroïque",
    camera: "buste",
    mood: "heroic",
    lighting: "natural warm",
    environment: "fond neutre mythique",
    gesture: "posture droite",
    expression: "confiance",
    style: "realistic-heroic"
  };
}

// ============================================================================
// 📦 EXPORT FINAL — liste AUTO-GÉNÉRÉE de toutes les poses
// ============================================================================

export const MQ_RACE_POSES: MQRacePose[] = ALL_FANTASY_RACES.map(race =>
  autoPoseForRace(race.key)
) as const;
