import fs from "fs";
import path from "path";

console.log("Running fix-fantasy-v2 on", import.meta.url);

// Utilitaire pour marcher dans les dossiers
function walk(dir: string, callback: (file: string) => void) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      walk(filepath, callback);
    } else if (filepath.endsWith(".ts")) {
      callback(filepath);
    }
  }
}

const FANTASY_ROOT = path.resolve(
  process.cwd(),
  "src/data/mithril-quest/bestiary/sources"
);

walk(FANTASY_ROOT, (file) => {
  let content = fs.readFileSync(file, "utf8");

  // Auto-comments V2
  content = content
    .replace(/tactics:\s*\[/g, '// NOTE (fix-fantasy v2 auto-commented)\ntactics: [')
    .replace(/abilities:\s*\[/g, '// NOTE (fix-fantasy v2 auto-commented)\nabilities: [')
    .replace(/loot:\s*\[/g, '// NOTE (fix-fantasy v2 auto-commented)\nloot: [');

  fs.writeFileSync(file, content, "utf8");

  console.log("✔ Fixed:", file);
});

console.log("✅ DONE fix-fantasy-v2!");
