### 🧹 Script de purge auto + ROPA (Maya — Privacy Ops)

**Objectif :** implémenter un script SQL/BQ pour purger les images/SCENES inactives depuis 30 jours.

✅ Tâches :
- [ ] Écrire script purge Supabase Storage (cron job)
- [ ] Supprimer scènes `created_at < now() - 30j`
- [ ] Maintenir fichier `processing_register.json` (ROPA)
- [ ] Ajouter métrique de purge à l’admin

📁 Fichiers visés :
- `scripts/purge.sql`
- `infra/purge-job.ts`
- `privacy/ropa.json`

🧠 Assigné à : `@maya`
