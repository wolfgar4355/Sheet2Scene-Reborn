export type Tables = {
  worlds: { Row: { id: string; name: string } };
  characters: { Row: { id: string; name: string; world_id: string } };
};
