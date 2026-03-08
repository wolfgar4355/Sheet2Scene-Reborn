declare class AudioBootCore {
    private _ctx;
    private _readyPromise;
    private _resolve;
    constructor();
    /**
     * Retourne l'AudioContext global (créé si nécessaire)
     */
    get context(): AudioContext;
    /**
     * Promesse résolue lorsque le contexte est activé
     */
    ready(): Promise<AudioContext>;
    /**
     * Force un "resume" du contexte (iOS/Safari friendly)
     */
    ensure(): Promise<void>;
    /**
     * Boot automatique au premier geste utilisateur
     */
    attachUserGestures(): void;
}
export declare const AudioBootCoreInstance: AudioBootCore;
export default function AudioBoot(): null;
export {};
