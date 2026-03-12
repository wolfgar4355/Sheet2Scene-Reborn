const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../apps/web/public/assets');
const outputFile = path.join(__dirname, '../apps/web/app/assetsBase64.ts');

const imagesToEncode = [
  { file: 'bg-hall.png',   varName: 'bg_hall_b64' },
  { file: 'lectern.png',   varName: 'ui_lectern_b64' },
  { file: 'grimoire.png',  varName: 'ui_grimoire_b64' },
];

let outputContent = '// AUTO-GENERATED: DO NOT EDIT OR COMMIT TO GIT\n';

for (const { file, varName } of imagesToEncode) {
  const filePath = path.join(imagesDir, file);
  if (fs.existsSync(filePath)) {
    const b64 = fs.readFileSync(filePath).toString('base64');
    outputContent += `export const ${varName} = 'data:image/png;base64,${b64}';\n`;
    console.log(`Generated base64 for ${file} (${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB)`);
  } else {
    console.warn(`WARNING: Missing asset ${file} in ${imagesDir}`);
  }
}

fs.writeFileSync(outputFile, outputContent);
console.log('\u2705 assetsBase64.ts generated successfully.');
