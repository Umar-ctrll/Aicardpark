import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import PenaltySection from "@/components/sections/PenaltySection";
import CompetitiveAdvantages from "@/components/sections/CompetitiveAdvantages";
import HowToPay from "@/components/sections/HowToPay";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <HowItWorks />
        <Features />
        <PenaltySection />
        <CompetitiveAdvantages />
        <HowToPay />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
