/**
 * generate-all-tools-prompts.ts
 * Combine toutes les catégories d’outils MQ en un seul objet final.
 */
/** Structure générique */
export interface ToolPrompt {
    key: string;
    style: string;
    prompt: string;
}
/** Fusionne toutes les catégories sous typage strict */
export declare const ALL_TOOL_PROMPTS: Record<string, ToolPrompt[]>;
/** Export JSON utilitaire */
export declare const generateAllToolsJSON: () => string;
