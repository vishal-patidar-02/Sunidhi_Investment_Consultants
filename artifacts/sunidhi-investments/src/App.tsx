import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { About } from '@/components/site/about';
import { Contact } from '@/components/site/contact';
import { FAQ } from '@/components/site/faq';
import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { MobileActionBar } from '@/components/site/mobile-action-bar';
import { Services } from '@/components/site/services';
import { TrustStrip } from '@/components/site/trust-strip';
import { VisitUs } from '@/components/site/visit-us';
import { StatsStrip, WhyChooseUs } from '@/components/site/why-choose-us';
import NotFound from '@/pages/not-found';
import {
  Route,
  Router as WouterRouter,
  Switch,
  useLocation,
} from 'wouter';

const queryClient = new QueryClient();

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

function Home() {
  return (
    <div className="sunidhi-app grain bg-background pb-16 sm:pb-0">
      <Header onContactClick={scrollToContact} />
      <main>
        <Hero onContactClick={scrollToContact} />
        <TrustStrip />
        <About />
        <Services />
        <WhyChooseUs onContactClick={scrollToContact} />
        <StatsStrip />
        <FAQ />
        <Contact />
        <VisitUs />
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
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
