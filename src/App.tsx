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
import { Spotlight } from './components/motion/Spotlight';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { MotionConfig } from 'framer-motion';

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(['projects', 'experience', 'skills', 'contact']);

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
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
    </MotionConfig>
  );
}

export default App;
