import { useState, useRef } from 'react';
import { Calendar, Briefcase, GraduationCap, CircleDot, Milestone, ArrowRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { experienceData } from '../data';

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'education'>('all');
  const scrollRef = useRef(null);
  const isSectionInView = useInView(scrollRef, { once: true, margin: '-100px' });

  const filteredItems = experienceData.filter(
    (item) => activeFilter === 'all' || item.type === activeFilter
  );

  return (
    <section
      id="experience"
      ref={scrollRef}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-950/10 dark:bg-indigo-950/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <Milestone className="w-3.5 h-3.5" />
            05 // HISTORY & ACADEMICS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tighter uppercase text-gradient"
          >
            Career <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">Timeline &</span> Academia
          </motion.h2>
          <div className="w-16 h-px bg-indigo-500/25 mx-auto mt-6" />
        </div>

        {/* Timeline Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-indigo-500/5 rounded-none border border-indigo-500/10">
            <button
              id="timeline-filter-all"
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-none text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-black dark:bg-white dark:text-black shadow-md border border-white'
                  : 'text-gray-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white hover:bg-white/10'
              }`}
            >
              All Items
            </button>
            <button
              id="timeline-filter-exp"
              onClick={() => setActiveFilter('experience')}
              className={`px-5 py-2.5 rounded-none text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeFilter === 'experience'
                  ? 'bg-white text-black dark:bg-white dark:text-black shadow-md border border-white'
                  : 'text-gray-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white hover:bg-white/10'
              }`}
            >
              Work Experience
            </button>
            <button
              id="timeline-filter-edu"
              onClick={() => setActiveFilter('education')}
              className={`px-5 py-2.5 rounded-none text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeFilter === 'education'
                  ? 'bg-white text-black dark:bg-white dark:text-black shadow-md border border-white'
                  : 'text-gray-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white hover:bg-white/10'
              }`}
            >
              Education & Certs
            </button>
          </div>
        </motion.div>

        {/* Timeline Layout Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 pointer-events-none" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    id={`timeline-item-${item.id}`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className={`relative flex flex-col md:flex-row ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } items-start md:items-center w-full`}
                  >
                    {/* Aligned left/right spacer to balance timeline row */}
                    <div className="hidden md:block w-1/2 px-8" />

                    {/* central glowing checkpoint node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 p-1 bg-white dark:bg-[#080808] border border-gray-200 dark:border-white/10 rounded-none">
                      <div className={`p-1.5 rounded-none ${
                        item.type === 'experience'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-indigo-500 text-white'
                      }`}>
                        {item.type === 'experience' ? (
                          <Briefcase className="w-3.5 h-3.5" />
                        ) : (
                          <GraduationCap className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </div>

                    {/* Timeline Content Card */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="glass-card p-6 rounded-none relative transition-all duration-300 hover:border-indigo-500/20 group border-white/10 dark:border-white/5">
                        
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent"></div>
                        {/* Interactive glow pointer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-none transition-opacity duration-300 pointer-events-none" />

                        {/* Top Metadata row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          {/* Duration Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/5 dark:bg-white/5 text-indigo-700 dark:text-indigo-400 font-mono text-[10px] font-bold uppercase tracking-widest border border-indigo-500/10 dark:border-white/10 rounded-none">
                            <Calendar className="w-3 h-3 text-indigo-500" />
                            {item.duration}
                          </div>

                          {/* Role Type Pill */}
                          <span className={`px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase font-bold rounded-none border ${
                            item.type === 'experience'
                              ? 'bg-indigo-500/5 border-indigo-500/20 text-indigo-500 dark:text-indigo-400'
                              : 'bg-white/5 border-white/10 text-gray-500 dark:text-gray-400'
                          }`}>
                            {item.type}
                          </span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-1 mb-4">
                          <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white leading-snug">
                            {item.role}
                          </h3>
                          <p className="font-sans font-semibold text-sm text-indigo-600 dark:text-indigo-400">
                            {item.company}
                          </p>
                        </div>

                        {/* Description points */}
                        <ul className="space-y-2.5 mb-5">
                          {item.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                              <ArrowRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technology and Skills Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-white/5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="skill-badge text-[10px]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
