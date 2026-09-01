import { useEffect } from "react";

const SITE_NAME = "Digital Tricks";
const BASE_URL = "https://digitaltricks.com.br";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.png`;

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const [key, keyValue] = attribute;
    element.setAttribute(key, keyValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
};

const Seo = ({ title, description, path = "/" }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Digital para o mercado automotivo`;
    const canonical = `${BASE_URL}${path === "/" ? "" : path}`;

    document.title = fullTitle;
    document.documentElement.lang = "pt-BR";

    setMeta('meta[name="description"]', ["name", "description"], description);
    setMeta('meta[property="og:title"]', ["property", "og:title"], fullTitle);
    setMeta('meta[property="og:description"]', ["property", "og:description"], description);
    setMeta('meta[property="og:type"]', ["property", "og:type"], "website");
    setMeta('meta[property="og:url"]', ["property", "og:url"], canonical);
    setMeta('meta[property="og:image"]', ["property", "og:image"], DEFAULT_IMAGE);
    setMeta('meta[name="twitter:card"]', ["name", "twitter:card"], "summary_large_image");

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [title, description, path]);

  return null;
};

export default Seo;
