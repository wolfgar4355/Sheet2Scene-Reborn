// generate-all-rituals.ts
// Fusion automatique des rituels Fantasy
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ALL_RITUALS } from "./index.ts"; // ← IMPORTANT
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, "ALL_RITUALS.ts");
const fileContent = `// AUTO-GENERATED — Do not edit manually\n` +
    `import type { Ritual } from "./schema.ts";\n\n` +
    `export const ALL_RITUALS: Ritual[] = ${JSON.stringify(ALL_RITUALS, null, 2)};\n`;
fs.writeFileSync(outputPath, fileContent);
console.log("✨ ALL_RITUALS.ts généré avec succès !");
