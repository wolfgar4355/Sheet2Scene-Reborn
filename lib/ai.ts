/** SHIM provisoire – à remplacer par la vraie implémentation */
export async function askAgentLLM(..._args: any[]): Promise<any> {
  throw new Error('[shim] askAgentLLM non implémenté');
}
const ai = { askAgentLLM };
export default ai;
