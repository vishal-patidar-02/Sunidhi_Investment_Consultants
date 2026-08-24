import { useEffect, useState } from 'react';
import { Menu, Phone } from 'lucide-react';
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
        <Container className="flex h-[76px] items-center justify-between px-3 sm:h-[86px] sm:px-6 lg:px-8">
          <a href="#home" className="group" data-testid="link-logo">
            <Logo compact />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-semibold text-primary/75 transition-colors hover:text-primary ${activeSection === item.href.slice(1) ? 'active text-primary' : ''}`}
                data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={contact.phone.href} className="touch-target flex items-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent" data-testid="link-header-phone">
              <Phone size={14} className="text-accent" /> {contact.phone.display}
            </a>
            <button onClick={onContactClick} className="touch-target rounded-md bg-accent px-4 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-accent/85" data-testid="button-header-consultation">
              Book a Consultation
            </button>
          </div>

          <button className="touch-target flex items-center justify-center rounded-md border border-border bg-card text-primary lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu" data-testid="button-mobile-menu">
            <Menu size={22} />
          </button>
        </Container>
        {menuOpen && <MobileNavigation onClose={() => setMenuOpen(false)} onContactClick={onContactClick} />}
      </header>
    </>
  );
}
