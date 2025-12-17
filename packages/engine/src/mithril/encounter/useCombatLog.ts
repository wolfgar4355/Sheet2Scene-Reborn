import { useState } from "react";

export type CombatLogEntry = {
  id: string;
  text: string;
};

export function useCombatLog() {
  const [log, setLog] = useState<CombatLogEntry[]>([]);

  function push(text: string) {
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
