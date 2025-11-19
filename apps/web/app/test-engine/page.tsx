import { getWorlds, getErasForWorld } from "@s2s/engine";

export default function Page() {
  const worlds = getWorlds();
  const eras = getErasForWorld("fantasy");

  return (
    <pre>{JSON.stringify({ worlds, eras }, null, 2)}</pre>
  );
}
