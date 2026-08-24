import { Container } from '@/components/layout';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { DocumentHead } from '@/components/seo/document-head';
import { StructuredData } from '@/components/seo/structured-data';
import { pageSeo } from '@/config/seo';
import { siteConfig } from '@/config/site';
import { breadcrumbSchema, organizationSchema } from '@/lib/schema';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export function PrivacyPolicyPage() {
  return (
    <>
      <DocumentHead seo={pageSeo.privacy} />
      <StructuredData data={[organizationSchema(), breadcrumbSchema(breadcrumbs)]} />
      <section className="bg-[#fbf8f1] section-space">
        <Container className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-heading-fluid leading-tight text-primary">Privacy Policy</h1>
          <div className="mt-8 grid gap-6 text-sm leading-7 text-muted-foreground">
            <p>{siteConfig.business.name} collects contact details submitted through the consultation form so the team can respond to genuine inquiries.</p>
            <p>Inquiry details may include name, phone, optional email, service of interest and message. CAPTCHA tokens are verified for security and are not stored.</p>
            <p>Contact information is used for responding to inquiries and service conversations. It is not sold as a marketing list.</p>
            <p>For privacy questions, contact {siteConfig.contact.email.primary} or {siteConfig.contact.email.alternative}.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
