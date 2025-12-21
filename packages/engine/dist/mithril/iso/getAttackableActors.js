function dist(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
export function getAttackableActors(attacker, actors, range) {
    return actors.filter((a) => a.id !== attacker.id &&
        dist(attacker.pos, a.pos) <= range);
}
