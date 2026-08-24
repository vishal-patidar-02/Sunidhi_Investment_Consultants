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
    <section id="about">
      <Container className="grid gap-12 py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-32">
        <AdvisorProfile />
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">About {business.name}</p>
          <h2 className="max-w-xl font-display text-4xl leading-tight tracking-[-.025em] text-primary sm:text-5xl">A steady hand for <em className="text-accent">important decisions.</em></h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground">Your money deserves more than a product pitch. It deserves a thoughtful conversation about your family, your responsibilities, and the future you are trying to protect.</p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">{business.safeDescription}</p>
          <div className="mt-8 grid max-w-lg grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
            {planningPrinciples.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-primary"><Check size={16} className="text-accent" /> {item}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
