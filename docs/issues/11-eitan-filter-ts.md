### 🛡️ Protéger les prompts contre l'IP tierce (Eitan — Trust & Safety)

**Objectif :** Empêcher l’envoi de prompts contenant des noms/marques sous licence (D&D, Star Wars, etc.)

✅ Tâches :
- [ ] Créer un middleware de filtre IP (mots clés interdits)
- [ ] Logger toute tentative de génération interdite
- [ ] Afficher une `Dialog` UI côté client avec explication
- [ ] Tester contre les mondes “Pathfinder”, “Star Wars”, etc.

📁 Fichiers :
- `lib/middleware/ipfilter.ts`
- `components/ui/Dialog.tsx`
- `lib/logs/audit.ts`

🧠 Assigné à : `@eitan`
