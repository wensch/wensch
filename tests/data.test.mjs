// @vitest-environment node
// Testes de integridade dos dados do portfólio (traduções, projetos e arquivos estáticos).
import { test } from 'vitest';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (p) => readFileSync(join(root, p), 'utf8');
const pt = JSON.parse(read('src/i18n/pt.json'));
const en = JSON.parse(read('src/i18n/en.json'));

// Mapa "caminho -> tipo" de todas as folhas (arrays contam como uma folha com tamanho).
const shape = (value, path = '', out = {}) => {
  if (Array.isArray(value)) {
    out[path] = `array`;
    value.forEach((item, i) => shape(item, `${path}[${i}]`, out));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([k, v]) => shape(v, path ? `${path}.${k}` : k, out));
  } else {
    out[path] = typeof value;
  }
  return out;
};

const lookup = (obj, key) => key.split('.').reduce((acc, k) => acc?.[k], obj);

test('pt e en têm exatamente as mesmas chaves e a mesma quantidade de itens', () => {
  const ptShape = shape(pt);
  const enShape = shape(en);
  const onlyPt = Object.keys(ptShape).filter((k) => !(k in enShape));
  const onlyEn = Object.keys(enShape).filter((k) => !(k in ptShape));
  assert.deepEqual(onlyPt, [], `só em pt.json: ${onlyPt.join(', ')}`);
  assert.deepEqual(onlyEn, [], `só em en.json: ${onlyEn.join(', ')}`);
});

test('toda chave de tradução citada no código existe em pt e en', () => {
  const dir = join(root, 'src/components');
  const keyRe = /['"`]((?:header|hero|about|skills|projects|contact|a11y)\.[A-Za-z0-9_.]+)['"`]/g;
  const missing = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.tsx'))) {
    for (const [, key] of read(`src/components/${file}`).matchAll(keyRe)) {
      for (const [lang, dict] of [['pt', pt], ['en', en]]) {
        if (typeof lookup(dict, key) === 'undefined') missing.push(`${lang}:${key} (${file})`);
      }
    }
  }
  assert.deepEqual(missing, []);
});

test('cada projeto tem título, descrição, tecnologias e rótulos nos dois idiomas', () => {
  for (const [lang, dict] of [['pt', pt], ['en', en]]) {
    dict.projects.items.forEach((item, i) => {
      for (const field of ['title', 'description', 'viewProject', 'viewCode']) {
        assert.ok(item[field]?.trim(), `${lang}: projects.items[${i}].${field} vazio`);
      }
      assert.ok(item.technologies?.length > 0, `${lang}: projects.items[${i}] sem tecnologias`);
    });
  }
});

test('Projects.tsx tem um cartão (imagem + link) para cada item traduzido, na mesma ordem', () => {
  const src = read('src/components/Projects.tsx');
  const images = [...src.matchAll(/image:\s*'([^']+)'/g)].map((m) => m[1]);
  const links = [...src.matchAll(/liveUrl:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.equal(images.length, pt.projects.items.length, 'imagens vs itens pt');
  assert.equal(images.length, en.projects.items.length, 'imagens vs itens en');
  assert.equal(links.length, images.length, 'links vs imagens');
  for (const img of images) assert.ok(existsSync(join(root, 'public', img)), `imagem ausente: ${img}`);
  for (const link of links) assert.match(link, /^https:\/\//, `link inseguro/inválido: ${link}`);
});

test('os únicos "HTML" permitidos nos textos são <b>...</b> balanceados', () => {
  const bad = [];
  const walk = (value, path) => {
    if (typeof value === 'string') {
      const withoutBold = value.replace(/<b>.*?<\/b>/g, '');
      if (/[<>]/.test(withoutBold)) bad.push(`${path}: ${value.slice(0, 60)}`);
    } else if (value && typeof value === 'object') {
      Object.entries(value).forEach(([k, v]) => walk(v, `${path}.${k}`));
    }
  };
  walk(pt, 'pt');
  walk(en, 'en');
  assert.deepEqual(bad, []);
});

test('arquivos estáticos referenciados existem (CVs e ícones)', () => {
  for (const f of ['public/files/mateus-wensch-cv-pt.pdf', 'public/files/mateus-wensch-cv-en.pdf']) {
    assert.ok(existsSync(join(root, f)), `faltando ${f}`);
  }
  const html = read('index.html');
  for (const [, href] of html.matchAll(/href="(\/favicon_io\/[^"]+)"/g)) {
    assert.ok(existsSync(join(root, 'public', href.slice(1))), `faltando ${href}`);
  }
  for (const [, file] of html.matchAll(/content="https:\/\/wensch\.dev\.br\/([^"]+\.(?:jpg|png))"/g)) {
    assert.ok(existsSync(join(root, 'public', file)), `imagem de compartilhamento ausente: ${file}`);
  }
  const manifest = JSON.parse(read('public/favicon_io/site.webmanifest'));
  assert.ok(manifest.name?.trim(), 'manifest sem nome');
  for (const icon of manifest.icons) {
    assert.ok(existsSync(join(root, 'public', icon.src)), `ícone do manifest ausente: ${icon.src}`);
  }
});

test('vercel.json: headers de segurança presentes e CSP sem unsafe-eval', () => {
  const config = JSON.parse(read('vercel.json'));
  const all = config.headers.find((h) => h.source === '/(.*)').headers;
  const names = all.map((h) => h.key);
  for (const key of ['X-Content-Type-Options', 'Referrer-Policy', 'X-Frame-Options', 'Content-Security-Policy']) {
    assert.ok(names.includes(key), `faltando header ${key}`);
  }
  const csp = all.find((h) => h.key === 'Content-Security-Policy').value;
  assert.ok(csp.includes("frame-ancestors 'none'"));
  assert.ok(!csp.includes('unsafe-eval'));
});
