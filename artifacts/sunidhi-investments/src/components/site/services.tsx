import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';

export function Services() {
  return (
    <section id="services" className="bg-[#f1eee7] py-24 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">What we do</p><h2 className="font-display text-4xl text-primary sm:text-5xl">Financial solutions that <em className="text-accent">fit your life.</em></h2></div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">One canonical service set across investments, insurance, tax planning, and loan support.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map(({ slug, title, description, icon: Icon, ctaLabel }) => (
            <article key={slug} className="service-card group rounded-xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/70 hover:shadow-xl hover:shadow-primary/5">
              <div className="service-icon flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary"><Icon size={23} strokeWidth={1.6} /></div>
              <h3 className="mt-7 font-heading text-base font-bold leading-5 text-primary">{title}</h3>
              <p className="mt-3 min-h-[88px] text-xs leading-5 text-muted-foreground">{description}</p>
              <a href="#contact" className="mt-5 flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-accent" data-testid={`link-service-${slug}`}>{ctaLabel} <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
