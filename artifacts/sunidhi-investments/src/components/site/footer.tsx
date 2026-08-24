import { siteConfig } from '@/config/site';
import { AddressLocation } from './address-location';
import { Logo } from './logo';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Disclaimer', href: '/terms-disclaimer' },
];

export function Footer() {
  const { business, contact, services, socialLinks } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10243d] px-4 pb-24 pt-10 text-primary-foreground sm:px-6 sm:pb-6 sm:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 border-b border-primary-foreground/15 pb-7 lg:grid-cols-[1.05fr_1.45fr_.95fr] lg:items-start">
          <div>
            <a href="#home" data-testid="link-footer-logo"><Logo light /></a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/68 lg:max-w-xs">{business.safeDescription}</p>
            <div className="mt-5 flex justify-center gap-2 sm:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label={label} data-testid={`link-footer-${label.toLowerCase()}`}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[.08em] text-accent">Quick links</h3>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1 xl:grid-cols-2">
                {quickLinks.map((item) => (
                  <a key={item.href} href={item.href} className="flex min-h-9 items-center rounded-md text-sm leading-5 text-primary-foreground/70 transition-colors hover:text-primary-foreground">{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[.08em] text-accent">Our services</h3>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1 xl:grid-cols-2">
                {services.map((service) => (
                  <a key={service.slug} href="#contact" className="flex min-h-9 items-center rounded-md text-sm leading-5 text-primary-foreground/70 transition-colors hover:text-primary-foreground" data-testid={`link-footer-service-${service.slug}`}>{service.title}</a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[.08em] text-accent">Contact</h3>
            <div className="mt-3 grid gap-1.5 text-sm leading-5 text-primary-foreground/70">
              <a href={contact.phone.href} className="touch-target flex w-fit items-center rounded-md hover:text-primary-foreground">{contact.phone.display}</a>
              <a href={`mailto:${contact.email.primary}`} className="touch-target flex w-fit items-center rounded-md hover:text-primary-foreground">{contact.email.primary}</a>
              <AddressLocation className="text-sm" dark />
            </div>
            <p className="mt-4 max-w-xs text-xs leading-5 text-primary-foreground/55">
              For consultations, use the contact form or call directly during working hours.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-xs leading-5 text-primary-foreground/50 sm:flex-row"><span>&copy; {currentYear} {business.name}. All rights reserved.</span><span>Invest wisely. Live peacefully.</span></div>
      </div>
    </footer>
  );
}
