import { siteConfig, type SiteService } from './site';

export type SEOConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
};

export const trailingSlash = false;

export function getSiteUrl() {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined;
  if (!raw) {
    if (import.meta.env.PROD) {
      throw new Error('VITE_SITE_URL is required for production SEO output.');
    }
    return 'http://localhost:4173';
  }
  return raw.replace(/\/+$/, '');
}

export function absoluteUrl(path: string) {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export const defaultOgImage = '/og/sunidhi-investments-og.webp';
export const defaultOgImageAlt = 'Sunidhi Investments financial planning office in Indore';

export const pageSeo = {
  home: {
    title: 'Financial Advisor in Indore | Sunidhi Investments',
    description:
      'Sunidhi Investments in Indore offers financial planning, mutual fund and SIP guidance, retirement planning, and Mediclaim support with Smita Tapadia.',
    path: '/',
  },
  about: {
    title: 'About Smita Tapadia | Sunidhi Investments Indore',
    description:
      'Learn about Smita Tapadia and Sunidhi Investments, an Indore-based financial services practice focused on family goals, protection and planning.',
    path: '/about',
  },
  services: {
    title: 'Financial Services in Indore | Sunidhi Investments',
    description:
      'Explore mutual fund advisory, SIP planning, portfolio guidance, retirement planning, Mediclaim, tax-saving guidance and loan assistance in Indore.',
    path: '/services',
  },
  contact: {
    title: 'Contact Sunidhi Investments | Financial Advisor Indore',
    description:
      'Contact Sunidhi Investments in Indore for financial planning, mutual fund, SIP, retirement, health insurance and loan assistance consultations.',
    path: '/contact',
  },
  privacy: {
    title: 'Privacy Policy | Sunidhi Investments',
    description:
      'Read how Sunidhi Investments handles consultation inquiries, contact details and website privacy for visitors and clients.',
    path: '/privacy-policy',
  },
  terms: {
    title: 'Terms and Financial Disclaimer | Sunidhi Investments',
    description:
      'Read Sunidhi Investments terms, financial disclaimers and responsible guidance notes for investments, insurance and loan assistance.',
    path: '/terms-disclaimer',
  },
  notFound: {
    title: 'Page Not Found | Sunidhi Investments',
    description: 'The requested Sunidhi Investments page could not be found.',
    path: '/404',
    noindex: true,
  },
} satisfies Record<string, SEOConfig>;

export function serviceSeo(service: SiteService): SEOConfig {
  return {
    title: `${service.title} in Indore | Sunidhi Investments`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  };
}

export const publicRoutes = [
  pageSeo.home,
  pageSeo.privacy,
  pageSeo.terms,
];

export function routeSeo(path: string): SEOConfig {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  const service = siteConfig.services.find((item) => normalizedPath === `/services/${item.slug}`);
  if (service) return serviceSeo(service);
  return publicRoutes.find((route) => route.path === normalizedPath) ?? pageSeo.notFound;
}
