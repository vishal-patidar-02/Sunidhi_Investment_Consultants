import { type FormEvent, useState } from 'react';
import { ArrowRight, Check, Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ContactServiceSchema } from '@workspace/api-zod/contact';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { ContactApiError, submitContactInquiry } from '@/lib/contact-api';
import { AddressLocation } from './address-location';
import { TurnstileWidget } from './turnstile-widget';

type ContactState = 'idle' | 'loading' | 'success' | 'error';

const developmentCaptchaToken = 'dev-turnstile-token';

function getErrorMessage(error: unknown) {
  if (!(error instanceof ContactApiError)) {
    return 'Something went wrong. Please try again.';
  }

  if (error.code === 'rate_limited') {
    return 'Too many requests. Please wait a little and try again.';
  }

  if (error.code.startsWith('captcha')) {
    return error.message;
  }

  if (error.code === 'validation_failed') {
    return 'Please check your name, phone number, service, message, and consent.';
  }

  if (error.code === 'network_error') {
    return error.message;
  }

  return 'We could not submit the form right now. Please try again.';
}

export function Contact() {
  const [contactState, setContactState] = useState<ContactState>('idle');
  const [captchaToken, setCaptchaToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inquiryId, setInquiryId] = useState('');
  const { business, contact, services } = siteConfig;

  const handleContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (contactState === 'loading') {
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const service = ContactServiceSchema.safeParse(String(data.get('interest') || ''));
    const message = String(data.get('message') || '').trim();
    const consent = data.get('consent') === 'on';
    const website = String(data.get('website') || '');

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

    if (!captchaToken) {
      setContactState('error');
      setErrorMessage('Please complete the CAPTCHA before submitting.');
      return;
    }

    setContactState('loading');
    setErrorMessage('');

    try {
      const result = await submitContactInquiry({
        name,
        phone,
        email,
        service: service.data,
        message,
        consent: true,
        captchaToken,
        website,
      });
      setInquiryId(result.inquiryId);
      setContactState('success');
      setCaptchaToken('');
      form.reset();
    } catch (error) {
      setContactState('error');
      setErrorMessage(getErrorMessage(error));
    }
  };

  return (
    <section id="contact" className="bg-primary px-4 section-space text-primary-foreground sm:px-6">
      <Container className="grid gap-12 px-0 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:px-2">
        <div>
          <p className="mb-4 text-kicker font-bold uppercase tracking-[.25em] text-accent">Let us connect</p>
          <h2 className="max-w-lg font-display text-heading-fluid leading-[1.05]">Your next chapter starts with a <em className="text-accent">conversation.</em></h2>
          <p className="mt-5 max-w-md text-body-fluid leading-7 text-primary-foreground/68">Tell us a little about where you are headed. {business.ownerName} can help you think through mutual funds, SIPs, portfolio reviews, wealth goals, retirement, tax-saving, Mediclaim, health insurance, and loan-related needs.</p>
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
              <h3 className="mt-6 font-display text-3xl">We will be in touch.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Thank you for reaching out. Your inquiry was accepted by {business.name}. Reference: {inquiryId.slice(0, 8)}</p>
              <button onClick={() => { setContactState('idle'); setInquiryId(''); }} className="mt-7 text-sm font-bold text-primary underline decoration-accent decoration-2 underline-offset-4" data-testid="button-contact-another">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleContact} noValidate>
              <div className="mb-6 flex items-center justify-between"><div><p className="text-kicker font-bold uppercase tracking-[.2em] text-accent">Book a consultation</p><h3 className="mt-2 font-display text-3xl leading-tight text-primary">Plan with purpose.</h3></div><Sparkles className="text-accent" size={25} /></div>
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-bold text-primary">Full name<input name="name" placeholder="e.g. Ananya Sharma" required disabled={contactState === 'loading'} className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-name" /></label>
                <label className="text-xs font-bold text-primary">Phone number<input name="phone" type="tel" placeholder="+91 98930 91404" required disabled={contactState === 'loading'} className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-phone" /></label>
              </div>
              <label className="mt-5 block text-xs font-bold text-primary">Email address <span className="font-normal text-muted-foreground">(optional)</span><input name="email" type="email" placeholder="you@example.com" disabled={contactState === 'loading'} className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="input-contact-email" /></label>
              <label className="mt-5 block text-xs font-bold text-primary">Service of interest<select name="interest" defaultValue="" required disabled={contactState === 'loading'} className="input-field mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm font-normal text-primary" data-testid="select-contact-interest"><option value="" disabled>Select an area of interest</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}</select></label>
              <label className="mt-5 block text-xs font-bold text-primary">Message<textarea name="message" rows={3} required disabled={contactState === 'loading'} placeholder="Tell us what you are planning for..." className="input-field mt-2 w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-sm font-normal text-primary placeholder:text-muted-foreground/70" data-testid="textarea-contact-message" /></label>
              <label className="mt-5 flex items-start gap-3 text-xs font-semibold leading-5 text-primary">
                <input name="consent" type="checkbox" required disabled={contactState === 'loading'} className="mt-1 h-4 w-4 rounded border-border accent-primary" data-testid="checkbox-contact-consent" />
                I consent to {business.name} contacting me about this inquiry using the details provided.
              </label>
              <div className="mt-5">
                <TurnstileWidget onTokenChange={setCaptchaToken} onError={() => { setCaptchaToken(''); setErrorMessage('CAPTCHA could not load. Please retry.'); }} />
                {!import.meta.env.PROD && !import.meta.env.VITE_TURNSTILE_SITE_KEY && (
                  <button type="button" onClick={() => setCaptchaToken(developmentCaptchaToken)} className="mt-2 text-xs font-bold text-primary underline decoration-accent decoration-2 underline-offset-4">
                    Use development CAPTCHA token
                  </button>
                )}
              </div>
              {contactState === 'error' && <p className="mt-4 text-xs font-semibold text-red-700" data-testid="status-contact-error">{errorMessage}</p>}
              <button type="submit" disabled={contactState === 'loading'} className="touch-target mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-primary transition-all hover:bg-accent/85 disabled:cursor-not-allowed disabled:opacity-65" data-testid="button-contact-submit">{contactState === 'loading' ? 'Submitting...' : 'Request a call'} <ArrowRight size={16} /></button>
              <p className="mt-4 text-center text-[10px] text-muted-foreground">No pressure. No jargon. Just a useful first conversation.</p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
