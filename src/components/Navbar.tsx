import { useRef, useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import type Lenis from 'lenis';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
}

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ theme, toggleTheme, activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (document.activeElement instanceof HTMLElement && document.querySelector('header')?.contains(document.activeElement)) {
      setHidden(false);
      return;
    }
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Close mobile menu on hide
  useEffect(() => {
    if (menuPanelRef.current) menuPanelRef.current.inert = !isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    if (hidden) setIsMenuOpen(false);
  }, [hidden]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (isMenuOpen) menuButtonRef.current?.focus();
    const lenis = (window as unknown as Record<string, unknown>).__lenis as Lenis | undefined;
    if (lenis) {
      lenis.scrollTo(href);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : '0%' }}
      onFocusCapture={() => setHidden(false)}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 
                 bg-white/80 dark:bg-dark-bg/80 
                 backdrop-blur-md border-b 
                 border-gray-200 dark:border-white/10
                 transition-colors duration-300"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">
          <div aria-hidden="true" className="w-9 h-9" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 justify-self-center">
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-notion-black dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-notion-black dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="block h-0.5 mt-0.5 bg-notion-black dark:bg-white rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 justify-self-end">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a
              href="/Fadawkas_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                         bg-gray-900 hover:bg-gray-700
                         text-white
                         rounded-lg
                         transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="p-2 rounded-lg transition-colors duration-200
                         hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
            ref={menuPanelRef}
            id="mobile-navigation"
            initial={false}
            animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            aria-hidden={!isMenuOpen}
            className="md:hidden overflow-hidden bg-white dark:bg-dark-card border-t border-gray-200 dark:border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = link.href === `#${activeSection}`;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-notion-black dark:text-white font-semibold'
                        : 'text-gray-500 dark:text-gray-400 hover:text-notion-black dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 ml-2 rounded-full bg-notion-black dark:bg-white" />
                    )}
                  </a>
                );
              })}
              <a
                href="/Fadawkas_CV.pdf"
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3
                           bg-gray-900 hover:bg-gray-700
                           text-white
                           rounded-lg font-medium
                           transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
    </motion.header>
  );
}
