import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Twitter, Mail, Copy, Check, CodeXml } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { developerProfile } from '../data';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white dark:bg-[#080808] border-t border-gray-100 dark:border-white/5 transition-colors duration-300 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Branding Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-none bg-indigo-600 text-white border border-indigo-500/10">
              <CodeXml className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-gray-900 dark:text-white block tracking-tight uppercase">
                {developerProfile.name}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-indigo-500 uppercase block -mt-1">
                Frontend Developer
              </span>
            </div>
          </div>
          <p className="font-sans text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed font-light">
            Architecting premium frontend experiences and interactive web applications using React, Next.js, and modern AI tools.
          </p>
        </div>

        {/* Center Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
            09 // QUICK INDEX
          </h4>
          <ul className="grid grid-cols-2 gap-2.5">
            {['home', 'about', 'skills', 'services', 'experience', 'projects', 'testimonials', 'contact'].map((id) => (
              <li key={id}>
                <button
                  id={`footer-link-${id}`}
                  onClick={() => {
                    const el = document.getElementById(id);
                    if (el) {
                      const offset = 80;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                    }
                  }}
                  className="font-sans text-xs uppercase tracking-wider text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Contact Column with Clipboard Copy */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
            10 // STAY CONNECTED
          </h4>
          
          {/* Email row with micro feedback */}
          <div className="glass-card flex items-center justify-between p-3.5 rounded-none border-white/10 dark:border-white/5 w-full max-w-sm">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
              <span className="font-sans text-xs text-gray-600 dark:text-gray-300 truncate select-all">
                {developerProfile.email}
              </span>
            </div>
            <button
              id="footer-copy-email-btn"
              onClick={handleCopyEmail}
              className="p-1.5 rounded-none border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social connections */}
          <div className="flex gap-2.5">
            <a
              id="social-github-footer"
              href={developerProfile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none border border-gray-200 dark:border-white/10 text-gray-400 hover:text-indigo-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              aria-label="GitHub Link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="social-linkedin-footer"
              href={developerProfile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none border border-gray-200 dark:border-white/10 text-gray-400 hover:text-indigo-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              aria-label="LinkedIn Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="social-twitter-footer"
              href={developerProfile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none border border-gray-200 dark:border-white/10 text-gray-400 hover:text-indigo-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              aria-label="Twitter Link"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              id="social-facebook-footer"
              href={developerProfile.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none border border-gray-200 dark:border-white/10 text-gray-400 hover:text-indigo-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              aria-label="Facebook Link"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-gray-400 dark:text-gray-500 font-light">
          &copy; {currentYear} {developerProfile.name}. All rights reserved.
        </p>
        <p className="font-mono text-[9px] text-gray-400 dark:text-gray-500 tracking-widest uppercase">
          Designed & Developed with Precision
        </p>
      </div>

      {/* Animated Scroll to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-none bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl hover:-translate-y-1 transition-all duration-300 z-50 cursor-pointer border border-white/10"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
