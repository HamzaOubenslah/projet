import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NightSection from "@/components/NightSection";
import ControlSection from "@/components/ControlSection";
import StepsSection from "@/components/StepsSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0f0a] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NightSection />
      <ControlSection />
      <StepsSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}