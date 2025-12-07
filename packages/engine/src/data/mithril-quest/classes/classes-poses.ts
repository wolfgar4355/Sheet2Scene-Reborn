// @ts-nocheck
// ============================================================================
// ⚔️ MQ CLASS POSES — Auto-generator for AI Class Illustrations (Sheet2Scene)
// ============================================================================
//
// Chaque classe MQ reçoit automatiquement une pose IA cohérente
// basée sur son archétype.
//
// Les styles IA finaux sont ajoutés via MQ_AI_STYLES.
//
// ============================================================================

import { ALL_MQ_CLASSES } from "../classes/ALL_CLASSES";

export interface MQClassPose {
  key: string;          // ex: "warrior-default"
  classKey: string;     // ex: "warrior"
  label: string;        // ex: "Pose de combat"
  camera: string;       // portrait / buste / mi-corps
  mood: string;         // heroic / intense / mystical…
  lighting: string;     // dramatic / natural / arcane glow…
  environment: string;  // battlefield / forest / ruins…
  gesture: string;      // posture
  expression: string;   // visage
  style?: string;       // optional AI style key
}

// ============================================================================
// 🔥 AUTO-POSE GENERATOR — selon le type de classe
// ============================================================================

function autoPoseForClass(classKey: string): MQClassPose {
  const key = classKey.toLowerCase();

  // ----------------------- 🧙 MAGE / SORCIER -----------------------
  if (key.includes("mage") || key.includes("wizard") || key.includes("sorcer") || key.includes("warlock")) {
    return {
      key: `${classKey}-arcane`,
      classKey,
      label: "Invocation arcanique",
      camera: "mi-corps",
      mood: "mystical",
      lighting: "arcane glow",
      environment: "cercle runique",
      gesture: "main levée, énergie magique tournoyante",
      expression: "concentration intense",
      style: "mystic-arcane"
    };
  }

  // ----------------------- ⚔️ GUERRIER / SOLDAT -----------------------
  if (key.includes("warrior") || key.includes("fighter") || key.includes("knight") || key.includes("champion")) {
    return {
      key: `${classKey}-battle`,
      classKey,
      label: "Posture de combat",
      camera: "mi-corps",
      mood: "heroic",
      lighting: "dramatic strong light",
      environment: "champ de bataille",
      gesture: "arme brandie, torse pivoté",
      expression: "détermination farouche",
      style: "heroic-brutal"
    };
  }

  // ----------------------- 🗡️ ASSASSIN / ROGUE -----------------------
  if (key.includes("assassin") || key.includes("rogue") || key.includes("shadow") || key.includes("thief")) {
    return {
      key: `${classKey}-stealth`,
      classKey,
      label: "Furtivité",
      camera: "buste",
      mood: "tense",
      lighting: "shadow contrast",
      environment: "ruelle sombre",
      gesture: "couteau inversé, corps en mouvement",
      expression: "regard perçant",
      style: "stealth-dark"
    };
  }

  // ----------------------- 🌿 DRUIDE / CHAMAN -----------------------
  if (key.includes("druid") || key.includes("shaman") || key.includes("warden")) {
    return {
      key: `${classKey}-nature`,
      classKey,
      label: "Connexion à la nature",
      camera: "portrait",
      mood: "serene",
      lighting: "soft nature glow",
      environment: "forêt sacrée",
      gesture: "main ouverte, feuilles tourbillonnantes",
      expression: "calme profond",
      style: "mystic-nature"
    };
  }

  // ----------------------- ⛪ PALADIN / PRÊTRE -----------------------
  if (key.includes("paladin") || key.includes("cleric") || key.includes("priest") || key.includes("templar")) {
    return {
      key: `${classKey}-holy`,
      classKey,
      label: "Invocation sacrée",
      camera: "portrait",
      mood: "pure",
      lighting: "holy radiant light",
      environment: "sanctuaire doré",
      gesture: "symbole sacré levé",
      expression: "ferveur",
      style: "holy"
    };
  }

  // ----------------------- 🔥 ALCHIMISTE / ARTIFICIER -----------------------
  if (key.includes("alchemy") || key.includes("alchemist") || key.includes("artificer")) {
    return {
      key: `${classKey}-craft`,
      classKey,
      label: "Expérimentation alchimique",
      camera: "mi-corps",
      mood: "focused",
      lighting: "laboratory glow",
      environment: "atelier ou laboratoire",
      gesture: "tient une fiole brillante",
      expression: "curiosité scientifique",
      style: "tech-magical"
    };
  }

  // ----------------------- 🧵 BARD / MENESTREL -----------------------
  if (key.includes("bard") || key.includes("minstrel") || key.includes("skald")) {
    return {
      key: `${classKey}-performance`,
      classKey,
      label: "Représentation",
      camera: "mi-corps",
      mood: "charismatic",
      lighting: "stage warm",
      environment: "taverne ou salle de spectacle",
      gesture: "instrument levé",
      expression: "sourire confiant",
      style: "bardic"
    };
  }

  // ----------------------- 🥋 MONK / MARTIAL -----------------------
  if (key.includes("monk") || key.includes("martial") || key.includes("chi")) {
    return {
      key: `${classKey}-martial`,
      classKey,
      label: "Posture martiale",
      camera: "mi-corps",
      mood: "focused",
      lighting: "soft zen contrast",
      environment: "temple isolé",
      gesture: "position d’attaque ou de méditation",
      expression: "sérénité concentrée",
      style: "martial"
    };
  }

  // ----------------------- 🧛 OCCULTISTE / NÉCROMANT -----------------------
  if (key.includes("occult") || key.includes("necrom") || key.includes("death") || key.includes("void")) {
    return {
      key: `${classKey}-occult`,
      classKey,
      label: "Énergie occulte",
      camera: "portrait",
      mood: "dark mystic",
      lighting: "void shadows",
      environment: "sanctuaire interdit",
      gesture: "ombre ou flamme noire dans la main",
      expression: "regard inquiétant",
      style: "dark-arcane"
    };
  }

  // ----------------------- DEFAULT HEROIC -----------------------
  return {
    key: `${classKey}-heroic`,
    classKey,
    label: "Pose héroïque",
    camera: "buste",
    mood: "heroic",
    lighting: "natural warm",
    environment: "fond mythique neutre",
    gesture: "posture droite",
    expression: "confiance",
    style: "realistic-heroic"
  };
}

// ============================================================================
// 📦 EXPORT — toutes les poses générées automatiquement
// ============================================================================

export const MQ_CLASS_POSES: MQClassPose[] = ALL_MQ_CLASSES.map(cls =>
  autoPoseForClass(cls.key)
) as const;
