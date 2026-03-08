export type PSWorldId = "pathseeker-core";
export interface PSWorld {
    id: PSWorldId;
    slug: string;
    name: string;
    theme: "wanderer";
    description: string;
}
export declare const PATHSEEKER_WORLDS: PSWorld[];
export default PATHSEEKER_WORLDS;
