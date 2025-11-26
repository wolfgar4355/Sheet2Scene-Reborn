import ALL_MONSTERS from "./ALL_MONSTERS";
import UNIVERSAL_CREATURE from "./UNIVERSAL_CREATURE";
export function getAllMonsters() {
    return [
        ...UNIVERSAL_CREATURE,
        ...ALL_MONSTERS,
    ];
}
export function getMonsterById(id) {
    return getAllMonsters().find(m => m.id === id);
}
export function getMonstersByCategory(category) {
    return getAllMonsters().filter(m => m.category === category);
}
export function getMonstersByCr(cr) {
    return getAllMonsters().filter(m => m.cr === cr);
}
export function getMonsterSources() {
    return {
        universal: UNIVERSAL_CREATURE,
        all: ALL_MONSTERS,
    };
}
