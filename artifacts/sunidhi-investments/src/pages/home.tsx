import { About } from '@/components/site/about';
import { Contact } from '@/components/site/contact';
import { FAQ, getFaqs } from '@/components/site/faq';
import { Hero } from '@/components/site/hero';
import { Services } from '@/components/site/services';
import { Testimonials } from '@/components/site/testimonials';
import { TrustStrip } from '@/components/site/trust-strip';
import { VisitUs } from '@/components/site/visit-us';
import { StatsStrip, WhyChooseUs } from '@/components/site/why-choose-us';
import { DocumentHead } from '@/components/seo/document-head';
import { StructuredData } from '@/components/seo/structured-data';
import { pageSeo } from '@/config/seo';
import { siteConfig } from '@/config/site';
import { faqSchema, organizationSchema, personSchema, serviceSchema, websiteSchema } from '@/lib/schema';

export function HomePage({ onContactClick }: { onContactClick: () => void }) {
  return (
    <>
      <DocumentHead seo={pageSeo.home} />
      <StructuredData data={[websiteSchema(), organizationSchema(), personSchema(), faqSchema(getFaqs()), ...siteConfig.services.filter((service) => service.selectable !== false).map(serviceSchema)]} />
      <Hero onContactClick={onContactClick} />
      <TrustStrip />
      <About />
      <Services />
      <WhyChooseUs onContactClick={onContactClick} />
      <StatsStrip />
      <Testimonials />
      <FAQ />
      <Contact />
      <VisitUs />
    </>
  );
}
