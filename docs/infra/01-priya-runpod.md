# Connecter `/api/generate` à RunPod
**Owner**: Priya · **Status**: TODO  
**But**: Proxy sécurisé Next.js → RunPod (image gen).

## Tâches
- [ ] Créer endpoint `POST /api/generate` (route handler App Router).
- [ ] Lire `RUNPOD_API_KEY` côté serveur (pas public).
- [ ] Timeout + retry + polling du job.
- [ ] Logs d’erreur (console + future /admin/logs).
- [ ] Mettre variables dans `.env.local` / `.env.production`.

## Notes techniques
- Contrôler la taille d’image et quota.
- Signature requête côté serveur uniquement.

## Livrables
- [ ] PR avec route + tests de fumée.
- [ ] Doc d’usage dans `docs/api/generate.md`.
