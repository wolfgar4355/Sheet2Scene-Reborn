#!/usr/bin/env node
// AAA v3 — Sheet2Scene Automation & QA Orchestrator (FULL NODE MAIN)
//
// - Orchestrateur en Node.js
// - Tâches : checks, fixes, patchs UI, triage GitHub
// - Certaines opérations lourdes utilisent encore des scripts .sh existants,
//   mais toute la logique AAA (CLI, logs, orchestration, statut) est en Node.

import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import os from "os";

// ---------------------------------------------------------------------------
// Helpers de base
// ---------------------------------------------------------------------------

const ROOT = process.cwd();

const COLORS = {
  reset: "\x1b[0m",
  gray: "\x1b[90m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

function logInfo(msg) {
  console.log(`${COLORS.cyan}ℹ️  ${msg}${COLORS.reset}`);
}
function logOk(msg) {
  console.log(`${COLORS.green}✅ ${msg}${COLORS.reset}`);
}
function logWarn(msg) {
  console.warn(`${COLORS.yellow}⚠️  ${msg}${COLORS.reset}`);
}
function logErr(msg) {
  console.error(`${COLORS.red}❌ ${msg}${COLORS.reset}`);
}

function resolvePath(...segments) {
  return path.join(ROOT, ...segments);
}

// petit parseur de .env pour local (comme l'ancien check-backend.sh)
function loadDotEnv() {
  const envPath = resolvePath(".env");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

// wrapper pour les calls shell restant (pwa-icons, milestone, etc.)
function runShellTask(label, cmd, args = [], options = {}) {
  logInfo(`Exécution [${label}] → ${cmd} ${args.join(" ")}`);
  const res = spawnSync(cmd, args, {
    stdio: "inherit",
    shell: false,
    cwd: ROOT,
    ...options,
  });
  if (res.status === 0) {
    logOk(`${label} terminé avec succès.`);
    return { status: "success" };
  } else {
    logErr(`${label} a échoué avec code ${res.status ?? "null"}.`);
    return { status: "failed", code: res.status ?? null };
  }
}

// petit helper pour parcourir un dossier récursivement
function walkDir(baseDir) {
  const files = [];
  if (!fs.existsSync(baseDir)) return files;
  const stack = [baseDir];

  while (stack.length) {
    const current = stack.pop();
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      for (const entry of fs.readdirSync(current)) {
        stack.push(path.join(current, entry));
      }
    } else {
      files.push(current);
    }
  }
  return files;
}

// ---------------------------------------------------------------------------
// TÂCHES NODE PURES
// ---------------------------------------------------------------------------

// 1) Backend health : OpenAI + Supabase
async function taskBackendHealth() {
  loadDotEnv();

  const id = "backend-health";
  const label = "Backend QA (Supabase + OpenAI)";
  logInfo(`[${id}] ${label}`);

  let ok = true;
  const details = [];

  // --- OpenAI
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    ok = false;
    details.push("OPENAI_API_KEY manquant dans l'environnement / .env");
  } else {
    try {
      const resp = await fetch("https://api.openai.com/v1/models", {
        headers: { Authorization: `Bearer ${openaiKey}` },
      });
      if (!resp.ok) {
        ok = false;
        details.push(`Appel OpenAI KO (HTTP ${resp.status})`);
      } else {
        logOk("OpenAI API OK ✅");
      }
    } catch (err) {
      ok = false;
      details.push(`Erreur réseau OpenAI : ${String(err)}`);
    }
  }

  // --- Supabase
  const sbUrl = process.env.SUPABASE_URL;
  const sbKey = process.env.SUPABASE_SERVICE_KEY;
  if (!sbUrl || !sbKey) {
    ok = false;
    details.push("SUPABASE_URL ou SUPABASE_SERVICE_KEY manquant");
  } else {
    try {
      const probeUrl = new URL("/rest/v1/", sbUrl).toString();
      const resp = await fetch(probeUrl, {
        headers: {
          apikey: sbKey,
          Authorization: `Bearer ${sbKey}`,
        },
      });
      // même si 404, on considère que le backend répond au niveau réseau
      if (!resp.ok && resp.status >= 500) {
        ok = false;
        details.push(`Supabase KO (HTTP ${resp.status})`);
      } else {
        logOk("Supabase reach OK ✅");
      }
    } catch (err) {
      ok = false;
      details.push(`Erreur réseau Supabase : ${String(err)}`);
    }
  }

  if (!ok) {
    for (const d of details) logErr(d);
    return { id, kind: "check", label, status: "failed", details };
  }
  return { id, kind: "check", label, status: "success", details };
}

