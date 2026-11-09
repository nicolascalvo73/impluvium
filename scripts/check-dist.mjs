// Revisa que los enlaces, anclas y recursos internos del HTML generado existan.
import fs from 'node:fs';
import path from 'node:path';

const dist = process.argv[2] ?? 'dist';
const base = (process.env.BASE_PATH ?? '/impluvium').replace(/\/$/, '');

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));

const idsCache = new Map();
function idsOf(file) {
  if (!idsCache.has(file)) idsCache.set(file, new Set([...fs.readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return idsCache.get(file);
}

const refsOf = (html) =>
  [...html.matchAll(/\s(?:href|src)="([^"]+)"|\ssrcset="([^"]+)"/g)].flatMap((m) => (m[1] ? [m[1]] : m[2].split(',').map((s) => s.trim().split(/\s+/)[0])));

const htmls = walk(dist).filter((f) => f.endsWith('.html'));
const problems = [];
let total = 0;

for (const file of htmls) {
  for (const ref of refsOf(fs.readFileSync(file, 'utf8'))) {
    if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
    total++;
    const [pathname, hash] = ref.split('#');
    let target = file;
    if (pathname) {
      if (pathname !== base && !pathname.startsWith(`${base}/`)) {
        problems.push(`${file}: "${ref}" no incluye la ruta base ${base}`);
        continue;
      }
      target = path.join(dist, pathname.slice(base.length));
      if (pathname.endsWith('/') || pathname === base) target = path.join(target, 'index.html');
      if (!fs.existsSync(target)) {
        problems.push(`${file}: "${ref}" no existe`);
        continue;
      }
    }
    if (hash && !idsOf(target).has(hash)) problems.push(`${file}: el ancla de "${ref}" no existe`);
  }
}

problems.forEach((p) => console.error(p));
console.log(`${htmls.length} páginas, ${total} referencias internas, ${problems.length} problemas`);
if (htmls.length === 0 || problems.length > 0) process.exit(1);
