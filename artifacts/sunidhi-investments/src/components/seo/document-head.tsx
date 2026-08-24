import { useEffect } from 'react';
import { absoluteUrl, defaultOgImage, defaultOgImageAlt, type SEOConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
}

export function DocumentHead({ seo }: { seo: SEOConfig }) {
  useEffect(() => {
    const canonical = absoluteUrl(seo.path);
    const image = absoluteUrl(seo.image ?? defaultOgImage);
    const imageAlt = seo.imageAlt ?? defaultOgImageAlt;

    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[name="robots"]', 'content', seo.noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:image:alt"]', 'content', imageAlt);
    setMeta('meta[property="og:site_name"]', 'content', siteConfig.business.name);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
    setMeta('meta[name="twitter:image"]', 'content', image);
    setMeta('meta[name="twitter:image:alt"]', 'content', imageAlt);
  }, [seo]);

  return null;
}
