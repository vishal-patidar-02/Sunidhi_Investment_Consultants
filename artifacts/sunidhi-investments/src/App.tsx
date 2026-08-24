import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { MobileActionBar } from '@/components/site/mobile-action-bar';
import { HomePage } from '@/pages/home';
import { PrivacyPolicyPage } from '@/pages/privacy-policy';
import { TermsDisclaimerPage } from '@/pages/terms-disclaimer';
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

function Router() {
  return (
    <ErrorBoundary resetKey={useLocation()[0]}>
      <Switch>
        <Route path="/" component={Shell} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/terms-disclaimer" component={TermsDisclaimerPage} />
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
