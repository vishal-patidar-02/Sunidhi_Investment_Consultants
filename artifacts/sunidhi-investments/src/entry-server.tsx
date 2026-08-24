import { renderToString } from 'react-dom/server';
import App from './App';
import { absoluteUrl, defaultOgImage, defaultOgImageAlt, publicRoutes, routeSeo, type SEOConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';
import './index.css';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function render(path: string) {
  return renderToString(<App ssrPath={path} />);
}

export function renderHead(path: string) {
  const seo = routeSeo(path);
  const canonical = absoluteUrl(seo.path);
  const image = absoluteUrl(seo.image ?? defaultOgImage);
  const imageAlt = seo.imageAlt ?? defaultOgImageAlt;
  const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow';

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.business.name)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />`,
  ].join('\n    ');
}

export function getPrerenderRoutes() {
  return publicRoutes.map((route: SEOConfig) => route.path);
}

export function renderSitemap() {
  const urls = publicRoutes.map((route) => `  <url><loc>${absoluteUrl(route.path)}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function renderRobots() {
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`;
}
