import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function NewsletterCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary-dark-teal/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary-dark-teal/5 blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5">
          <GraduationCap className="w-12 h-12 text-industrial-copper mx-auto mb-6" />
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">Stay Ahead of Industrial AI</h2>
          <p className="text-soft-industrial-gray mb-8 max-w-lg mx-auto">
            Get monthly insights on predictive maintenance, sensor analytics, and industrial AI delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" />
            <button className="w-full sm:w-auto px-6 py-3 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
