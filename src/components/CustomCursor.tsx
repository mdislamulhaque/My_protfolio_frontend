import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointers (desktops)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.group') !== null;
      
      setIsHovered(!!isInteractive);
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 50, mass: 0.1 }}
      />
      {/* Outer flowing reactive circle ring */}
      <motion.div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-7 h-7 border border-indigo-600/30 dark:border-indigo-400/40 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0)',
          borderColor: isHovered ? 'rgba(99, 102, 241, 0.8)' : 'rgba(99, 102, 241, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 28 }}
      />
    </>
  );
}
