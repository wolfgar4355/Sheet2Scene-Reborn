export type CombatLogEntry = {
    id: string;
    text: string;
};
export declare function useCombatLog(): {
    log: CombatLogEntry[];
    push: (text: string) => void;
    clear: () => void;
};
