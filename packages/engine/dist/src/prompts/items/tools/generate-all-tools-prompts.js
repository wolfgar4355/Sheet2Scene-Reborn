/**
 * generate-all-tools-prompts.ts
 * Combine toutes les catégories d’outils MQ en un seul objet final.
 */
import { ARTISAN_TOOL_PROMPTS } from "./artisan_prompts";
import { INSTRUMENT_PROMPTS } from "./instrument_prompts";
import { CRIMINAL_TOOLS_PROMPTS } from "./criminal_tools_prompts";
import { SURVIVAL_EXPLORATION_PROMPTS } from "./survival_exploration_prompts";
import { MAGIC_TOOLS_PROMPTS } from "./magical_tools_prompts";
import { TECH_GNOME_TOOLS_PROMPTS } from "./tech_gnome_tools_prompts";
import { RELICS_SPECIALKITS_PROMPTS } from "./relics_specialkits_prompts";
/**
 * ⚠️ FIX TS4104 :
 * On CAST explicitement chaque catégorie comme ToolPrompt[]
 * car leurs fichiers sources utilisent probablement `as const`
 * → ce qui produit un tableau readonly.
 */
const fix = (arr) => [...arr];
/** Fusionne toutes les catégories sous typage strict */
export const ALL_TOOL_PROMPTS = {
    artisan: fix(ARTISAN_TOOL_PROMPTS),
    instruments: fix(INSTRUMENT_PROMPTS),
    criminal: fix(CRIMINAL_TOOLS_PROMPTS),
    survival: fix(SURVIVAL_EXPLORATION_PROMPTS),
    magic: fix(MAGIC_TOOLS_PROMPTS),
    tech: fix(TECH_GNOME_TOOLS_PROMPTS),
    relics: fix(RELICS_SPECIALKITS_PROMPTS),
};
/** Export JSON utilitaire */
export const generateAllToolsJSON = () => {
    return JSON.stringify(ALL_TOOL_PROMPTS, null, 2);
};
/** Exécution directe terminal */
if (process.argv[1]?.includes("generate-all-tools-prompts.ts")) {
    console.log("✨ ALL MQ TOOL PROMPTS GENERATED ✨");
    console.log(generateAllToolsJSON());
}
