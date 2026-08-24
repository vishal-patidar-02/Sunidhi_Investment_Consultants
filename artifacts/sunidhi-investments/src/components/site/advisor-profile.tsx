import { Linkedin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function AdvisorProfile() {
  const { business, contact } = siteConfig;
  const advisor = business.advisorProfile;

  return (
    <div className="relative">
      <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-accent sm:-left-5 sm:-top-5" />
      <div className="portrait-mask relative overflow-hidden rounded-xl border border-border p-3 shadow-xl shadow-primary/8 sm:p-4">
        <div className="relative aspect-[4/4.7] overflow-hidden rounded-lg bg-secondary">
          <img src={advisor.photo} alt={`${advisor.name}, advisor at ${business.name}`} className="portrait-image h-full w-full" loading="lazy" />
        </div>
        <div className="relative -mt-8 mx-3 rounded-lg border border-border bg-card p-5 shadow-lg sm:mx-5 sm:p-6">
          <p className="text-kicker font-bold uppercase tracking-[.22em] text-accent">Founder and advisor</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-primary">{advisor.name}</h2>
          <div className="mt-3 space-y-1 text-sm leading-6 text-muted-foreground">
            {advisor.roles.map((role) => <p key={role}>{role}</p>)}
            <p className="font-semibold text-primary">{advisor.profileStatement}</p>
          </div>
          <div className="mt-5 grid gap-2 border-t border-border pt-4">
            <a href={contact.phone.href} className="touch-target flex items-center gap-3 rounded-md text-sm font-semibold text-primary hover:text-accent"><Phone size={16} /> {contact.phone.display}</a>
            <a href={contact.linkedIn.href} target="_blank" rel="noopener noreferrer" className="touch-target flex items-center gap-3 rounded-md text-sm font-semibold text-primary hover:text-accent"><Linkedin size={16} /> {contact.linkedIn.label}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
