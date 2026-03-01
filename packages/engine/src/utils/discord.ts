/**
 * SHIM provisoire – à remplacer plus tard par la vraie intégration Discord.
 * Cette fonction permet d'éviter des erreurs lorsque l'appel est utilisé
 * mais que l'implémentation finale n'est pas encore branchée.
 */

export async function sendDiscord(...args: any[]): Promise<void> {
  console.warn("[shim] sendDiscord appelé avec :", args);
  // Ici, rien n'est envoyé — c'est volontaire (placeholder)
}

const discord = { sendDiscord };

export default discord;