// 2) Vérification des noms d’assets (ex .sh → Node)
async function taskAssetsNames() {
  const id = "assets-names";
  const label = "Nommage des assets visuels";
  logInfo(`[${id}] ${label}`);

  let targetDir = null;
  const appsPublic = resolvePath("apps/web/public");
  const plainPublic = resolvePath("public");

  if (fs.existsSync(appsPublic)) targetDir = appsPublic;
  else if (fs.existsSync(plainPublic)) targetDir = plainPublic;

  if (!targetDir) {
    logWarn("Dossier public introuvable, tâche marquée comme SKIP.");
    return { id, kind: "check", label, status: "skipped" };
  }

  const ALLOWED_PREFIX = /^(bg-|ui-|fx-|sound-|ambience-|video-|font-|icon-)/;
  const files = walkDir(targetDir).filter(f => !fs.statSync(f).isDirectory());

  const invalid = [];
  for (const file of files) {
    const rel = path.relative(targetDir, file);
    const base = path.basename(rel);
    // ignorer manifest, favicon, robots etc.
    if (/^favicon|^manifest|^robots/i.test(base)) continue;
    if (!ALLOWED_PREFIX.test(base)) {
      invalid.push(rel);
    }
  }

  if (invalid.length > 0) {
    logErr("Certains fichiers ne respectent pas la nomenclature :");
    for (const f of invalid) console.error(`  - ${f}`);
    return {
      id,
      kind: "check",
      label,
      status: "failed",
      details: invalid,
    };
  }

  logOk("Tous les fichiers respectent la nomenclature ✅");
  return { id, kind: "check", label, status: "success" };
}

// 3) Privacy Scan (emails, téléphones, tokens) simplifié
async function taskPrivacyScan() {
  const id = "privacy-scan";
  const label = "Privacy Scan (emails / téléphones / tokens)";
  logInfo(`[${id}] ${label}`);

  const targets = [
    resolvePath("logs"),
    resolvePath("exports"),
    resolvePath("supabase"),
    resolvePath("src"),
  ];

  const EMAIL_REGEX = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
  const PHONE_REGEX = /\b[+0-9][0-9()[\]\-.\s]{7,}\b/g;
  const TOKEN_REGEX = /(sk-[A-Za-z0-9]{20,}|service_anon_[A-Za-z0-9]{10,})/g;

  const findings = {
    emails: new Set(),
    phones: new Set(),
    tokens: new Set(),
  };

  for (const base of targets) {
    if (!fs.existsSync(base)) continue;
    const all = walkDir(base);
    for (const file of all) {
      if (!fs.statSync(file).isFile()) continue;
      // limiter taille pour Termux
      const stat = fs.statSync(file);
      if (stat.size > 2 * 1024 * 1024) continue; // >2MB → skip

      const txt = fs.readFileSync(file, "utf8");

      let match;
      while ((match = EMAIL_REGEX.exec(txt))) findings.emails.add(match[0]);
      while ((match = PHONE_REGEX.exec(txt))) findings.phones.add(match[0]);
      while ((match = TOKEN_REGEX.exec(txt))) findings.tokens.add(match[0]);
    }
  }

  if (
    findings.emails.size === 0 &&
    findings.phones.size === 0 &&
    findings.tokens.size === 0
  ) {
    logOk("Privacy Scan OK — aucun pattern sensible trouvé ✅");
    return { id, kind: "check", label, status: "success" };
  }

  logWarn("Privacy Scan a trouvé des patterns potentiellement sensibles :");
  if (findings.emails.size) {
    console.log("📧 Emails:");
    for (const e of findings.emails) console.log("  -", e);
  }
  if (findings.phones.size) {
    console.log("📞 Téléphones:");
    for (const p of findings.phones) console.log("  -", p);
  }
  if (findings.tokens.size) {
    console.log("🔑 Tokens:");
    for (const t of findings.tokens) console.log("  -", t);
  }

  return {
    id,
    kind: "check",
    label,
    status: "failed",
    details: {
      emails: [...findings.emails],
      phones: [...findings.phones],
      tokens: [...findings.tokens],
    },
  };
}

