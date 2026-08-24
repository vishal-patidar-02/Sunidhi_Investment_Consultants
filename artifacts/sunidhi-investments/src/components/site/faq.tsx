import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig } from '@/config/site';

function getFaqs() {
  const { business, contact, services } = siteConfig;

  return [
    {
      question: `How do I get started with ${business.name}?`,
      answer:
        `Begin with a conversation with ${business.ownerName}. We understand your goals, responsibilities, time horizon, and comfort with risk before discussing suitable next steps.`,
    },
    {
      question: `What services does ${business.name} offer?`,
      answer: `We offer ${services.map((service) => service.title).join(', ')}.`,
    },
    {
      question: 'Is my plan personalized?',
      answer:
        'Yes. Recommendations are shaped around your current priorities, protection needs, and future milestones rather than a one-size-fits-all product pitch.',
    },
    {
      question: 'Can I visit the office?',
      answer:
        `${business.name} is based at ${contact.address.full}. Use any address link on this site to open the location in Google Maps.`,
    },
    {
      question: `How can I contact ${business.ownerName}?`,
      answer:
        `You can call or WhatsApp ${contact.phone.display}, email ${contact.email.primary}, or connect on LinkedIn.`,
    },
  ];
}

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = getFaqs();

  return (
    <section id="faqs">
      <Container className="grid gap-14 py-24 lg:grid-cols-[.7fr_1.3fr] lg:py-32">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.25em] text-accent">Questions, answered</p>
          <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">A little more <em className="text-accent">clarity.</em></h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Financial decisions feel simpler when you have someone to ask. Here are a few of the questions we hear most.</p>
          <a href={`mailto:${siteConfig.contact.email.primary}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent" data-testid="link-faq-email">Have another question? <ArrowRight size={15} /></a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="py-5">
              <button className="flex w-full items-center justify-between gap-6 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}>
                <span className="font-heading text-sm font-bold text-primary sm:text-base">{faq.question}</span>
                <ChevronDown size={19} className={`shrink-0 text-accent transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`faq-content ${openFaq === index ? 'open' : ''}`}><div><p className="pt-4 pr-8 text-sm leading-6 text-muted-foreground">{faq.answer}</p></div></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
