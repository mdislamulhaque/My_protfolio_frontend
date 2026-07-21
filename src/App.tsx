import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check local storage theme preference, default to dark
    const saved = localStorage.getItem('theme-preference');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default theme: Dark Mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme-preference', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme-preference', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#080808] text-gray-900 dark:text-[#F0F0F0] selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      {/* Premium custom mouse follower */}
      <CustomCursor />

      {/* Navigation Layer */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Display Frame */}
      <Hero />

      {/* Main Structural Body */}
      <main id="main-content">
        {/* Biography & Metrics Overview */}
        <About />

        {/* Dynamic skills dashboard */}
        <Skills />

        {/* Services & Core Capabilities */}
        <Services />

        {/* Experience & Academic timeline */}
        <Experience />

        {/* Filterable engineering showcases */}
        <Projects />

        {/* Client Testimonials slider */}
        <Testimonials />

        {/* Verified secure contact gateway */}
        <Contact />
      </main>

      {/* Multi-tier footer */}
      <Footer />
    </div>
  );
}
