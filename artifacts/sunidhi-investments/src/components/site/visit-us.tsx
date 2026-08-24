import { ArrowUpRight, MapPin, Navigation, Phone } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';

export function VisitUs() {
  const { business, contact } = siteConfig;

  return (
    <section id="location" className="bg-[#f7f1e7]">
      <Container className="grid gap-8 section-space lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-14">
        <div>
          <p className="mb-4 text-kicker font-bold uppercase tracking-[.25em] text-accent">Visit us</p>
          <h2 className="max-w-xl font-display text-heading-fluid leading-tight text-primary">
            A local Indore office for <em className="text-accent">personal conversations.</em>
          </h2>
          <p className="mt-5 max-w-lg text-body-fluid leading-7 text-muted-foreground">
            Meet {business.ownerName} for investment, insurance, retirement, tax-saving, Mediclaim, health insurance, and loan-related planning discussions.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4 shadow-xl shadow-primary/8 sm:p-6 lg:p-7">
          <a
            href={contact.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-press group block rounded-lg border border-border bg-background p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            data-testid="link-visit-us-card"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                <MapPin size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-primary">Sunidhi Investments Office</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {contact.address.lines.map((line) => <span key={line} className="block">{line}</span>)}
                </p>
              </div>
            </div>
          </a>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href={contact.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target touch-press flex items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-bold text-primary transition-colors hover:bg-accent/85"
              data-testid="link-open-google-maps"
            >
              <Navigation size={16} /> Open in Google Maps <ArrowUpRight size={15} />
            </a>
            <a
              href={contact.phone.href}
              className="touch-target touch-press flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent"
              data-testid="link-visit-us-phone"
            >
              <Phone size={16} /> Call before visiting
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
