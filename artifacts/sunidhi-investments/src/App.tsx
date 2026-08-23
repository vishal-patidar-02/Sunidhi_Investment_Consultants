import { type FormEvent, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  FileText,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PieChart,
  PiggyBank,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TreePine,
  Users,
  WalletCards,
  X,
} from 'lucide-react';
import {
  Route,
  Router as WouterRouter,
  Switch,
  useLocation,
} from 'wouter';

const queryClient = new QueryClient();

const business = {
  name: 'Sunidhi Investments',
  person: 'Smita Tapadia',
  positioning:
    'Life and Health Insurance Expert | Child Education & Retirement Planning Expert | Helping 1900+ Families Secure Their Financial Future',
  phoneDisplay: '+91 98930 91404',
  phoneHref: 'tel:+919893091404',
  whatsappHref: 'https://wa.me/919893091404',
  primaryEmail: 'smita_tapadia@yahoo.com',
  alternativeEmail: 'smitatapadia.sic@gmail.com',
  linkedIn: 'https://linkedin.com/in/smitatapadia',
  address: '401-B Kalindi Square Near Lotus Show, AB Road, Indore 452010',
  mapsUrl: 'https://maps.app.goo.gl/AuATn6WkhiWj851w6?g_st=ac',
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  { title: 'Mutual Fund Advisory', copy: 'Guidance for fund selection and reviews aligned to goals, time horizon, and risk comfort.', icon: LineChart },
  { title: 'SIP Planning', copy: 'Disciplined monthly investment planning for education, retirement, and family milestones.', icon: HandCoins },
  { title: 'Portfolio Management', copy: 'Organized portfolio tracking and rebalancing conversations to keep decisions purposeful.', icon: PieChart },
  { title: 'Wealth Management', copy: 'A holistic view of investments, protection, liquidity, and long-term family priorities.', icon: WalletCards },
  { title: 'Retirement Planning', copy: 'Structured planning for income, healthcare needs, and peace of mind after active work.', icon: PiggyBank },
  { title: 'Tax Saving Investments', copy: 'Tax-aware investment options considered in the context of your broader financial plan.', icon: FileText },
  { title: 'Mediclaim & Health Insurance', copy: 'Health cover guidance for individuals and families, with careful attention to needs.', icon: HeartPulse },
  { title: 'Loan Assistance', copy: 'Practical support for understanding loan options, documents, and next steps.', icon: Landmark },
] as const;

const trustPoints = [
  { title: 'Family-focused guidance', copy: 'Planning that starts with real life', icon: Users },
  { title: 'Insurance and protection lens', copy: 'Health and life priorities included', icon: ShieldCheck },
  { title: 'Education and retirement focus', copy: 'For important long-term milestones', icon: GraduationCap },
  { title: 'Clear conversations', copy: 'Simple, steady, jargon-light advice', icon: Target },
];

const whyPoints = [
  'Personalized goal-based planning',
  'Life and health insurance guidance',
  'Child education and retirement planning focus',
  'Transparent conversations before recommendations',
  'Service support across investments, insurance, and loans',
];

const faqs = [
  {
    question: `How do I get started with ${business.name}?`,
    answer:
      'Begin with a conversation with Smita Tapadia. We understand your goals, responsibilities, time horizon, and comfort with risk before discussing suitable next steps.',
  },
  {
    question: `What services does ${business.name} offer?`,
    answer: `We offer ${services.map((service) => service.title).join(', ')}.`,
  },
  {
    question: 'Is my plan personalized?',
    answer:
      'Yes. Recommendations are shaped around your current priorities, protection needs, and future milestones rather than a one-size-fits-all product pitch.',
  },
  {
    question: 'Can I visit the office?',
    answer:
      `${business.name} is based at ${business.address}. Use any address link on this site to open the location in Google Maps.`,
  },
  {
    question: 'How can I contact Smita Tapadia?',
    answer:
      `You can call or WhatsApp ${business.phoneDisplay}, email ${business.primaryEmail}, or connect on LinkedIn.`,
  },
];

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex h-11 w-11 items-center justify-center rounded-full border ${light ? 'border-accent text-accent' : 'border-accent/55 text-primary'}`}>
        <span className="font-display text-3xl leading-none">S</span>
        <span className="absolute -bottom-0.5 right-0.5 h-2 w-2 rounded-full bg-accent" />
      </div>
      <div>
        <div className={`font-heading text-[17px] font-extrabold tracking-[.16em] ${light ? 'text-primary-foreground' : 'text-primary'}`}>SUNIDHI</div>
        <div className={`-mt-1 text-[9px] font-semibold tracking-[.28em] ${light ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>INVESTMENTS</div>
      </div>
    </div>
  );
}

