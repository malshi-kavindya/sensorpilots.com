import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, Activity } from 'lucide-react';

export default function IndustrialProblem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    { label: 'Unexpected Downtime', gradient: 'hover:bg-gradient-to-r hover:from-[rgba(232,80,50,0.2)] hover:to-[rgba(232,80,50,0.05)]' },
    { label: 'Reactive Maintenance', gradient: 'hover:bg-gradient-to-r hover:from-[rgba(220,160,40,0.2)] hover:to-[rgba(220,160,40,0.05)]' },
    { label: 'Equipment Failure', gradient: 'hover:bg-gradient-to-r hover:from-[rgba(200,40,40,0.2)] hover:to-[rgba(200,40,40,0.05)]' },
    { label: 'High Operational Costs', gradient: 'hover:bg-gradient-to-r hover:from-[rgba(160,60,180,0.15)] hover:to-[rgba(160,60,180,0.03)]' },
    { label: 'Lost Production Time', gradient: 'hover:bg-gradient-to-r hover:from-[rgba(200,120,30,0.2)] hover:to-[rgba(200,120,30,0.05)]' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-warm-signal-alert font-mono text-sm uppercase tracking-wider mb-4 block">
              The Problem
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-8 leading-tight">
              Industrial Operations Are Still Operating Blind
            </h2>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/5 transition-all duration-500 cursor-default ${p.gradient}`}
                >
                  <AlertTriangle className="w-5 h-5 text-warm-signal-alert flex-shrink-0" />
                  <span className="text-text-primary font-medium">{p.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-background/80 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-warm-signal-alert" />
                <div className="w-3 h-3 rounded-full bg-industrial-copper" />
                <div className="w-3 h-3 rounded-full bg-primary-dark-teal" />
                <span className="ml-2 font-mono text-xs text-soft-industrial-gray">Sensor Dashboard — Critical</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-white/5 border border-warm-signal-alert/30">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-warm-signal-alert" />
                    <span className="text-xs text-warm-signal-alert font-mono">ALERT</span>
                  </div>
                  <div className="font-heading font-bold text-xl text-text-primary">Motor #7</div>
                  <div className="text-sm text-soft-industrial-gray mt-1">Vibration anomaly detected</div>
                  <div className="mt-3 h-2 bg-warm-signal-alert/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-warm-signal-alert rounded-full" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-primary-dark-teal" />
                    <span className="text-xs text-soft-industrial-gray font-mono">STATUS</span>
                  </div>
                  <div className="font-heading font-bold text-xl text-text-primary">4/12</div>
                  <div className="text-sm text-soft-industrial-gray mt-1">Machines offline</div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary-dark-teal rounded-full" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 col-span-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-soft-industrial-gray font-mono">DOWNTIME LOG</span>
                    <span className="text-xs text-warm-signal-alert font-mono">LIVE</span>
                  </div>
                  <div className="space-y-2">
                    {['Line 3 — Conveyor Belt', 'Pump Station B', 'Furnace Unit A'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5">
                        <span className="text-sm text-text-primary">{item}</span>
                        <span className="text-xs text-warm-signal-alert font-mono">{['2h 34m', '1h 12m', '45m'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
