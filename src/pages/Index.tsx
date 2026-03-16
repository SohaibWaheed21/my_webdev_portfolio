import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
<<<<<<< HEAD
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
=======

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
>>>>>>> e4bb60752072ec142cce04758404c217137c2289
    </div>
  );
};

export default Index;
