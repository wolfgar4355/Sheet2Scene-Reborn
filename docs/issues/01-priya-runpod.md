### 🎯 Connecter `/api/generate` à RunPod (Priya — MLOps)

**Objectif :** mettre en place le backend de génération d’image via file d’attente + worker RunPod.

📁 Fichiers ciblés :
- `app/api/generate/route.ts`
- `s2s-ai-proxy/worker.ts`
- `supabase/schema.sql` (`jobs`, `scenes`)

✅ Tâches :
- [ ] Créer un `job` en `status: pending` depuis `/api/generate`
- [ ] Worker RunPod récupère le `job` → `status: running`
- [ ] Génère image IA (prompt, seed, style)
- [ ] Upload PNG dans Supabase Storage
- [ ] Mettre `status=done` + logs (ou `failed`)
- [ ] Ajout `created_at`, `updated_at`, `error`, `logs`

📦 Contraintes :
- Latence < 90s (p95)
- Sécurité API : auth + quota

🧠 Assigné à : `@priya`
