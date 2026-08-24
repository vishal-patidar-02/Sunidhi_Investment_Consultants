import { ArrowRight, Check, Quote } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';

type WhyChooseUsProps = {
  onContactClick: () => void;
};

export function WhyChooseUs({ onContactClick }: WhyChooseUsProps) {
  return (
    <section id="why-us">
      <Container className="grid gap-14 py-24 lg:grid-cols-[1fr_.85fr] lg:items-center lg:py-32">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Why choose us</p>
          <h2 className="max-w-lg font-display text-4xl leading-tight text-primary sm:text-5xl">Advice built around <em className="text-accent">your world.</em></h2>
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-muted-foreground">Markets, policies, tax rules, and family priorities all change. A good advisory relationship helps you revisit choices with calm and context.</p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {siteConfig.whyChooseUs.map((point) => <div key={point} className="flex items-start gap-3"><div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check size={12} strokeWidth={3} /></div><span className="text-sm font-semibold leading-5 text-primary">{point}</span></div>)}
          </div>
          <button onClick={onContactClick} className="group mt-10 flex items-center gap-3 border-b-2 border-accent pb-2 text-sm font-bold text-primary" data-testid="button-why-consultation">Let us talk about your goals <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
        </div>
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-tr-3xl border-r border-t border-accent" />
          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
            <div className="wood-ribbon absolute inset-y-0 right-0 w-32 opacity-20" />
            <div className="relative">
              <Quote size={32} className="text-accent" />
              <blockquote className="mt-8 font-display text-3xl leading-[1.18] text-primary-foreground">The best plan is one your family understands and can stay with through changing seasons.</blockquote>
              <div className="mt-10 flex items-center gap-3 border-t border-primary-foreground/15 pt-5"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-xl text-primary">S</div><div><p className="text-sm font-bold">The Sunidhi principle</p><p className="text-xs text-primary-foreground/55">Clear advice. Consistent care.</p></div></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.stats.map(({ value, label, icon: Icon }, index) => <div key={label} className={`flex items-center gap-4 px-6 py-7 ${index % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${index < 2 ? 'border-b sm:border-b lg:border-b-0' : ''}`}><Icon size={27} strokeWidth={1.5} className="text-accent" /><div><div className="font-display text-3xl text-primary">{value}</div><div className="mt-0.5 text-xs text-muted-foreground">{label}</div></div></div>)}
      </div>
    </section>
  );
}
