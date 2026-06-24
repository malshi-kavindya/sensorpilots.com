import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Turnstile } from '@marsidev/react-turnstile';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    lines: ['hello@sensorpilots.com', 'support@sensorpilots.com'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+1 (650) 532-8914'],
  },
  {
    icon: MapPin,
    label: 'Offices',
    lines: ['611 Gateway Blvd', 'South San Francisco, CA 94080, USA'],
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: ['Mon — Fri: 9 AM — 6 PM EST', '24/7 Enterprise Support'],
  },
];

const TABS = [
  { id: 'demo', label: 'Book Demo' },
  { id: 'sales', label: 'Sales Inquiry' },
  { id: 'support', label: 'Support' },
] as const;

type Tab = (typeof TABS)[number]['id'];

function FloatingInput({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  errors?: any;
}) {
  return (
    <div className="relative group">
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-[0.18em] font-semibold text-soft-industrial-gray mb-1.5 transition-colors group-focus-within:text-primary-dark-teal"
      >
        {label} {required && <span className="text-primary-dark-teal">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="
          w-full px-0 py-2.5 bg-transparent border-0 border-b border-white/15
          text-text-primary placeholder-white/20 text-sm
          focus:outline-none focus:border-primary-dark-teal
          transition-all duration-300
          [background-image:linear-gradient(to_right,theme(colors.primary-dark-teal/0),theme(colors.primary-dark-teal/0))]
          focus:[background-image:linear-gradient(to_right,theme(colors.primary-dark-teal/10),transparent)]
        "
      />
      {errors && <ValidationError field={name} errors={errors} className="text-red-400 text-xs mt-1" />}
    </div>
  );
}

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formType, setFormType] = useState<Tab>('demo');
  const [cfToken, setCfToken] = useState<string | null>(null);
  const [state, handleSubmit, reset] = useForm('meebqqaz');

  const handleTabChange = (tab: Tab) => {
    setFormType(tab);
    reset();
    setCfToken(null);
  };

  return (
    <section ref={ref} className="relative py-32 bg-deep-machine-shadow/30 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary-dark-teal/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary-dark-teal/5 blur-[100px]" />
      </div>

      {/* Oversized watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <span
          className="text-[clamp(6rem,18vw,16rem)] font-black tracking-tighter leading-none text-white/[0.025] whitespace-nowrap"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          CONTACT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.cf-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;margin-bottom:20px}
.cf-section-tag::before{content:'';display:block;width:28px;height:1px;background:rgba(232,112,64,0.35)}
.cf-title{font-size:34px;font-weight:900;color:#edf2f5;line-height:1.1;letter-spacing:-0.02em;margin-bottom:48px}
        `}</style>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="cf-section-tag">Get in touch</div>
          <h2 className="cf-title">Let's build something<br />remarkable together.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-1"
          >
            <p className="text-soft-industrial-gray text-sm leading-relaxed mb-10">
              Fill out the form and our team will respond within 24 hours.
              For urgent technical issues, use our support portal.
            </p>

            <div className="space-y-0 divide-y divide-white/[0.06]">
              {contactDetails.map(({ icon: Icon, label, lines }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="group flex items-start gap-4 py-5 cursor-default"
                >
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-primary-dark-teal/40 group-hover:bg-primary-dark-teal/10 transition-all duration-300">
                    <Icon className="w-4 h-4 text-primary-dark-teal" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-soft-industrial-gray mb-1">
                      {label}
                    </p>
                    {lines.map((line) => (
                      <p key={line} className="text-sm text-text-primary/80 leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 md:p-10">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-primary-dark-teal/60 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-primary-dark-teal/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-px h-12 bg-gradient-to-t from-primary-dark-teal/60 to-transparent" />
                <div className="absolute bottom-0 left-0 h-px w-12 bg-gradient-to-r from-primary-dark-teal/60 to-transparent" />
              </div>

              {/* Tab switcher */}
              <div className="flex items-center gap-1 mb-10 p-1 rounded-lg bg-white/[0.04] border border-white/[0.06] w-fit">
                {TABS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleTabChange(id)}
                    className={`relative px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 ${
                      formType === id
                        ? 'text-text-primary'
                        : 'text-soft-industrial-gray hover:text-text-primary'
                    }`}
                  >
                    {formType === id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-md bg-primary-dark-teal"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                ))}
              </div>

              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-primary-dark-teal/20 animate-ping" />
                    <div className="relative w-20 h-20 rounded-full bg-primary-dark-teal/15 border border-primary-dark-teal/30 flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9 text-primary-dark-teal" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">Message sent.</h3>
                  <p className="text-sm text-soft-industrial-gray">Our team will reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <input type="hidden" name="form-type" value={formType} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <FloatingInput label="First Name" name="first-name" required placeholder="Enter your first name" errors={state.errors} />
                    <FloatingInput label="Last Name" name="last-name" required placeholder="Enter your last name" errors={state.errors} />
                  </div>

                  <FloatingInput label="Work Email" name="email" type="email" required placeholder="you@company.com" errors={state.errors} />
                  <FloatingInput label="Company" name="company" placeholder="Your company name" />

                  {/* Textarea */}
                  <div className="relative group">
                    <label
                      htmlFor="message"
                      className="block text-[10px] uppercase tracking-[0.18em] font-semibold text-soft-industrial-gray mb-1.5 transition-colors group-focus-within:text-primary-dark-teal"
                    >
                      Message <span className="text-primary-dark-teal">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="
                        w-full px-0 py-2.5 bg-transparent border-0 border-b border-white/15
                        text-text-primary placeholder-white/20 text-sm resize-none
                        focus:outline-none focus:border-primary-dark-teal
                        transition-all duration-300
                      "
                    />
                    <ValidationError field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <input type="hidden" name="cf-turnstile-response" value={cfToken ?? ''} />

                  <div className="flex justify-start">
                    <Turnstile
                      siteKey="0x4AAAAAADo7nFOXDFSNamTm"
                      onSuccess={setCfToken}
                      options={{ theme: 'dark' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting || !cfToken}
                    className="
                      group relative w-full flex items-center justify-center gap-3
                      px-6 py-4 rounded-xl font-semibold text-sm
                      bg-primary-dark-teal hover:bg-primary-dark-teal/85
                      disabled:opacity-40 disabled:cursor-not-allowed
                      text-text-primary transition-all duration-300
                      overflow-hidden
                    "
                  >
                    {/* Shimmer */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="relative">
                      {state.submitting ? 'Sending…' : 'Send Message'}
                    </span>
                    <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