// 4) Bestiary duplicates (ex-find-bestiary-duplicates.sh)
async function taskBestiaryDuplicates() {
  const id = "bestiary-duplicates";
  const label = "Scan Bestiary (doublons / legacy)";
  logInfo(`[${id}] ${label}`);

  const searchDir = ROOT;
  const KEYWORDS = [
    "CreatureSize",
    "CreatureType",
    "MonsterDefinition",
    "StatBlock",
    "AttackAction",
    "Trait",
  ];

  const matches = [];
  const all = walkDir(searchDir).filter(
    f =>
      !f.includes("node_modules") &&
      !f.endsWith(".d.ts") &&
      !path.basename(f).startsWith(".")
  );

  for (const file of all) {
    if (!file.endsWith(".ts") && !file.endsWith(".tsx") && !file.endsWith(".js"))
      continue;
    const txt = fs.readFileSync(file, "utf8");
    for (const key of KEYWORDS) {
      if (txt.includes(key)) {
        const rel = path.relative(ROOT, file);
        matches.push({ key, file: rel });
      }
    }
  }

  if (matches.length === 0) {
    logOk("Aucun symbole legacy bestiary trouvé ✅");
    return { id, kind: "check", label, status: "success" };
  }

  logWarn("Des symboles bestiary legacy ont été trouvés :");
  for (const m of matches) {
    console.log(`  - ${m.key} → ${m.file}`);
  }

  // ce n’est pas bloquant mais utile
  return { id, kind: "check", label, status: "success", details: matches };
}

// 5) (FIX) Stub pour bestiary-fix → on utilise encore le script .sh
async function taskBestiaryFix() {
  const id = "bestiary-fix";
  const label = "Standardisation du bestiary (script legacy)";
  const res = runShellTask(label, "bash", ["scripts/fix-bestiary.sh"]);
  return { id, kind: "fix", label, status: res.status };
}

// 6) (FIX) PWA icons → wrapper vers pwa-icons.sh
async function taskPwaIcons() {
  const id = "pwa-icons";
  const label = "Génération icônes PWA";
  const res = runShellTask(label, "bash", ["scripts/pwa-icons.sh"]);
  return { id, kind: "fix", label, status: res.status };
}

// 7) (FIX) clean-dev → wrapper clean-dev.sh
async function taskCleanDev() {
  const id = "clean-dev";
  const label = "Nettoyage cache dev (Next/TS/Vite)";
  const res = runShellTask(label, "bash", ["scripts/clean-dev.sh"]);
  return { id, kind: "fix", label, status: res.status };
}

// 8) (PATCH) home-hero-v1 → agent.js existant
async function taskHomeHeroPatch() {
  const id = "home-hero-v1";
  const label = "Patch page d'accueil grimoire (Home Hero v1)";
  const res = runShellTask(label, "node", ["scripts/agent.js", "home-hero-v1"]);
  return { id, kind: "patch", label, status: res.status };
}

// 9) (TRIAGE) milestone-triage → wrapper vers script .sh
async function taskMilestoneTriage() {
  const id = "milestone-triage";
  const label = "Triage des issues / milestones (gh CLI)";
  const res = runShellTask(label, "bash", ["scripts/milestone-triage.sh"]);
  return { id, kind: "triage", label, status: res.status };
}

// ---------------------------------------------------------------------------
// TABLE DES TÂCHES
// ---------------------------------------------------------------------------

const TASKS = [
  // CHECKS
  {
    id: "backend-health",
    kind: "check",
    label: "Backend QA (Supabase + OpenAI)",
    required: true,
    run: taskBackendHealth,
  },
  {
    id: "assets-names",
    kind: "check",
    label: "Noms des assets visuels",
    required: true,
    run: taskAssetsNames,
  },
  {
    id: "privacy-scan",
    kind: "check",
    label: "Privacy Scan (emails / téléphones / tokens)",
    required: false,
    run: taskPrivacyScan,
  },
  {
    id: "bestiary-duplicates",
    kind: "check",
    label: "Scan bestiary (doublons / legacy)",
    required: false,
    run: taskBestiaryDuplicates,
  },

  // FIX
  {
    id: "bestiary-fix",
    kind: "fix",
    label: "Standardisation du bestiary (script)",
    required: false,
    run: taskBestiaryFix,
  },
  {
    id: "pwa-icons",
    kind: "fix",
    label: "Génération icônes PWA",
    required: false,
    run: taskPwaIcons,
  },
  {
    id: "clean-dev",
    kind: "fix",
    label: "Nettoyage cache dev",
    required: false,
    run: taskCleanDev,
  },

  // PATCH UI
  {
    id: "home-hero-v1",
    kind: "patch",
    label: "Patch page d'accueil grimoire",
    required: false,
    run: taskHomeHeroPatch,
  },

  // TRIAGE
  {
    id: "milestone-triage",
    kind: "triage",
    label: "Triage GitHub (milestones + labels)",
    required: false,
    run: taskMilestoneTriage,
  },
];

