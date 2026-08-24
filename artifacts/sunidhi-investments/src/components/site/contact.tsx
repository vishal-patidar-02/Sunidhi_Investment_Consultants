import { type FormEvent, useState } from 'react';
import { ArrowRight, Check, Mail, Phone, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { AddressLocation } from './address-location';

export function Contact() {
  const [contactState, setContactState] = useState<'idle' | 'success' | 'error'>('idle');
  const { business, contact, services } = siteConfig;

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    if (!name || !email || !email.includes('@')) {
      setContactState('error');
      return;
    }
    setContactState('success');
    form.reset();
  };

  return (
    <section id="contact" className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28">
      <Container className="grid gap-12 px-0 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-2">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Let us connect</p>
          <h2 className="max-w-lg font-display text-5xl leading-[1.05] sm:text-6xl">Your next chapter starts with a <em className="text-accent">conversation.</em></h2>
          <p className="mt-6 max-w-md text-sm leading-6 text-primary-foreground/65">Tell us a little about where you are headed. {business.ownerName} can help you think through investment, insurance, retirement, education, tax-saving, and loan-related needs.</p>
          <div className="mt-9 grid gap-4">
            <a href={contact.phone.href} className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-phone"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Phone size={15} /></div> {contact.phone.display}</a>
            <a href={`mailto:${contact.email.primary}`} className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-email"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Mail size={15} /></div> {contact.email.primary}</a>
            <a href={`mailto:${contact.email.alternative}`} className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent" data-testid="link-contact-alt-email"><div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20"><Mail size={15} /></div> {contact.email.alternative}</a>
            <AddressLocation dark />
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 text-primary shadow-2xl shadow-black/20 sm:p-8">
          {contactState === 'success' ? (
            <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary"><Check size={28} /></div>
              <h3 className="mt-6 font-display text-3xl">We will be in touch.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Thank you for reaching out. A {business.name} representative will contact you soon.</p>
              <button onClick={() => setContactState('idle')} className="mt-7 text-sm font-bold text-primary underline decoration-accent decoration-2 underline-offset-4" data-testid="button-contact-another">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleContact} noValidate>
              <div className="mb-7 flex items-center justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-accent">Book a consultation</p><h3 className="mt-2 font-display text-3xl text-primary">Plan with purpose.</h3></div><Sparkles className="text-accent" size={25} /></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-bold text-primary">Your name<input name="name" placeholder="e.g. Ananya Sharma" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-name" /></label>
                <label className="text-xs font-bold text-primary">Email address<input name="email" type="email" placeholder="you@example.com" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-email" /></label>
              </div>
              <label className="mt-5 block text-xs font-bold text-primary">How can we help?<select name="interest" defaultValue="" className="input-field mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary" data-testid="select-contact-interest"><option value="" disabled>Select an area of interest</option>{services.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label>
              <label className="mt-5 block text-xs font-bold text-primary">A note for our advisor<textarea name="message" rows={3} placeholder="Tell us what you are planning for..." className="input-field mt-2 w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="textarea-contact-message" /></label>
              {contactState === 'error' && <p className="mt-4 text-xs font-semibold text-red-700" data-testid="status-contact-error">Please share your name and a valid email address.</p>}
              <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-bold text-primary transition-all hover:bg-accent/85" data-testid="button-contact-submit">Request a call <ArrowRight size={16} /></button>
              <p className="mt-4 text-center text-[10px] text-muted-foreground">No pressure. No jargon. Just a useful first conversation.</p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
