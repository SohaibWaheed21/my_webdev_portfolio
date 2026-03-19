import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="site-shell min-h-screen text-foreground">
      <ParticleBackground />
      <div className="site-content relative z-10 min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
