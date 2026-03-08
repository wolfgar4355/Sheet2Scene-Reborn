export type GSWorldId = "galactic-saga-core";
export interface GSWorld {
    id: GSWorldId;
    slug: string;
    name: string;
    theme: "scifi";
    description: string;
}
export declare const GALACTIC_SAGA_WORLDS: GSWorld[];
export default GALACTIC_SAGA_WORLDS;
