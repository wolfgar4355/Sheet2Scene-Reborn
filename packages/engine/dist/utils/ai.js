/** SHIM provisoire – à remplacer par la vraie implémentation */
export async function askAgentLLM(..._args) {
    throw new Error('[shim] askAgentLLM non implémenté');
}
const ai = { askAgentLLM };
export default ai;
