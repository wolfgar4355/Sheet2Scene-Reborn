const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../apps/web/public/assets/layout');
const outputFile = path.join(__dirname, '../apps/web/app/assetsBase64.ts');

const imagesToEncode = [
  'bg-hall.png',
  'ui-lectern.png',
  'ui-grimoire.png'
];

let outputContent = '// AUTO-GENERATED: DO NOT EDIT OR COMMIT TO GIT\n';

for (const img of imagesToEncode) {
  const filePath = path.join(imagesDir, img);
  if (fs.existsSync(filePath)) {
    const b64 = fs.readFileSync(filePath).toString('base64');
    const varName = img.replace('.png', '').replace(/-/g, '_');
    outputContent += `export const ${varName}_b64 = 'data:image/png;base64,${b64}';\n`;
    console.log(`Generated base64 for ${img}`);
  } else {
    console.warn(`WARNING: Missing asset ${img}`);
  }
}

fs.writeFileSync(outputFile, outputContent);
console.log('✅ assetsBase64.ts generated successfully.');
