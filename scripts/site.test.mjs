import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { normalizePhone, createDiagnosisUrl } from '../src/utils/diagnosis.js';
import { getSeo, seoPages } from '../src/data/seoData.js';

test('telefone aceita formatos nacionais, +55 e DDD 55 sem duplicar o país', () => {
  for (const value of ['(85) 99999-9999', '+55 (85) 99999-9999', '5585999999999']) assert.equal(normalizePhone(value), '5585999999999');
  assert.equal(normalizePhone('(55) 99999-9999'), '5555999999999');
  assert.equal(normalizePhone('(85) 3333-3333'), '558533333333');
});
test('telefone rejeita entradas incompletas, letras e números de outro país', () => {
  for (const value of ['', '123', '999999999', '(00) 99999-9999', '(85) 89999-9999', '+1 202 555 0123', 'abc85999999999']) assert.equal(normalizePhone(value), null, value);
});
test('mensagem preserva acentos e caracteres especiais sem quebrar o link', () => {
  const url = new URL(createDiagnosisUrl({ name: ' João & Maria ', company: ' A+B #1 ', whatsapp: '5585999999999', interests: ['Sites', 'Tráfego pago'] }, '+55 85 92174-3200'));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.pathname, '/5585921743200');
  assert.equal([...url.searchParams].length, 1);
  assert.match(url.searchParams.get('text'), /Nome: João & Maria\nEmpresa: A\+B #1/);
  assert.match(url.searchParams.get('text'), /Sites, Tráfego pago/);
  assert.doesNotMatch(url.searchParams.get('text'), /recebido|enviado/);
});
test('interesses são opcionais', () => {
  const url = new URL(createDiagnosisUrl({ name: 'Teste', company: 'Teste', whatsapp: '5585999999999', interests: [] }, '5585921743200'));
  assert.match(url.searchParams.get('text'), /Preciso de orientação/);
});
test('HTML compilado entrega SEO único por rota e sitemap exclui páginas noindex', async () => {
  const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
  const htaccess = await readFile(new URL('../dist/.htaccess', import.meta.url), 'utf8');
  for (const [path, page] of Object.entries(seoPages)) {
    const filename = path === '/' ? 'index.html' : path === '/404' ? '404.html' : `__pages/${path.slice(1).replaceAll('/', '--')}.html`;
    const html = await readFile(new URL(`../dist/${filename}`, import.meta.url), 'utf8');
    assert.equal((html.match(/<title>/g) || []).length, 1, path);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, path);
    assert.ok(html.includes(`<title>${getSeo(path).title}</title>`), path);
    assert.ok(html.includes(`content="${getSeo(path).robots}"`), path);
    assert.ok(html.includes('property="og:image"'), path);
    assert.ok(html.includes('name="twitter:description"'), path);
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema['@graph'][0]['@type'], 'Organization');
    assert.equal(sitemap.includes(`<loc>${getSeo(path).canonical}</loc>`), !page.noindex, path);
    if (path !== '/' && path !== '/404') assert.ok(htaccess.includes(`${filename} [END]`), path);
  }
  assert.ok(htaccess.includes('ErrorDocument 404 /404.html'));
  assert.ok(htaccess.includes('RewriteRule ^ - [R=404,L]'));
  assert.ok(!htaccess.includes('# SEO_ROUTES'));
});
