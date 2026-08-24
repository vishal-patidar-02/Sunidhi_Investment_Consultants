import { useEffect, useState } from 'react';
import { Linkedin, Mail, Menu, Phone, X } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { AddressLocation } from './address-location';
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
    const sections = navigation.map(({ href }) => document.querySelector(href));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, [navigation]);

  return (
    <>
      <div className="bg-primary px-4 py-2 text-[11px] text-primary-foreground/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <AddressLocation className="hidden max-w-md text-[11px] sm:flex" dark />
          <span className="sm:hidden">{contact.address.shortLabel}</span>
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-1.5 transition-colors hover:text-accent" href={`mailto:${contact.email.primary}`} data-testid="link-top-email">
              <Mail size={12} /> {contact.email.primary}
            </a>
            <span className="hidden h-3 w-px bg-primary-foreground/20 sm:block" />
            <a className="hidden items-center gap-1.5 transition-colors hover:text-accent sm:flex" href={contact.linkedIn.href} target="_blank" rel="noreferrer" data-testid="link-top-linkedin">
              <Linkedin size={12} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <Container className="flex h-[74px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group" data-testid="link-logo">
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-[12px] font-semibold text-primary/75 transition-colors hover:text-primary ${activeSection === item.href.slice(1) ? 'active text-primary' : ''}`}
                data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={contact.phone.href} className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-accent" data-testid="link-header-phone">
              <Phone size={14} className="text-accent" /> {contact.phone.display}
            </a>
            <button onClick={onContactClick} className="rounded-md bg-accent px-4 py-2.5 text-xs font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-accent/85" data-testid="button-header-consultation">
              Book a Consultation
            </button>
          </div>

          <button className="rounded-md p-2 text-primary lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </Container>
        {menuOpen && <MobileNavigation onClose={() => setMenuOpen(false)} onContactClick={onContactClick} />}
      </header>
    </>
  );
}
