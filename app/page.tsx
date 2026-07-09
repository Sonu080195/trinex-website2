import Hero from "@/components/Hero";
import HomeMarquee from "@/components/HomeMarquee";
import Specialisations from "@/components/Specialisations";
import ValueSection from "@/components/ValueSection";
import HomeCTA from "@/components/HomeCTA";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";
import HeroJobsCarousel from "@/components/HeroJobsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RUDRON Global Talent Solutions | Construction, Engineering & MEP Recruitment",
  description:
    "Specialist Construction, Engineering, Architecture and MEP recruitment partner serving the USA, Canada, UAE and India.",

  alternates: {
    canonical: "https://www.rudrongts.com",
  },
};

export default function Home() {

  return (

    <main className="relative">

      <Hero />

      <HomeMarquee />

      <Reveal><Specialisations /></Reveal>

      <Reveal><WhyChooseUs /></Reveal>
      
      <Reveal><HeroJobsCarousel /></Reveal>
      
      <Reveal><ValueSection /></Reveal>
      
      <Reveal><InsightsSection /></Reveal>

      <HomeCTA />

      <Footer />

    </main>
    

  );
}