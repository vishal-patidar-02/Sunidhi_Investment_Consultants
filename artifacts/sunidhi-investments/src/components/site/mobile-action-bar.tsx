import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

type MobileActionBarProps = {
  onContactClick: () => void;
};

export function MobileActionBar({ onContactClick }: MobileActionBarProps) {
  const { phone, whatsapp } = siteConfig.contact;

  return (
    <div className="safe-bottom-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-border bg-background/96 px-2 pt-2 shadow-2xl backdrop-blur sm:hidden">
      <a href={phone.href} className="touch-target touch-press flex items-center justify-center gap-1.5 rounded-md border border-border bg-card text-xs font-bold text-primary">
        <Phone size={15} /> Call
      </a>
      <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className="touch-target touch-press flex items-center justify-center gap-1.5 rounded-md border border-border bg-card text-xs font-bold text-primary">
        <MessageCircle size={15} /> WhatsApp
      </a>
      <button onClick={onContactClick} className="touch-target touch-press rounded-md bg-accent px-2 text-xs font-bold text-primary">
        Consult
      </button>
    </div>
  );
}
