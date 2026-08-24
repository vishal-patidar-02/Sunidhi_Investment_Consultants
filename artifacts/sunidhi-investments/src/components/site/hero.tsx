import { ArrowRight, MapPin, MessageCircle, TreePine } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';

type HeroProps = {
  onContactClick: () => void;
};

export function Hero({ onContactClick }: HeroProps) {
  const { business, contact } = siteConfig;

  return (
    <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="hero-grid absolute inset-0 opacity-45" />
      <div className="wood-ribbon absolute bottom-0 right-0 h-full w-[38%] opacity-20" />
      <Container className="relative grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[.9fr_1.1fr] lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="reveal mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.27em] text-accent">
            <span className="h-px w-8 bg-accent" /> Financial clarity, made personal
          </div>
          <h1 className="reveal reveal-delay-1 font-display text-[clamp(3rem,6.5vw,6.2rem)] leading-[.96] text-primary-foreground">
            Secure decisions for <em className="text-accent">family futures.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-xl text-[15px] leading-7 text-primary-foreground/74">
            {business.name} is led by {business.ownerName}, focused on life and health insurance, child education planning, retirement planning, and practical investment guidance for families.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <button onClick={onContactClick} className="group flex items-center gap-3 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-primary transition-all hover:-translate-y-1 hover:bg-accent/90" data-testid="button-hero-consultation">
              Book a Consultation <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a href={contact.whatsapp.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:border-accent hover:text-accent" data-testid="link-hero-whatsapp">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
          <div className="reveal reveal-delay-4 mt-10 max-w-lg rounded-lg border border-primary-foreground/15 bg-primary-foreground/6 p-4 text-sm leading-6 text-primary-foreground/78 backdrop-blur">
            {business.professionalPositioning}
          </div>
        </div>
        <div className="relative flex min-h-[340px] items-end justify-center lg:min-h-[515px]">
          <div className="relative z-10 h-[320px] w-full max-w-[650px] overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-2xl shadow-black/25 sm:h-[410px] lg:h-[475px]">
            <img src="/hero-investment.jpg" alt="Investment planning visual with coin stacks and a growing plant" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-primary/5 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-[250px] rounded-xl border border-primary-foreground/20 bg-primary/88 p-4 backdrop-blur-md">
              <div className="mb-2 flex items-center justify-between text-accent"><span className="text-[10px] uppercase tracking-[.18em]">Planning focus</span><TreePine size={15} /></div>
              <div className="font-heading text-xl font-bold">Protection, education, retirement</div>
              <div className="mt-1 text-[10px] text-primary-foreground/60">Advice built around family milestones</div>
            </div>
          </div>
          <a href={contact.address.mapsUrl} target="_blank" rel="noreferrer" className="absolute -bottom-6 -left-2 z-20 hidden max-w-xs rounded-xl border border-border/70 bg-card p-4 text-primary shadow-xl transition-all hover:-translate-y-1 hover:border-accent sm:block lg:left-4" data-testid="link-hero-address-map">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <MapPin size={18} />
              </div>
              <div><p className="text-xs font-bold">{business.ownerName}</p><p className="mt-1 text-[10px] leading-4 text-muted-foreground">{contact.address.full}</p></div>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
