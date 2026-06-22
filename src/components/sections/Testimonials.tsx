import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';

const testimonials = [
  {
    quote: "SensorPilots reduced our unplanned downtime by 42% in the first quarter. The predictive accuracy is unlike anything we've seen.",
    author: 'Dr. Sarah Chen',
    role: 'VP of Operations',
    company: 'Meridian Manufacturing',
    stat: '42%',
    statLabel: 'downtime reduction',
  },
  {
    quote: "The sensor analytics platform gave us visibility into our turbine health we never had before. Real game changer for our maintenance program.",
    author: 'James Rodriguez',
    role: 'Chief Engineer',
    company: 'Apex Energy',
    stat: '12×',
    statLabel: 'faster anomaly detection',
  },
  {
    quote: "Deploying SensorPilots across 12 plants was seamless. The AI engine started detecting anomalies within days of sensor connection.",
    author: 'Priya Patel',
    role: 'Director of Digital Transformation',
    company: 'Titan Automotive',
    stat: '12',
    statLabel: 'plants deployed',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-dark-teal/6 blur-[140px] rounded-full" />
      </div>

      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(5rem,16vw,14rem)] font-black tracking-tighter leading-none text-white/[0.022] whitespace-nowrap">
          TRUSTED
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-dark-teal font-semibold mb-3">
            Social Proof
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary leading-tight">
            Trusted by industrial
            <br />
            <span className="text-primary-dark-teal">leaders worldwide.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative bg-deep-machine-shadow/60 hover:bg-white/[0.04] transition-colors duration-300 p-8 md:p-10 flex flex-col gap-8"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/0 to-transparent group-hover:via-primary-dark-teal/60 transition-all duration-500" />

              {/* Stat callout */}
              <div className="flex items-end gap-2">
                <span className="font-heading font-black text-5xl leading-none text-primary-dark-teal tabular-nums">
                  {t.stat}
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-soft-industrial-gray font-semibold mb-1.5 leading-tight max-w-[80px]">
                  {t.statLabel}
                </span>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <p className="text-text-primary/80 leading-relaxed text-sm">
                  "{t.quote}"
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.07]" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary-dark-teal/60 transition-colors duration-300">
                  <span className="font-heading font-bold text-primary-dark-teal text-xs">
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary leading-tight">{t.author}</p>
                  <p className="text-[11px] text-soft-industrial-gray mt-0.5">{t.role}</p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-primary-dark-teal/70 font-semibold mt-0.5">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '2.3B+', label: 'Sensor Events / Day' },
            { value: '<48h', label: 'Avg. Deployment Time' },
          ].map(({ value, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.07 }}
              className="text-center"
            >
              <p className="font-heading font-black text-2xl text-text-primary tabular-nums">{value}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-soft-industrial-gray font-medium mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
