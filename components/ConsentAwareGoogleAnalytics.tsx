"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "rudron-cookie-consent";
const GA_MEASUREMENT_ID = "G-DWC37NGW04";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  version: string;
  updatedAt: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: any[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

function readAnalyticsConsent(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return false;
    }

    const preferences = JSON.parse(stored) as CookiePreferences;

    return preferences.analytics === true;
  } catch {
    return false;
  }
}

export default function ConsentAwareGoogleAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enabled = readAnalyticsConsent();

    setAnalyticsEnabled(enabled);
    setReady(true);

    window[`ga-disable-${GA_MEASUREMENT_ID}`] = !enabled;

    function handleConsentUpdate(event: Event) {
      const customEvent = event as CustomEvent<CookiePreferences>;

      const enabled = customEvent.detail?.analytics === true;

      window[`ga-disable-${GA_MEASUREMENT_ID}`] = !enabled;

      setAnalyticsEnabled(enabled);

      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: enabled ? "granted" : "denied",
        });
      }
    }

    window.addEventListener(
      "rudron-cookie-consent-updated",
      handleConsentUpdate
    );

    return () => {
      window.removeEventListener(
        "rudron-cookie-consent-updated",
        handleConsentUpdate
      );
    };
  }, []);

  if (!ready || !analyticsEnabled) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-consent-default"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
        `}
      </Script>

      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}