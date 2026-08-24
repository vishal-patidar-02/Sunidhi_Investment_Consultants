import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

type MobileNavigationProps = {
  onClose: () => void;
  onContactClick: () => void;
};

export function MobileNavigation({ onClose, onContactClick }: MobileNavigationProps) {
  return (
    <div className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden">
      <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
        {siteConfig.navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-md px-3 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => {
            onClose();
            onContactClick();
          }}
          className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-primary"
          data-testid="button-mobile-consultation"
        >
          Book a Consultation <ArrowRight size={16} />
        </button>
      </nav>
    </div>
  );
}
