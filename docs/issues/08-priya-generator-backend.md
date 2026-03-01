### 🤖 Connecter Générateur IA aux mondes (Priya — MLOps / Backend)

**Objectif :** Traiter les jobs `/api/generate` pour les scènes créées via le configurateur multi-mondes.

✅ Tâches :
- [ ] Prendre en compte les IDs `world`, `era`, `class`, `pose` dans les jobs
- [ ] Générer une image cohérente à partir des paramètres
- [ ] Ajouter le `prompt`, les `params` (steps, guidance, style) dans la base
- [ ] Générer une sortie PNG + JSON méta
- [ ] Uploader dans Supabase Storage par chemin : `/user_id/world_name/type/item.png`

📁 Fichiers :
- `app/api/generate/route.ts`
- `supabase/schema.sql` (jobs, scenes)
- `s2s-ai-proxy/worker.ts`

🧠 Assigné à : `@priya`
