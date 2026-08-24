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
      rel="noreferrer"
      className={`flex items-start gap-3 transition-colors ${dark ? 'text-primary-foreground/80 hover:text-accent' : 'text-primary hover:text-accent'} ${className}`}
      data-testid="link-address-map"
    >
      <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${dark ? 'border-primary-foreground/20' : 'border-border bg-card'}`}>
        <MapPin size={iconSize} />
      </span>
      <span>{compact ? address.shortLabel : address.full}</span>
    </a>
  );
}
