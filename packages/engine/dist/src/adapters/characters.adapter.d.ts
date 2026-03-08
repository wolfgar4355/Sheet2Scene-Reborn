import { SupabaseClient } from "@supabase/supabase-js";
export type CharacterBody = {
    name: string;
    system: string;
    data?: Record<string, unknown>;
};
export type CharacterRecord = CharacterBody & {
    id: string;
    user_id: string;
    created_at: string;
    updated_at: string;
};
/**
 * Fetch characters for a specific user.
 * @param supabase An authenticated Supabase client.
 * @param userId The ID of the user.
 */
export declare function getCharactersByUser(supabase: SupabaseClient, userId: string): Promise<CharacterRecord[]>;
/**
 * Create a new character for a user.
 * @param supabase An authenticated Supabase client.
 * @param userId The ID of the user.
 * @param character The character data to insert.
 */
export declare function createCharacter(supabase: SupabaseClient, userId: string, character: CharacterBody): Promise<CharacterRecord>;
