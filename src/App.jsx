import React from "react";

// Components
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen text-foreground bg-slate-950  overflow-x-hidden">
      <Navbar />
      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
