import { type FormEvent, useState } from 'react';
import { ArrowRight, Check, Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ContactServiceSchema } from '@workspace/api-zod/contact';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { AddressLocation } from './address-location';

type ContactState = 'idle' | 'success' | 'error';

function buildWhatsAppUrl(phoneHref: string, message: string) {
  const phone = phoneHref.replace('https://wa.me/', '').split('?')[0];
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function Contact() {
  const [contactState, setContactState] = useState<ContactState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const { business, contact, services } = siteConfig;
  const selectableServices = services.filter((service) => service.selectable !== false);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const service = ContactServiceSchema.safeParse(String(data.get('interest') || ''));
    const message = String(data.get('message') || '').trim();
    const consent = data.get('consent') === 'on';

    if (!service.success) {
      setContactState('error');
      setErrorMessage('Please select a service of interest.');
      return;
    }

    if (!consent) {
      setContactState('error');
      setErrorMessage('Please acknowledge consent before submitting.');
      return;
    }

    if (!name || !phone || !message) {
      setContactState('error');
      setErrorMessage('Please fill your name, phone number, and message.');
      return;
    }

    const whatsAppMessage = [
      `Hello ${business.ownerName} ji, I would like to book a consultation with ${business.name}.`,
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      `Service: ${service.data}`,
      `Message: ${message}`,
      '',
      'Please guide me for the next step.',
    ].filter(Boolean).join('\n');

    const nextUrl = buildWhatsAppUrl(contact.whatsapp.href, whatsAppMessage);
    setWhatsAppUrl(nextUrl);
    setContactState('success');
    setErrorMessage('');
    window.open(nextUrl, '_blank', 'noopener,noreferrer');
    form.reset();
  };

  return (
    <section id="contact" className="bg-primary px-4 section-space text-primary-foreground sm:px-6">
      <Container className="grid gap-12 px-0 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-2">
        <div>
          <p className="mb-4 text-kicker font-bold uppercase text-accent">Let us connect</p>
          <h2 className="max-w-lg font-display text-heading-fluid leading-[1.05]">Your next chapter starts with a <em className="text-accent">conversation.</em></h2>
          <p className="mt-5 max-w-md text-body-fluid leading-7 text-primary-foreground/68">Tell us a little about where you are headed. {business.ownerName} can help you think through portfolio reviews, wealth goals, insurance protection, mutual funds, retirement, child education, tax-saving, general insurance, and loan-related needs.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a href={contact.phone.href} className="touch-target touch-press flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/7 px-3 text-sm font-semibold text-primary-foreground/86 transition-colors hover:text-accent" data-testid="link-contact-phone"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20"><Phone size={15} /></div> {contact.phone.display}</a>
            <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="touch-target touch-press flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/7 px-3 text-sm font-semibold text-primary-foreground/86 transition-colors hover:text-accent" data-testid="link-contact-whatsapp"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20"><MessageCircle size={15} /></div> WhatsApp {contact.phone.display}</a>
            <a href={`mailto:${contact.email.primary}`} className="touch-target touch-press flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/7 px-3 text-sm font-semibold text-primary-foreground/86 transition-colors hover:text-accent" data-testid="link-contact-email"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20"><Mail size={15} /></div> {contact.email.primary}</a>
            <a href={`mailto:${contact.email.alternative}`} className="touch-target touch-press flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/7 px-3 text-sm font-semibold text-primary-foreground/86 transition-colors hover:text-accent" data-testid="link-contact-alt-email"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20"><Mail size={15} /></div> {contact.email.alternative}</a>
            <AddressLocation className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/7 p-3 text-sm font-semibold sm:col-span-2 lg:col-span-1" dark />
          </div>
        </div>
        <div className="rounded-xl bg-card p-5 text-primary shadow-2xl shadow-black/20 sm:p-8">
          {contactState === 'success' ? (
            <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary"><Check size={28} /></div>
              <h3 className="mt-6 font-display text-3xl">WhatsApp is ready.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Your message opened in WhatsApp. Please tap Send there to complete your consultation request.</p>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="touch-target mt-7 flex items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-primary" data-testid="link-contact-whatsapp-ready">Open WhatsApp again <MessageCircle size={16} /></a>
              <button onClick={() => { setContactState('idle'); setWhatsAppUrl(''); }} className="mt-5 text-sm font-bold text-primary underline decoration-accent decoration-2 underline-offset-4" data-testid="button-contact-another">Create another message</button>
            </div>
          ) : (
            <form onSubmit={handleContact} noValidate>
              <div className="mb-6 flex items-center justify-between"><div><p className="text-kicker font-bold uppercase text-accent">Book a consultation</p><h3 className="mt-2 font-display text-3xl leading-tight text-primary">Plan with purpose.</h3></div><Sparkles className="text-accent" size={25} /></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-primary">Full name<input name="name" placeholder="e.g. Ananya Sharma" required className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-base font-normal text-primary placeholder:text-muted-foreground/70 sm:text-sm" data-testid="input-contact-name" /></label>
                <label className="text-sm font-bold text-primary">Phone number<input name="phone" type="tel" placeholder="+91 98930 91404" required className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-base font-normal text-primary placeholder:text-muted-foreground/70 sm:text-sm" data-testid="input-contact-phone" /></label>
              </div>
              <label className="mt-5 block text-sm font-bold text-primary">Email address <span className="font-normal text-muted-foreground">(optional)</span><input name="email" type="email" placeholder="you@example.com" className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-base font-normal text-primary placeholder:text-muted-foreground/70 sm:text-sm" data-testid="input-contact-email" /></label>
              <label className="mt-5 block text-sm font-bold text-primary">Service of interest<select name="interest" defaultValue="" required className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-base font-normal text-primary sm:text-sm" data-testid="select-contact-interest"><option value="" disabled>Select an area of interest</option>{selectableServices.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}</select></label>
              <label className="mt-5 block text-sm font-bold text-primary">Message<textarea name="message" rows={3} required placeholder="Tell us what you are planning for..." className="input-field mt-2 w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-base font-normal text-primary placeholder:text-muted-foreground/70 sm:text-sm" data-testid="textarea-contact-message" /></label>
              <label className="mt-5 flex items-start gap-3 text-sm font-semibold leading-6 text-primary">
                <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-border accent-primary" data-testid="checkbox-contact-consent" />
                I consent to {business.name} contacting me about this inquiry using the details provided.
              </label>
              {contactState === 'error' && <p className="mt-4 text-sm font-semibold text-red-700" data-testid="status-contact-error">{errorMessage}</p>}
              <button type="submit" className="touch-target mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-primary transition-all hover:bg-accent/85" data-testid="button-contact-submit">Continue on WhatsApp <ArrowRight size={16} /></button>
              <p className="mt-4 text-center text-sm text-muted-foreground">WhatsApp opens with your message. Tap Send there to complete.</p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
