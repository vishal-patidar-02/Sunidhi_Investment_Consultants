import { Container } from '@/components/layout';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { DocumentHead } from '@/components/seo/document-head';
import { StructuredData } from '@/components/seo/structured-data';
import { pageSeo } from '@/config/seo';
import { breadcrumbSchema, organizationSchema } from '@/lib/schema';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Terms & Disclaimer', href: '/terms-disclaimer' },
];

export function TermsDisclaimerPage() {
  return (
    <>
      <DocumentHead seo={pageSeo.terms} />
      <StructuredData data={[organizationSchema(), breadcrumbSchema(breadcrumbs)]} />
      <section className="bg-[#fbf8f1] section-space">
        <Container className="max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-heading-fluid leading-tight text-primary">Terms and Financial Disclaimer</h1>
          <div className="mt-8 grid gap-6 text-sm leading-7 text-muted-foreground">
            <p>Website content is for general information and consultation support. It should not be treated as a guarantee of returns, tax outcomes, insurance claim settlement or loan approval.</p>
            <p>Investments are subject to market risks. Past performance does not guarantee future results.</p>
            <p>Coverage, exclusions, eligibility and claims are governed by insurer and policy terms.</p>
            <p>Loan approval, eligibility and interest rates are determined by the respective lender.</p>
            <p>Clients should review documents carefully and seek appropriate professional advice for personal tax, legal or regulatory questions.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
