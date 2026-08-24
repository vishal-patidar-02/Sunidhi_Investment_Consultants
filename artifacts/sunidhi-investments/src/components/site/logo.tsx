export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex h-11 w-11 items-center justify-center rounded-full border ${light ? 'border-accent text-accent' : 'border-accent/55 text-primary'}`}>
        <span className="font-display text-3xl leading-none">S</span>
        <span className="absolute -bottom-0.5 right-0.5 h-2 w-2 rounded-full bg-accent" />
      </div>
      <div>
        <div className={`font-heading text-[17px] font-extrabold tracking-[.16em] ${light ? 'text-primary-foreground' : 'text-primary'}`}>SUNIDHI</div>
        <div className={`-mt-1 text-[9px] font-semibold tracking-[.28em] ${light ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>INVESTMENTS</div>
      </div>
    </div>
  );
}
