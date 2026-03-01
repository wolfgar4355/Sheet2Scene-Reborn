import { jsx as _jsx } from "react/jsx-runtime";
import { getWorlds, getErasForWorld } from "../getWorlds";
export default function Page() {
    const worlds = getWorlds();
    const eras = getErasForWorld("fantasy");
    return _jsx("pre", { children: JSON.stringify({ worlds, eras }, null, 2) });
}
