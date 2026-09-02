import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { MobileActionBar } from '@/components/site/mobile-action-bar';
import { HomePage } from '@/pages/home';
import { PrivacyPolicyPage } from '@/pages/privacy-policy';
import { TermsDisclaimerPage } from '@/pages/terms-disclaimer';
import { ServicePage } from '@/pages/service';
import NotFound from '@/pages/not-found';
import {
  Route,
  Router as WouterRouter,
  Switch,
  useLocation,
} from 'wouter';

const queryClient = new QueryClient();

function scrollToContact() {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  window.location.href = '/#contact';
}

function RouteScrollRestoration() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'auto' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.querySelector('main')?.setAttribute('tabindex', '-1');
  }, [location]);

  return null;
}

function Shell() {
  return (
    <div className="sunidhi-app grain bg-background pb-16 sm:pb-0">
      <Header onContactClick={scrollToContact} />
      <main>
        <HomePage onContactClick={scrollToContact} />
      </main>
      <Footer />
      <MobileActionBar onContactClick={scrollToContact} />
    </div>
  );
}

function ServiceShell({ params }: { params: { slug?: string } }) {
  return (
    <div className="sunidhi-app grain bg-background pb-16 sm:pb-0">
      <Header onContactClick={scrollToContact} />
      <main>
        <ServicePage params={params} />
      </main>
      <Footer />
      <MobileActionBar onContactClick={scrollToContact} />
    </div>
  );
}

function Router() {
  return (
    <ErrorBoundary resetKey={useLocation()[0]}>
      <RouteScrollRestoration />
      <Switch>
        <Route path="/" component={Shell} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/terms-disclaimer" component={TermsDisclaimerPage} />
        <Route path="/services/:slug">{(params) => <ServiceShell params={params} />}</Route>
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')} ssrPath={ssrPath}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
