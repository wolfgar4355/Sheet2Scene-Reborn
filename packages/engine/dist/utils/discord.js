/** SHIM provisoire – à remplacer par la vraie implémentation */
export async function sendDiscord(..._args) {
    console.warn('[shim] sendDiscord appelé');
}
const discord = { sendDiscord };
export default discord;
