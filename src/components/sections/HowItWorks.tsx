import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Database, Brain, AlertTriangle, Wrench, TrendingUp } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimatedCounter from '../AnimatedCounter';

const steps = [
  { num: '01', title: 'Connect Sensors', desc: 'Deploy IoT sensors across machines, lines, and facilities', icon: Wifi },
  { num: '02', title: 'Ingest Data', desc: 'Stream millions of data points into the pipeline in real-time', icon: Database },
  { num: '03', title: 'Analyze Signals', desc: 'AI processes vibration, temperature, pressure, and performance data', icon: Brain },
  { num: '04', title: 'Predict Failures', desc: 'Machine learning models forecast equipment failures with confidence', icon: AlertTriangle },
  { num: '05', title: 'Optimize Maintenance', desc: 'Intelligent scheduling based on predicted health and availability', icon: Wrench },
];

const metrics = [
  { target: 40, prefix: '-', suffix: '%', label: 'Reduce Downtime' },
  { target: 32, prefix: '-', suffix: '%', label: 'Maintenance Cost Reduction' },
  { target: 28, prefix: '+', suffix: '%', label: 'Equipment Availability' },
  { target: 35, prefix: '+', suffix: '%', label: 'Operational Efficiency' },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background — dot-grid + glow orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-dark-teal/[0.02] to-deep-machine-shadow/30" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(16,76,100,0.1) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-primary-dark-teal/6 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -left-32 w-[350px] h-[350px] bg-industrial-copper/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="How It Works"
          subtitle="From sensor to intelligence in five steps — backed by measurable enterprise results"
          centered
        />

        {/* ── Timeline Steps ── */}
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
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/30 hover:bg-white/[0.07] transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-dark-teal/20 to-primary-dark-teal/5 border border-primary-dark-teal/30 flex items-center justify-center flex-shrink-0">
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

        {/* ── Divider ── */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-3 bg-background">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-industrial-copper/20 to-background border border-industrial-copper/30 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-industrial-copper/80" />
              </div>
            </div>
          </div>
        </div>

        {/* ── ROI Metrics ── */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="font-heading font-bold text-2xl md:text-3xl text-center text-text-primary mb-2"
          >
            Proven ROI Impact
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65 }}
            className="text-center text-soft-industrial-gray text-base mb-12 max-w-xl mx-auto"
          >
            Measurable results from enterprise deployments
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="group relative p-6 rounded-xl border border-white/[0.06] bg-white/[0.03] text-center hover:border-primary-dark-teal/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-dark-teal/5 via-transparent to-industrial-copper/5 pointer-events-none" />
                <div className="relative z-10">
                  <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} label={m.label} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
