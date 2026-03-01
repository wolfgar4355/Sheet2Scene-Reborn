/**
 * SHIM provisoire – à remplacer plus tard par la vraie intégration Discord.
 * Cette fonction permet d'éviter des erreurs lorsque l'appel est utilisé
 * mais que l'implémentation finale n'est pas encore branchée.
 */
export declare function sendDiscord(...args: any[]): Promise<void>;
declare const discord: {
    sendDiscord: typeof sendDiscord;
};
export default discord;
