import { Linkedin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function AdvisorProfile() {
  const { business, contact } = siteConfig;

  return (
    <div className="relative">
      <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-accent" />
      <div className="relative overflow-hidden rounded-2xl bg-[#e8e1d3] p-8 sm:p-12">
        <div className="wood-panel absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-[380px] rounded-2xl border border-primary/10 bg-card p-7 shadow-xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-4xl text-accent">S</div>
          <p className="mt-7 text-[11px] font-bold uppercase tracking-[.24em] text-accent">Primary advisor</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-primary">{business.ownerName}</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{business.professionalPositioning}</p>
          <div className="mt-7 grid gap-3 border-t border-border pt-5">
            <a href={contact.phone.href} className="flex items-center gap-3 text-sm font-semibold text-primary hover:text-accent"><Phone size={16} /> {contact.phone.display}</a>
            <a href={contact.linkedIn.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold text-primary hover:text-accent"><Linkedin size={16} /> {contact.linkedIn.label}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
