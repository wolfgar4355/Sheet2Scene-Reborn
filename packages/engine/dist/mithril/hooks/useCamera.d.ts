export type CameraMode = "exploration" | "encounter";
export type CameraBounds = {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};
export type CameraTarget = {
    x: number;
    y: number;
};
export type CameraState = {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    zoom: number;
    offsetX: number;
    offsetY: number;
    idleX: number;
    idleY: number;
    mode: CameraMode;
    lock: boolean;
    target: CameraTarget | null;
    bounds: CameraBounds | null;
};
export declare function useCamera(): {
    forward: {
        x: number;
        y: number;
        z: number;
    };
    set: (fn: (c: CameraState) => CameraState) => void;
    move: (dx: number, dy: number, dz: number) => void;
    rotate: (dyaw: number, dpitch: number) => void;
    zoom: (amount: number, opts?: {
        force?: boolean;
    }) => void;
    pan: (dx: number, dy: number, opts?: {
        force?: boolean;
    }) => void;
    setTarget: (target: CameraTarget | null, opts?: {
        force?: boolean;
    }) => void;
    setBounds: (bounds: CameraBounds | null) => void;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    offsetX: number;
    offsetY: number;
    idleX: number;
    idleY: number;
    mode: CameraMode;
    lock: boolean;
    target: CameraTarget | null;
    bounds: CameraBounds | null;
};
