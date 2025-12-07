/**
 * SHIM provisoire – à remplacer par la vraie implémentation
 * du moteur d’Agents IA (Victor, Joeffry, etc.)
 *
 * Cette version empêche les crashs et fournit une signature stable.
 */
export async function askAgentLLM(...args) {
    throw new Error("[shim] askAgentLLM non implémenté — ajoute ton moteur IA ici.");
}
const ai = {
    askAgentLLM,
};
export default ai;
