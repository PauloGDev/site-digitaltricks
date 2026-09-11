import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { seoPages, siteUrl } from '../src/data/seoData.js';
import { renderSeo, escapeHtml } from './seo-html.mjs';

const dist = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', dist), 'utf8');
const seoBlock = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
if (!seoBlock.test(template)) throw new Error('Bloco de SEO ausente no HTML compilado.');
await mkdir(new URL('__pages/', dist), { recursive: true });
const rules = [];
for (const path of Object.keys(seoPages)) {
  const filename = path === '/' ? 'index.html' : path === '/404' ? '404.html' : `__pages/${path.slice(1).replaceAll('/', '--')}.html`;
  await writeFile(new URL(filename, dist), template.replace(seoBlock, () => renderSeo(path)));
  if (path !== '/' && path !== '/404') rules.push(`  RewriteRule ^${path.slice(1)}/?$ ${filename} [END]`);
}
const aliases = {
  projetos: '/', websites: '/solucoes/landing-pages-sites', ecommerce: '/solucoes/landing-pages-sites',
  'solucoes/sites': '/solucoes/landing-pages-sites', design: '/solucoes/criativos',
  'social-media': '/solucoes', 'solucoes/social-media': '/solucoes',
  marketing: '/solucoes/posicionamento', 'solucoes/marketing': '/solucoes/posicionamento',
  'trafego-pago': '/solucoes/trafego-pago',
};
const redirects = Object.entries(aliases).map(([from, to]) => `  RewriteRule ^${from}/?$ ${to} [R=301,L]`);
const htaccess = await readFile(new URL('../public/.htaccess', import.meta.url), 'utf8');
await writeFile(new URL('.htaccess', dist), htaccess.replace('# SEO_ROUTES', [...redirects, ...rules].join('\n')));
const urls = Object.entries(seoPages).filter(([, page]) => !page.noindex).map(([path]) => `  <url><loc>${escapeHtml(`${siteUrl}${path}`)}</loc></url>`);
await writeFile(new URL('sitemap.xml', dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`SEO: ${Object.keys(seoPages).length} páginas com metadados estáticos; ${urls.length} URLs no sitemap.`);
