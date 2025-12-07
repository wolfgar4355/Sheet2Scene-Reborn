// generate-all-armors-prompts.ts — écrit le JSON global des armures MQ

import * as fs from "node:fs";
import * as path from "node:path";
import { MQ_ALL_ARMORS_PROMPTS } from "./all-armors-prompts";

async function main() {
  const OUTPUT_PATH = "generated/all-armors-prompts.json";

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(
    OUTPUT_PATH,
    JSON.stringify(MQ_ALL_ARMORS_PROMPTS, null, 2),
    "utf8",
  );

  console.log("✨ all-armors-prompts.json généré !");
  console.log("📁 Chemin :", OUTPUT_PATH);
}

main().catch((err) => {
  console.error("Erreur lors de la génération des prompts d’armures :", err);
  process.exit(1);
});
