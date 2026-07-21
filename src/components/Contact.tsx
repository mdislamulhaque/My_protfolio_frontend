import { useState, useRef, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { developerProfile } from '../data';

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormFields>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const scrollRef = useRef(null);
  const isSectionInView = useInView(scrollRef, { once: true, margin: '-100px' });

  const validateForm = () => {
    const newErrors: Partial<FormFields> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!form.message.trim()) newErrors.message = 'Please write a message';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate premium API dispatch
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (field: keyof FormFields, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section
      id="contact"
      ref={scrollRef}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      {/* Dynamic Background Grid and glowing elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-950/10 dark:bg-indigo-950/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-700 dark:text-indigo-400 font-sans text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            08 // CONNECT WITH ME
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tighter uppercase text-gradient"
          >
            Initiate <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">Collaboration &</span> Dialogue
          </motion.h2>
          <div className="w-16 h-px bg-indigo-500/25 mx-auto mt-6" />
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Left Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm font-light">
                Have an exciting project proposal or simply want to chat? Reach out! I respond within 24 business hours.
              </p>
            </div>

            {/* List links */}
            <div className="space-y-4">
              {/* Email */}
              <div className="glass-card flex items-center gap-4 p-4 rounded-none border-white/10 dark:border-white/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="p-3 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 block mb-0.5">Email Address</span>
                  <a
                    id="contact-email-link"
                    href={`mailto:${developerProfile.email}`}
                    className="font-sans font-semibold text-sm text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {developerProfile.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card flex items-center gap-4 p-4 rounded-none border-white/10 dark:border-white/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="p-3 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 block mb-0.5">Phone Number</span>
                  <a
                    id="contact-phone-link"
                    href={`tel:${developerProfile.phone}`}
                    className="font-sans font-semibold text-sm text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {developerProfile.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card flex items-center gap-4 p-4 rounded-none border-white/10 dark:border-white/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="p-3 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 block mb-0.5">Current Location</span>
                  <span className="font-sans font-semibold text-sm text-gray-900 dark:text-white">
                    {developerProfile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Abstract geographical vector coverage map visual */}
            <div className="glass-card relative p-6 rounded-none border-white/10 dark:border-white/5 aspect-[4/3] w-full overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full opacity-10 dark:opacity-5 text-gray-950 dark:text-white absolute animate-pulse" viewBox="0 0 1000 600" fill="none">
                <path d="M150 150 C 250 100, 400 250, 500 350 C 600 450, 750 200, 850 150 M300 450 C 400 350, 550 450, 700 350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                <circle cx="500" cy="350" r="8" fill="currentColor" />
                <circle cx="500" cy="350" r="22" stroke="currentColor" strokeWidth="1" className="animate-ping" />
              </svg>
              <div className="text-center relative z-10 space-y-1">
                <Sparkles className="w-5 h-5 text-indigo-500 mx-auto" />
                <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-widest">Worldwide Coverage</h4>
                <p className="font-sans text-[11px] text-gray-400 dark:text-gray-500 font-light max-w-xs mx-auto leading-relaxed">Working seamlessly across global timezones.</p>
              </div>
            </div>
          </div>

          {/* Contact Form Right Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 sm:p-10 rounded-none border-white/10 dark:border-white/5 shadow-sm"
            >
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4">
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 w-fit mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Message Sent!</h3>
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto font-light">
                    Thank you for reaching out. {developerProfile.name} has received your message and will get back to you shortly.
                  </p>
                  <button
                    id="contact-reset-btn"
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-none font-sans font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={form.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500/20'
                            : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
                        } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all`}
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1 text-xs text-rose-500 font-sans mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={form.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500/20'
                            : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
                        } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all`}
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1 text-xs text-rose-500 font-sans mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={form.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Project Cooperation"
                      className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
                      } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all`}
                    />
                    {errors.subject && (
                      <span className="flex items-center gap-1 text-xs text-rose-500 font-sans mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell me about your project, timing, scope, and objectives..."
                      className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
                      } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all resize-none`}
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1 text-xs text-rose-500 font-sans mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'submitting'}
                    className="group w-full flex items-center justify-center gap-2.5 px-7 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white rounded-none font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
