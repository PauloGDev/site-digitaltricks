import { getSeo, siteUrl, siteName, siteImage } from '../src/data/seoData.js';

export const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

export function renderSeo(path) {
  const seo = getSeo(path);
  const meta = (attribute, name, content) => `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName, url: `${siteUrl}/`, logo: siteImage },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: siteName, url: `${siteUrl}/`, inLanguage: 'pt-BR', publisher: { '@id': `${siteUrl}/#organization` } },
    ],
  };
  return [
    '<!-- seo:start -->',
    `<title>${escapeHtml(seo.title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    ...Object.entries({ description: seo.description, robots: seo.robots, 'twitter:card': 'summary', 'twitter:title': seo.title, 'twitter:description': seo.description, 'twitter:image': siteImage, 'twitter:image:alt': `Logo da ${siteName}` }).map(([name, value]) => meta('name', name, value)),
    ...Object.entries({ title: seo.title, description: seo.description, url: seo.canonical, type: 'website', site_name: siteName, locale: 'pt_BR', image: siteImage, 'image:alt': `Logo da ${siteName}` }).map(([name, value]) => meta('property', `og:${name}`, value)),
    `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`,
    '<!-- seo:end -->',
  ].join('\n    ');
}
