import { siteConfig } from '@/config/site';

export function TrustStrip() {
  return (
    <section className="relative z-20 mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-primary/10 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.trustPoints.map(({ title, copy, icon: Icon }, index) => (
          <div key={title} className={`flex items-center gap-3 px-5 py-5 ${index < 3 ? 'border-b sm:border-r lg:border-b-0' : ''} ${index === 1 ? 'sm:border-r-0 lg:border-r' : ''}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><Icon size={19} strokeWidth={1.8} /></div>
            <div><h3 className="font-heading text-xs font-bold text-primary">{title}</h3><p className="mt-1 text-[10px] text-muted-foreground">{copy}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
