import { Check } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { AdvisorProfile } from './advisor-profile';

const planningPrinciples = [
  'Goal-led recommendations',
  'Transparent conversations',
  'Protection-first thinking',
  'Review when life changes',
];

export function About() {
  const { business } = siteConfig;

  return (
    <section id="about" className="bg-background">
      <Container className="grid gap-10 section-space lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-14">
        <AdvisorProfile />
        <div>
          <p className="mb-4 text-kicker font-bold uppercase tracking-[.25em] text-accent">About {business.name}</p>
          <h2 className="max-w-xl font-display text-heading-fluid leading-tight text-primary">A practical advisor for <em className="text-accent">family decisions.</em></h2>
          <p className="mt-5 max-w-xl text-body-fluid leading-7 text-muted-foreground">Planning is easier when the conversation starts with your real responsibilities: parents, children, healthcare, retirement income, liquidity, and protection.</p>
          <p className="mt-4 max-w-xl text-body-fluid leading-7 text-muted-foreground">{business.safeDescription}</p>
          <div className="mt-7 grid max-w-lg grid-cols-1 gap-x-8 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
            {planningPrinciples.map((item) => (
              <div key={item} className="flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"><Check size={16} className="text-accent" /> {item}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
