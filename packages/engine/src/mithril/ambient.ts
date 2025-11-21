"use client";

import { createContext, useContext, useState } from "react";

export type AmbientState = {
  music?: string | null;
  ambience?: string | null;
  sfx?: string | null;
  volume?: number;
};

const defaultValue: AmbientState = {
  music: null,
  ambience: null,
  sfx: null,
  volume: 1,
};

export const AmbientContext = createContext({
  ambient: defaultValue,
  setAmbient: (_v: AmbientState) => {},
});

/** Provider AAA v2 minimal pour piloter les états globaux */
export function AmbientProvider({ children }: { children: React.ReactNode }) {
  const [ambient, setAmbient] = useState<AmbientState>(defaultValue);
  return (
    <AmbientContext.Provider value={{ ambient, setAmbient }}>
      {children}
    </AmbientContext.Provider>
  );
}

export const useAmbient = () => useContext(AmbientContext);
