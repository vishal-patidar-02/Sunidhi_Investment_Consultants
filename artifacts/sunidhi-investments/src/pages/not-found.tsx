import { Link } from 'wouter';
import { DocumentHead } from '@/components/seo/document-head';
import { pageSeo } from '@/config/seo';

export default function NotFound() {
  return (
    <>
      <DocumentHead seo={pageSeo.notFound} />
      <section className="bg-[#fbf8f1] section-space">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-heading-fluid text-primary">Page not found</h1>
          <p className="mt-4 text-body-fluid leading-7 text-muted-foreground">
            The page you requested does not exist. Use the links below to continue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="touch-target rounded-md bg-accent px-5 text-sm font-bold text-primary">Home</Link>
            <Link href="/#services" className="touch-target rounded-md border border-border bg-card px-5 text-sm font-bold text-primary">Services</Link>
            <Link href="/#contact" className="touch-target rounded-md border border-border bg-card px-5 text-sm font-bold text-primary">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
