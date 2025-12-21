"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const EncounterContext = createContext(null);
export function EncounterController({ children, }) {
    const [state, setState] = useState({
        active: false,
        center: null,
    });
    const startEncounter = (center) => {
        setState({ active: true, center });
    };
    const endEncounter = () => {
        setState({ active: false, center: null });
    };
    return (_jsx(EncounterContext.Provider, { value: { state, startEncounter, endEncounter }, children: children }));
}
export function useEncounter() {
    const ctx = useContext(EncounterContext);
    if (!ctx)
        throw new Error("useEncounter must be used inside <EncounterController>");
    return ctx;
}
