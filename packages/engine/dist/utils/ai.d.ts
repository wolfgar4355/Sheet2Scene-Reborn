/**
 * SHIM provisoire – à remplacer par la vraie implémentation
 * du moteur d’Agents IA (Victor, Joeffry, etc.)
 *
 * Cette version empêche les crashs et fournit une signature stable.
 */
export declare function askAgentLLM(...args: any[]): Promise<any>;
declare const ai: {
    askAgentLLM: typeof askAgentLLM;
};
export default ai;
