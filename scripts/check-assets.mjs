// Revisa que cada archivo de src/assets esté referenciado desde el código.
import fs from 'node:fs';
import path from 'node:path';

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));

const assets = walk('src/assets');
const code = walk('src')
  .filter((f) => /\.(astro|ts|css)$/.test(f))
  .map((f) => fs.readFileSync(f, 'utf8'))
  .join('\n');

const orphans = assets.filter((f) => !code.includes(path.basename(f)));

orphans.forEach((f) => console.error(`${f}: ningún archivo lo usa`));
console.log(`${assets.length} assets, ${orphans.length} sin uso`);
if (orphans.length > 0) process.exit(1);
