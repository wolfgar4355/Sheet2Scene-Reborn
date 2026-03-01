// @ts-nocheck
/**********************************************************************
 * Script MQ — Génération automatique de TOUTES les données Player
 * Combine les tableaux exportés dans /player et produit ALL_PLAYERS.ts
 *
 * ⚠ NE PAS MODIFIER LE FICHIER GÉNÉRÉ ALL_PLAYERS.ts À LA MAIN
 *    Re-lance ce script après avoir changé les données.
 **********************************************************************/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ---------------------------------------------------------------------
// Compatibilité ESM
// ---------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossier player et fichier de sortie
const PLAYER_DIR = __dirname;
const OUT_FILE = path.join(PLAYER_DIR, "ALL_PLAYERS.ts");

/**********************************************************************
 * Helpers
 **********************************************************************/

type AnyArray = any[];

// Cherche un tableau export const XXX = [ ... ] (avec ou sans "as const")
function extractArrayFromText(text: string, varName: string): AnyArray | null {
  const regex = new RegExp(
    `export\\s+const\\s+${varName}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s*(?:as\\s+const)?\\s*;`,
    "m"
  );
  const match = text.match(regex);
  if (!match) return null;

  const inner = match[1];

  try {
    // On entoure de crochets pour évaluer proprement
    const arr = eval(`[${inner}]`) as AnyArray;
    return arr;
  } catch (err) {
    console.error(`❌ ERREUR eval pour ${varName}:`, err);
    return null;
  }
}

function extractArrayFromFile(
  filename: string,
  varName: string
): AnyArray {
  const fullPath = path.join(PLAYER_DIR, filename);

  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠ Fichier manquant: ${filename} (array ${varName} => [])`);
    return [];
  }

  const text = fs.readFileSync(fullPath, "utf8");
  const arr = extractArrayFromText(text, varName);

  if (!arr) {
    console.warn(
      `⚠ ${varName} non trouvé dans ${filename} (utilisation d'un tableau vide)`
    );
    return [];
  }

  console.log(
    `🟢 ${varName} chargé depuis ${filename} (${arr.length} éléments)`
  );
  return arr;
}

/**********************************************************************
 * Construction de l’objet MQPlayerDictionary-like
 **********************************************************************/

function buildPlayerDictionary() {
  const dict = {
    // Core
    skills: extractArrayFromFile("skills.ts", "FANTASY_SKILLS"),
    tools: extractArrayFromFile("tools.ts", "MQ_TOOLS"),
    languages: extractArrayFromFile("languages.ts", "MQ_LANGUAGES"),
    backgrounds: extractArrayFromFile("backgrounds.ts", "FANTASY_BACKGROUNDS"),
    levels: extractArrayFromFile("progression.ts", "FANTASY_LEVELS"),

    // Rôleplay / Profil
    traits: extractArrayFromFile("traits.ts", "MQ_PERSONALITY_TRAITS"),
    motivations: extractArrayFromFile("motivations.ts", "MQ_MOTIVATIONS"),
    origins: extractArrayFromFile("origins.ts", "MQ_MYTHIC_ORIGINS"),
    elementals: extractArrayFromFile("elementals.ts", "MQ_ELEMENTAL_AFFINITIES"),
    totems: extractArrayFromFile("totems.ts", "MQ_TOTEMS"),
    marks: extractArrayFromFile("marks.ts", "MQ_MARKS"),
    auras: extractArrayFromFile("auras.ts", "MQ_AURAS"),

    // Factions & mécanique
    factions: extractArrayFromFile("factions-player.ts", "MQ_PLAYER_FACTIONS"),
    mechanics: extractArrayFromFile("mechanics.ts", "MQ_MECHANICAL_TRAITS"),

    // Alignements
    alignments: extractArrayFromFile("alignements.ts", "MQ_ALIGNMENTS"),
    alignmentIcons: extractArrayFromFile(
      "alignements-icons.ts",
      "MQ_ALIGNMENT_ICONS"
    ),
    alignmentPoses: extractArrayFromFile(
      "alignements-poses.ts",
      "MQ_ALIGNMENT_POSES"
    ),
  };

  return dict;
}

/**********************************************************************
 * Écriture du fichier ALL_PLAYERS.ts
 **********************************************************************/

function writeOutput(dict: any) {
  const header =
    "/**\n" +
    " * Fichier généré automatiquement par generate-all-players.ts\n" +
    " * NE PAS MODIFIER À LA MAIN — mets à jour les fichiers dans /player\n" +
    " * puis relance le script.\n" +
    " */\n\n" +
    `import type { MQPlayerDictionary } from "./player-types";\n\n` +
    `export const ALL_PLAYERS_DATA: MQPlayerDictionary = ${JSON.stringify(
      dict,
      null,
      2
    )} as const;\n`;

  fs.writeFileSync(OUT_FILE, header, "utf8");
  console.log("🎉 ALL_PLAYERS.ts généré !");
}

/**********************************************************************
 * Main
 **********************************************************************/

function main() {
  console.log("🔎 Chargement des données Player MQ…");

  const dict = buildPlayerDictionary();

  // petit résumé
  const totalBackgrounds = dict.backgrounds?.length ?? 0;
  const totalSkills = dict.skills?.length ?? 0;
  const totalAlignments = dict.alignments?.length ?? 0;

  console.log(
    `📦 Résumé: ${totalBackgrounds} backgrounds, ${totalSkills} skills, ${totalAlignments} alignements (et plus…).`
  );

  console.log("🧪 Écriture du fichier ALL_PLAYERS.ts…");
  writeOutput(dict);
}

main();
