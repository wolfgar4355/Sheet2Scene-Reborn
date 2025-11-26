// lib/s2s/fantasy/gm/combat-advanced.ts
export const COVER_BONUS = {
    none: 0,
    half: 2,
    "three-quarters": 5,
    full: 100, // impossible à toucher à distance
};
// Calcul du bonus de couverture
export function getCoverBonus(cover) {
    return COVER_BONUS[cover];
}
// Algo simple pour la ligne de vue
export function hasLineOfSight(check) {
    const { source, target, obstacles } = check;
    return !obstacles.some((o) => {
        // règles simples : si obstacle aligné entre A et B
        return ((o.x >= Math.min(source.x, target.x) &&
            o.x <= Math.max(source.x, target.x)) &&
            (o.y >= Math.min(source.y, target.y) &&
                o.y <= Math.max(source.y, target.y)));
    });
}
// Mouvement sur une grille
export function canMove(combatant, target) {
    const dx = Math.abs(combatant.position.x - target.x);
    const dy = Math.abs(combatant.position.y - target.y);
    // distance = cases parcourues
    const distance = dx + dy;
    // 1 case = 1.5m (comme D&D mais version S2S)
    return distance * 1.5 <= combatant.speed;
}
// Calcul de l'initiative avancée
export function rollInitiative(dexterityMod) {
    const roll = Math.floor(Math.random() * 20) + 1;
    return roll + dexterityMod;
}
import { parseDiceFormula } from "./combat";
export function rollAdvancedAttack({ bonus, targetAC, cover, damageFormula, }) {
    const coverBonus = getCoverBonus(cover);
    const effectiveAC = targetAC + coverBonus;
    const roll = Math.floor(Math.random() * 20) + 1;
    const critical = roll === 20;
    const hit = critical || roll + bonus >= effectiveAC;
    let damage = 0;
    if (hit) {
        damage = parseDiceFormula(damageFormula);
        if (critical)
            damage *= 2;
    }
    return {
        hit,
        critical,
        damage,
        effectiveAC,
    };
}
