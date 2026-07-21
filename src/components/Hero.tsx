import { useRef, useEffect, useState, ReactNode } from 'react';
import { ArrowRight, Mail, Download, Github, Linkedin, Facebook, Twitter, Terminal, ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { developerProfile } from '../data';

// Custom Lucide mapping or inline SVGs for beautiful floating icons
const FloatingIcon = ({ children, className, delay = 0, duration = 6 }: { children: ReactNode, className: string, delay?: number, duration?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
    className={`absolute hidden md:flex items-center justify-center p-3 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate normalized mouse positions (-0.5 to 0.5)
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />

      {/* Interactive Floating Ambient Blobs */}
      <motion.div
        className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-900/10 dark:bg-indigo-900/20 blur-[120px] pointer-events-none"
        animate={{
          x: mousePosition.x * 40,
          y: mousePosition.y * 40,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/5 dark:bg-blue-900/10 blur-[120px] pointer-events-none"
        animate={{
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Intro Left Panel */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Core Headings */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[11px] font-medium tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase"
            >
              Hi, I'm <span className="text-gray-900 dark:text-white font-sans text-sm font-semibold ml-1">{developerProfile.name}</span>
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-gray-900 dark:text-white tracking-tighter leading-[0.9] text-gradient mb-4"
            >
              Crafting Digital <br />
              <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">
                Distinction.
              </span>
            </motion.h1>
          </div>

          {/* Description Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 font-sans text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Frontend Web Developer specialized in building high-performance <span className="text-gray-900 dark:text-white italic font-serif">user interfaces</span> and visually immersive experiences with clean code.
          </motion.p>

          {/* Action Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              id="hero-view-work"
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-indigo-50 font-sans font-bold text-xs tracking-widest uppercase rounded-none transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center border border-white"
            >
              <span>VIEW FEATURED WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              id="hero-contact-me"
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 text-gray-800 dark:text-white rounded-none font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 border border-gray-200 dark:border-white/10 cursor-pointer w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>CONTACT ME</span>
            </button>
          </motion.div>

          {/* Social Links Connect */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-5 pt-6"
          >
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">Connect:</span>
            <div className="flex gap-3">
              <a
                id="social-github-hero"
                href={developerProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-gray-900 shadow-sm hover:scale-105 transition-all duration-200"
                aria-label="GitHub Account"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="social-linkedin-hero"
                href={developerProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-gray-900 shadow-sm hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn Account"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="social-twitter-hero"
                href={developerProfile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-gray-900 shadow-sm hover:scale-105 transition-all duration-200"
                aria-label="Twitter Account"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                id="social-facebook-hero"
                href={developerProfile.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-gray-900 shadow-sm hover:scale-105 transition-all duration-200"
                aria-label="Facebook Account"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Right Panel */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card relative w-[300px] sm:w-[350px] lg:w-[380px] aspect-square rounded-3xl overflow-hidden shadow-2xl"
            style={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
              rotateX: mousePosition.y * -15,
              rotateY: mousePosition.x * 15,
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Ambient Back Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 opacity-10 dark:opacity-20 mix-blend-color-dodge z-0" />

            {/* Generated Abstract Tech Artwork as structural backdrop */}
            <img
              src="/src/assets/images/abstract_tech_banner_1784610177386.jpg"
              alt="Futuristic glowing code lines"
              className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-30 z-0"
              referrerPolicy="no-referrer"
            />

            {/* Dark glass inner border frame */}
            <div className="absolute inset-0 border border-white/10 dark:border-white/5 rounded-3xl z-20 pointer-events-none" />

            {/* Main Profile Portrait Frame */}
            <div className="absolute inset-4 rounded-2xl bg-gray-950/40 backdrop-blur-sm overflow-hidden border border-white/10 dark:border-white/5 flex items-center justify-center z-10 shadow-inner">
              <img
                src="https://i.ibb.co.com/hRfj07x0/Whats-App-Image-2026-04-17-at-3-49-16-PM.jpg"
                alt="Mohammad Abdullah - Frontend Developer & AI Integration Specialist"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Developer Title Tag Floating Inside */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 px-5 py-2.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-xl whitespace-nowrap">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-[10px] text-white tracking-widest uppercase font-semibold">~/src/abdullah-portfolio.ts</span>
            </div>
          </motion.div>

          {/* Floating Technology Micro-badges for Interactive Depth */}
          <FloatingIcon className="top-[10%] left-[-5%] text-indigo-500" delay={0}>
            <span className="font-mono text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span>
              React
            </span>
          </FloatingIcon>

          <FloatingIcon className="bottom-[15%] left-[-8%] text-violet-500" delay={1.5} duration={7}>
            <span className="font-mono text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span>
              Next.js
            </span>
          </FloatingIcon>

          <FloatingIcon className="top-[30%] right-[-10%] text-emerald-500" delay={0.8} duration={5.5}>
            <span className="font-mono text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 inline-block"></span>
              TypeScript
            </span>
          </FloatingIcon>

          <FloatingIcon className="bottom-[35%] right-[-8%] text-amber-500" delay={2.2} duration={6.5}>
            <span className="font-mono text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              Gemini API
            </span>
          </FloatingIcon>
        </div>
      </div>

      {/* Decorative Interactive Background Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <span className="font-mono text-[10px] uppercase text-gray-400 dark:text-gray-500 tracking-widest">Scroll Down</span>
        <motion.button
          id="scroll-down-btn"
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer shadow-sm"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
