import { useState } from "react";

export function useXP() {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);

  function gainXP(amount: number) {
    setXP((prev) => {
      const next = prev + amount;
      const needed = level * 100;

      if (next >= needed) {
        setLevel((l) => l + 1);
        return next - needed;
      }

      return next;
    });
  }

  return {
    xp,
    level,
    gainXP,
  };
}
