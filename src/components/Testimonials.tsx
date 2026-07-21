import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const scrollRef = useRef(null);
  const isSectionInView = useInView(scrollRef, { once: true, margin: '-100px' });

  // Autoplay handler
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const setSlide = (idx: number) => {
    setAutoplay(false);
    setCurrentIndex(idx);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      ref={scrollRef}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      {/* Decorative Blur Backing */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-950/10 dark:bg-indigo-950/20 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            07 // RECOMMENDATIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tighter uppercase text-gradient"
          >
            Client <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">Verdicts &</span> Reviews
          </motion.h2>
          <div className="w-16 h-px bg-indigo-500/25 mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card w-full p-8 sm:p-10 rounded-none border-white/10 dark:border-white/5 relative flex flex-col justify-between"
            >
              {/* Giant Decorative Quote Backdrop */}
              <Quote className="absolute top-6 right-8 w-24 h-24 text-indigo-500/5 dark:text-indigo-400/5 rotate-180 shrink-0 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Rating Stars row */}
                <div className="flex gap-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="font-serif text-lg sm:text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed font-light">
                  "{currentTestimonial.content}"
                </p>
              </div>

              {/* Author card row */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-white/5 relative z-10">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-none object-cover border border-indigo-500/25"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-gray-900 dark:text-white text-base">
                    {currentTestimonial.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                    {currentTestimonial.role} &middot; <span className="text-indigo-600 dark:text-indigo-400 font-bold">{currentTestimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dot & Button Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Slider Dots */}
          <div className="flex gap-1.5">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => setSlide(idx)}
                className={`h-1.5 transition-all duration-300 cursor-pointer rounded-none ${
                  currentIndex === idx ? 'w-6 bg-indigo-500' : 'w-2 bg-gray-300 dark:bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Left/Right controls */}
          <div className="flex gap-2">
            <button
              id="testimonial-prev-btn"
              onClick={prevSlide}
              className="p-2.5 rounded-none border border-gray-200 dark:border-white/10 bg-white dark:bg-[#080808] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={nextSlide}
              className="p-2.5 rounded-none border border-gray-200 dark:border-white/10 bg-white dark:bg-[#080808] hover:bg-gray-50 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
