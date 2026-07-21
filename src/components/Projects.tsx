import { useState, useRef } from 'react';
import { ExternalLink, Github, FolderGit2, ArrowUpRight, Code, Eye } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'react' | 'nextjs' | 'ai'>('all');
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef(null);
  const isSectionInView = useInView(scrollRef, { once: true, margin: '-100px' });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'react', label: 'React.js' },
    { id: 'nextjs', label: 'Next.js' },
    { id: 'ai', label: 'AI Tools' },
  ];

  // If showAll is false, show only featured. If true, show all.
  // And apply category filter on top
  const initialProjectsList = showAll 
    ? projectsData 
    : projectsData.filter(proj => proj.featured);

  const filteredProjects = initialProjectsList.filter(
    (proj) => selectedCategory === 'all' || proj.category === selectedCategory
  );

  return (
    <section
      id="projects"
      ref={scrollRef}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      {/* Background Decorative Ambient blur shape */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-indigo-950/10 dark:bg-indigo-950/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-950/5 dark:bg-blue-950/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            06 // SELECTED WORK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tighter uppercase text-gradient"
          >
            Engineering <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">Showcases &</span> Crafts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 dark:text-gray-400 font-sans text-xs uppercase tracking-wider mt-3 max-w-lg mx-auto leading-relaxed"
          >
            A curated selection of responsive, robust, and accessible projects representing my technical capabilities.
          </motion.p>
          <div className="w-16 h-px bg-indigo-500/25 mx-auto mt-6" />
        </div>

        {/* Categories Filtering tabs */}
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
                id={`project-tab-${cat.id}`}
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

        {/* Dynamic Project Cards Grid with Framer Motion layout transition */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                id={`project-card-${project.id}`}
                className="glass-card group relative rounded-none transition-all duration-300 flex flex-col justify-between overflow-hidden border-white/10 dark:border-white/5"
              >
                
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Frosted Glass Overlay with action indicators */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a
                      id={`proj-live-${project.id}`}
                      href={project.liveUrl}
                      className="p-3 bg-white hover:bg-indigo-600 text-gray-950 hover:text-white rounded-none shadow-lg hover:scale-110 transition-all duration-200"
                      title="Live Demo"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      id={`proj-git-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white hover:bg-indigo-600 text-gray-950 hover:text-white rounded-none shadow-lg hover:scale-110 transition-all duration-200"
                      title="GitHub Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Category Pill Overlays */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[9px] font-mono tracking-widest uppercase font-bold text-white bg-black/80 backdrop-blur-md rounded-none border border-white/10 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content description container */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2.5">
                    {/* Action header */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>

                    {/* Paragraph */}
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badge strip */}
                  <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-gray-100 dark:border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-badge text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All projects CTA toggler */}
        <div className="flex justify-center mt-16">
          <motion.button
            id="view-all-projects-btn"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 px-8 py-3.5 bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-500 hover:border-indigo-600 hover:text-white dark:hover:text-white rounded-none font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
          >
            <Code className="w-4 h-4" />
            <span>{showAll ? 'Show Featured Only' : 'View All Projects'}</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
