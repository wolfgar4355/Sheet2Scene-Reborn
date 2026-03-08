export interface SpecialAction {
    key: string;
    label: string;
    requiresWeapon?: boolean;
    effect: string;
}
export declare const SPECIAL_ACTIONS: SpecialAction[];
