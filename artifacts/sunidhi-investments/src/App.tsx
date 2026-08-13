import { type FormEvent, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FileText,
  Handshake,
  Landmark,
  LineChart,
  Mail,
  Menu,
  MessageCircle,
  MoveUpRight,
  Phone,
  PieChart,
  PiggyBank,
  Plane,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  { title: 'Mutual Fund Advisory', copy: 'Expert guidance to choose the right mutual funds for your financial goals.', icon: LineChart },
  { title: 'Portfolio Management', copy: 'Well-researched strategies to build a well-balanced and diversified portfolio.', icon: PieChart },
  { title: 'Wealth Management', copy: 'Holistic wealth management solutions for growth and preservation.', icon: Handshake },
  { title: 'Retirement Planning', copy: 'Plan your retirement today for a stress-free and comfortable tomorrow.', icon: PiggyBank },
  { title: 'Tax Saving Investments', copy: 'Smart investment options to help you save tax and grow wealth.', icon: FileText },
];

const trustPoints = [
  { title: 'Personalized Financial Advice', copy: 'Tailored to your goals', icon: Users },
  { title: 'Trusted Financial Guidance', copy: 'Transparent & ethical', icon: ShieldCheck },
  { title: 'Long Term Wealth Creation', copy: 'For a secure future', icon: TrendingUp },
  { title: 'Client First Approach', copy: 'Your goals, our priority', icon: Target },
];

