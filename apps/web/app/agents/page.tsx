import { getSupabaseServerClient } from '../../lib/supabase/server'

type Row = {
  group_id: string
  group_name: string
  position: number | null
  agent_id: string
  agent_name?: string | null
  role?: string | null
}

export default async function AgentsPage() {
   const supabase = await getSupabaseServerClient()
   const { data, error } = await supabase
     .from('v_agents_by_group')
     .select('*')
     .order('group_name', { ascending: true })

   if (error) throw new Error(error.message)
   const rows = (data ?? []) as Row[]
   
return (
    <main className="p-6"> 
      <h1 className="text-xl font-semibold mb-4">Agents par groupe</h1>
      <div className="overflow-x-auto">
        <table className="min-w-[720px] border-collapse">
          <thead>
            <tr>
              <th className="border px-3 py-2 text-left">Groupe</th>
              <th className="border px-3 py-2 text-left">Group ID</th>
              <th className="border px-3 py-2 text-left">Agent</th>
              <th className="border px-3 py-2 text-left">Agent ID</th>
              <th className="border px-3 py-2 text-left">Rôle</th>
              <th className="border px-3 py-2 text-left">Position</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.group_id}-${r.agent_id}`}>
                <td className="border px-3 py-2">{r.group_name}</td>
                <td className="border px-3 py-2">{r.group_id}</td>
                <td className="border px-3 py-2">{r.agent_name ?? '—'}</td>
                <td className="border px-3 py-2">{r.agent_id}</td>
                <td className="border px-3 py-2">{r.role ?? '—'}</td>
                <td className="border px-3 py-2">{r.position ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
);
}
