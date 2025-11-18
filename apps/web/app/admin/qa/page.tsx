"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type QAReport = {
  id: string;
  created_at: string;
  status: string;
  mode: string | null;
  notes: string | null;
};

export default function QAReportsPage() {
  const [reports, setReports] = useState<QAReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClientComponentClient();

    const fetchReports = async () => {
      const { data, error } = await supabase
        .from("qa_reports")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20);

      if (error) {
        console.error("Erreur QA:", error);
      } else {
        setReports((data as QAReport[]) || []);
      }
      setLoading(false);
    };

    fetchReports();
  }, []);

  if (loading) {
    return <p>Chargement des rapports...</p>;
  }

  return (
    <main className="p-8 max-w-4xl mx-auto text-sm">
      <h1 className="text-2xl font-bold mb-4">📊 QA Backend Reports</h1>
      <table className="w-full border border-gray-600 rounded-md">
        <thead className="bg-gray-800 text-gray-200">
          <tr>
            <th className="p-2 text-left">Date (UTC)</th>
            <th className="p-2 text-left">Statut</th>
            <th className="p-2 text-left">Mode</th>
            <th className="p-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr
              key={r.id}
              className="border-t border-gray-700 hover:bg-gray-900/40"
            >
              <td className="p-2">
                {r.created_at ? new Date(r.created_at).toLocaleString() : "—"}
              </td>
              <td
                className={`p-2 font-bold ${
                  r.status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {r.status === "success" ? "✅ OK" : "❌ Échec"}
              </td>
              <td className="p-2">{r.mode ?? "—"}</td>
              <td className="p-2 text-gray-400">{r.notes ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
