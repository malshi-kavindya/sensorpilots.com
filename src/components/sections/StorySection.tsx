import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-industrial-copper font-mono text-sm uppercase tracking-wider mb-4 block">Company Story</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
              From Factory Floor to AI Platform
            </h2>
            <div className="space-y-4 text-soft-industrial-gray leading-relaxed">
              <p>
                SensorPilots began in 2022 when a team of industrial engineers and machine learning researchers recognized a critical gap: the world's manufacturing infrastructure was generating petabytes of sensor data, but almost none of it was being used to predict failures.
              </p>
              <p>
                We started by building predictive models for a single automotive plant. Within six months, we had reduced unplanned downtime by 38%. The approach scaled. Today, SensorPilots monitors over 2 million industrial sensors across 15 countries.
              </p>
              <p>
                Our mission remains unchanged: transform industrial operations through predictive intelligence. Every machine should know when it needs maintenance before it fails.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-2xl border border-white/10 bg-background/80 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-primary-dark-teal">2022</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Founded</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-industrial-copper">150+</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Team Members</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-warm-signal-alert">2M+</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Sensors Monitored</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-primary-dark-teal">15</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
