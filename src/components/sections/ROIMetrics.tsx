import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';

const metrics = [
  {
    target: 40,
    prefix: '',
    suffix: '%',
    label: 'Downtime Reduction',
    desc: 'Average across enterprise deployments in Year 1',
    color: 'from-primary-dark-teal/20 to-transparent',
    glow: 'bg-primary-dark-teal',
  },
  {
    target: 32,
    prefix: '',
    suffix: '%',
    label: 'Maintenance Cost Cut',
    desc: 'Shift from reactive to predictive maintenance models',
    color: 'from-industrial-copper/15 to-transparent',
    glow: 'bg-industrial-copper',
  },
  {
    target: 28,
    prefix: '+',
    suffix: '%',
    label: 'Equipment Availability',
    desc: 'More uptime unlocked through continuous sensor intelligence',
    color: 'from-primary-dark-teal/20 to-transparent',
    glow: 'bg-primary-dark-teal',
  },
  {
    target: 35,
    prefix: '+',
    suffix: '%',
    label: 'Operational Efficiency',
    desc: 'Facility-wide gains measured across 500+ client sites',
    color: 'from-industrial-copper/15 to-transparent',
    glow: 'bg-industrial-copper',
  },
];

export default function ROIMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-deep-machine-shadow/50 to-background">

      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Slow-pulsing glow orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-dark-teal/8 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-industrial-copper/6 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Animated scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/25 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,theme(colors.deep-machine-shadow/50)_100%)]" />
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(5rem,20vw,18rem)] font-black tracking-tighter leading-none text-white/[0.018] whitespace-nowrap">
          ROI
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-dark-teal font-semibold mb-3">
            Proven ROI Impact
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary leading-tight">
            Numbers that move
            <br />
            <span className="text-primary-dark-teal">the bottom line.</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative flex flex-col items-center text-center p-10 bg-deep-machine-shadow/50 hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden"
            >
              {/* Per-card gradient bloom */}
              <div className={`absolute inset-0 bg-gradient-to-b ${m.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Top line accent */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${i % 2 === 0 ? 'via-primary-dark-teal/50' : 'via-industrial-copper/50'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Glowing dot */}
              <div className="relative mb-6">
                <div className={`w-2 h-2 rounded-full ${m.glow} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div className={`absolute inset-0 w-2 h-2 rounded-full ${m.glow} blur-sm opacity-0 group-hover:opacity-80 transition-opacity`} />
              </div>

              {/* Counter */}
              <div className="relative mb-3">
                <AnimatedCounter
                  target={m.target}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  label=""
                />
              </div>

              {/* Label */}
              <p className="relative text-[10px] uppercase tracking-[0.2em] font-bold text-soft-industrial-gray mb-3 group-hover:text-text-primary transition-colors duration-300">
                {m.label}
              </p>

              {/* Desc */}
              <p className="relative text-xs text-soft-industrial-gray/50 leading-relaxed group-hover:text-soft-industrial-gray transition-colors duration-300">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-dark-teal/40 hidden sm:block" />
          <p className="text-xs text-soft-industrial-gray/60 max-w-sm leading-relaxed">
            Metrics based on aggregated data across <span className="text-text-primary font-semibold">500+ enterprise deployments</span> over 36 months.
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-dark-teal/40 hidden sm:block" />
        </motion.div>
      </div>
    </section>
  );
}