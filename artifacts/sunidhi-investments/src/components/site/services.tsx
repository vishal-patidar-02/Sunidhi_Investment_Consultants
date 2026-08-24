import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';

export function Services() {
  return (
    <section id="services" className="bg-[#f1eee7] section-space">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="mb-4 text-kicker font-bold uppercase tracking-[.25em] text-accent">What we do</p><h2 className="max-w-2xl font-display text-heading-fluid leading-tight text-primary">Financial services that <em className="text-accent">fit real life.</em></h2></div>
          <p className="max-w-sm text-body-fluid leading-7 text-muted-foreground">Investment guidance, insurance support, retirement and education planning, tax-aware options, and loan assistance from one advisory relationship.</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {siteConfig.services.map(({ slug, title, description, icon: Icon }) => (
            <article key={slug} className="service-card interactive-lift touch-press group rounded-lg border border-border/80 bg-card p-4 transition-all duration-300 sm:p-5 lg:p-6">
              <div className="flex items-start gap-4 sm:block">
                <div className="service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary sm:h-12 sm:w-12"><Icon size={22} strokeWidth={1.6} /></div>
                <div className="min-w-0">
                  <h3 className="font-heading text-[15px] font-bold leading-5 text-primary sm:mt-6 sm:text-base">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground sm:min-h-[104px] sm:text-xs sm:leading-5 lg:min-h-[96px]">{description}</p>
                </div>
              </div>
              <a href="#contact" className="touch-target mt-3 flex items-center gap-2 rounded-md text-xs font-bold text-primary transition-colors hover:text-accent sm:mt-4" data-testid={`link-service-${slug}`}>Discuss {title} <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
