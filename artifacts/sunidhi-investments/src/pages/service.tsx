import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'wouter';
import { Container } from '@/components/layout';
import { FAQ } from '@/components/site/faq';
import { DocumentHead } from '@/components/seo/document-head';
import { StructuredData } from '@/components/seo/structured-data';
import { serviceSeo } from '@/config/seo';
import { siteConfig, type SiteService } from '@/config/site';
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from '@/lib/schema';

function getService(slug?: string) {
  return siteConfig.services.find((service) => service.slug === slug && service.selectable !== false);
}

function buildWhatsAppUrl(serviceTitle: string) {
  const phone = siteConfig.contact.whatsapp.href.replace('https://wa.me/', '').split('?')[0];
  const message = `Hello ${siteConfig.business.ownerName} ji, I would like to discuss ${serviceTitle} with ${siteConfig.business.name}. Please guide me for the next step.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function ServiceList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-border/80 bg-card p-5 shadow-sm sm:p-6">
      <h2 className="font-heading text-xl font-bold text-primary">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-base">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function RelatedServices({ service }: { service: SiteService }) {
  const related = service.relatedSlugs
    .map((slug) => siteConfig.services.find((candidate) => candidate.slug === slug && candidate.selectable !== false))
    .filter(Boolean) as SiteService[];

  if (related.length === 0) return null;

  return (
    <section className="rounded-lg border border-border/80 bg-[#f8f3e8] p-5 sm:p-6">
      <h2 className="font-heading text-xl font-bold text-primary">Related services</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            className="group rounded-md border border-border/70 bg-background p-4 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {item.title}
            <ArrowRight className="mt-3 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function ServiceConsultationCTA({ service }: { service: SiteService }) {
  return (
    <section id="service-consultation" className="bg-primary px-4 py-12 text-primary-foreground sm:px-6 sm:py-14">
      <Container className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/7 p-5 sm:p-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-2xl">
          <p className="text-kicker font-bold uppercase text-accent">Discuss this service</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] leading-tight">Start with a clear {service.title.toLowerCase()} conversation.</h2>
          <p className="mt-4 text-sm leading-7 text-primary-foreground/72 sm:text-base">Share your situation with {siteConfig.business.ownerName}. The first step is a practical conversation, not a promise of returns, approvals or claim settlement.</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:min-w-[360px]">
          <a href={buildWhatsAppUrl(service.title)} target="_blank" rel="noopener noreferrer" className="touch-target touch-press flex items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-primary transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70">
            <MessageCircle size={16} /> WhatsApp now
          </a>
          <a href={siteConfig.contact.phone.href} className="touch-target touch-press flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-5 text-sm font-bold text-primary-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70">
            <Phone size={16} /> Call
          </a>
          <a href="/#contact" className="touch-target touch-press flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-5 text-sm font-bold text-primary-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70 sm:col-span-2">
            Use full consultation form <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}

export function ServicePage({ params }: { params: { slug?: string } }) {
  const service = getService(params.slug);

  if (!service) {
    return (
      <Container className="py-24">
        <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">
          <ArrowLeft size={16} /> Back to services
        </Link>
        <h1 className="mt-8 font-display text-4xl text-primary">Service not found</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">This service page is not available. Explore the current Sunidhi Investments Consultancy services from the homepage.</p>
      </Container>
    );
  }

  const Icon = service.icon;
  const seo = serviceSeo(service);
  const pageFaqs = service.faqs.length > 0 ? service.faqs : [];

  return (
    <>
      <DocumentHead seo={seo} />
      <StructuredData data={[organizationSchema(), serviceSchema(service), ...(pageFaqs.length > 0 ? [faqSchema(pageFaqs)] : []), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#services' },
        { label: service.title, href: `/services/${service.slug}` },
      ])]} />

      <section className="bg-primary pt-24 text-primary-foreground sm:pt-28">
        <Container className="pb-14 pt-8 sm:pb-16">
          <Link href="/#services" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-primary-foreground/20 px-3 text-sm font-bold text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60">
            <ArrowLeft size={16} /> Back to all services
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
              <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <p className="text-kicker font-bold uppercase tracking-[0.22em] text-accent">Indore financial service</p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,7vw,4.75rem)] leading-[0.96] text-primary-foreground">{service.title} in Indore</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/82">{service.pageIntro}</p>
            <a href="#service-consultation" className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-primary transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70">
              {service.ctaLabel} <ArrowRight size={16} />
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-background section-space">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <ServiceList title="Who this is for" items={service.whoFor} />
            <ServiceList title="Problems this helps solve" items={service.problems} />
            <ServiceList title="How Sunidhi helps" items={service.howWeHelp} />
            <ServiceList title="Important considerations" items={service.considerations} />
          </div>

          <section className="mt-6 rounded-lg border border-border/80 bg-card p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-xl font-bold text-primary">How the consultation works</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div key={step} className="rounded-md bg-secondary/70 p-4">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Step {index + 1}</span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-primary">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-lg border border-accent/30 bg-[#fff9ec] p-5 sm:p-6">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h2 className="font-heading text-xl font-bold text-primary">Financial disclaimer</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Guidance is shared for informed decision-making. Market-linked investments carry risk, insurance and loan outcomes depend on provider terms and eligibility, and no return, approval or claim settlement is guaranteed.</p>
              </div>
            </div>
          </section>

          <RelatedServices service={service} />
        </Container>
      </section>

      {pageFaqs.length > 0 ? <FAQ faqs={pageFaqs} heading={`Questions about ${service.title}`} /> : null}
      <ServiceConsultationCTA service={service} />
    </>
  );
}
