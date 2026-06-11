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
        <HeroJobsCarousel />
        </Reveal>

      <Reveal>
        <ValueSection />
        </Reveal>

      <Reveal>
        <InsightsSection />
        
        </Reveal>

      <HomeCTA />

      <Footer />

    </main>
    

  );
}