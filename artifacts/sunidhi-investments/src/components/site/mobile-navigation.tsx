import { ArrowRight, MessageCircle, Phone, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { AddressLocation } from './address-location';
import { Logo } from './logo';

type MobileNavigationProps = {
  onClose: () => void;
  onContactClick: () => void;
};

export function MobileNavigation({ onClose, onContactClick }: MobileNavigationProps) {
  const { contact, navigation } = siteConfig;

  return (
    <div className="fixed inset-0 z-50 bg-primary/35 backdrop-blur-[2px] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button className="absolute inset-0 cursor-default" aria-label="Close menu" onClick={onClose} />
      <div className="absolute right-3 top-3 w-[min(92vw,380px)] overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <Logo variant="header" />
          <button className="touch-target flex items-center justify-center rounded-md text-primary" onClick={onClose} aria-label="Close menu">
            <X size={21} />
          </button>
        </div>
        <nav className="grid gap-1 px-3 py-3" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="touch-target flex items-center rounded-md px-3 text-[15px] font-semibold text-primary transition-colors active:bg-secondary"
              data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
            >
              {item.label}
            </a>
          ))}
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
