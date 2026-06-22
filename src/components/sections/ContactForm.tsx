import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Turnstile } from '@marsidev/react-turnstile';

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formType, setFormType] = useState<'demo' | 'sales' | 'support'>('demo');
  const [cfToken, setCfToken] = useState<string | null>(null);
  const [state, handleSubmit, reset] = useForm('meebqqaz');

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="mb-8">
              <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">Contact Us</h2>
              <p className="text-soft-industrial-gray leading-relaxed">
                Fill out the form and our team will respond within 24 hours. For urgent technical issues, use our support portal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-dark-teal" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-1">Email</h4>
                  <p className="text-sm text-soft-industrial-gray">hello@sensorpilots.com</p>
                  <p className="text-sm text-soft-industrial-gray">support@sensorpilots.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-dark-teal" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-1">Phone</h4>
                  <p className="text-sm text-soft-industrial-gray">+1 (617) 555-0142</p>
                  <p className="text-sm text-soft-industrial-gray">+49 30 5555 8910</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-dark-teal" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-1">Offices</h4>
                  <p className="text-sm text-soft-industrial-gray">100 Industrial Way, Suite 400</p>
                  <p className="text-sm text-soft-industrial-gray">Boston, MA 02110, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-dark-teal" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-1">Hours</h4>
                  <p className="text-sm text-soft-industrial-gray">Mon — Fri: 9:00 AM — 6:00 PM EST</p>
                  <p className="text-sm text-soft-industrial-gray">24/7 Enterprise Support</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center p-1 rounded-lg bg-white/5 border border-white/10">
                  {(['demo', 'sales', 'support'] as const).map((type) => (
                    <button key={type} onClick={() => { setFormType(type); reset(); setCfToken(null); }}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${formType === type ? 'bg-primary-dark-teal text-text-primary' : 'text-soft-industrial-gray hover:text-text-primary'}`}>
                      {type === 'demo' ? 'Book Demo' : type === 'sales' ? 'Sales Inquiry' : 'Support'}
                    </button>
                  ))}
                </div>
              </div>

              {state.succeeded ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-primary-dark-teal mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-sm text-soft-industrial-gray">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="form-type" value={formType} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">First Name</label>
                      <input type="text" name="first-name" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="John" />
                      <ValidationError field="first-name" errors={state.errors} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">Last Name</label>
                      <input type="text" name="last-name" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="Doe" />
                      <ValidationError field="last-name" errors={state.errors} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Email</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="john@company.com" />
                    <ValidationError field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Company</label>
                    <input type="text" name="company" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="Acme Manufacturing" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Message</label>
                    <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors resize-none" placeholder="Tell us about your project..." />
                    <ValidationError field="message" errors={state.errors} />
                  </div>
                  <input type="hidden" name="cf-turnstile-response" value={cfToken ?? ''} />
                  <div className="flex justify-center">
                    <Turnstile
                      siteKey="0x4AAAAAADo7nFOXDFSNamTm"
                      onSuccess={setCfToken}
                      options={{ theme: 'dark' }}
                    />
                  </div>
                  <button type="submit" disabled={state.submitting || !cfToken} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-dark-teal hover:bg-primary-dark-teal/80 disabled:opacity-50 disabled:cursor-not-allowed text-text-primary font-semibold rounded-lg transition-all">
                    <Send className="w-4 h-4" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
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
