import { siteConfig } from '@/config/site';

export function TrustStrip() {
  return (
    <section className="relative z-20 mx-auto -mt-6 max-w-6xl px-3 sm:-mt-8 sm:px-6">
      <div className="grid overflow-hidden rounded-lg border border-border bg-card shadow-xl shadow-primary/10 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.trustPoints.map(({ title, copy, icon: Icon }, index) => (
          <div key={title} className={`flex min-h-[88px] items-center gap-3 px-4 py-4 sm:px-5 sm:py-5 ${index < 3 ? 'border-b sm:border-r lg:border-b-0' : ''} ${index === 1 ? 'sm:border-r-0 lg:border-r' : ''}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><Icon size={19} strokeWidth={1.8} /></div>
            <div><h3 className="font-heading text-sm font-bold leading-5 text-primary">{title}</h3><p className="mt-1 text-sm leading-5 text-muted-foreground sm:text-[13px]">{copy}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
