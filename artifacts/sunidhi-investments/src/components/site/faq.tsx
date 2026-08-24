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
      answer: `We offer ${services.map((service) => service.title).join(', ')}. Each discussion is shaped around your goals, time horizon, protection needs, and documents available for review.`,
    },
    {
      question: 'Can you help with Mediclaim and health insurance?',
      answer:
        'Yes. We help clients understand health insurance and Mediclaim requirements, coverage considerations, family needs, and suitable protection options.',
    },
    {
      question: 'Do you provide loan assistance?',
      answer:
        'Yes. Loan assistance covers guidance through loan options, documentation, and the application process. Loan approval depends on lender policies and eligibility, so sanction is never guaranteed.',
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
        `You can call or WhatsApp ${contact.phone.display}, email ${contact.email.primary} or ${contact.email.alternative}, or connect on LinkedIn at ${contact.linkedIn.label}.`,
    },
  ];
}

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = getFaqs();

  return (
    <section id="faqs" className="bg-[#fbf8f1]">
      <Container className="grid gap-9 section-space lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
        <div>
          <p className="mb-4 text-kicker font-bold uppercase tracking-[.25em] text-accent">Questions, answered</p>
          <h2 className="font-display text-heading-fluid leading-tight text-primary">A little more <em className="text-accent">clarity.</em></h2>
          <p className="mt-5 max-w-sm text-body-fluid leading-7 text-muted-foreground">Financial decisions feel simpler when you have someone to ask. Here are a few of the questions we hear most.</p>
          <a href={`mailto:${siteConfig.contact.email.primary}`} className="touch-target mt-6 inline-flex items-center gap-2 rounded-md text-sm font-bold text-primary hover:text-accent" data-testid="link-faq-email">Have another question? <ArrowRight size={15} /></a>
        </div>
        <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
          {faqs.map((faq, index) => (
            <div key={faq.question}>
              <button className="flex min-h-[68px] w-full items-center justify-between gap-5 px-4 py-4 text-left sm:px-6" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}>
                <span className="font-heading text-[15px] font-bold leading-5 text-primary sm:text-base">{faq.question}</span>
                <ChevronDown size={19} className={`shrink-0 text-accent transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`faq-content ${openFaq === index ? 'open' : ''}`}><div><p className="px-4 pb-5 pr-8 text-sm leading-6 text-muted-foreground sm:px-6">{faq.answer}</p></div></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
