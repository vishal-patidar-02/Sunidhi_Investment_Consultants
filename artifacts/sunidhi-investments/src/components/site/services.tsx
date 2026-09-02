import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';

const servicePageDisabledSlug = 'explore-all-financial-services';

export function Services() {
  const [showAllServices, setShowAllServices] = useState(false);
  const visibleServices = showAllServices ? siteConfig.services : siteConfig.services.slice(0, 4);
  const hiddenServiceCount = siteConfig.services.length - visibleServices.length;

  return (
    <section id="services" className="bg-[#f1eee7] section-space">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-kicker font-bold uppercase text-accent">What we do</p>
            <h2 className="max-w-2xl font-display text-heading-fluid leading-tight text-primary">
              Financial services that <em className="text-accent">fit real life.</em>
            </h2>
          </div>
          <p className="max-w-sm text-body-fluid leading-7 text-muted-foreground">
            Portfolio guidance, wealth planning, insurance support, retirement and education planning, tax-aware options, general insurance, and loan assistance from one advisory relationship.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {visibleServices.map(({ slug, title, description, icon: Icon, ctaLabel }) => {
            const hasServicePage = slug !== servicePageDisabledSlug;

            return (
              <article
                key={slug}
                className="service-card interactive-lift touch-press group flex h-full flex-col rounded-lg border border-border/80 bg-card p-4 transition-all duration-300 sm:p-5 lg:p-6"
              >
                <div className="flex flex-1 items-start gap-4 sm:block">
                  <div className="service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary sm:h-12 sm:w-12">
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold leading-6 text-primary sm:mt-6">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:min-h-[116px] lg:min-h-[108px]">{description}</p>
                  </div>
                </div>

                <div className={`mt-4 grid gap-2 ${hasServicePage ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  <a
                    href="#contact"
                    aria-label={`${ctaLabel} for ${title}`}
                    className="touch-target touch-press inline-flex min-w-0 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-[13px] font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    data-testid={`link-service-${slug}`}
                  >
                    <span className="whitespace-nowrap">Consult</span>
                    <ArrowRight size={14} className="shrink-0" aria-hidden="true" />
                  </a>

                  {hasServicePage ? (
                    <Link
                      href={`/services/${slug}`}
                      aria-label={`Learn more about ${title}`}
                      className="touch-target touch-press inline-flex min-w-0 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3 text-[13px] font-bold text-primary transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    >
                      <span className="whitespace-nowrap">Learn more</span>
                      <ArrowRight size={14} className="shrink-0" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllServices((isShown) => !isShown)}
            className="touch-target touch-press inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1eee7]"
            aria-expanded={showAllServices}
            data-testid="button-toggle-services"
          >
            {showAllServices ? 'Show fewer services' : `Explore all services${hiddenServiceCount > 0 ? ` (${hiddenServiceCount} more)` : ''}`}
            <ArrowRight size={16} className={`transition-transform ${showAllServices ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
