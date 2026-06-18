import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Fuel, Car, Hammer, Cpu, Zap } from 'lucide-react';

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const industries = [
    { name: 'Manufacturing', icon: Factory },
    { name: 'Energy', icon: Fuel },
    { name: 'Automotive', icon: Car },
    { name: 'Heavy Industry', icon: Hammer },
    { name: 'Smart Factory', icon: Cpu },
    { name: 'Utilities', icon: Zap },
  ];

  return (
    <section ref={ref} className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-sm text-soft-industrial-gray mb-8 font-mono uppercase tracking-wider"
        >
          Trusted by Industrial Leaders Across Sectors
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              <ind.icon className="w-6 h-6 text-primary-dark-teal" />
              <span className="font-heading font-semibold text-text-primary text-sm">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