function AddressLink({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <a
      href={business.mapsUrl}
      target="_blank"
      rel="noreferrer"
      className={`flex items-start gap-3 transition-colors ${dark ? 'text-primary-foreground/80 hover:text-accent' : 'text-primary hover:text-accent'} ${className}`}
      data-testid="link-address-map"
    >
      <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${dark ? 'border-primary-foreground/20' : 'border-border bg-card'}`}>
        <MapPin size={15} />
      </span>
      <span>{business.address}</span>
    </a>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactState, setContactState] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterState, setNewsletterState] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const sections = navItems.map(({ href }) => document.querySelector(href));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    if (!name || !email || !email.includes('@')) {
      setContactState('error');
      return;
    }
    setContactState('success');
    form.reset();
  };

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get('newsletter') || '').trim();
    if (!email || !email.includes('@')) {
      setNewsletterState('error');
      return;
    }
    setNewsletterState('success');
    form.reset();
  };

  return (
    <div className="sunidhi-app grain bg-background">
      <div className="bg-primary px-4 py-2 text-[11px] text-primary-foreground/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <AddressLink className="hidden max-w-md text-[11px] sm:flex" dark />
          <span className="sm:hidden">Indore, Madhya Pradesh</span>
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-1.5 transition-colors hover:text-accent" href={`mailto:${business.primaryEmail}`} data-testid="link-top-email"><Mail size={12} /> {business.primaryEmail}</a>
            <span className="hidden h-3 w-px bg-primary-foreground/20 sm:block" />
            <a className="hidden items-center gap-1.5 transition-colors hover:text-accent sm:flex" href={business.linkedIn} target="_blank" rel="noreferrer" data-testid="link-top-linkedin"><Linkedin size={12} /> LinkedIn</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group" data-testid="link-logo"><Logo /></a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`nav-link text-[12px] font-semibold text-primary/75 transition-colors hover:text-primary ${activeSection === item.href.slice(1) ? 'active text-primary' : ''}`} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={business.phoneHref} className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent" data-testid="link-header-phone">
              <Phone size={14} className="text-accent" /> {business.phoneDisplay}
            </a>
            <button onClick={scrollToContact} className="rounded-md bg-accent px-4 py-2.5 text-xs font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-accent/85" data-testid="button-header-consultation">Book a Consultation</button>
          </div>

          <button className="rounded-md p-2 text-primary lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary" data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>
              ))}
              <button onClick={() => { setMenuOpen(false); scrollToContact(); }} className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-primary" data-testid="button-mobile-consultation">Book a Consultation <ArrowRight size={16} /></button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="hero-grid absolute inset-0 opacity-45" />
          <div className="wood-ribbon absolute bottom-0 right-0 h-full w-[38%] opacity-20" />
          <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-20">
            <div className="relative z-10 max-w-2xl">
              <div className="reveal mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.27em] text-accent">
                <span className="h-px w-8 bg-accent" /> Financial clarity, made personal
              </div>
              <h1 className="reveal reveal-delay-1 font-display text-[clamp(3rem,6.5vw,6.2rem)] leading-[.96] text-primary-foreground">
                Secure decisions for <em className="text-accent">family futures.</em>
              </h1>
              <p className="reveal reveal-delay-2 mt-7 max-w-xl text-[15px] leading-7 text-primary-foreground/74">
                {business.name} is led by {business.person}, focused on life and health insurance, child education planning, retirement planning, and practical investment guidance for families.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
                <button onClick={scrollToContact} className="group flex items-center gap-3 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-primary transition-all hover:-translate-y-1 hover:bg-accent/90" data-testid="button-hero-consultation">
                  Book a Consultation <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>
                <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:border-accent hover:text-accent" data-testid="link-hero-whatsapp">
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
              <div className="reveal reveal-delay-4 mt-10 max-w-lg rounded-lg border border-primary-foreground/15 bg-primary-foreground/6 p-4 text-sm leading-6 text-primary-foreground/78 backdrop-blur">
                {business.positioning}
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
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="absolute -bottom-6 -left-2 z-20 hidden max-w-xs rounded-xl border border-border/70 bg-card p-4 text-primary shadow-xl transition-all hover:-translate-y-1 hover:border-accent sm:block lg:left-4" data-testid="link-hero-address-map">
                <div className="flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><MapPin size={18} /></div><div><p className="text-xs font-bold">{business.person}</p><p className="mt-1 text-[10px] leading-4 text-muted-foreground">{business.address}</p></div></div>
              </a>
            </div>
          </div>
        </section>

        <section className="relative z-20 mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
          <div className="grid overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-primary/10 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map(({ title, copy, icon: Icon }, index) => (
              <div key={title} className={`flex items-center gap-3 px-5 py-5 ${index < 3 ? 'border-b sm:border-r lg:border-b-0' : ''} ${index === 1 ? 'sm:border-r-0 lg:border-r' : ''}`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><Icon size={19} strokeWidth={1.8} /></div>
                <div><h3 className="font-heading text-xs font-bold text-primary">{title}</h3><p className="mt-1 text-[10px] text-muted-foreground">{copy}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-32">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-accent" />
            <div className="relative overflow-hidden rounded-2xl bg-[#e8e1d3] p-8 sm:p-12">
              <div className="wood-panel absolute inset-0 opacity-35" />
              <div className="relative mx-auto max-w-[380px] rounded-2xl border border-primary/10 bg-card p-7 shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-4xl text-accent">S</div>
                <p className="mt-7 text-[11px] font-bold uppercase tracking-[.24em] text-accent">Primary advisor</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-primary">{business.person}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{business.positioning}</p>
                <div className="mt-7 grid gap-3 border-t border-border pt-5">
                  <a href={business.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-primary hover:text-accent"><Phone size={16} /> {business.phoneDisplay}</a>
                  <a href={business.linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold text-primary hover:text-accent"><Linkedin size={16} /> linkedin.com/in/smitatapadia</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">About Sunidhi Investments</p>
            <h2 className="max-w-xl font-display text-4xl leading-tight tracking-[-.025em] text-primary sm:text-5xl">A steady hand for <em className="text-accent">important decisions.</em></h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground">Your money deserves more than a product pitch. It deserves a thoughtful conversation about your family, your responsibilities, and the future you are trying to protect.</p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">{business.name} supports families with investment planning, insurance guidance, retirement preparation, child education planning, and practical financial coordination from Indore.</p>
            <div className="mt-8 grid max-w-lg grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
              {['Goal-led recommendations', 'Transparent conversations', 'Protection-first thinking', 'Review when life changes'].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-primary"><Check size={16} className="text-accent" /> {item}</div>)}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f1eee7] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">What we do</p><h2 className="font-display text-4xl text-primary sm:text-5xl">Financial solutions that <em className="text-accent">fit your life.</em></h2></div>
              <p className="max-w-xs text-sm leading-6 text-muted-foreground">One canonical service set across investments, insurance, tax planning, and loan support.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ title, copy, icon: Icon }, index) => (
                <article key={title} className="service-card group rounded-xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/70 hover:shadow-xl hover:shadow-primary/5">
                  <div className="service-icon flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary"><Icon size={23} strokeWidth={1.6} /></div>
                  <h3 className="mt-7 font-heading text-base font-bold leading-5 text-primary">{title}</h3>
                  <p className="mt-3 min-h-[88px] text-xs leading-5 text-muted-foreground">{copy}</p>
                  <a href="#contact" className="mt-5 flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-accent" data-testid={`link-service-${index}`}>Discuss service <ArrowRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Why choose us</p>
            <h2 className="max-w-lg font-display text-4xl leading-tight text-primary sm:text-5xl">Advice built around <em className="text-accent">your world.</em></h2>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-muted-foreground">Markets, policies, tax rules, and family priorities all change. A good advisory relationship helps you revisit choices with calm and context.</p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {whyPoints.map((point) => <div key={point} className="flex items-start gap-3"><div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check size={12} strokeWidth={3} /></div><span className="text-sm font-semibold leading-5 text-primary">{point}</span></div>)}
            </div>
            <button onClick={scrollToContact} className="group mt-10 flex items-center gap-3 border-b-2 border-accent pb-2 text-sm font-bold text-primary" data-testid="button-why-consultation">Let us talk about your goals <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
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
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Families served', value: '1900+', icon: Users },
              { label: 'Planning areas', value: '8', icon: BriefcaseBusiness },
              { label: 'Primary office', value: 'Indore', icon: MapPin },
              { label: 'Advisor focus', value: 'Family-first', icon: Handshake },
            ].map(({ value, label, icon: Icon }, index) => <div key={label} className={`flex items-center gap-4 px-6 py-7 ${index % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${index < 2 ? 'border-b sm:border-b lg:border-b-0' : ''}`}><Icon size={27} strokeWidth={1.5} className="text-accent" /><div><div className="font-display text-3xl text-primary">{value}</div><div className="mt-0.5 text-xs text-muted-foreground">{label}</div></div></div>)}
          </div>
        </section>

        <section id="faqs" className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-32">
          <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Questions, answered</p><h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">A little more <em className="text-accent">clarity.</em></h2><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Financial decisions feel simpler when you have someone to ask. Here are a few of the questions we hear most.</p><a href={`mailto:${business.primaryEmail}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent" data-testid="link-faq-email">Have another question? <ArrowRight size={15} /></a></div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => <div key={faq.question} className="py-5"><button className="flex w-full items-center justify-between gap-6 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}><span className="font-heading text-sm font-bold text-primary sm:text-base">{faq.question}</span><ChevronDown size={19} className={`shrink-0 text-accent transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} /></button><div className={`faq-content ${openFaq === index ? 'open' : ''}`}><div><p className="pt-4 pr-8 text-sm leading-6 text-muted-foreground">{faq.answer}</p></div></div></div>)}
          </div>
        </section>

        <section id="contact" className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-2">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Let us connect</p>
              <h2 className="max-w-lg font-display text-5xl leading-[1.05] sm:text-6xl">Your next chapter starts with a <em className="text-accent">conversation.</em></h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-primary-foreground/65">Tell us a little about where you are headed. Smita Tapadia can help you think through investment, insurance, retirement, education, tax-saving, and loan-related needs.</p>
              <div className="mt-9 grid gap-4">
                <a href={business.phoneHref} className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-phone"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Phone size={15} /></div> {business.phoneDisplay}</a>
                <a href={`mailto:${business.primaryEmail}`} className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-email"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Mail size={15} /></div> {business.primaryEmail}</a>
                <a href={`mailto:${business.alternativeEmail}`} className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-alt-email"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Mail size={15} /></div> {business.alternativeEmail}</a>
                <AddressLink dark />
              </div>
            </div>
            <div className="rounded-2xl bg-card p-6 text-primary shadow-2xl shadow-black/20 sm:p-8">
              {contactState === 'success' ? <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary"><Check size={28} /></div><h3 className="mt-6 font-display text-3xl">We will be in touch.</h3><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Thank you for reaching out. A Sunidhi Investments representative will contact you soon.</p><button onClick={() => setContactState('idle')} className="mt-7 text-sm font-bold text-primary underline decoration-accent decoration-2 underline-offset-4" data-testid="button-contact-another">Send another message</button></div> : <form onSubmit={handleContact} noValidate><div className="mb-7 flex items-center justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-accent">Book a consultation</p><h3 className="mt-2 font-display text-3xl text-primary">Plan with purpose.</h3></div><Sparkles className="text-accent" size={25} /></div><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-bold text-primary">Your name<input name="name" placeholder="e.g. Ananya Sharma" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-name" /></label><label className="text-xs font-bold text-primary">Email address<input name="email" type="email" placeholder="you@example.com" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-email" /></label></div><label className="mt-5 block text-xs font-bold text-primary">How can we help?<select name="interest" defaultValue="" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary" data-testid="select-contact-interest"><option value="" disabled>Select an area of interest</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label className="mt-5 block text-xs font-bold text-primary">A note for our advisor<textarea name="message" rows={3} placeholder="Tell us what you are planning for..." className="input-field mt-2 w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="textarea-contact-message" /></label>{contactState === 'error' && <p className="mt-4 text-xs font-semibold text-red-700" data-testid="status-contact-error">Please share your name and a valid email address.</p>}<button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-primary transition-all hover:bg-accent/85" data-testid="button-contact-submit">Request a call <ArrowRight size={16} /></button><p className="mt-4 text-center text-[10px] text-muted-foreground">No pressure. No jargon. Just a useful first conversation.</p></form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#10243d] px-4 pb-6 pt-16 text-primary-foreground sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 lg:grid-cols-[1.2fr_.65fr_.85fr_1fr]">
            <div><a href="#home" data-testid="link-footer-logo"><Logo light /></a><p className="mt-5 max-w-xs text-xs leading-6 text-primary-foreground/55">{business.name} supports families with investment, insurance, retirement, child education, tax-saving, and loan-related planning conversations.</p><div className="mt-5 flex gap-2"><a href={business.whatsappHref} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label="WhatsApp" data-testid="link-footer-whatsapp"><MessageCircle size={14} /></a><a href={`mailto:${business.primaryEmail}`} className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label="Email" data-testid="link-footer-email"><Mail size={14} /></a><a href={business.linkedIn} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label="LinkedIn" data-testid="link-footer-linkedin"><Linkedin size={14} /></a></div></div>
            <div><h3 className="text-xs font-bold text-accent">Quick links</h3><div className="mt-5 grid gap-3">{navItems.slice(0, 5).map((item) => <a key={item.href} href={item.href} className="w-fit text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}</div></div>
            <div><h3 className="text-xs font-bold text-accent">Our services</h3><div className="mt-5 grid gap-3">{services.map((service, index) => <a key={service.title} href="#services" className="w-fit text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground" data-testid={`link-footer-service-${index}`}>{service.title}</a>)}</div></div>
            <div><h3 className="text-xs font-bold text-accent">Contact</h3><div className="mt-5 grid gap-3 text-xs text-primary-foreground/60"><a href={business.phoneHref} className="w-fit hover:text-primary-foreground">{business.phoneDisplay}</a><a href={`mailto:${business.primaryEmail}`} className="w-fit hover:text-primary-foreground">{business.primaryEmail}</a><AddressLink className="text-xs" dark /></div><form onSubmit={handleNewsletter} className="mt-5 flex" noValidate><input name="newsletter" type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-l-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-xs text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent" data-testid="input-newsletter" /><button type="submit" className="flex w-11 items-center justify-center rounded-r-md bg-accent text-primary transition-colors hover:bg-accent/85" aria-label="Subscribe to newsletter" data-testid="button-newsletter-submit"><ArrowRight size={16} /></button></form>{newsletterState === 'success' && <p className="mt-2 text-[11px] font-semibold text-accent" data-testid="status-newsletter-success">You are on the list. Thank you.</p>}{newsletterState === 'error' && <p className="mt-2 text-[11px] font-semibold text-[#f3bf87]" data-testid="status-newsletter-error">Please enter a valid email.</p>}</div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-5 text-[10px] text-primary-foreground/45 sm:flex-row"><span>© 2026 Sunidhi Investments. All rights reserved.</span><span>Invest wisely. Live peacefully.</span></div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <ErrorBoundary resetKey={useLocation()[0]}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
