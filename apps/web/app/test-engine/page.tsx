import { getWorlds } from "@engine/getWorlds";
import { getErasForWorld } from "@engine/content/worlds";

export default function Page() {
  const worlds = getWorlds();
  const eras = getErasForWorld("fantasy");

  return (
    <pre>{JSON.stringify({ worlds, eras }, null, 2)}</pre>
  );
}
