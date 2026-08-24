import { type FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { AddressLocation } from './address-location';
import { Logo } from './logo';

export function Footer() {
  const [newsletterState, setNewsletterState] = useState<'idle' | 'success' | 'error'>('idle');
  const { business, contact, navigation, services, socialLinks } = siteConfig;

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
    <footer className="bg-[#10243d] px-4 pb-6 pt-16 text-primary-foreground sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 lg:grid-cols-[1.2fr_.65fr_.85fr_1fr]">
          <div>
            <a href="#home" data-testid="link-footer-logo"><Logo light /></a>
            <p className="mt-5 max-w-xs text-xs leading-6 text-primary-foreground/55">{business.safeDescription}</p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label={label} data-testid={`link-footer-${label.toLowerCase()}`}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          <div><h3 className="text-xs font-bold text-accent">Quick links</h3><div className="mt-5 grid gap-3">{navigation.slice(0, 5).map((item) => <a key={item.href} href={item.href} className="w-fit text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}</div></div>
          <div><h3 className="text-xs font-bold text-accent">Our services</h3><div className="mt-5 grid gap-3">{services.map((service) => <a key={service.slug} href="#services" className="w-fit text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground" data-testid={`link-footer-service-${service.slug}`}>{service.title}</a>)}</div></div>
          <div>
            <h3 className="text-xs font-bold text-accent">Contact</h3>
            <div className="mt-5 grid gap-3 text-xs text-primary-foreground/60">
              <a href={contact.phone.href} className="w-fit hover:text-primary-foreground">{contact.phone.display}</a>
              <a href={`mailto:${contact.email.primary}`} className="w-fit hover:text-primary-foreground">{contact.email.primary}</a>
              <AddressLocation className="text-xs" dark />
            </div>
            <form onSubmit={handleNewsletter} className="mt-5 flex" noValidate>
              <input name="newsletter" type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-l-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-xs text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent" data-testid="input-newsletter" />
              <button type="submit" className="flex w-11 items-center justify-center rounded-r-md bg-accent text-primary transition-colors hover:bg-accent/85" aria-label="Subscribe to newsletter" data-testid="button-newsletter-submit"><ArrowRight size={16} /></button>
            </form>
            {newsletterState === 'success' && <p className="mt-2 text-[11px] font-semibold text-accent" data-testid="status-newsletter-success">You are on the list. Thank you.</p>}
            {newsletterState === 'error' && <p className="mt-2 text-[11px] font-semibold text-[#f3bf87]" data-testid="status-newsletter-error">Please enter a valid email.</p>}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-[10px] text-primary-foreground/45 sm:flex-row"><span>© 2026 {business.name}. All rights reserved.</span><span>Invest wisely. Live peacefully.</span></div>
      </div>
    </footer>
  );
}
