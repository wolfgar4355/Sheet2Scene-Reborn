import worlds from "./content/worlds";

export function getWorlds() {
  return worlds;
}

export function getErasForWorld(worldId: string) {
  const world = worlds.find(w => w.id === worldId);
  return world ? world.eras : [];
}
