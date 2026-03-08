import { useState } from "react";
export function useCombatLog() {
    const [log, setLog] = useState([]);
    function push(text) {
        setLog((l) => [
            ...l,
            { id: crypto.randomUUID(), text },
        ]);
    }
    function clear() {
        setLog([]);
    }
    return {
        log,
        push,
        clear,
    };
}
