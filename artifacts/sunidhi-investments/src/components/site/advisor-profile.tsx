import { useState } from 'react';
import { ChevronDown, GraduationCap, Linkedin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PortraitPicture } from './portrait-picture';

export function AdvisorProfile() {
  const [educationOpen, setEducationOpen] = useState(false);
  const { business, contact } = siteConfig;
  const advisor = business.advisorProfile;

  return (
    <div className="relative">
      <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-accent sm:-left-5 sm:-top-5" />
      <div className="portrait-mask relative overflow-hidden rounded-xl border border-border p-3 shadow-xl shadow-primary/8 sm:p-4">
        <div className="relative aspect-[4/4.7] overflow-hidden rounded-lg bg-secondary">
          <PortraitPicture className="portrait-image h-full w-full" />
        </div>
        <div className="relative -mt-8 mx-3 rounded-lg border border-border bg-card p-5 shadow-lg sm:mx-5 sm:p-6">
          <p className="text-kicker font-bold uppercase text-accent">Founder and advisor</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-primary">{advisor.name}</h2>
          <div className="mt-3 space-y-1 text-sm leading-6 text-muted-foreground">
            {advisor.roles.map((role) => <p key={role}>{role}</p>)}
            <p className="font-semibold text-primary">{advisor.profileStatement}</p>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-background/70">
            <button
              type="button"
              onClick={() => setEducationOpen((open) => !open)}
              className="touch-target flex w-full items-center justify-between gap-3 rounded-lg px-4 text-left text-sm font-bold text-primary transition-colors hover:bg-secondary/60"
              aria-expanded={educationOpen}
              aria-controls="advisor-education"
            >
              <span className="flex items-center gap-2">
                <GraduationCap size={16} className="text-accent" />
                Education
              </span>
              <ChevronDown size={17} className={`text-accent transition-transform ${educationOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <div id="advisor-education" className={`faq-content ${educationOpen ? 'open' : ''}`}>
              <div>
                <div className="space-y-2 px-4 pb-4 pt-1 text-sm leading-6 text-muted-foreground">
                  {advisor.qualifications.map((qualification) => (
                    <p key={qualification}>{qualification}</p>
                  ))}
                </div>
              </div>
            </div>
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
