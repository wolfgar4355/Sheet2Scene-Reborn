/**
 * Fetch characters for a specific user.
 * @param supabase An authenticated Supabase client.
 * @param userId The ID of the user.
 */
export async function getCharactersByUser(supabase, userId) {
    const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false });
    if (error) {
        throw new Error(`Failed to fetch characters: ${error.message}`);
    }
    return data;
}
/**
 * Create a new character for a user.
 * @param supabase An authenticated Supabase client.
 * @param userId The ID of the user.
 * @param character The character data to insert.
 */
export async function createCharacter(supabase, userId, character) {
    const name = character.name.trim();
    const system = character.system.trim();
    const data = character.data || {};
    if (!name)
        throw new Error('Field "name" is required');
    if (!system)
        throw new Error('Field "system" is required');
    const row = { user_id: userId, name, system, data };
    const { data: inserted, error } = await supabase
        .from("characters")
        .insert(row)
        .select()
        .single();
    if (error) {
        throw new Error(`Failed to create character: ${error.message}`);
    }
    return inserted;
}
