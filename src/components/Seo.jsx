import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSeo, siteImage, siteName } from '../data/seoData.js';

const setMeta = (attribute, key, value) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

const Seo = ({ title, description, path = '/', noindex = false }) => {
  useEffect(() => {
    const seo = getSeo(path, { title, description, noindex });
    document.title = seo.title;
    document.documentElement.lang = 'pt-BR';
    for (const [key, value] of Object.entries({ description: seo.description, robots: noindex ? 'noindex, follow' : seo.robots, 'twitter:card': 'summary', 'twitter:title': seo.title, 'twitter:description': seo.description, 'twitter:image': siteImage, 'twitter:image:alt': `Logo da ${siteName}` })) setMeta('name', key, value);
    for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, type: 'website', url: seo.canonical, image: siteImage, 'image:alt': `Logo da ${siteName}`, site_name: siteName, locale: 'pt_BR' })) setMeta('property', `og:${key}`, value);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = seo.canonical;
  }, [title, description, path, noindex]);
  return null;
};

Seo.propTypes = { title: PropTypes.string, description: PropTypes.string, path: PropTypes.string, noindex: PropTypes.bool };
export default Seo;