// ---------------------------------------------------------------------------
// Sélection des tâches selon le mode
// ---------------------------------------------------------------------------

function selectTasks(command, targetId) {
  if (command === "one") {
    const t = TASKS.find(t => t.id === targetId);
    if (!t) {
      logErr(`Aucune tâche AAA avec id="${targetId}".`);
      process.exit(1);
    }
    return [t];
  }

  if (command === "check") {
    return TASKS.filter(t => t.kind === "check");
  }
  if (command === "fix") {
    return TASKS.filter(t => t.kind === "fix");
  }
  if (command === "patch") {
    return TASKS.filter(t => t.kind === "patch");
  }
  if (command === "triage") {
    return TASKS.filter(t => t.kind === "triage");
  }
  if (command === "all" || command === "ci") {
    return [...TASKS];
  }

  logErr(`Commande inconnue "${command}". Utilise "help" pour voir les options.`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function printHelp() {
  console.log(`
AAA v3 — Orchestrateur Sheet2Scene (scripts/aaa-engine.js)

Usage:
  node scripts/aaa-engine.js check       # lance tous les CHECKS
  node scripts/aaa-engine.js fix         # lance tous les FIX
  node scripts/aaa-engine.js patch       # lance les PATCH UI
  node scripts/aaa-engine.js triage      # lance les tâches de triage
  node scripts/aaa-engine.js all         # lance tout (checks + fix + patch + triage)
  node scripts/aaa-engine.js ci          # mode CI strict (fail si required échoue)
  node scripts/aaa-engine.js one <id>    # lance une seule tâche

Tâches disponibles:
${TASKS.map(t => `  - ${t.id.padEnd(18)} [${t.kind}]  ${t.label}`).join("\n")}
`);
}

async function main() {
  const [, , commandArg, maybeId] = process.argv;
  const command = commandArg || "help";

  if (command === "help" || command === "--help" || command === "-h") {
    printHelp();
    process.exit(0);
  }

  const tasks = selectTasks(command, maybeId);
  logInfo(`Mode AAA v3 = "${command}", ${tasks.length} tâche(s) à exécuter.\n`);

  const results = [];

  for (const t of tasks) {
    console.log("\n" + COLORS.gray + "──────────────────────────────────────────────" + COLORS.reset);
    logInfo(`Tâche ${t.id} [${t.kind}] — ${t.label}`);
    try {
      const r = await t.run();
      const status = r?.status || "failed";
      results.push({
        id: t.id,
        kind: t.kind,
        label: t.label,
        required: !!t.required,
        status,
      });
    } catch (err) {
      logErr(`Exception dans la tâche ${t.id}: ${String(err)}`);
      results.push({
        id: t.id,
        kind: t.kind,
        label: t.label,
        required: !!t.required,
        status: "failed",
      });
    }
  }

  // Résumé
  console.log("\nRésumé AAA v3");
  console.log("=============");
  for (const r of results) {
    const icon =
      r.status === "success" ? "✅" : r.status === "skipped" ? "⏭️ " : "❌";
    const req = r.required ? "R" : " ";
    console.log(`${icon} [${req}] ${r.kind.padEnd(6)} ${r.id.padEnd(18)}  ${r.label}`);
  }

  // mode CI : fail si required échoue
  if (command === "ci" || command === "all" || command === "check") {
    const failedRequired = results.some(
      r => r.required && r.status !== "success",
    );
    if (failedRequired) {
      logErr("Certaines tâches obligatoires ont échoué (mode CI).");
      process.exit(1);
    }
  }

  process.exit(0);
}

main().catch(err => {
  logErr("Erreur inattendue dans AAA v3: " + String(err));
  process.exit(1);
});
