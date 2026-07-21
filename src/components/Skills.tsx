import { useState, useRef } from 'react';
import * as Icons from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'tools' | 'ai'>('all');
  const scrollRef = useRef(null);
  const isSectionInView = useInView(scrollRef, { once: true, margin: '-100px' });

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI Tools' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = skillsData.filter(
    (skill) => selectedCategory === 'all' || skill.category === selectedCategory
  );

  // Dynamic Lucide icon resolver
  const getIcon = (iconName: string) => {
    // Falls back to standard "Code" icon if not found
    const IconComponent = (Icons as any)[iconName] || Icons.Code;
    return <IconComponent className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />;
  };

  return (
    <section
      id="skills"
      ref={scrollRef}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      {/* Decorative ambient blurred shapes */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-950/10 dark:bg-indigo-950/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <Icons.Code2 className="w-3.5 h-3.5" />
            03 // TECHNICAL STACK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tighter uppercase text-gradient"
          >
            Core <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">Stack &</span> Mastery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 dark:text-gray-400 font-sans text-xs uppercase tracking-wider mt-3 max-w-lg mx-auto leading-relaxed"
          >
            Hover over skills to reveal active proficiency metrics and dynamic tools.
          </motion.p>
          <div className="w-16 h-px bg-indigo-500/25 mx-auto mt-6" />
        </div>

        {/* Dynamic Category Filters (Tabs) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-indigo-500/5 rounded-none border border-indigo-500/10 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-none text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black dark:bg-white dark:text-black shadow-md border border-white'
                    : 'text-gray-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Skills Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\./g, '-')}`}
                className="glass-card group relative p-5 rounded-none transition-all duration-300 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:-translate-y-1 flex flex-col justify-between border-white/10 dark:border-white/5"
              >
                {/* Tech icon + Name */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-none bg-indigo-500/5 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 group-hover:bg-indigo-500/10 transition-colors duration-300 shrink-0">
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none block mt-0.5">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Proficiency dynamic metrics with tooltip trigger */}
                <div className="mt-5 space-y-1.5 w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">Proficiency</span>
                    <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold group-hover:scale-105 transition-transform">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-none overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isSectionInView ? { width: `${skill.proficiency}%` } : {}}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                      className="absolute left-0 top-0 h-full bg-indigo-500 dark:bg-white rounded-none"
                    />
                  </div>
                </div>

                {/* Micro-glow hovering background highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-none transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
