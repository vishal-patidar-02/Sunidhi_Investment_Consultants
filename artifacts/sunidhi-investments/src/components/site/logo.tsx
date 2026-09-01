import { siteConfig } from '@/config/site';

type LogoVariant = 'header' | 'footer' | 'crestOnly';

type LogoProps = {
  light?: boolean;
  compact?: boolean;
  variant?: LogoVariant;
};

const crestSizes: Record<LogoVariant, string> = {
  header: 'h-9 w-9 min-[390px]:h-10 min-[390px]:w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12',
  footer: 'h-14 w-14 sm:h-[60px] sm:w-[60px]',
  crestOnly: 'h-10 w-10',
};

export function Logo({ light = false, compact = false, variant = compact ? 'header' : 'footer' }: LogoProps) {
  const { brand, name } = siteConfig.business;
  const isHeader = variant === 'header';
  const isCrestOnly = variant === 'crestOnly';

  return (
    <div className={`flex min-w-0 items-center ${isHeader ? 'gap-2.5 sm:gap-3' : 'gap-3.5'}`} aria-label={name}>
      <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-md border bg-[#fbf6ec] ${crestSizes[variant]} ${light ? 'border-accent/75' : 'border-accent/55'}`}>
        <img
          src="/brand/sunidhi-header-icon-160.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain p-0.5"
          width={isHeader ? 48 : 60}
          height={isHeader ? 48 : 60}
        />
      </div>
      {!isCrestOnly && (
        <div className="min-w-0 overflow-hidden leading-none">
          <div className={`font-heading font-bold uppercase tracking-[.12em] ${isHeader ? 'text-[15px] min-[390px]:text-[16px] sm:text-xl lg:text-2xl' : 'text-2xl sm:text-[26px]'} ${light ? 'text-primary-foreground' : 'text-primary'}`}>
            {brand.primary}
          </div>
          <div className={`mt-1 whitespace-nowrap font-heading font-semibold uppercase tracking-[.12em] ${isHeader ? 'text-[7.5px] min-[390px]:text-[8.5px] sm:text-[10px] lg:text-[11px]' : 'text-[11px] sm:text-xs'} ${light ? 'text-primary-foreground/64' : 'text-muted-foreground'}`}>
            {brand.descriptor}
          </div>
        </div>
      )}
    </div>
  );
}

