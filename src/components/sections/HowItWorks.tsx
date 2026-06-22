import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Database, Brain, AlertTriangle, Wrench, TrendingUp } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';

const steps = [
  {
    num: '01',
    title: 'Connect Sensors',
    desc: 'Deploy IoT sensors across machines, lines, and facilities with plug-and-play onboarding.',
    icon: Wifi,
    accent: 'teal',
  },
  {
    num: '02',
    title: 'Ingest Data',
    desc: 'Stream millions of data points into the cloud pipeline in real-time with zero loss.',
    icon: Database,
    accent: 'copper',
  },
  {
    num: '03',
    title: 'Analyze Signals',
    desc: 'AI processes vibration, temperature, pressure, and performance signals simultaneously.',
    icon: Brain,
    accent: 'teal',
  },
  {
    num: '04',
    title: 'Predict Failures',
    desc: 'ML models forecast equipment failures with confidence scores before they happen.',
    icon: AlertTriangle,
    accent: 'copper',
  },
  {
    num: '05',
    title: 'Optimize Maintenance',
    desc: 'Intelligent scheduling based on predicted health, availability, and cost impact.',
    icon: Wrench,
    accent: 'teal',
  },
];

const metrics = [
  { target: 40, prefix: '-', suffix: '%', label: 'Downtime Reduction' },
  { target: 32, prefix: '-', suffix: '%', label: 'Maintenance Cost Cut' },
  { target: 28, prefix: '+', suffix: '%', label: 'Equipment Availability' },
  { target: 35, prefix: '+', suffix: '%', label: 'Operational Efficiency' },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 bg-deep-machine-shadow/30 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Pulsing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-dark-teal/6 blur-[160px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-industrial-copper/4 blur-[140px]"
          animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/20 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Watermark */}
      <div className="absolute right-0 top-1/3 pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(5rem,16vw,14rem)] font-black tracking-tighter leading-none text-white/[0.018] whitespace-nowrap">
          PROCESS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-dark-teal font-semibold mb-3">
            How It Works
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary leading-tight">
            From sensor to intelligence
            <br />
            <span className="text-primary-dark-teal">in five steps.</span>
          </h2>
          <p className="mt-4 text-soft-industrial-gray text-sm max-w-md mx-auto leading-relaxed">
            Backed by measurable enterprise results — deployed and proven across 500+ industrial sites.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical center line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

          <div className="space-y-4 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i > 0 ? 'lg:mt-10' : ''}`}
                >
                  {/* Center node — desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-deep-machine-shadow/90 border border-white/[0.1] items-center justify-center">
                    <span className={`text-[10px] font-mono font-bold ${step.accent === 'teal' ? 'text-primary-dark-teal' : 'text-industrial-copper'}`}>
                      {step.num}
                    </span>
                  </div>

                  {/* Card positioning */}
                  {isLeft ? (
                    <>
                      <StepCard step={step} Icon={Icon} isInView={isInView} />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <StepCard step={step} Icon={Icon} isInView={isInView} />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75 }}
          className="flex items-center gap-5 my-20"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/[0.07]" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <TrendingUp className="w-4 h-4 text-primary-dark-teal" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-soft-industrial-gray/60">
              Proven ROI Impact
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/[0.07]" />
        </motion.div>

        {/* ── Metrics ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.85 + i * 0.09 }}
              className="group relative flex flex-col items-center text-center p-8 md:p-10 bg-deep-machine-shadow/50 hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden"
            >
              {/* Bloom */}
              <div className={`absolute inset-0 bg-gradient-to-b ${i % 2 === 0 ? 'from-primary-dark-teal/10' : 'from-industrial-copper/8'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${i % 2 === 0 ? 'via-primary-dark-teal/0 group-hover:via-primary-dark-teal/60' : 'via-industrial-copper/0 group-hover:via-industrial-copper/50'} to-transparent transition-all duration-500`} />

              {/* Glowing dot */}
              <div className="relative mb-4">
                <div className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-primary-dark-teal' : 'bg-industrial-copper'} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className={`absolute inset-0 w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-primary-dark-teal' : 'bg-industrial-copper'} blur-sm opacity-0 group-hover:opacity-80 transition-opacity`} />
              </div>

              <div className="relative">
                <AnimatedCounter
                  target={m.target}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  label=""
                />
              </div>
              <p className="relative text-[9px] uppercase tracking-[0.2em] font-bold text-soft-industrial-gray mt-2 group-hover:text-text-primary transition-colors duration-300">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1 }}
          className="text-center text-[11px] text-soft-industrial-gray/40 mt-8 tracking-wide"
        >
          Aggregated across 500+ enterprise deployments over 36 months.
        </motion.p>
      </div>
    </section>
  );
}

function StepCard({ step, Icon, isInView }: {
  step: typeof steps[0];
  Icon: React.ElementType;
  isInView: boolean;
}) {
  return (
    <div className="group relative flex items-start gap-5 p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden cursor-default">

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
        step.accent === 'teal' ? 'via-primary-dark-teal/0 group-hover:via-primary-dark-teal/60' : 'via-industrial-copper/0 group-hover:via-industrial-copper/50'
      } to-transparent transition-all duration-500`} />

      {/* Corner glow */}
      <div className={`absolute -top-8 -left-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        step.accent === 'teal' ? 'bg-primary-dark-teal/15' : 'bg-industrial-copper/12'
      }`} />

      {/* Step number — mobile only */}
      <div className={`lg:hidden flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-mono font-bold ${
        step.accent === 'teal'
          ? 'border-primary-dark-teal/30 text-primary-dark-teal bg-primary-dark-teal/10'
          : 'border-industrial-copper/30 text-industrial-copper bg-industrial-copper/10'
      }`}>
        {step.num}
      </div>

      {/* Icon */}
      <div className={`relative flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
        step.accent === 'teal'
          ? 'bg-primary-dark-teal/10 border-primary-dark-teal/20 group-hover:border-primary-dark-teal/50 group-hover:bg-primary-dark-teal/20'
          : 'bg-industrial-copper/10 border-industrial-copper/20 group-hover:border-industrial-copper/50 group-hover:bg-industrial-copper/20'
      }`}>
        <Icon className={`w-5 h-5 ${step.accent === 'teal' ? 'text-primary-dark-teal' : 'text-industrial-copper'}`} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className={`text-[9px] uppercase tracking-[0.18em] font-bold mb-1.5 ${
          step.accent === 'teal' ? 'text-primary-dark-teal/60' : 'text-industrial-copper/60'
        }`}>
          Step {step.num}
        </p>
        <h3 className="font-heading font-bold text-base text-text-primary mb-2 leading-snug group-hover:text-white transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-xs text-soft-industrial-gray/55 leading-relaxed group-hover:text-soft-industrial-gray/80 transition-colors duration-300">
          {step.desc}
        </p>
      </div>
    </div>
  );
}