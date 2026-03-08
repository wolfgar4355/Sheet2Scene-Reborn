export type AbilityId = "basic" | "powerStrike" | "guard";
export type Ability = {
    id: AbilityId;
    name: string;
    desc: string;
    /** nécessite une cible (attaque) */
    requiresTarget: boolean;
    /** portée (si nécessite une cible) */
    range?: number;
    /** capacité auto-ciblée */
    self?: boolean;
};
export declare function useAbilities(): {
    abilities: Ability[];
    selected: AbilityId;
    setSelected: import("react").Dispatch<import("react").SetStateAction<AbilityId>>;
    activateSelf: (id: AbilityId) => void;
};
