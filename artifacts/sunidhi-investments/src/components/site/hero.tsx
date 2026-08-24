import { ArrowRight, Check, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { PortraitPicture } from './portrait-picture';

type HeroProps = {
  onContactClick: () => void;
};

export function Hero({ onContactClick }: HeroProps) {
  const { business, contact } = siteConfig;

  return (
    <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="hero-grid absolute inset-0 opacity-35" />
      <div className="wood-ribbon absolute bottom-0 right-0 hidden h-full w-[34%] opacity-20 md:block" />
      <Container className="relative grid gap-7 pb-12 pt-5 sm:pb-16 sm:pt-10 lg:min-h-[680px] lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-20">
        <div className="relative order-1 lg:order-2">
          <div className="portrait-mask relative mx-auto aspect-[4/4.35] w-full max-w-[390px] overflow-hidden rounded-xl border border-primary-foreground/15 shadow-2xl shadow-black/25 sm:max-w-[460px] lg:max-w-[560px]">
            <PortraitPicture className="portrait-image h-full w-full" loading="eager" fetchPriority="high" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/72 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-primary-foreground/18 bg-primary/88 p-3 backdrop-blur sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[285px] sm:p-4">
              <p className="text-kicker font-bold uppercase tracking-[.2em] text-accent">Advisor-led planning</p>
              <p className="mt-1 text-sm font-semibold leading-5 text-primary-foreground sm:text-base">{business.ownerName}</p>
              <p className="mt-1 text-xs leading-5 text-primary-foreground/68">Life, health insurance, education and retirement planning guidance.</p>
            </div>
          </div>
          <a href={contact.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="interactive-lift touch-press mx-auto mt-3 flex min-h-11 max-w-[390px] items-start gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/8 p-3 text-primary-foreground/78 transition sm:hidden" data-testid="link-hero-address-map">
            <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
            <span className="text-xs leading-5">{contact.address.shortLabel}</span>
          </a>
        </div>

        <div className="relative z-10 order-2 max-w-2xl lg:order-1">
          <div className="reveal mb-4 flex items-center gap-3 text-kicker font-bold uppercase tracking-[.23em] text-accent sm:mb-6">
            <span className="h-px w-7 bg-accent" /> Financial clarity, made personal
          </div>
          <h1 className="reveal reveal-delay-1 max-w-[12ch] font-display text-hero-fluid leading-[.98] text-primary-foreground sm:max-w-[13ch]">
            Planning that protects <em className="text-accent">your family.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-body-fluid leading-7 text-primary-foreground/76 sm:mt-7">
            {business.name} provides financial planning, investment guidance, health insurance and Mediclaim support, retirement planning, child education planning, and related financial services.
          </p>
          <div className="reveal reveal-delay-3 mt-7 grid gap-3 min-[390px]:grid-cols-2 sm:mt-9 sm:flex sm:flex-wrap sm:items-center">
            <button onClick={onContactClick} className="touch-target touch-press group flex items-center justify-center gap-3 rounded-md bg-accent px-5 text-sm font-bold text-primary transition-all hover:bg-accent/90" data-testid="button-hero-consultation">
              Book a Consultation <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="touch-target touch-press flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-5 text-sm font-semibold text-primary-foreground transition-all hover:border-accent hover:text-accent" data-testid="link-hero-whatsapp">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
          <div className="reveal reveal-delay-4 mt-7 grid gap-2 text-sm text-primary-foreground/76 sm:mt-9 sm:grid-cols-2">
            {['Investments with context', 'Insurance and Mediclaim guidance', 'Education and retirement focus', 'No return promises'].map((item) => (
              <div key={item} className="flex items-center gap-2"><Check size={15} className="text-accent" /> {item}</div>
            ))}
          </div>
          <a href={contact.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="interactive-lift touch-press mt-8 hidden max-w-md items-start gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-4 text-primary-foreground/78 transition sm:flex" data-testid="link-hero-address-map-desktop">
            <ShieldCheck size={19} className="mt-0.5 shrink-0 text-accent" />
            <span className="text-sm leading-6"><strong className="text-primary-foreground">{business.professionalPositioning}</strong><br />Office: {contact.address.full}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
