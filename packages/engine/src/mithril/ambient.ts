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

type AmbientContextType = {
  ambient: AmbientState;
  setAmbient: (v: AmbientState) => void;
};

export const AmbientContext = createContext<AmbientContextType>({
  ambient: defaultValue,
  setAmbient: () => {},
});

/** Provider AAA v2 minimal pour gérer l’ambiance globale */
export function AmbientProvider({ children }: { children: React.ReactNode }) {
  const [ambient, setAmbient] = useState<AmbientState>(defaultValue);

  return (
    <AmbientContext.Provider value={{ ambient, setAmbient }}>
      {children}
    </AmbientContext.Provider>
  );
}

export const useAmbient = () => useContext(AmbientContext);
