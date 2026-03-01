### 💰 Suivi des coûts GPU/Supabase (Daniel — RevOps/FinOps)

**Objectif :** mesurer l’usage GPU/CPU et estimer les coûts RunPod/Supabase dans l’admin panel.

✅ Tâches :
- [ ] Créer script de suivi (cron ? Supabase logs)
- [ ] Tracker coût par job (temps GPU, modèle, résolution)
- [ ] Récupérer stats (RAM, CPU, GPU utilisé)
- [ ] Export vers dashboard admin `/admin`
- [ ] Préparer doc explicative (CAD/USD/mois)

📁 Fichiers concernés :
- `infra/metrics.ts`
- `admin/dashboard.tsx`

🧠 Assigné à : `@daniel`
