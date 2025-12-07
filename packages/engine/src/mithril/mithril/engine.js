"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import SceneController from "./SceneController";
import { useAmbient } from "./ambient";
export const scene = new SceneController();
const MithrilContext = createContext(null);
export function MithrilProvider({ children }) {
    const ambient = useAmbient();
    return (_jsx(MithrilContext.Provider, { value: { scene, ambient }, children: children }));
}
export function useMithril() {
    return useContext(MithrilContext);
}
