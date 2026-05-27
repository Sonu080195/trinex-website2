import Hero from "@/components/Hero";
import Specialisations from "@/components/Specialisations";
import ValueSection from "@/components/ValueSection";
import HomeCTA from "@/components/HomeCTA";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";
import HeroJobsCarousel from "@/components/HeroJobsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {

  return (

    <main>

      <Hero />

      <Specialisations />

      <WhyChooseUs />

      <ValueSection />

      <HeroJobsCarousel />

      <InsightsSection />

      <HomeCTA />

      <Footer />

    </main>
    

  );
}