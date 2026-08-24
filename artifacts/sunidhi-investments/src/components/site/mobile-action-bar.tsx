import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

type MobileActionBarProps = {
  onContactClick: () => void;
};

export function MobileActionBar({ onContactClick }: MobileActionBarProps) {
  const { phone, whatsapp } = siteConfig.contact;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/96 p-2 shadow-2xl backdrop-blur sm:hidden">
      <a href={phone.href} className="flex min-h-11 items-center justify-center gap-1.5 rounded-md text-xs font-bold text-primary">
        <Phone size={15} /> Call
      </a>
      <a href={whatsapp.href} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center gap-1.5 rounded-md text-xs font-bold text-primary">
        <MessageCircle size={15} /> WhatsApp
      </a>
      <button onClick={onContactClick} className="min-h-11 rounded-md bg-accent px-2 text-xs font-bold text-primary">
        Consult
      </button>
    </div>
  );
}
