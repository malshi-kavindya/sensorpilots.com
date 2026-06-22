import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Wifi, Database, Cpu, Brain, Activity, ArrowDown } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function PlatformOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { label: 'Machines', icon: Factory, color: 'bg-deep-machine-shadow' },
    { label: 'IoT Sensors', icon: Wifi, color: 'bg-primary-dark-teal/40' },
    { label: 'Data Pipeline', icon: Database, color: 'bg-primary-dark-teal/60' },
    { label: 'NVIDIA AI Engine', icon: Cpu, color: 'bg-industrial-copper/60' },
    { label: 'Predictive Models', icon: Brain, color: 'bg-industrial-copper/80' },
    { label: 'Maintenance Intelligence', icon: Activity, color: 'bg-warm-signal-alert/80' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Platform Architecture"
          subtitle="A complete pipeline from raw sensor signals to predictive maintenance intelligence"
          centered
        />

        <div className="relative mt-16">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/15" style={{ outline: '1px solid rgba(255,255,255,0.08)', outlineOffset: '-3px' }}>
                    <step.icon className="w-7 h-7 text-[#e87040]" />
                  </div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm">{step.label}</h4>
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex items-center justify-center my-4">
                      <ArrowDown className="w-4 h-4 text-industrial-copper" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/30 bg-primary-dark-teal/5">
            <Cpu className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Powered by NVIDIA SDK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
