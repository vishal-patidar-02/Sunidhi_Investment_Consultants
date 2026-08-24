import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback': () => void;
          'error-callback': () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  onError: () => void;
};

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

export function TurnstileWidget({ onTokenChange, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const [scriptReady, setScriptReady] = useState(Boolean(window.turnstile));

  useEffect(() => {
    if (!siteKey || window.turnstile) {
      setScriptReady(Boolean(window.turnstile));
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener('load', () => setScriptReady(true), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptReady(true);
    script.onerror = onError;
    document.head.appendChild(script);
  }, [onError]);

  useEffect(() => {
    if (!siteKey || !scriptReady || !window.turnstile || !containerRef.current || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onTokenChange,
      'expired-callback': () => onTokenChange(''),
      'error-callback': onError,
    });
  }, [onError, onTokenChange, scriptReady]);

  if (!siteKey) {
    return (
      <div className="rounded-md border border-amber-300 bg-amber-50 p-3 text-xs leading-5 text-amber-900">
        CAPTCHA is not configured for this frontend. Add VITE_TURNSTILE_SITE_KEY before production.
      </div>
    );
  }

  return <div ref={containerRef} className="min-h-[65px]" data-testid="turnstile-widget" />;
}
