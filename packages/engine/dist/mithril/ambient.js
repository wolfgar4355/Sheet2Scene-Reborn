"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const defaultValue = {
    music: null,
    ambience: null,
    sfx: null,
    volume: 1,
};
export const AmbientContext = createContext({
    ambient: defaultValue,
    setAmbient: () => { },
});
/** Provider AAA v2 minimal pour piloter les états globaux */
export function AmbientProvider({ children }) {
    const [ambient, setAmbient] = useState(defaultValue);
    return (_jsx(AmbientContext.Provider, { value: { ambient, setAmbient }, children: children }));
}
export const useAmbient = () => useContext(AmbientContext);
