// packages/engine/src/adapters/worlds.adapter.ts
import { WORLDS } from "../content/fantasy/worlds";
export function getAllWorlds() {
    return WORLDS;
}
export function getWorldById(id) {
    return WORLDS.find((w) => w.id === id);
}
export function getFantasyWorld() {
    return WORLDS.find((w) => w.id === "fantasy");
}
