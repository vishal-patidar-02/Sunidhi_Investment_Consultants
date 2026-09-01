import { type SiteService } from './site';

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
    return 'http://localhost:5173';
  }
  return raw.replace(/\/+$/, '');
}

export function absoluteUrl(path: string) {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export const defaultOgImage = '/og/sunidhi-investments-og.webp';
export const defaultOgImageAlt = 'Sunidhi Investments Consultancy financial planning office in Indore';

export const pageSeo = {
  home: {
    title: 'Financial Advisor in Indore | Sunidhi Investments Consultancy',
    description:
      'Sunidhi Investments Consultancy in Indore offers portfolio management, wealth planning, insurance guidance, mutual fund advisory, retirement planning, child education planning, and loan assistance with Smita Tapadia.',
    path: '/',
  },
  about: {
    title: 'About Smita Tapadia | Sunidhi Investments Consultancy Indore',
    description:
      'Learn about Smita Tapadia and Sunidhi Investments Consultancy, an Indore-based financial services practice focused on family goals, protection and planning.',
    path: '/#about',
  },
  services: {
    title: 'Financial Services in Indore | Sunidhi Investments Consultancy',
    description:
      'Explore portfolio management, wealth management, term insurance, Mediclaim, mutual fund advisory, retirement planning, child education planning, tax-saving investments, general insurance and loan assistance in Indore.',
    path: '/#services',
  },
  contact: {
    title: 'Contact Sunidhi Investments Consultancy | Financial Advisor Indore',
    description:
      'Contact Sunidhi Investments Consultancy in Indore for portfolio, wealth, insurance, mutual fund, retirement, child education, tax-saving, general insurance and loan assistance consultations.',
    path: '/#contact',
  },
  privacy: {
    title: 'Privacy Policy | Sunidhi Investments Consultancy',
    description:
      'Read how Sunidhi Investments Consultancy handles consultation inquiries, contact details and website privacy for visitors and clients.',
    path: '/privacy-policy',
  },
  terms: {
    title: 'Terms and Financial Disclaimer | Sunidhi Investments Consultancy',
    description:
      'Read Sunidhi Investments Consultancy terms, financial disclaimers and responsible guidance notes for investments, insurance and loan assistance.',
    path: '/terms-disclaimer',
  },
  notFound: {
    title: 'Page Not Found | Sunidhi Investments Consultancy',
    description: 'The requested Sunidhi Investments Consultancy page could not be found.',
    path: '/404',
    noindex: true,
  },
} satisfies Record<string, SEOConfig>;

export function serviceSeo(service: SiteService): SEOConfig {
  return {
    title: `${service.title} in Indore | Sunidhi Investments Consultancy`,
    description: service.metaDescription,
    path: '/#services',
  };
}

export const publicRoutes = [
  pageSeo.home,
  pageSeo.privacy,
  pageSeo.terms,
];

export function routeSeo(path: string): SEOConfig {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return publicRoutes.find((route) => route.path === normalizedPath) ?? pageSeo.notFound;
}
