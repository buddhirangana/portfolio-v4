import HeroSection from "@/components/sections/HeroSection";
import HomeSummarySection from "@/components/sections/HomeSummarySection";
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
        <HomeSummarySection />
      </div>
    </div>
  );
}
