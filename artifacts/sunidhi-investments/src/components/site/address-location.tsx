import { MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

type AddressLocationProps = {
  className?: string;
  dark?: boolean;
  compact?: boolean;
  iconSize?: number;
};

export function AddressLocation({
  className = '',
  dark = false,
  compact = false,
  iconSize = 15,
}: AddressLocationProps) {
  const { address } = siteConfig.contact;

  return (
    <a
      href={address.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`touch-target flex min-w-0 items-start gap-3 transition-colors ${dark ? 'text-primary-foreground/80 hover:text-accent' : 'text-primary hover:text-accent'} ${className}`}
      data-testid="link-address-map"
    >
      <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${dark ? 'border-primary-foreground/20' : 'border-border bg-card'}`}>
        <MapPin size={iconSize} />
      </span>
      <span className="min-w-0 break-words leading-5">
        {compact ? address.shortLabel : address.lines.map((line) => <span key={line} className="block">{line}</span>)}
      </span>
    </a>
  );
}
