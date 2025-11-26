import ALL_MONSTERS from "./ALL_MONSTERS";
import UNIVERSAL_CREATURE from "./UNIVERSAL_CREATURE";
import type { MonsterDefinition } from "./types";

export function getAllMonsters(): MonsterDefinition[] {
  return [
    ...UNIVERSAL_CREATURE,
    ...ALL_MONSTERS,
  ];
}

export function getMonsterById(id: string): MonsterDefinition | undefined {
  return getAllMonsters().find(m => m.id === id);
}

export function getMonstersByCategory(category: string): MonsterDefinition[] {
  return getAllMonsters().filter(m => m.category === category);
}

export function getMonstersByCr(cr: string): MonsterDefinition[] {
  return getAllMonsters().filter(m => m.cr === cr);
}

export function getMonsterSources() {
  return {
    universal: UNIVERSAL_CREATURE,
    all: ALL_MONSTERS,
  };
}
