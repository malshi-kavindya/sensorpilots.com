import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';

export default function CommandCenterPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const widgets = [
    { label: 'Machine Health Score', value: '87.4%', color: 'text-primary-dark-teal', barColor: 'bg-primary-dark-teal', width: '87.4%' },
    { label: 'Failure Probability', value: '12.3%', color: 'text-warm-signal-alert', barColor: 'bg-warm-signal-alert', width: '12.3%' },
    { label: 'Sensor Throughput', value: '2.4M/s', color: 'text-industrial-copper', barColor: 'bg-industrial-copper', width: '78%' },
    { label: 'Prediction Accuracy', value: '96.7%', color: 'text-primary-dark-teal', barColor: 'bg-primary-dark-teal', width: '96.7%' },
    { label: 'Active Alerts', value: '3', color: 'text-warm-signal-alert', barColor: 'bg-warm-signal-alert', width: '15%' },
    { label: 'Equipment Status', value: '98.2%', color: 'text-industrial-copper', barColor: 'bg-industrial-copper', width: '98.2%' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Command Center Preview"
          subtitle="Real-time intelligence at your fingertips"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-background/80 overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-warm-signal-alert animate-pulse" />
              <span className="font-mono text-sm text-soft-industrial-gray">LIVE — Plant Alpha Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-soft-industrial-gray">UTC: {new Date().toISOString().split('T')[0]}</span>
              <span className="font-mono text-xs text-primary-dark-teal">● Connected</span>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {widgets.map((w, i) => (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-soft-industrial-gray font-mono uppercase">{w.label}</span>
                </div>
                <div className={`font-heading font-bold text-3xl ${w.color} mb-3`}>{w.value}</div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: w.width } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className={`h-full ${w.barColor} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
