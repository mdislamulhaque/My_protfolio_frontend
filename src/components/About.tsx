import { useEffect, useState, useRef } from 'react';
import { User, Award, Briefcase, Smile, Sparkles, BookOpen, Target } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { developerProfile } from '../data';

// Custom Self-Contained Number Rolling Component
const AnimatedNumber = ({ value, duration = 1.5 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function About() {
  const scrollRef = useRef(null);
  const isSectionInView = useInView(scrollRef, { once: true, margin: '-100px' });

  const stats = [
    {
      id: "stat-exp",
      label: "Years of Experience",
      value: developerProfile.yearsOfExperience,
      suffix: "+",
      icon: Award,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10",
      border: "hover:border-indigo-500/30"
    },
    {
      id: "stat-proj",
      label: "Projects Completed",
      value: developerProfile.projectsCompleted,
      suffix: "+",
      icon: Briefcase,
      color: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
      border: "hover:border-violet-500/30"
    },
    {
      id: "stat-clients",
      label: "Happy Global Clients",
      value: developerProfile.happyClients,
      suffix: "+",
      icon: Smile,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
      border: "hover:border-emerald-500/30"
    },
    {
      id: "stat-techs",
      label: "Technologies Mastered",
      value: developerProfile.technologiesCount,
      suffix: "+",
      icon: Sparkles,
      color: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
      border: "hover:border-amber-500/30"
    }
  ];

  return (
    <section
      id="about"
      ref={scrollRef}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      {/* Decorative gradient radial blend */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-950/10 dark:bg-indigo-950/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <User className="w-3.5 h-3.5" />
            02 // ABOUT ME
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tighter uppercase text-gradient"
          >
            Philosophy <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">&</span> Architecture
          </motion.h2>
          <div className="w-16 h-px bg-indigo-500/25 mx-auto mt-6" />
        </div>

        {/* Dual Panel Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography & Journey Left Panel */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-gray-600 dark:text-gray-300 font-sans"
            >
              <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                The Story So Far
              </h3>
              <p className="leading-relaxed text-base">
                {developerProfile.bio}
              </p>
              <p className="leading-relaxed text-base">
                {developerProfile.journey}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/60 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-gray-900 dark:text-white text-base">
                  Problem Solving First
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  I believe code is simply the vehicle to solve issues. My focus is on producing lightweight, lightning-fast solutions that resolve organizational pain points and scale flawlessly over time.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Metrics Right Panel */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  id={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  className="glass-card rounded-none p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group border-white/10 dark:border-white/5"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-indigo-500/5 text-indigo-500 dark:text-indigo-400 border border-indigo-500/10 transition-all duration-300 group-hover:scale-105">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white flex items-baseline gap-0.5 text-gradient">
                      <AnimatedNumber value={stat.value} />
                      <span className="text-indigo-500 dark:text-indigo-400 font-sans font-light">{stat.suffix}</span>
                    </div>
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
