// packages/engine/src/adapters/spells.adapter.ts
import * as SPELLS from "../../content/mithril-quest/spells";

export function getAllSpells() {
  return Object.values(SPELLS).flat();
}

export function getSpellsBySchool() {
  const all = getAllSpells();
  const map: Record<string, any[]> = {};

  all.forEach((spell) => {
    if (!map[spell.school]) map[spell.school] = [];
    map[spell.school].push(spell);
  });

  return map;
}
