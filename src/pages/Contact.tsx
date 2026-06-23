import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, Headphones, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <MessageSquare className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Get in Touch</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Start Your
            <br />
            <span className="text-gradient-teal">Intelligence Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto leading-relaxed">
            Book a demo, request a custom quote, or reach out for support. Our team is ready to help you transform your industrial operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formType, setFormType] = useState<'demo' | 'sales' | 'support'>('demo');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                    <button key={type} onClick={() => { setFormType(type); setSubmitted(false); }}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${formType === type ? 'bg-primary-dark-teal text-text-primary' : 'text-soft-industrial-gray hover:text-text-primary'}`}>
                      {type === 'demo' ? 'Book Demo' : type === 'sales' ? 'Sales Inquiry' : 'Support'}
                    </button>
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-primary-dark-teal mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-sm text-soft-industrial-gray">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">First Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Company</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Message</label>
                    <textarea rows={4} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all">
                    <Send className="w-4 h-4" />
                    Send Message
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

function SupportChannels() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const channels = [
    { icon: Headphones, title: 'Technical Support', desc: '24/7 support for enterprise customers. Standard support via email and chat.', cta: 'Open Ticket', color: 'bg-primary-dark-teal/20' },
    { icon: Globe, title: 'Developer Portal', desc: 'API documentation, SDKs, code samples, and community forums for developers.', cta: 'Visit Portal', color: 'bg-industrial-copper/20' },
    { icon: MessageSquare, title: 'Community', desc: 'Join the SensorPilots community for discussions, best practices, and events.', cta: 'Join Community', color: 'bg-warm-signal-alert/20' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Support Channels" subtitle="Multiple ways to get help and connect" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch, i) => (
            <motion.div key={ch.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all text-center">
              <div className={`w-12 h-12 rounded-lg ${ch.color} flex items-center justify-center mx-auto mb-4`}>
                <ch.icon className="w-6 h-6 text-text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{ch.title}</h3>
              <p className="text-sm text-soft-industrial-gray mb-4 leading-relaxed">{ch.desc}</p>
              <button className="text-sm font-medium text-industrial-copper hover:text-warm-signal-alert transition-colors">
                {ch.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <SupportChannels />
    </div>
  );
}
