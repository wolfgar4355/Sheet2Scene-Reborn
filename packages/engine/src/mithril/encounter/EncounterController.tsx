"use client";

import { createContext, useContext, useState } from "react";
import type { Vec2 } from "../iso/isoMath";

type EncounterState = {
  active: boolean;
  center: Vec2 | null;
};

type EncounterContextValue = {
  state: EncounterState;
  startEncounter: (center: Vec2) => void;
  endEncounter: () => void;
};

const EncounterContext = createContext<EncounterContextValue | null>(null);

export function EncounterController({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<EncounterState>({
    active: false,
    center: null,
  });

  const startEncounter = (center: Vec2) => {
    setState({ active: true, center });
  };

  const endEncounter = () => {
    setState({ active: false, center: null });
  };

  return (
    <EncounterContext.Provider
      value={{ state, startEncounter, endEncounter }}
    >
      {children}
    </EncounterContext.Provider>
  );
}

export function useEncounter() {
  const ctx = useContext(EncounterContext);
  if (!ctx)
    throw new Error("useEncounter must be used inside <EncounterController>");
  return ctx;
}
