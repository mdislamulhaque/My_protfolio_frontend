import { useState, useRef, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { developerProfile } from '../data';
import emailjs from '@emailjs/browser';

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
  const formRef = useRef<HTMLFormElement>(null);

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

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   setStatus('submitting');
    
  //   // Simulate premium API dispatch
  //   setTimeout(() => {
  //     setStatus('success');
  //     setForm({ name: '', email: '', subject: '', message: '' });
  //   }, 2000);
  // };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  if (!formRef.current) return;

  setStatus('submitting');

  try {
    const response = await emailjs.sendForm(
      'service_liid3ps',
      'template_fd75jwb',
      formRef.current,
      {
        publicKey: 'qviJSmE7qLyGBdtCH',
      }
    );

    console.log('EmailJS Success:', response);

    if (response.status === 200) {
      setStatus('success');

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setErrors({});
    } else {
      setStatus('error');
    }

  } catch (error) {
    console.error('EmailJS Error:', error);
    setStatus('error');
  }
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
    {/* =========================
        SUCCESS STATE
    ========================== */}
    {status === 'success' ? (
      <div className="text-center py-12 space-y-5">

        {/* Success Icon */}
        <div className="p-4 bg-emerald-500/10 text-emerald-500 w-fit mx-auto border border-emerald-500/20 rounded-full">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        {/* Success Title */}
        <div>
          <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
            Message Sent Successfully!
          </h3>

          <p className="mt-3 font-sans text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto font-light leading-relaxed">
            Thank you for reaching out. Your message has been successfully
            sent to {developerProfile.name}. I will review your message and
            get back to you as soon as possible.
          </p>
        </div>

        {/* Send Another Message */}
        <button
          id="contact-reset-btn"
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-none font-sans font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>

    ) : status === 'error' ? (

      /* =========================
          ERROR STATE
      ========================== */
      <div className="text-center py-12 space-y-5">

        {/* Error Icon */}
        <div className="p-4 bg-rose-500/10 text-rose-500 w-fit mx-auto border border-rose-500/20 rounded-full">
          <AlertCircle className="w-12 h-12" />
        </div>

        {/* Error Title */}
        <div>
          <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
            Message Could Not Be Sent
          </h3>

          <p className="mt-3 font-sans text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto font-light leading-relaxed">
            Something went wrong while sending your message. Please try again
            or contact me directly using my email address.
          </p>
        </div>

        {/* Error Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">

          {/* Try Again */}
          <button
            id="contact-retry-btn"
            type="button"
            onClick={() => setStatus('idle')}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-none font-sans font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
          >
            Try Again
          </button>

          {/* Direct Email */}
          <a
            id="contact-direct-email-btn"
            href={`mailto:${developerProfile.email}`}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white rounded-none font-sans font-bold text-xs uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-center"
          >
            Email Directly
          </a>
        </div>
      </div>

    ) : (

      /* =========================
          CONTACT FORM
      ========================== */
      <form
        ref={formRef}
        id="contact-form"
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* =========================
            NAME + EMAIL
        ========================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest"
            >
              Your Name
            </label>

            <input
              type="text"
              id="contact-name"
              name="name"
              value={form.name}
              onChange={(e) =>
                handleInputChange('name', e.target.value)
              }
              placeholder="John Doe"
              disabled={status === 'submitting'}
              className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
                errors.name
                  ? 'border-rose-500 focus:ring-rose-500/20'
                  : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
              } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
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
            <label
              htmlFor="contact-email"
              className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest"
            >
              Your Email
            </label>

            <input
              type="email"
              id="contact-email"
              name="email"
              value={form.email}
              onChange={(e) =>
                handleInputChange('email', e.target.value)
              }
              placeholder="john@example.com"
              disabled={status === 'submitting'}
              className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
                errors.email
                  ? 'border-rose-500 focus:ring-rose-500/20'
                  : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
              } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
            />

            {errors.email && (
              <span className="flex items-center gap-1 text-xs text-rose-500 font-sans mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* =========================
            SUBJECT
        ========================== */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-subject"
            className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest"
          >
            Subject
          </label>

          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={(e) =>
              handleInputChange('subject', e.target.value)
            }
            placeholder="Project Cooperation"
            disabled={status === 'submitting'}
            className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
              errors.subject
                ? 'border-rose-500 focus:ring-rose-500/20'
                : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
            } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
          />

          {errors.subject && (
            <span className="flex items-center gap-1 text-xs text-rose-500 font-sans mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.subject}
            </span>
          )}
        </div>

        {/* =========================
            MESSAGE
        ========================== */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-message"
            className="font-mono text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest"
          >
            Your Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(e) =>
              handleInputChange('message', e.target.value)
            }
            placeholder="Tell me about your project, timing, scope, and objectives..."
            disabled={status === 'submitting'}
            className={`w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-black/40 border ${
              errors.message
                ? 'border-rose-500 focus:ring-rose-500/20'
                : 'border-gray-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-indigo-600/10 dark:focus:ring-indigo-400/10'
            } text-gray-900 dark:text-white font-sans text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-4 transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed`}
          />

          {errors.message && (
            <span className="flex items-center gap-1 text-xs text-rose-500 font-sans mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.message}
            </span>
          )}
        </div>

        {/* =========================
            SUBMIT BUTTON
        ========================== */}
        <button
          type="submit"
          id="contact-submit-btn"
          disabled={status === 'submitting'}
          className="group w-full flex items-center justify-center gap-2.5 px-7 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white rounded-none font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
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

        {/* =========================
            SENDING INFO
        ========================== */}
        {status === 'submitting' && (
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-500" />
            <span>
              Please wait while your message is being sent...
            </span>
          </div>
        )}

      </form>
    )}
  </motion.div>
</div>




        </div>
      </div>
    </section>
  );
}
