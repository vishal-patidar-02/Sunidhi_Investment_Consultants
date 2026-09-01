import { siteConfig } from '@/config/site';
import { useLocation } from 'wouter';
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
  const [location] = useLocation();
  const anchorPrefix = location === '/' ? '' : '/';
  const footerServices = services.filter((service) => service.selectable !== false);

  return (
    <footer className="bg-[#10243d] px-4 pb-24 pt-10 text-primary-foreground sm:px-6 sm:pb-8 sm:pt-12 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-9 border-b border-primary-foreground/15 pb-8 lg:grid-cols-[1.05fr_1.35fr_.95fr] lg:items-start lg:gap-10">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <a href={`${anchorPrefix}#home`} className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#10243d]" data-testid="link-footer-logo">
              <Logo variant="footer" light />
            </a>
            <p className="mt-5 max-w-md text-sm leading-6 text-primary-foreground/72 lg:max-w-sm">{business.safeDescription}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.08em] text-accent">
              Family-first guidance
            </div>
            <div className="mt-5 flex justify-center gap-2.5 sm:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/18 bg-white/[.04] text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#10243d]"
                  aria-label={label}
                  data-testid={`link-footer-${label.toLowerCase()}`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:gap-8">
            <nav aria-label="Footer quick links">
              <h3 className="border-b border-primary-foreground/12 pb-3 text-xs font-bold uppercase tracking-[.12em] text-accent">Quick links</h3>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1 xl:grid-cols-2">
                {quickLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href.startsWith('/') ? item.href : `${anchorPrefix}${item.href}`}
                    className="group flex min-h-10 items-center rounded-md text-sm font-medium leading-5 text-primary-foreground/72 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#10243d]"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent/55 transition-colors group-hover:bg-accent" />
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <nav aria-label="Footer services">
              <h3 className="border-b border-primary-foreground/12 pb-3 text-xs font-bold uppercase tracking-[.12em] text-accent">Our services</h3>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1 xl:grid-cols-2">
                {footerServices.map((service) => (
                  <a
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex min-h-10 items-center rounded-md text-sm font-medium leading-5 text-primary-foreground/72 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#10243d]"
                    data-testid={`link-footer-service-${service.slug}`}
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent/55 transition-colors group-hover:bg-accent" />
                    {service.title}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="rounded-lg border border-primary-foreground/12 bg-white/[.035] p-4 sm:p-5">
            <h3 className="text-xs font-bold uppercase tracking-[.12em] text-accent">Contact</h3>
            <div className="mt-4 grid gap-2.5 text-sm leading-5 text-primary-foreground/76">
              <a href={contact.phone.href} className="touch-target flex w-fit items-center rounded-md font-medium hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#10243d]">{contact.phone.display}</a>
              <a href={`mailto:${contact.email.primary}`} className="touch-target flex w-fit items-center rounded-md font-medium hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#10243d]">{contact.email.primary}</a>
              <AddressLocation className="text-sm font-medium" dark />
            </div>
            <p className="mt-5 max-w-xs text-xs leading-5 text-primary-foreground/58">
              For consultations, use the contact form or call directly during working hours.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 pt-5 text-center text-xs leading-5 text-primary-foreground/55 sm:flex-row sm:text-left">
          <span>&copy; {currentYear} {business.name}. All rights reserved.</span>
          <span className="text-primary-foreground/68">Invest wisely. Live peacefully.</span>
        </div>
      </div>
    </footer>
  );
}