const faqs = [
  { question: 'How do I get started with Sunidhi Investments?', answer: 'Begin with a no-obligation conversation. We understand your goals, time horizon, and comfort with risk before recommending a path that fits your life.' },
  { question: 'What services does Sunidhi Investments offer?', answer: 'We offer mutual fund advisory, portfolio management, wealth management, retirement planning, and tax-saving investment guidance for families, professionals, and business owners.' },
  { question: 'Is my investment plan personalized?', answer: 'Yes. Every recommendation is shaped around your current priorities and future milestones. We do not believe in one-size-fits-all portfolios.' },
  { question: 'How often will my portfolio be reviewed?', answer: 'We keep an active eye on your portfolio and schedule structured reviews so your strategy stays aligned as markets and your circumstances change.' },
  { question: 'Where is Sunidhi Investments based?', answer: 'We are based in Indore, Madhya Pradesh, and work with clients who value clear, long-term financial guidance.' },
];

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
          <span className="hidden sm:inline">Serving families and businesses across Indore, Madhya Pradesh</span>
          <span className="sm:hidden">Indore, Madhya Pradesh</span>
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-1.5 transition-colors hover:text-accent" href="mailto:info@sunidhiinvestments.in" data-testid="link-top-email"><Mail size={12} /> info@sunidhiinvestments.in</a>
            <span className="hidden h-3 w-px bg-primary-foreground/20 sm:block" />
            <span className="hidden sm:inline">Mon–Sat, 9:30 AM–6:30 PM</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" data-testid="link-logo">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-primary">
              <span className="font-display text-3xl leading-none">S</span>
              <span className="absolute -bottom-0.5 right-0.5 h-2 w-2 rounded-full bg-accent" />
            </div>
            <div>
              <div className="font-heading text-[17px] font-extrabold tracking-[.16em] text-primary">SUNIDHI</div>
              <div className="-mt-1 text-[9px] font-semibold tracking-[.28em] text-muted-foreground">INVESTMENTS</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`nav-link text-[12px] font-semibold text-primary/75 transition-colors hover:text-primary ${activeSection === item.href.slice(1) ? 'active text-primary' : ''}`} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href="tel:+919893091404" className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent" data-testid="link-header-phone">
              <Phone size={14} className="text-accent" /> +91 98930 91404
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
          <div className="hero-grid absolute inset-0 opacity-60" />
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto grid min-h-[630px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.84fr_1.16fr] lg:px-8 lg:py-20">
            <div className="relative z-10 max-w-xl">
              <div className="reveal mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.27em] text-accent">
                <span className="h-px w-8 bg-accent" /> Financial clarity, made personal
              </div>
              <h1 className="reveal reveal-delay-1 font-display text-[clamp(3.4rem,7vw,6.6rem)] leading-[.92] tracking-[-.045em] text-primary-foreground">
                Smart investments.<br /><em className="text-accent">Stronger futures.</em>
              </h1>
              <p className="reveal reveal-delay-2 mt-7 max-w-md text-[15px] leading-7 text-primary-foreground/70">
                At Sunidhi Investments, we help you make smarter financial decisions today for a more secure and prosperous tomorrow.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
                <button onClick={scrollToContact} className="group flex items-center gap-3 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-primary transition-all hover:-translate-y-1 hover:bg-accent/90" data-testid="button-hero-consultation">
                  Book a Consultation <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>
                <a href="https://wa.me/919893091404" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:border-accent hover:text-accent" data-testid="link-hero-whatsapp">
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
              <div className="reveal reveal-delay-4 mt-12 flex items-center gap-4 text-xs text-primary-foreground/55">
                <div className="flex -space-x-2">
                  {['A', 'R', 'M', 'K'].map((initial, index) => <span key={initial} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-secondary text-[10px] font-bold text-primary-foreground" style={{ zIndex: 4 - index }}>{initial}</span>)}
                </div>
                <span><strong className="text-primary-foreground">500+ families</strong> trust our guidance</span>
              </div>
            </div>
            <div className="relative flex min-h-[330px] items-end justify-center lg:min-h-[510px]">
              <div className="absolute right-0 top-0 h-full w-full rounded-[2rem] bg-accent/10" />
              <div className="relative z-10 h-[300px] w-full max-w-[650px] overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-2xl shadow-black/25 sm:h-[400px] lg:h-[475px]">
                <img src="/hero-investment.jpg" alt="Gold coin stacks with a growing plant" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
                <div className="float-slow absolute bottom-5 left-5 max-w-[190px] rounded-xl border border-primary-foreground/20 bg-primary/85 p-4 backdrop-blur-md">
                  <div className="mb-2 flex items-center justify-between text-accent"><span className="text-[10px] uppercase tracking-[.18em]">Your wealth</span><TrendingUp size={15} /></div>
                  <div className="font-heading text-2xl font-bold">+18.4%</div>
                  <div className="mt-1 text-[10px] text-primary-foreground/55">A patient plan compounds</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-2 z-20 hidden rounded-xl border border-border/70 bg-card p-4 shadow-xl sm:block lg:left-4">
                <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary"><ShieldCheck size={18} /></div><div><p className="text-xs font-bold text-primary">SEBI Registered</p><p className="text-[10px] text-muted-foreground">Investment Advisor</p></div></div>
              </div>
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
            <div className="relative overflow-hidden rounded-2xl bg-[#dfe4dc] p-8 sm:p-12">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
              <div className="relative mx-auto flex aspect-square max-w-[330px] items-center justify-center rounded-full border border-primary/10 bg-[#eef0e9]">
                <div className="absolute inset-7 rounded-full border border-primary/10" />
                <div className="absolute inset-14 rounded-full border border-accent/50" />
                <div className="text-center"><div className="font-display text-8xl text-primary">15</div><div className="mt-1 text-xs font-bold uppercase tracking-[.22em] text-primary/60">Years of purpose</div></div>
                <div className="absolute -right-2 top-16 rounded-lg bg-primary px-3 py-2 text-[10px] font-bold text-primary-foreground shadow-lg">Since 2009</div>
                <div className="absolute -bottom-2 left-3 flex items-center gap-2 rounded-lg bg-card px-3 py-2 text-[10px] font-bold text-primary shadow-lg"><CircleDollarSign size={15} className="text-accent" /> ₹250 Cr+ managed</div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">About Sunidhi Investments</p>
            <h2 className="max-w-xl font-display text-4xl leading-tight tracking-[-.025em] text-primary sm:text-5xl">A steady hand for <em className="text-accent">every ambition.</em></h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground">Your money deserves more than a product pitch. It deserves a thoughtful plan, honest conversations, and a partner who stays invested in your progress.</p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">Sunidhi Investments is an Indore-based financial advisory firm committed to helping families, professionals, and business owners build a stronger financial future with clarity and confidence.</p>
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6">
              {['Goal-led recommendations', 'Transparent conversations', 'Long-term perspective', 'Review when life changes'].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-primary"><Check size={16} className="text-accent" /> {item}</div>)}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f1eee7] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">What we do</p><h2 className="font-display text-4xl text-primary sm:text-5xl">Financial solutions that <em className="text-accent">fit your life.</em></h2></div>
              <p className="max-w-xs text-sm leading-6 text-muted-foreground">From your first investment to your legacy plan, we bring context to every decision.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {services.map(({ title, copy, icon: Icon }, index) => (
                <article key={title} className={`service-card group rounded-xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/70 hover:shadow-xl hover:shadow-primary/5 ${index === 0 ? 'lg:translate-y-5' : ''} ${index === 4 ? 'lg:-translate-y-5' : ''}`}>
                  <div className="service-icon flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary"><Icon size={23} strokeWidth={1.6} /></div>
                  <h3 className="mt-7 font-heading text-base font-bold leading-5 text-primary">{title}</h3>
                  <p className="mt-3 min-h-[72px] text-xs leading-5 text-muted-foreground">{copy}</p>
                  <a href="#contact" className="mt-5 flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-accent" data-testid={`link-service-${index}`}>Explore service <ArrowRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Why choose us</p>
            <h2 className="max-w-lg font-display text-4xl leading-tight text-primary sm:text-5xl">Advice built around <em className="text-accent">your world.</em></h2>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-muted-foreground">Markets will always move. A good plan gives you the confidence to keep moving toward what matters.</p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {['SEBI Registered Investment Advisor', 'Experienced & dedicated team', 'Personalized goal-based planning', 'Transparent & ethical approach', 'Focus on long-term wealth creation'].map((point) => <div key={point} className="flex items-start gap-3"><div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check size={12} strokeWidth={3} /></div><span className="text-sm font-semibold leading-5 text-primary">{point}</span></div>)}
            </div>
            <button onClick={scrollToContact} className="group mt-10 flex items-center gap-3 border-b-2 border-accent pb-2 text-sm font-bold text-primary" data-testid="button-why-consultation">Let’s talk about your goals <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-tr-3xl border-r border-t border-accent" />
            <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
              <div className="relative">
                <Quote size={32} className="text-accent" />
                <blockquote className="mt-8 font-display text-3xl leading-[1.18] text-primary-foreground">“The best financial plan is the one that lets you sleep well at night.”</blockquote>
                <div className="mt-10 flex items-center gap-3 border-t border-primary-foreground/15 pt-5"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-xl text-primary">S</div><div><p className="text-sm font-bold">The Sunidhi principle</p><p className="text-xs text-primary-foreground/55">Clear advice. Consistent care.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '500+', label: 'Happy Clients', icon: Users },
              { number: '15+', label: 'Years of Experience', icon: Clock3 },
              { number: '₹250 Cr+', label: 'Assets Managed', icon: CircleDollarSign },
              { number: '100%', label: 'Client Satisfaction', icon: Handshake },
            ].map(({ number, label, icon: Icon }, index) => <div key={label} className={`flex items-center gap-4 px-6 py-7 ${index % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${index < 2 ? 'border-b sm:border-b lg:border-b-0' : ''}`}><Icon size={27} strokeWidth={1.5} className="text-accent" /><div><div className="font-display text-3xl text-primary">{number}</div><div className="mt-0.5 text-xs text-muted-foreground">{label}</div></div></div>)}
          </div>
        </section>

        <section id="faqs" className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-32">
          <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Questions, answered</p><h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">A little more <em className="text-accent">clarity.</em></h2><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Financial decisions feel simpler when you have someone to ask. Here are a few of the questions we hear most.</p><a href="mailto:info@sunidhiinvestments.in" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent" data-testid="link-faq-email">Have another question? <ArrowRight size={15} /></a></div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => <div key={faq.question} className="py-5"><button className="flex w-full items-center justify-between gap-6 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}><span className="font-heading text-sm font-bold text-primary sm:text-base">{faq.question}</span><ChevronDown size={19} className={`shrink-0 text-accent transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} /></button><div className={`faq-content ${openFaq === index ? 'open' : ''}`}><div><p className="pt-4 pr-8 text-sm leading-6 text-muted-foreground">{faq.answer}</p></div></div></div>)}
          </div>
        </section>

        <section id="contact" className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-2">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Let’s connect</p>
              <h2 className="max-w-lg font-display text-5xl leading-[1.05] sm:text-6xl">Your next chapter starts with a <em className="text-accent">conversation.</em></h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-primary-foreground/65">Tell us a little about where you are headed. We’ll get back to you within one working day to arrange a thoughtful first conversation.</p>
              <div className="mt-9 grid gap-4">
                <a href="tel:+919893091404" className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-phone"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Phone size={15} /></div> +91 98930 91404</a>
                <a href="mailto:info@sunidhiinvestments.in" className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-email"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Mail size={15} /></div> info@sunidhiinvestments.in</a>
                <div className="flex items-center gap-3 text-sm text-primary-foreground/80"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Landmark size={15} /></div> Indore, Madhya Pradesh</div>
              </div>
            </div>
            <div className="rounded-2xl bg-card p-6 text-primary shadow-2xl shadow-black/20 sm:p-8">
              {contactState === 'success' ? <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary"><Check size={28} /></div><h3 className="mt-6 font-display text-3xl">We’ll be in touch.</h3><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Thank you for reaching out. A Sunidhi advisor will contact you within one working day.</p><button onClick={() => setContactState('idle')} className="mt-7 text-sm font-bold text-primary underline decoration-accent decoration-2 underline-offset-4" data-testid="button-contact-another">Send another message</button></div> : <form onSubmit={handleContact} noValidate><div className="mb-7 flex items-center justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-accent">Book a consultation</p><h3 className="mt-2 font-display text-3xl text-primary">Let’s plan with purpose.</h3></div><Sparkles className="text-accent" size={25} /></div><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-bold text-primary">Your name<input name="name" placeholder="e.g. Ananya Sharma" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-name" /></label><label className="text-xs font-bold text-primary">Email address<input name="email" type="email" placeholder="you@example.com" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-email" /></label></div><label className="mt-5 block text-xs font-bold text-primary">How can we help?<select name="interest" defaultValue="" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary" data-testid="select-contact-interest"><option value="" disabled>Select an area of interest</option><option>Mutual Fund Advisory</option><option>Retirement Planning</option><option>Wealth Management</option><option>Tax Saving Investments</option><option>Portfolio Management</option></select></label><label className="mt-5 block text-xs font-bold text-primary">A note for our advisor<textarea name="message" rows={3} placeholder="Tell us what you’re planning for..." className="input-field mt-2 w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="textarea-contact-message" /></label>{contactState === 'error' && <p className="mt-4 text-xs font-semibold text-red-700" data-testid="status-contact-error">Please share your name and a valid email address.</p>}<button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-primary transition-all hover:bg-accent/85" data-testid="button-contact-submit">Request a call <ArrowRight size={16} /></button><p className="mt-4 text-center text-[10px] text-muted-foreground">No pressure. No jargon. Just a useful first conversation.</p></form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#10243d] px-4 pb-6 pt-16 text-primary-foreground sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 lg:grid-cols-[1.25fr_.7fr_.7fr_1fr]">
            <div><a href="#home" className="flex items-center gap-3" data-testid="link-footer-logo"><div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent text-accent font-display text-3xl">S</div><div><div className="font-heading text-[17px] font-extrabold tracking-[.16em]">SUNIDHI</div><div className="-mt-1 text-[9px] font-semibold tracking-[.28em] text-primary-foreground/50">INVESTMENTS</div></div></a><p className="mt-5 max-w-xs text-xs leading-6 text-primary-foreground/55">Sunidhi Investments is an Indore-based financial advisory firm committed to helping you achieve your financial goals.</p><div className="mt-5 flex gap-2"><a href="https://wa.me/919893091404" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label="WhatsApp" data-testid="link-footer-whatsapp"><MessageCircle size={14} /></a><a href="mailto:info@sunidhiinvestments.in" className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label="Email" data-testid="link-footer-email"><Mail size={14} /></a></div></div>
            <div><h3 className="text-xs font-bold text-accent">Quick links</h3><div className="mt-5 grid gap-3">{navItems.slice(0, 4).map((item) => <a key={item.href} href={item.href} className="w-fit text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}</div></div>
            <div><h3 className="text-xs font-bold text-accent">Our services</h3><div className="mt-5 grid gap-3">{services.slice(0, 4).map((service, index) => <a key={service.title} href="#services" className="w-fit text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground" data-testid={`link-footer-service-${index}`}>{service.title.replace(' Advisory', '')}</a>)}</div></div>
            <div><h3 className="text-xs font-bold text-accent">Stay updated</h3><p className="mt-5 text-xs leading-5 text-primary-foreground/60">Occasional, useful notes on investing and building wealth.</p><form onSubmit={handleNewsletter} className="mt-4 flex" noValidate><input name="newsletter" type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-l-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-xs text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent" data-testid="input-newsletter" /><button type="submit" className="flex w-11 items-center justify-center rounded-r-md bg-accent text-primary transition-colors hover:bg-accent/85" aria-label="Subscribe to newsletter" data-testid="button-newsletter-submit"><ArrowDownRight size={16} /></button></form>{newsletterState === 'success' && <p className="mt-2 text-[11px] font-semibold text-accent" data-testid="status-newsletter-success">You’re on the list. Thank you.</p>}{newsletterState === 'error' && <p className="mt-2 text-[11px] font-semibold text-[#f3bf87]" data-testid="status-newsletter-error">Please enter a valid email.</p>}</div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-5 text-[10px] text-primary-foreground/45 sm:flex-row"><span>© 2024 Sunidhi Investments. All rights reserved.</span><span>Invest wisely. Live peacefully.</span></div>
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