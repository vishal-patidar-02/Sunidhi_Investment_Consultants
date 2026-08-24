import { absoluteUrl } from '@/config/seo';
import { siteConfig, type SiteService } from '@/config/site';

const organizationId = `${absoluteUrl('/')}#organization`;

export function organizationSchema() {
  const { business, contact } = siteConfig;
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': organizationId,
    name: business.name,
    url: absoluteUrl('/'),
    telephone: contact.phone.display,
    email: contact.email.primary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '401-B Kalindi Square, Near Lotus Show, AB Road',
      addressLocality: 'Indore',
      postalCode: '452010',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    areaServed: ['Indore', 'Madhya Pradesh', 'India'],
    hasMap: contact.address.mapsUrl,
    sameAs: [contact.linkedIn.href],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phone.display,
      email: contact.email.primary,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  };
}

export function personSchema() {
  const { business, contact } = siteConfig;
  const advisor = business.advisorProfile;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${absoluteUrl('/about')}#smita-tapadia`,
    name: advisor.name,
    image: absoluteUrl(advisor.photo),
    jobTitle: advisor.roles,
    description: advisor.profileStatement,
    worksFor: { '@id': organizationId },
    sameAs: [contact.linkedIn.href],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    name: siteConfig.business.name,
    url: absoluteUrl('/'),
  };
}

export function serviceSchema(service: SiteService) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.seoSummary,
    provider: { '@id': organizationId },
    areaServed: ['Indore', 'Madhya Pradesh', 'India'],
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ label: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}
