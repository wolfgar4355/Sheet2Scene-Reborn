"use client";
import { createContext, useContext } from "react";
import SceneController from "./SceneController";
import { useAmbient } from "./ambient";
export const scene = new SceneController();
const MithrilContext = createContext(null);
export function MithrilProvider({ children }) {
    const ambient = useAmbient();
    return (<MithrilContext.Provider value={{ scene, ambient }}>
            {children}
        </MithrilContext.Provider>);
}
export function useMithril() {
    return useContext(MithrilContext);
}
