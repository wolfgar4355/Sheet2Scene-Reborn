export type CustomWorldId = string;
export interface CustomWorld {
    id: CustomWorldId;
    slug: string;
    name: string;
    description?: string;
}
export declare const CUSTOM_WORLDS: CustomWorld[];
export default CUSTOM_WORLDS;
