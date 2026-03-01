import { ReactNode } from "react";
export type AmbientState = {
    music: string | null;
    ambience: string | null;
    sfx: string | null;
    volume: number;
};
export declare const AmbientContext: import("react").Context<{
    ambient: AmbientState;
    setAmbient: (v: AmbientState) => void;
    playMusic: (file: string, fadeDuration?: number) => void;
    stopMusic: (fadeDuration?: number) => void;
    playAmbience: (file: string) => void;
    stopAmbience: () => void;
    playSfx: (file: string) => void;
    setVolume: (vol: number) => void;
}>;
export declare function AmbientProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export declare const useAmbient: () => {
    ambient: AmbientState;
    setAmbient: (v: AmbientState) => void;
    playMusic: (file: string, fadeDuration?: number) => void;
    stopMusic: (fadeDuration?: number) => void;
    playAmbience: (file: string) => void;
    stopAmbience: () => void;
    playSfx: (file: string) => void;
    setVolume: (vol: number) => void;
};
