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
export declare function EncounterController({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useEncounter(): EncounterContextValue;
export {};
