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
        <div className="grid gap-8 border-b border-primary-foreground/15 pb-8 lg:grid-cols-[1.05fr_1.25fr_1fr] lg:items-start">
          <div>
            <a href="#home" data-testid="link-footer-logo"><Logo light /></a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/62 lg:max-w-xs lg:text-xs">{business.safeDescription}</p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent" aria-label={label} data-testid={`link-footer-${label.toLowerCase()}`}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold text-accent">Quick links</h3>
              <div className="mt-3 grid gap-1.5">
                {quickLinks.map((item) => (
                  <a key={item.href} href={item.href} className="touch-target flex w-fit items-center rounded-md text-sm text-primary-foreground/66 transition-colors hover:text-primary-foreground lg:text-xs">{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-accent">Our services</h3>
              <div className="mt-3 grid gap-1.5">
                {services.map((service) => (
                  <a key={service.slug} href="#contact" className="touch-target flex w-fit items-center rounded-md text-sm text-primary-foreground/66 transition-colors hover:text-primary-foreground lg:text-xs" data-testid={`link-footer-service-${service.slug}`}>{service.title}</a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-accent">Contact</h3>
            <div className="mt-3 grid gap-1.5 text-sm text-primary-foreground/66 lg:text-xs">
              <a href={contact.phone.href} className="touch-target flex w-fit items-center rounded-md hover:text-primary-foreground">{contact.phone.display}</a>
              <a href={`mailto:${contact.email.primary}`} className="touch-target flex w-fit items-center rounded-md hover:text-primary-foreground">{contact.email.primary}</a>
              <AddressLocation className="text-sm lg:text-xs" dark />
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
