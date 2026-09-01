import { useEffect, useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { useLocation } from 'wouter';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { Logo } from './logo';
import { MobileNavigation } from './mobile-navigation';

type HeaderProps = {
  onContactClick: () => void;
};

export function Header({ onContactClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { contact, navigation } = siteConfig;
  const [location] = useLocation();
  const anchorPrefix = location === '/' ? '' : '/';

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navigation]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/96 backdrop-blur-md">
        <Container className="relative flex h-16 items-center justify-between gap-3 px-3 sm:h-[74px] sm:px-6 xl:px-8">
          <a href={`${anchorPrefix}#home`} className="group min-w-0 max-w-[calc(100%-64px)] flex-1 overflow-hidden sm:flex-none" data-testid="link-logo">
            <Logo variant="header" />
          </a>

          <nav
            className="hidden min-w-0 flex-1 overflow-x-auto overscroll-x-contain px-1 [-ms-overflow-style:none] [scrollbar-width:none] xl:flex [&::-webkit-scrollbar]:hidden"
            aria-label="Main navigation"
          >
            <div className="flex w-max items-center gap-4 xl:gap-6">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={`${anchorPrefix}${item.href}`}
                  className={`nav-link whitespace-nowrap text-[13px] font-semibold text-primary/75 transition-colors hover:text-primary xl:text-sm ${activeSection === item.href.slice(1) ? 'active text-primary' : ''}`}
                  data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={contact.phone.href}
              className="group relative flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label={`Call ${contact.phone.display}`}
              title={`Call ${contact.phone.display}`}
              data-testid="link-header-phone"
            >
              <Phone size={17} className="text-accent" aria-hidden="true" />
              <span>Call</span>
              <span
                role="tooltip"
                className="pointer-events-none absolute right-0 top-[calc(100%+0.625rem)] z-50 whitespace-nowrap rounded-md border border-border bg-card px-3 py-2 text-xs font-bold text-primary opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                {contact.phone.display}
              </span>
            </a>
            <button onClick={onContactClick} className="touch-target rounded-md bg-accent px-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-accent/85" data-testid="button-header-consultation">
              Book a Consultation
            </button>
          </div>

          <button className="touch-target fixed right-3 top-2.5 z-50 flex items-center justify-center rounded-md border border-primary bg-primary text-primary-foreground shadow-sm sm:right-6 sm:top-[15px] xl:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu" data-testid="button-mobile-menu">
            <Menu size={22} />
          </button>
        </Container>
        {menuOpen && <MobileNavigation onClose={() => setMenuOpen(false)} onContactClick={onContactClick} />}
      </header>
    </>
  );
}

