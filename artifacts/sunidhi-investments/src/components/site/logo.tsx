export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? 'gap-2.5' : 'gap-3'}`}>
      <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-md border bg-[#fbf6ec] ${compact ? 'h-[60px] w-[60px]' : 'h-[66px] w-[66px]'} ${light ? 'border-accent/80' : 'border-accent/55'}`}>
        <img
          src="/brand/sunidhi-header-icon.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain p-0.5"
          width={compact ? 60 : 66}
          height={compact ? 60 : 66}
        />
      </div>
      <div>
        <div className={`font-heading ${compact ? 'text-sm' : 'text-[17px]'} font-extrabold tracking-[.1em] ${light ? 'text-primary-foreground' : 'text-primary'}`}>SUNIDHI</div>
        <div className={`-mt-0.5 ${compact ? 'text-[10px]' : 'text-[11px]'} font-semibold tracking-[.16em] ${light ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>INVESTMENTS</div>
        <div className={`-mt-0.5 ${compact ? 'text-[8px]' : 'text-[9px]'} font-semibold tracking-[.12em] ${light ? 'text-primary-foreground/50' : 'text-muted-foreground/80'}`}>CONSULTANTS</div>
      </div>
    </div>
  );
}
