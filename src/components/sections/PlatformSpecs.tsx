import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Zap, Database, Shield, Network, BarChart3 } from 'lucide-react';

const specs = [
  {
    label: 'Sensor Ingestion',
    value: '2M+',
    unit: '/ second',
    icon: Wifi,
    desc: 'Real-time data ingestion across all connected endpoints',
    accent: 'teal',
  },
  {
    label: 'AI Inference Latency',
    value: '<50',
    unit: 'ms',
    icon: Zap,
    desc: 'Edge-to-cloud anomaly detection with sub-50ms response',
    accent: 'copper',
  },
  {
    label: 'Data Retention',
    value: '∞',
    unit: 'unlimited',
    icon: Database,
    desc: 'No caps on historical sensor data — ever',
    accent: 'teal',
  },
  {
    label: 'Uptime SLA',
    value: '99.99',
    unit: '%',
    icon: Shield,
    desc: 'Enterprise-grade availability backed by contractual SLA',
    accent: 'copper',
  },
  {
    label: 'Supported Protocols',
    value: '12',
    unit: '+ protocols',
    icon: Network,
    desc: 'OPC-UA, MQTT, Modbus, and 9 more out of the box',
    accent: 'teal',
  },
  {
    label: 'Dashboard Widgets',
    value: '30',
    unit: '+ widgets',
    icon: BarChart3,
    desc: 'Composable, drag-and-drop reporting components',
    accent: 'copper',
  },
];

export default function PlatformSpecs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 bg-deep-machine-shadow/30 overflow-hidden">

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
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary-dark-teal/6 blur-[160px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-industrial-copper/4 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/20 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(5rem,16vw,14rem)] font-black tracking-tighter leading-none text-white/[0.02] whitespace-nowrap">
          SPECS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.ps-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.ps-section-tag::before,.ps-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.ps-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:60px}
        `}</style>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="ps-section-tag">Platform Specifications</div>
          <h2 className="ps-title">Built for enterprise<br />scale and precision</h2>
        </motion.div>

        {/* Specs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group relative flex flex-col gap-5 p-8 md:p-10 rounded-xl border border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.06] hover:border-[rgba(16,76,100,0.45)] transition-all duration-300 overflow-hidden"
            >
              {/* Hover top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                s.accent === 'teal' ? 'via-primary-dark-teal/0 group-hover:via-primary-dark-teal/60' : 'via-industrial-copper/0 group-hover:via-industrial-copper/50'
              } to-transparent transition-all duration-500`} />

              {/* Corner glow on hover */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                s.accent === 'teal' ? 'bg-primary-dark-teal/15' : 'bg-industrial-copper/10'
              }`} />

              {/* Icon */}
              <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                s.accent === 'teal'
                  ? 'bg-primary-dark-teal/10 border-primary-dark-teal/20 group-hover:border-primary-dark-teal/50 group-hover:bg-primary-dark-teal/20'
                  : 'bg-industrial-copper/10 border-industrial-copper/20 group-hover:border-industrial-copper/50 group-hover:bg-industrial-copper/20'
              }`}>
                <s.icon className={`w-5 h-5 ${s.accent === 'teal' ? 'text-primary-dark-teal' : 'text-industrial-copper'}`} />
              </div>

              {/* Value */}
              <div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="font-heading font-black text-4xl text-text-primary leading-none tabular-nums">
                    {s.value}
                  </span>
                  <span className={`text-xs font-semibold mb-1.5 ${s.accent === 'teal' ? 'text-primary-dark-teal' : 'text-industrial-copper'}`}>
                    {s.unit}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-soft-industrial-gray">
                  {s.label}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" />

              {/* Description */}
              <p className="text-xs text-soft-industrial-gray/50 leading-relaxed group-hover:text-soft-industrial-gray/80 transition-colors duration-300">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-dark-teal/30" />
          <p className="text-[11px] text-soft-industrial-gray/40 tracking-wide text-center">
            Benchmarked on production workloads. Results may vary by deployment configuration.
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-dark-teal/30" />
        </motion.div>
      </div>
    </section>
  );
}