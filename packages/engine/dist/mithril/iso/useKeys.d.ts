export type KeyState = {
    w: boolean;
    a: boolean;
    s: boolean;
    d: boolean;
    shift: boolean;
};
export declare function useKeys(): import("react").MutableRefObject<KeyState>;
