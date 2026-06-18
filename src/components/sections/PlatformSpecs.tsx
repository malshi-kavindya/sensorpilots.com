import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Zap, Database, Shield, Network, BarChart3 } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function PlatformSpecs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const specs = [
    { label: 'Sensor Ingestion', value: '2M+ / second', icon: Wifi },
    { label: 'AI Inference Latency', value: '< 50ms', icon: Zap },
    { label: 'Data Retention', value: 'Unlimited', icon: Database },
    { label: 'Uptime SLA', value: '99.99%', icon: Shield },
    { label: 'Supported Protocols', value: '12+', icon: Network },
    { label: 'Dashboard Widgets', value: '30+', icon: BarChart3 },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Platform Specifications" subtitle="Performance benchmarks for enterprise workloads" centered />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {specs.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-white/5 border border-white/5 text-center hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-primary-dark-teal" />
              </div>
              <div className="font-heading font-bold text-2xl text-text-primary mb-1">{s.value}</div>
              <div className="text-xs text-soft-industrial-gray">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
