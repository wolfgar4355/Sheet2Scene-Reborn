# ⚔️ Section 4 — Modération, QA & Support

Coordination : **M.L. Godin (Chef de projet & Visionnaire)**  
Version : 1.0 • Dernière mise à jour : 2025-11-08  
Statut : 🧩 En intégration

---

## 🎯 Objectif global

Assurer la **qualité**, la **conformité** et la **sécurité** des interactions au sein de la communauté et dans l’application **Sheet2Scene**, tout en garantissant une expérience cohérente avec les valeurs de **GodinVerse**.  

---

## 👥 Équipe et responsabilités

| Agent | Rôle | Responsabilités principales | Statut |
|-------|------|------------------------------|--------|
| **Camille Gagnon** | 💬 Modération FR/EN | • Création et maintenance des macros Discord/Reddit<br>• Journal d’incidents + rapport hebdomadaire<br>• Application stricte de la politique “No IP tierce” | ⏳ En préparation |
| **Wei-Ming Tan** | 🌏 Modération APAC | • Surveillance temps réel (fuseau UTC+8)<br>• Consolidation des rapports d’incident<br>• Coordination avec Camille pour les synthèses hebdo | 🧩 À venir |
| **Lara Santos** | 🧪 Support T1 | • Tests fonctionnels et UX<br>• Reproduction et escalade des bugs<br>• Gestion du Helpdesk + FAQ utilisateurs | ✅ En cours |
| **Aoife O’Connell** | 🛡 DPO / Conformité | • Supervision RGPD / confidentialité des données<br>• Vérification trimestrielle des logs Discord/Reddit<br>• Gestion de la purge automatique (30 jours) | ✅ En cours |

---

## ⚙️ Intégrations techniques

### 🔗 Discord
- Webhook : `#incident-log` → envoi automatique des rapports de QA & modération  
- Macros FR/EN : `/warn`, `/mute`, `/ban`, `/report`, `/incident`  
- Automod : filtrage mots-clés, blocage contenu tiers (images, liens IP)  
- Gestion via `moderation/macros.md` (centralisation des messages types)

### 🗃️ Supabase
- Table : `mod_logs` → journalisation (agent, action, cible, canal, horodatage)  
- Purge automatique :  
  ```sql
  DELETE FROM mod_logs WHERE created_at < NOW() - INTERVAL '30 days';
