import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Database, Brain, AlertTriangle, Wrench } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { num: '01', title: 'Connect Sensors', desc: 'Deploy IoT sensors across machines, lines, and facilities', icon: Wifi },
    { num: '02', title: 'Ingest Data', desc: 'Stream millions of data points into the pipeline in real-time', icon: Database },
    { num: '03', title: 'Analyze Signals', desc: 'AI processes vibration, temperature, pressure, and performance data', icon: Brain },
    { num: '04', title: 'Predict Failures', desc: 'Machine learning models forecast equipment failures with confidence', icon: AlertTriangle },
    { num: '05', title: 'Optimize Maintenance', desc: 'Intelligent scheduling based on predicted health and availability', icon: Wrench },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="How It Works"
          subtitle="From sensor to intelligence in five steps"
          centered
        />

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-dark-teal via-industrial-copper to-warm-signal-alert transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i > 0 ? 'lg:mt-12' : ''}`}
              >
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-industrial-copper items-center justify-center z-10">
                  <span className="font-mono text-xs text-industrial-copper font-bold">{step.num}</span>
                </div>

                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary-dark-teal" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-industrial-copper mb-1 block">STEP {step.num}</span>
                      <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-soft-industrial-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>

                <div className={`hidden lg:block ${i % 2 === 1 ? 'lg:order-1' : ''}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
