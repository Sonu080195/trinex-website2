"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "rudron-cookie-consent";
const CONSENT_VERSION = "1.0";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  version: string;
  updatedAt: string;
};

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  version: CONSENT_VERSION,
  updatedAt: "",
};

function savePreferences(preferences: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

  window.dispatchEvent(
    new CustomEvent("rudron-cookie-consent-updated", {
      detail: preferences,
    })
  );
}

function readPreferences(): CookiePreferences | null {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return null;
    }

    const parsedValue = JSON.parse(storedValue) as CookiePreferences;

    if (
      parsedValue.version !== CONSENT_VERSION ||
      parsedValue.necessary !== true
    ) {
      return null;
    }

    return parsedValue;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const storedPreferences = readPreferences();

    if (storedPreferences) {
      setPreferences(storedPreferences);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    function openPreferences() {
      previousActiveElement.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      const storedPreferences = readPreferences();

      if (storedPreferences) {
        setPreferences(storedPreferences);
      }

      setShowBanner(false);
      setShowPreferences(true);
    }

    window.addEventListener(
      "open-rudron-cookie-preferences",
      openPreferences
    );

    return () => {
      window.removeEventListener(
        "open-rudron-cookie-preferences",
        openPreferences
      );
    };
  }, []);

  useEffect(() => {
    if (!showPreferences) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      const firstFocusableElement =
        modalRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

      firstFocusableElement?.focus();
    }, 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePreferences();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements =
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPreferences]);

  function buildPreferences(
    analytics: boolean,
    marketing: boolean
  ): CookiePreferences {
    return {
      necessary: true,
      analytics,
      marketing,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    };
  }

  function acceptAll() {
    const acceptedPreferences = buildPreferences(true, true);

    setPreferences(acceptedPreferences);
    savePreferences(acceptedPreferences);
    setShowBanner(false);
    setShowPreferences(false);
  }

  function rejectOptional() {
    const rejectedPreferences = buildPreferences(false, false);

    setPreferences(rejectedPreferences);
    savePreferences(rejectedPreferences);
    setShowBanner(false);
    setShowPreferences(false);
  }

  function saveCustomPreferences() {
    const selectedPreferences = buildPreferences(
      preferences.analytics,
      preferences.marketing
    );

    setPreferences(selectedPreferences);
    savePreferences(selectedPreferences);
    setShowBanner(false);
    setShowPreferences(false);

    window.setTimeout(() => {
      previousActiveElement.current?.focus();
    }, 0);
  }

  function openPreferences() {
    previousActiveElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setShowBanner(false);
    setShowPreferences(true);
  }

  function closePreferences() {
    setShowPreferences(false);

    const storedPreferences = readPreferences();

    if (!storedPreferences) {
      setShowBanner(true);
    }

    window.setTimeout(() => {
      previousActiveElement.current?.focus();
    }, 0);
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[9998] border-t border-[#C89B3C]/30 bg-[#050D18] shadow-[0_-16px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#C89B3C]">
                Your Privacy Choices
              </p>

              <p className="text-sm leading-6 text-gray-300">
                We use necessary technologies to operate and secure this
                website. With your permission, we may also use analytics and
                marketing technologies to understand website performance and
                improve our services.
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Learn more in our{" "}
                <a
                  href="/cookie-policy"
                  className="font-medium text-[#C89B3C] underline decoration-[#C89B3C]/50 underline-offset-4 hover:text-[#E0B65A]"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-md lg:justify-end">
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050D18]"
              >
                Reject Optional
              </button>

              <button
                type="button"
                onClick={openPreferences}
                className="rounded-full border border-[#C89B3C]/50 px-5 py-2.5 text-sm font-semibold text-[#C89B3C] transition-colors duration-200 hover:bg-[#C89B3C]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050D18]"
              >
                Manage Preferences
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#050D18] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D7AA48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050D18]"
              >
                Accept All
              </button>
            </div>
          </div>
        </section>
      )}

      {showPreferences && (
        <div
          className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePreferences();
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            aria-describedby="cookie-preferences-description"
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-white/10 bg-[#07111E] shadow-2xl sm:max-w-2xl sm:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-white/10 bg-[#07111E]/95 px-5 py-5 backdrop-blur-md sm:px-7">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">
                  Privacy Settings
                </p>

                <h2
                  id="cookie-preferences-title"
                  className="text-2xl font-bold text-white"
                >
                  Cookie Preferences
                </h2>
              </div>

              <button
                type="button"
                onClick={closePreferences}
                aria-label="Close cookie preferences"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-gray-400 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="px-5 py-6 sm:px-7">
              <p
                id="cookie-preferences-description"
                className="mb-7 text-sm leading-6 text-gray-400"
              >
                Choose which optional technologies RUDRON may use. Necessary
                technologies remain active because they support security,
                consent storage and essential website functions.
              </p>

              <div className="space-y-4">
                <CookieCategory
                  title="Strictly Necessary"
                  description="Required for essential website operation, security, forms and storage of your privacy choices."
                  enabled
                  locked
                />

                <CookieCategory
                  title="Analytics and Performance"
                  description="Helps us understand website traffic, page performance, errors and how visitors use the website."
                  enabled={preferences.analytics}
                  onChange={(enabled) =>
                    setPreferences((current) => ({
                      ...current,
                      analytics: enabled,
                    }))
                  }
                />

                <CookieCategory
                  title="Marketing and Advertising"
                  description="May be used to measure campaigns, referrals and advertising effectiveness if these services are enabled."
                  enabled={preferences.marketing}
                  onChange={(enabled) =>
                    setPreferences((current) => ({
                      ...current,
                      marketing: enabled,
                    }))
                  }
                />
              </div>

              <div className="mt-6 rounded-2xl border border-[#C89B3C]/20 bg-[#C89B3C]/[0.06] p-5">
                <p className="text-sm leading-6 text-gray-300">
                  You can change these choices at any time through the
                  <strong className="font-semibold text-white">
                    {" "}
                    Cookie Preferences
                  </strong>{" "}
                  option in the website Footer.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-white/10 bg-[#07111E]/95 px-5 py-5 backdrop-blur-md sm:flex-row sm:justify-end sm:px-7">
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              >
                Reject Optional
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full border border-[#C89B3C]/50 px-5 py-2.5 text-sm font-semibold text-[#C89B3C] transition-colors duration-200 hover:bg-[#C89B3C]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              >
                Accept All
              </button>

              <button
                type="button"
                onClick={saveCustomPreferences}
                className="rounded-full bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#050D18] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D7AA48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type CookieCategoryProps = {
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onChange?: (enabled: boolean) => void;
};

function CookieCategory({
  title,
  description,
  enabled,
  locked = false,
  onChange,
}: CookieCategoryProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <div className="flex items-start justify-between gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-white">{title}</h3>

            {locked && (
              <span className="rounded-full bg-[#C89B3C]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C89B3C]">
                Always Active
              </span>
            )}
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {description}
          </p>
        </div>

        <label className="relative mt-1 inline-flex shrink-0 items-center">
          <span className="sr-only">
            {locked ? `${title} is always active` : `Enable ${title}`}
          </span>

          <input
            type="checkbox"
            checked={enabled}
            disabled={locked}
            onChange={(event) => onChange?.(event.target.checked)}
            className="peer sr-only"
          />

          <span
            className={[
              "relative h-7 w-12 rounded-full transition-colors duration-200",
              "after:absolute after:left-1 after:top-1 after:h-5 after:w-5",
              "after:rounded-full after:bg-white after:shadow-sm",
              "after:transition-transform after:duration-200",
              "peer-checked:bg-[#C89B3C]",
              "peer-checked:after:translate-x-5",
              "peer-focus-visible:outline-none peer-focus-visible:ring-2",
              "peer-focus-visible:ring-[#C89B3C] peer-focus-visible:ring-offset-2",
              "peer-focus-visible:ring-offset-[#07111E]",
              locked
                ? "cursor-not-allowed opacity-70"
                : "cursor-pointer bg-gray-600",
            ].join(" ")}
          />
        </label>
      </div>
    </div>
  );
}