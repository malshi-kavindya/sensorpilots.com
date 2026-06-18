import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Move, Thermometer, Gauge, TrendingUp, Brain, Crosshair, Shield } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function IndustrialCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const capabilities = [
    { title: 'Real-Time Monitoring', icon: Activity, desc: 'Sub-second telemetry ingestion across all sensor types' },
    { title: 'Vibration Analysis', icon: Move, desc: 'Spectral and time-domain analysis for rotating machinery' },
    { title: 'Temperature Analytics', icon: Thermometer, desc: 'Thermal pattern detection and heat signature modeling' },
    { title: 'Pressure Monitoring', icon: Gauge, desc: 'Hydraulic and pneumatic system pressure tracking' },
    { title: 'Performance Tracking', icon: TrendingUp, desc: 'OEE and throughput metrics with AI-driven baselines' },
    { title: 'Predictive Intelligence', icon: Brain, desc: 'Deep learning models trained on failure signatures' },
    { title: 'Root Cause Detection', icon: Crosshair, desc: 'Automated failure chain analysis and attribution' },
    { title: 'Asset Reliability Scoring', icon: Shield, desc: 'Dynamic health scores per asset and fleet-wide' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Industrial AI Capabilities"
          subtitle="Eight core analytics engines powering the platform"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group p-5 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center mb-3">
                <cap.icon className="w-5 h-5 text-primary-dark-teal" />
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">{cap.title}</h3>
              <p className="text-xs text-soft-industrial-gray leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
