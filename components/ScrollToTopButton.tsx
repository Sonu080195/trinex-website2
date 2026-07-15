"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[500] w-12 h-12 rounded-full bg-[#C89B3C] hover:bg-[#d6ab52] text-[#07111F] flex items-center justify-center shadow-[0_8px_24px_rgba(200,155,60,0.35)] transition-all duration-300 hover:scale-110"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.9)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}