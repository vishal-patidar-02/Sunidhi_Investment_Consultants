import { About } from '@/components/site/about';
import { Contact } from '@/components/site/contact';
import { FAQ } from '@/components/site/faq';
import { Hero } from '@/components/site/hero';
import { Services } from '@/components/site/services';
import { TrustStrip } from '@/components/site/trust-strip';
import { VisitUs } from '@/components/site/visit-us';
import { StatsStrip, WhyChooseUs } from '@/components/site/why-choose-us';
import { DocumentHead } from '@/components/seo/document-head';
import { StructuredData } from '@/components/seo/structured-data';
import { pageSeo } from '@/config/seo';
import { organizationSchema, personSchema, websiteSchema } from '@/lib/schema';

export function HomePage({ onContactClick }: { onContactClick: () => void }) {
  return (
    <>
      <DocumentHead seo={pageSeo.home} />
      <StructuredData data={[websiteSchema(), organizationSchema(), personSchema()]} />
      <Hero onContactClick={onContactClick} />
      <TrustStrip />
      <About />
      <Services />
      <WhyChooseUs onContactClick={onContactClick} />
      <StatsStrip />
      <FAQ />
      <Contact />
      <VisitUs />
    </>
  );
}
