import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/motion/SmoothScroll';
import { GrainOverlay } from './components/motion/GrainOverlay';
import { Spotlight } from './components/motion/Spotlight';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(['projects', 'experience', 'skills', 'contact']);

  const [showCurtain, setShowCurtain] = useState(() => {
    if (typeof window === 'undefined') return false;
    const seen = sessionStorage.getItem('curtain-seen');
    return !seen;
  });

  useEffect(() => {
    if (showCurtain) {
      sessionStorage.setItem('curtain-seen', '1');
    }
  }, [showCurtain]);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
        <AnimatePresence>
          {showCurtain && (
            <motion.div
              key="curtain"
              className="fixed inset-0 z-[9998] bg-notion-black dark:bg-dark-bg pointer-events-none"
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
              onAnimationComplete={() => setShowCurtain(false)}
            />
          )}
        </AnimatePresence>
        <GrainOverlay />
        <Spotlight />
        <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Achievements />
          <Certifications />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
