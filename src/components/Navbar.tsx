import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, CodeXml } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { developerProfile } from '../data';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur after scrolling 20px
      setScrolled(window.scrollY > 20);

      // Active section detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/75 dark:bg-[#080808]/75 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-gray-800/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          id="logo-btn"
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform duration-300">
            <CodeXml className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display font-bold text-lg leading-none block text-gray-900 dark:text-white">
              {developerProfile.name.split(' ')[0]}
              <span className="text-indigo-600">.</span>
            </span>
            <span className="font-mono text-[10px] tracking-wider text-gray-500 dark:text-gray-400 block -mt-1 uppercase">
              Frontend
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 font-sans font-medium text-sm transition-colors duration-300 rounded-full cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 ${
                activeSection === item.id
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/40 rounded-full -z-10 border border-indigo-100/30 dark:border-indigo-900/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions (Resume & Theme Switcher) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme switcher */}
          <button
            id="theme-toggle-desktop"
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download Resume */}
          <a
            id="resume-btn-desktop"
            href={developerProfile.resumeUrl}
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-indigo-600 dark:bg-white dark:hover:bg-indigo-500 text-white dark:text-gray-900 dark:hover:text-white rounded-full font-sans font-medium text-sm transition-all duration-300 shadow-md hover:shadow-indigo-600/25 dark:hover:shadow-indigo-500/20"
          >
            <span>CV</span>
            <Download className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#080808]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-mobile-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-2.5 text-left font-sans font-medium text-base transition-colors duration-200 rounded-lg px-3 ${
                    activeSection === item.id
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-2 flex flex-col gap-3">
                <a
                  id="resume-btn-mobile"
                  href={developerProfile.resumeUrl}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-sans font-medium text-base transition-colors duration-200"
                >
                  <span>Download Resume</span>
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
