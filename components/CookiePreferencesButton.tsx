"use client";

type CookiePreferencesButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function CookiePreferencesButton({
  className = "",
  children = "Open Cookie Preferences",
}: CookiePreferencesButtonProps) {
  function openPreferences() {
    window.dispatchEvent(
      new Event("open-rudron-cookie-preferences")
    );
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className}
    >
      {children}
    </button>
  );
}