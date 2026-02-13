import { readFileSync } from 'node:fs';
import { access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

function ok(msg) { console.log(`✓ ${msg}`); }
function warn(msg) { console.warn(`! ${msg}`); }
function fail(msg) { console.error(`✗ ${msg}`); process.exitCode = 1; }

function isHttp(url) { return url.startsWith('http://') || url.startsWith('https://'); }
function isRelative(url) { return url.startsWith('./'); }

const skipHttp = process.argv.includes('--skip-http') || process.env.SKIP_HTTP === '1';

const dataPath = resolve(root, 'data', 'projects.json');
const buf = readFileSync(dataPath, 'utf8');
const projects = JSON.parse(buf);

ok(`Carregado ${projects.length} projetos de data/projects.json`);

const checks = [];

for (const p of projects) {
  if (!p.name || !p.demo) {
    fail(`Projeto inválido (name/demo ausentes): ${JSON.stringify(p)}`);
    continue;
  }
  // Verifica link de demo
  if (isRelative(p.demo)) {
    const abs = resolve(root, decodeURI(p.demo.replace(/^\.\//, '')));
    checks.push(
      access(abs).then(
        () => ok(`Arquivo existe: ${p.name} → ${p.demo}`),
        () => fail(`Arquivo não encontrado: ${p.name} → ${p.demo}`)
      )
    );
  } else if (isHttp(p.demo)) {
    if (skipHttp) {
      warn(`Pulado HTTP: ${p.name} → ${p.demo}`);
    } else {
      checks.push(
        fetch(p.demo, { method: 'GET' })
          .then((res) => {
            if (res.ok) ok(`HTTP OK: ${p.name} → ${p.demo}`);
            else fail(`HTTP ${res.status}: ${p.name} → ${p.demo}`);
          })
          .catch((e) => fail(`HTTP erro: ${p.name} → ${p.demo} (${e.message})`))
      );
    }
  } else {
    warn(`Formato de demo não suportado: ${p.name} → ${p.demo}`);
  }

  // Verifica link de repo (pasta)
  if (p.repo && isRelative(p.repo)) {
    const absRepo = resolve(root, decodeURI(p.repo.replace(/^\.\//, '')));
    checks.push(
      access(absRepo).then(
        () => ok(`Pasta existe: ${p.name} → ${p.repo}`),
        () => fail(`Pasta não encontrada: ${p.name} → ${p.repo}`)
      )
    );
  }
}

Promise.allSettled(checks).then((results) => {
  const rejected = results.filter((r) => r.status === 'rejected').length;
  if (process.exitCode) {
    console.error('Alguns links falharam.');
    process.exit(1);
  } else {
    console.log('Todos os checks executados.');
    process.exit(0);
  }
});

