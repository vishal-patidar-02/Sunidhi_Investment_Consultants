import {
  ArrowRight,
  BriefcaseBusiness,
  CircleHelp,
  Home,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRound,
  X,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { AddressLocation } from './address-location';
import { Logo } from './logo';

type MobileNavigationProps = {
  onClose: () => void;
  onContactClick: () => void;
};

const mobileNavigationIcons: Record<string, LucideIcon> = {
  '#home': Home,
  '#about': UserRound,
  '#services': BriefcaseBusiness,
  '#why-us': ShieldCheck,
  '#faqs': CircleHelp,
  '#contact': Mail,
};

export function MobileNavigation({ onClose, onContactClick }: MobileNavigationProps) {
  const { contact, navigation } = siteConfig;

  return (
    <div className="fixed inset-0 z-50 bg-primary/35 backdrop-blur-[2px] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button className="absolute inset-0 cursor-default" aria-label="Close menu" onClick={onClose} />
      <div className="absolute left-1/2 top-3 w-[calc(100vw-2rem)] max-w-[380px] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <Logo variant="header" />
          <button className="touch-target flex items-center justify-center rounded-md text-primary" onClick={onClose} aria-label="Close menu">
            <X size={21} />
          </button>
        </div>
        <nav className="grid gap-1 px-3 py-3" aria-label="Mobile navigation">
          {navigation.map((item) => {
            const Icon = mobileNavigationIcons[item.href] ?? ArrowRight;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="touch-target group flex items-center gap-3 rounded-lg px-3 text-[15px] font-semibold text-primary transition-colors active:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent transition-colors group-active:border-accent/40 group-active:bg-accent/18">
                  <Icon size={17} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">{item.label}</span>
                <ArrowRight size={15} className="text-primary/35 transition-colors group-active:text-accent" aria-hidden="true" />
              </a>
            );
          })}
        </nav>
        <div className="grid gap-2 border-t border-border bg-muted/45 p-3">
          <div className="grid grid-cols-2 gap-2">
            <a href={contact.phone.href} className="touch-target flex items-center justify-center gap-2 rounded-md border border-border bg-card text-sm font-bold text-primary">
              <Phone size={16} className="text-accent" /> Call
            </a>
            <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="touch-target flex items-center justify-center gap-2 rounded-md border border-border bg-card text-sm font-bold text-primary">
              <MessageCircle size={16} className="text-accent" /> WhatsApp
            </a>
          </div>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="touch-target flex items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-bold text-primary"
            data-testid="button-mobile-consultation"
          >
            Book a Consultation <ArrowRight size={16} />
          </button>
          <AddressLocation compact className="mt-1 text-xs" />
        </div>
      </div>
    </div>
  );
}
