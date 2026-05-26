import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import fadawkasImg from '../assets/Fadawkas.jpeg';
import { WordReveal } from './motion/WordReveal';
import { NumberTicker } from './motion/NumberTicker';
import { MagneticButton } from './motion/MagneticButton';

const stats = [
  { target: 10, decimals: 0, suffix: '+', label: 'Projects Delivered' },
  { target: 3, decimals: 0, suffix: '', label: 'Certifications' },
  { target: 1, decimals: 0, suffix: '', label: 'Years Experience' },
  { target: 3.87, decimals: 2, suffix: '', label: 'GPA' },
];

export function Hero() {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, -80]);

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start xl:items-center pt-24 xl:pt-16"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_auto_minmax(180px,0.55fr)] gap-8 xl:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 order-2 md:order-1"
          >
            {/* Greeting */}
            <p className="text-base text-gray-600 dark:text-gray-400">
              Hey, I'm Fadawkas,
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-notion-black dark:text-white">
              <WordReveal
                text="An"
                as="span"
                className="block"
                delay={0.1}
              />
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ display: 'inline-block' }}
                  className="italic font-serif"
                >
                  AI Engineer
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ display: 'inline-block' }}
                  className="text-gray-400"
                >
                  & Full-Stack
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, delay: 0.44, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ display: 'inline-block' }}
                >
                  DEVELOPER
                </motion.span>
              </span>
            </h1>

            {/* Bio */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Fresh graduate in Informatics with a strong focus on building scalable web applications, designing backend services, and integrating Large Language Models into practical, production-ready workflows.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Tangerang Selatan, Indonesia</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <MagneticButton>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleScrollToProjects}
                  className="inline-flex items-center gap-2 px-6 py-3
                             bg-notion-black hover:bg-gray-800
                             text-white
                             font-semibold rounded-full
                             transition-all duration-200"
                >
                  View Projects
                  <ArrowDown className="w-4 h-4" />
                </motion.button>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href="/Fadawkas_CV.pdf"
                  download
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3
                             bg-white dark:bg-transparent
                             text-notion-black dark:text-white
                             font-semibold rounded-full
                             border border-gray-200 dark:border-white/20
                             hover:bg-gray-50 dark:hover:bg-white/5
                             transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Center Column - Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center order-1 md:order-2"
          >
            <motion.div className="relative" style={{ y: photoY }}>
              {/* Outer rotating ring */}
              <div className="absolute -inset-8 rotating-border-ring" />

              {/* Inner rotating border with photo */}
              <div className="relative rotating-border">
                {/* Circular Photo Frame */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
                  <img
                    src={fadawkasImg}
                    alt="Muhammad Fadawkas Oemarki"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="order-3 md:col-span-2 xl:col-span-1 w-full grid grid-cols-2 sm:grid-cols-4 xl:flex xl:flex-col gap-6 xl:gap-8 justify-items-center xl:items-end text-center xl:text-right"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="min-w-[90px]"
              >
                <div className="text-4xl sm:text-5xl font-bold text-notion-black dark:text-white">
                  <NumberTicker target={stat.target} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-gray-200 dark:border-white/10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-notion-black dark:text-white uppercase tracking-wide mb-2">
                AI-Powered Systems
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Building intelligent automation with LLMs, RAG pipelines, and AI agents for real-world applications.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-notion-black dark:text-white uppercase tracking-wide mb-2">
                Full-Stack Development
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                End-to-end web applications using React, FastAPI, and modern database systems.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-notion-black dark:text-white uppercase tracking-wide mb-2">
                Production-Ready Infrastructure
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Docker containerization, staging environments, and scalable cloud deployments.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-notion-black dark:text-white uppercase tracking-wide mb-2">
                Research & Innovation
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Best Presenter & Best Paper at SENAMIKA 2024. Published research on ML applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
