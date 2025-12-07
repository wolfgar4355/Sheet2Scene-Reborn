import { writeFileSync, mkdirSync } from "fs";
import { MQ_ALL_ARTIFACTS_PROMPTS } from "./all-artifacts-prompts";

const OUTPUT_DIR = "generated";
const OUTPUT_FILE = `${OUTPUT_DIR}/all-artifacts-prompts.json`;

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(MQ_ALL_ARTIFACTS_PROMPTS, null, 2),
    "utf8"
  );

  console.log("✨ all-artifacts-prompts.json généré !");
  console.log("📁 Chemin :", OUTPUT_FILE);
}

main().catch((err) => {
  console.error("❌ Erreur génération artefacts:", err);
});
