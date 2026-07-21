import { useRef } from 'react';
import * as Icons from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { servicesData } from '../data';

export default function Services() {
  const scrollRef = useRef(null);
  const isSectionInView = useInView(scrollRef, { once: true, margin: '-100px' });

  // Dynamic Lucide icon resolver
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0" />;
  };

  return (
    <section
      id="services"
      ref={scrollRef}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      {/* Decorative gradient blur lights */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-indigo-950/10 dark:bg-indigo-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-blue-950/5 dark:bg-blue-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <Icons.Briefcase className="w-3.5 h-3.5" />
            04 // CORE CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tighter uppercase text-gradient"
          >
            Digital <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">Distinction &</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 dark:text-gray-400 font-sans text-xs uppercase tracking-wider mt-3 max-w-lg mx-auto leading-relaxed"
          >
            Providing high-quality frontend engineering, responsive interfaces, and optimized client-side interactions to drive growth.
          </motion.p>
          <div className="w-16 h-px bg-indigo-500/25 mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="glass-card group relative p-8 rounded-none transition-all duration-300 hover:border-indigo-500/25 dark:hover:border-indigo-500/25 hover:-translate-y-1.5 flex flex-col justify-between border-white/10 dark:border-white/5"
            >
              <div className="space-y-4">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
                {/* Icon Box */}
                <div className="p-2.5 rounded-none bg-indigo-500/5 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 w-fit">
                  {getIcon(service.icon)}
                </div>

                {/* Service Heading */}
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Sub features list */}
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-white/5 space-y-2">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-indigo-500" />
                    <span className="font-sans text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Corner Ambient Decoration Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-none blur-lg transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
