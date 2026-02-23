import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <div className="relative">
      {/* Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <NewsSection />
        <ContactSection />
      </div>
    </div>
  );
}
