#!/usr/bin/env node
// AAA v3 — Sheet2Scene Automation & QA Orchestrator
// Emplacement : scripts/aaa-engine.js

import { spawnSync } from "child_process";
import path from "path";
import fs from "fs";

const ROOT = process.cwd();

/** Petite aide pour les logs */
const LOG = {
  info: (msg) => console.log(`ℹ️  ${msg}`),
  ok: (msg) => console.log(`✅ ${msg}`),
  warn: (msg) => console.log(`⚠️  ${msg}`),
  err: (msg) => console.error(`❌ ${msg}`),
};

function resolveScript(relPath) {
  return path.join(ROOT, relPath);
}

function runCommand(label, command, options = {}) {
  const { required = true } = options;
  LOG.info(`(${label}) → ${command}`);
  const res = spawnSync(command, {
    shell: true,
    cwd: ROOT,
    stdio: "inherit",
    env: process.env,
  });

  const ok = res.status === 0;
  if (ok) {
    LOG.ok(`${label} terminé avec succès.`);
  } else {
    if (required) {
      LOG.err(`${label} a échoué (exit code ${res.status ?? "null"}).`);
    } else {
      LOG.warn(`${label} a échoué mais est marqué comme optionnel.`);
    }
  }

  return {
    label,
    command,
    status: ok ? "success" : "failed",
    exitCode: res.status ?? null,
    required,
  };
}

/** Définition des tâches AAA v3.
 *  On réutilise *tous* tes scripts existants + l’agent home-hero.
 */
const TASKS = [
  // ---- CHECKS / QA ---------------------------------------------------------
  {
    id: "backend-health",
    kind: "check",
    label: "Backend QA (Supabase + OpenAI)",
    cmd: "bash scripts/check-backend.sh",
    required: true,
  },
  {
    id: "assets-names",
    kind: "check",
    label: "Nommage des assets visuels",
    cmd: "bash scripts/check-assets-names.sh",
    required: true,
  },
  {
    id: "privacy-scan",
    kind: "check",
    label: "Privacy Scan (Maya)",
    cmd: "bash scripts/privacy-scan.sh", // wrapper simple, voir plus bas
    required: false, // peut être optionnel si besoin
  },
  {
    id: "bestiary-duplicates",
    kind: "check",
    label: "Scan bestiary (doublons / legacy)",
    cmd: "bash scripts/find-bestiary-duplicates.sh",
    required: false,
  },

  // ---- FIX / PATCHS --------------------------------------------------------
  {
    id: "bestiary-fix",
    kind: "fix",
    label: "Standardisation du bestiary",
    cmd: "bash scripts/fix-bestiary.sh",
    required: false,
  },
  {
    id: "pwa-icons",
    kind: "fix",
    label: "Génération icônes PWA",
    cmd: "bash scripts/pwa-icons.sh",
    required: false,
  },
  {
    id: "clean-dev",
    kind: "fix",
    label: "Nettoyage cache dev (Next/TS/Vite)",
    cmd: "bash scripts/clean-dev.sh",
    required: false,
  },

  // ---- PATCH UI / FRONTEND -------------------------------------------------
  {
    id: "home-hero-v1",
    kind: "patch",
    label: "Patch page d'accueil grimoire (Home Hero v1)",
    // On réutilise ton agent actuel
    cmd: "node scripts/agent.js home-hero-v1",
    required: false,
  },

  // ---- GESTION GITHUB / TRIAGE --------------------------------------------
  {
    id: "milestone-triage",
    kind: "fix",
    label: "Triage des issues / milestones",
    cmd: "bash scripts/milestone-triage.sh",
    required: false,
  },
];

/** Filtrage des tâches selon mode + id */
function selectTasks(command, targetId) {
  if (command === "task" && targetId) {
    const t = TASKS.find((t) => t.id === targetId);
    if (!t) {
      LOG.err(`Aucune tâche AAA avec id="${targetId}".`);
      process.exit(1);
    }
    return [t];
  }

  if (command === "check") {
    return TASKS.filter((t) => t.kind === "check");
  }
  if (command === "fix") {
    return TASKS.filter((t) => t.kind === "fix");
  }
  if (command === "patch") {
    return TASKS.filter((t) => t.kind === "patch");
  }
  if (command === "all" || command === "ci") {
    return [...TASKS];
  }

  return [];
}

function printHelp() {
  console.log(`
AAA v3 — Orchestrateur Sheet2Scene (scripts/aaa-engine.js)

Usage:
  node scripts/aaa-engine.js check        # lance tous les CHECKS
  node scripts/aaa-engine.js fix          # lance tous les FIX
  node scripts/aaa-engine.js patch        # lance tous les PATCH UI
  node scripts/aaa-engine.js all          # lance tout (check + fix + patch)
  node scripts/aaa-engine.js task <id>    # lance une seule tâche (id ci-dessous)
  node scripts/aaa-engine.js ci           # mode CI: all + exit 1 si un required échoue

Tâches disponibles:
${TASKS.map((t) => `  - ${t.id}  [${t.kind}]  → ${t.label}`).join("\n")}
`);
}

function main() {
  const [, , command, maybeId] = process.argv;

  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    process.exit(0);
  }

  const tasks = selectTasks(command, maybeId);
  if (!tasks.length) {
    LOG.err(`Commande inconnue: "${command}".`);
    printHelp();
    process.exit(1);
  }

  LOG.info(`AAA v3 → mode "${command}", ${tasks.length} tâche(s) à exécuter.\n`);

  const results = [];
  for (const t of tasks) {
    const res = runCommand(t.label, t.cmd, { required: t.required });
    results.push({ ...t, ...res });
    console.log(""); // ligne vide entre les tâches
  }

  // Résumé
  console.log("\n──────── Résumé AAA v3 ────────");
  for (const r of results) {
    const icon = r.status === "success" ? "✅" : r.required ? "❌" : "⚠️";
    console.log(
      `${icon} [${r.kind.padEnd(5)}] ${r.id.padEnd(20)} → ${r.label}`
    );
  }
  console.log("────────────────────────────────\n");

  // En mode CI : fail si un required échoue
  if (command === "ci" || command === "all" || command === "check") {
    const failedRequired = results.some(
      (r) => r.required && r.status !== "success"
    );
    if (failedRequired) {
      LOG.err("Certains checks obligatoires ont échoué.");
      process.exit(1);
    }
  }

  process.exit(0);
}

main();
