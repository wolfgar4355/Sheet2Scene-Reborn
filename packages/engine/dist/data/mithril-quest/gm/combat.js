// lib/s2s/fantasy/gm/combat.ts
export function rollAttack({ bonus, targetAC, damageFormula }) {
    const roll = Math.floor(Math.random() * 20) + 1;
    const critical = roll === 20;
    const hit = critical || roll + bonus >= targetAC;
    let damage = 0;
    if (hit) {
        damage = parseDiceFormula(damageFormula);
        if (critical)
            damage *= 2;
    }
    return { hit, critical, damage };
}
// Simple parseur de dés
export function parseDiceFormula(formula) {
    const match = formula.match(/(\d+)d(\d+)([+-]\d+)?/);
    if (!match)
        return 0;
    const [, nStr, dStr, modStr] = match;
    const n = parseInt(nStr, 10);
    const d = parseInt(dStr, 10);
    const mod = modStr ? parseInt(modStr, 10) : 0;
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += Math.floor(Math.random() * d) + 1;
    }
    return total + mod;
}
export const COMBAT_ACTIONS = [
    "Attaquer",
    "Lancer un sort",
    "Se déplacer",
    "Se défendre",
    "Aider",
    "Désengager",
    "Esquiver",
    "Utiliser un objet",
];
