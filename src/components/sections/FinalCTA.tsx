import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-teal/20 via-background to-industrial-copper/20" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16, 76, 100, 0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(192, 117, 77, 0.3), transparent 50%)`,
      }} />
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary-dark-teal/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary-dark-teal/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-text-primary leading-tight mb-6">
            Start Predicting Failures
            <br />
            <span className="text-gradient-copper">Before They Happen</span>
          </h2>
          <p className="text-lg text-soft-industrial-gray mb-10 max-w-xl mx-auto">
            Join the industrial leaders who have transformed their maintenance operations with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Book Demo
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#pricing"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
