import { ArrowRight, Quote } from 'lucide-react';
import { Container } from '@/components/layout';
import { siteConfig, type Testimonial } from '@/config/site';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card flex min-h-[330px] w-[min(84vw,360px)] shrink-0 flex-col rounded-lg border border-border bg-card p-4 shadow-sm sm:min-h-[310px] sm:w-[380px] sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary font-heading text-sm font-bold text-primary">
            {testimonial.logoText}
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-heading text-sm font-bold leading-5 text-primary">{testimonial.organizationName}</h3>
            <p className="mt-0.5 text-xs font-semibold leading-4 text-muted-foreground">{testimonial.serviceTaken}</p>
          </div>
        </div>
        <Quote size={18} className="shrink-0 text-accent" />
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{testimonial.feedback}</p>
      <div className="mt-auto border-t border-border pt-3">
        <p className="text-sm font-bold text-primary">{testimonial.personName}</p>
        {testimonial.role ? <p className="mt-0.5 text-xs font-semibold leading-4 text-muted-foreground">{testimonial.role}</p> : null}
      </div>
    </article>
  );
}

export function Testimonials() {
  const { contact, testimonials } = siteConfig;
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden bg-background py-12 sm:py-14" aria-labelledby="testimonials-heading">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-kicker font-bold uppercase text-accent">Client voices</p>
            <h2 id="testimonials-heading" className="max-w-2xl font-display text-[clamp(1.9rem,1.55rem+1.2vw,3rem)] leading-tight text-primary">
              Feedback from planning conversations.
            </h2>
          </div>
          <a
            href={contact.googleReviews.href}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex w-fit items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent"
            data-testid="link-google-reviews"
          >
            Read more on Google <ArrowRight size={15} />
          </a>
        </div>
      </Container>
      <div className="testimonial-marquee mt-7" aria-label="Client testimonials carousel" tabIndex={0}>
        <div className="testimonial-track">
          {marqueeTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.organizationName}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
