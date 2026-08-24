export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? 'gap-2.5' : 'gap-3'}`}>
      <div className={`relative flex shrink-0 items-center justify-center rounded-full border ${compact ? 'h-10 w-10' : 'h-11 w-11'} ${light ? 'border-accent text-accent' : 'border-accent/55 text-primary'}`}>
        <span className={`${compact ? 'text-2xl' : 'text-3xl'} font-display leading-none`}>S</span>
        <span className="absolute -bottom-0.5 right-0.5 h-2 w-2 rounded-full bg-accent" />
      </div>
      <div>
        <div className={`font-heading ${compact ? 'text-[14px]' : 'text-[17px]'} font-extrabold tracking-[.14em] ${light ? 'text-primary-foreground' : 'text-primary'}`}>SUNIDHI</div>
        <div className={`-mt-1 ${compact ? 'text-[8px]' : 'text-[9px]'} font-semibold tracking-[.24em] ${light ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>INVESTMENTS</div>
      </div>
    </div>
  );
}
