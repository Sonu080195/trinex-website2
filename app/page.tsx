import type { Metadata } from "next";

import Hero from "@/components/Hero";
import HomeMarquee from "@/components/HomeMarquee";
import Specialisations from "@/components/Specialisations";
import ValueSection from "@/components/ValueSection";
import HomeCTA from "@/components/HomeCTA";
import InsightsSection from "@/components/InsightsSection";
import HeroJobsCarousel from "@/components/HeroJobsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reveal from "@/components/Reveal";
import HomeSEOSection from "@/components/HomeSEOSection";
import RecruitmentSpecialtiesSection from "@/components/RecruitmentSpecialtiesSection";

const SITE_URL = "https://www.rudrongts.com";

export const metadata: Metadata = {
  title: "AEC, Construction & MEP Recruiters",

  description:
    "RUDRON connects construction, engineering, architecture and MEP employers with pre-vetted professionals across the USA, Canada, UAE and India.",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "RUDRON Global Talent Solutions",
    title:
      "AEC, Construction & MEP Recruiters | RUDRON Global Talent Solutions",
    description:
      "Specialist recruitment services connecting construction, engineering, architecture and MEP employers with high-performing professionals.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "RUDRON Global Talent Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AEC, Construction & MEP Recruiters | RUDRON Global Talent Solutions",
    description:
      "Specialist recruitment services for construction, engineering, architecture and MEP organizations.",
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      <HomeMarquee />

      <Reveal>
        <Specialisations />
      </Reveal>

      <Reveal>
        <WhyChooseUs />
      </Reveal>

      <Reveal>
        <RecruitmentSpecialtiesSection />
      </Reveal>

      <Reveal>
        <HeroJobsCarousel />
      </Reveal>

      <Reveal>
        <ValueSection />
      </Reveal>

      <Reveal>
        <InsightsSection />
      </Reveal>

      <Reveal>
        <HomeSEOSection />
      </Reveal>

      <HomeCTA />
    </main>
  );
}