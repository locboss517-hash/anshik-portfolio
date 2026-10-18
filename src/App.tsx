import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { InterestsSection } from './components/InterestsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-oled dark:bg-oled light:bg-white text-white dark:text-white light:text-charcoal-900 selection:bg-electric selection:text-white transition-colors duration-200">
        {/* Blended Background Image with Radial Glow Gradient */}
        <BackgroundAtmosphere />

        {/* Foreground Content */}
        <div className="relative z-10">
          <Navbar />
          <main id="main-content">
            <Hero />
            <AboutSection />
            <InterestsSection />
            <ProjectsSection />
            <JourneySection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
