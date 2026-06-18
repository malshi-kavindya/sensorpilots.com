import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Car, Fuel, Hammer, Zap, Cpu } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function IndustryUseCases() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const useCases = [
    { title: 'Manufacturing Plants', icon: Factory, desc: 'Predictive maintenance across assembly lines, CNC machines, and robotics', color: 'bg-primary-dark-teal/20' },
    { title: 'Automotive Production', icon: Car, desc: 'Real-time quality monitoring on stamping, welding, and painting operations', color: 'bg-industrial-copper/20' },
    { title: 'Energy Facilities', icon: Fuel, desc: 'Turbine and generator health monitoring for power generation', color: 'bg-warm-signal-alert/20' },
    { title: 'Industrial Equipment', icon: Hammer, desc: 'Heavy machinery and construction equipment failure prediction', color: 'bg-primary-dark-teal/20' },
    { title: 'Utilities', icon: Zap, desc: 'Grid infrastructure and transformer monitoring at scale', color: 'bg-industrial-copper/20' },
    { title: 'Smart Factories', icon: Cpu, desc: 'End-to-end Industry 4.0 intelligence and automation', color: 'bg-warm-signal-alert/20' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Industry Use Cases"
          subtitle="Proven intelligence across industrial sectors"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${uc.color} opacity-30`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <uc.icon className="w-6 h-6 text-text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{uc.title}</h3>
                <p className="text-sm text-soft-industrial-gray leading-relaxed">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
