import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Factory, Wifi, Database, Cpu, Brain, Activity,
  Gauge, AlertTriangle, Clock, Lightbulb, ArrowRight,
} from 'lucide-react';
import SectionTitle from '../SectionTitle';

const steps = [
  { label: 'Machines', icon: Factory },
  { label: 'IoT Sensors', icon: Wifi },
  { label: 'Data Pipeline', icon: Database },
  { label: 'NVIDIA AI', icon: Cpu },
  { label: 'AI Models', icon: Brain },
  { label: 'Intel.', icon: Activity },
];

const cards = [
  {
    title: 'Predictive Maintenance',
    desc: 'AI models forecast failures before they occur',
    icon: Brain,
  },
  {
    title: 'Sensor Analytics',
    desc: 'Real-time processing of multi-sensor streams',
    icon: Activity,
  },
  {
    title: 'Machine Health Monitoring',
    desc: 'Continuous health scoring across all assets',
    icon: Gauge,
  },
  {
    title: 'Anomaly Detection',
    desc: 'Statistical and ML-based outlier identification',
    icon: AlertTriangle,
  },
  {
    title: 'Failure Prediction',
    desc: 'Time-to-failure estimates with confidence intervals',
    icon: Clock,
  },
  {
    title: 'Industrial AI Insights',
    desc: 'Actionable intelligence for maintenance teams',
    icon: Lightbulb,
  },
];

export default function PlatformOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background — dot-grid + glow orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-dark-teal/[0.03] to-background" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(16,76,100,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-dark-teal/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-industrial-copper/6 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Platform Architecture &amp; Intelligence Engine"
          subtitle="From raw sensor signals to predictive maintenance intelligence — powered by six core AI capabilities"
          centered
        />

        {/* ── Pipeline (desktop) ── */}
        <div className="hidden lg:flex items-center justify-center mt-16">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-dark-teal/25 to-primary-dark-teal/5
                               border border-primary-dark-teal/30 flex items-center justify-center
                               group-hover:border-industrial-copper/40 group-hover:shadow-lg
                               group-hover:shadow-primary-dark-teal/15 transition-all duration-300"
                  >
                    <step.icon className="w-6 h-6 text-[#e87040]" />
                  </div>
                  <div
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-industrial-copper
                               text-white text-[10px] font-bold flex items-center justify-center shadow-lg"
                  >
                    {i + 1}
                  </div>
                </div>
                <span className="font-heading text-[11px] text-text-primary mt-2.5 font-semibold whitespace-nowrap">
                  {step.label}
                </span>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="mx-3 text-industrial-copper/40">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Pipeline (mobile) ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-16 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark-teal/25 to-primary-dark-teal/5
                             border border-primary-dark-teal/30 flex items-center justify-center
                             group-hover:border-industrial-copper/40 transition-all duration-300"
                >
                  <step.icon className="w-5 h-5 text-[#e87040]" />
                </div>
                <div
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-industrial-copper
                             text-white text-[10px] font-bold flex items-center justify-center shadow-lg"
                >
                  {i + 1}
                </div>
              </div>
              <span className="font-heading text-[10px] text-text-primary mt-2 font-semibold text-center">
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="relative my-14">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-3 bg-background">
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-dark-teal/20 to-background
                           border border-primary-dark-teal/30 flex items-center justify-center"
              >
                <Cpu className="w-3.5 h-3.5 text-industrial-copper/70" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Intelligence Capabilities ── */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-heading font-semibold text-xl text-center text-text-primary mb-1"
          >
            Intelligence Capabilities
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="text-center text-soft-industrial-gray text-sm mb-10 max-w-xl mx-auto"
          >
            Six core capabilities that transform raw data into actionable maintenance intelligence
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]
                           hover:border-primary-dark-teal/30 hover:bg-white/[0.06]
                           transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                             bg-gradient-to-br from-primary-dark-teal/5 via-transparent to-industrial-copper/5
                             pointer-events-none"
                />
                <div className="relative z-10">
                  <div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-dark-teal/20 to-primary-dark-teal/5
                               border border-primary-dark-teal/20 flex items-center justify-center mb-3
                               group-hover:border-industrial-copper/30 transition-colors"
                  >
                    <card.icon
                      className="w-5 h-5 text-primary-dark-teal group-hover:text-[#e87040]
                                 transition-colors duration-300"
                    />
                  </div>
                  <h4 className="font-heading font-semibold text-base text-text-primary mb-1.5">
                    {card.title}
                  </h4>
                  <p className="text-xs text-soft-industrial-gray leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── NVIDIA Badge ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       border border-primary-dark-teal/30 bg-primary-dark-teal/5"
          >
            <Cpu className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Powered by NVIDIA SDK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
