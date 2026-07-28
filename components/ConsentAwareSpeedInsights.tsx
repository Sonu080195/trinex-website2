"use client";

import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE_KEY = "rudron-cookie-consent";
const CONSENT_VERSION = "1.0";
const CONSENT_EVENT = "rudron-cookie-consent-updated";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  version: string;
  updatedAt: string;
};

function hasAnalyticsConsent(): boolean {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return false;
    }

    const preferences = JSON.parse(storedValue) as Partial<CookiePreferences>;

    return (
  preferences.analytics === true &&
  preferences.version === CONSENT_VERSION
);
  } catch {
    return false;
  }
}

export default function ConsentAwareSpeedInsights() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  useEffect(() => {
    setAnalyticsAllowed(hasAnalyticsConsent());
    setConsentChecked(true);

    function handleConsentUpdate(event: Event) {
      const customEvent = event as CustomEvent<CookiePreferences>;

      setAnalyticsAllowed(customEvent.detail?.analytics === true);
    }

    window.addEventListener(CONSENT_EVENT, handleConsentUpdate);

    return () => {
      window.removeEventListener(CONSENT_EVENT, handleConsentUpdate);
    };
  }, []);

  if (!consentChecked || !analyticsAllowed) {
    return null;
  }

  return <SpeedInsights />;
}