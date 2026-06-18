import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Brain, Gauge, AlertTriangle, Database, BarChart3, Activity, Network } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Wifi,
      title: 'Sensor Ingestion Engine',
      desc: 'Ingest millions of sensor data points per second from IoT, SCADA, PLC, and edge devices. Supports MQTT, OPC-UA, Modbus, and custom protocols.',
      tags: ['MQTT', 'OPC-UA', 'Modbus', 'Kafka'],
    },
    {
      icon: Brain,
      title: 'Predictive AI Models',
      desc: 'Production-grade deep learning models including LSTM, Transformer, and ensemble methods. Continuous retraining with new failure data.',
      tags: ['LSTM', 'Transformers', 'XGBoost', 'AutoML'],
    },
    {
      icon: Gauge,
      title: 'Machine Health Scores',
      desc: 'Composite health indices per asset based on multi-sensor fusion. Dynamic scoring with trend visualization and historical comparison.',
      tags: ['Real-time', 'Multi-sensor', 'Trending'],
    },
    {
      icon: AlertTriangle,
      title: 'Failure Prediction',
      desc: 'Time-to-failure estimates with confidence intervals. Probabilistic forecasting for remaining useful life across all asset types.',
      tags: ['RUL', 'Confidence', 'Probabilistic'],
    },
    {
      icon: Database,
      title: 'Anomaly Detection',
      desc: 'Statistical, machine learning, and deep learning-based anomaly detection. Unsupervised learning for unknown failure modes.',
      tags: ['Isolation Forest', 'Autoencoders', 'Statistical'],
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      desc: 'Sub-second analytics dashboards with live sensor data, computed metrics, and AI inference results. Custom metric definitions.',
      tags: ['Sub-second', 'Custom', 'Live'],
    },
    {
      icon: Activity,
      title: 'Asset Monitoring',
      desc: 'Fleet-wide asset tracking with hierarchical views. Group by line, plant, or region. Fleet-level health and performance aggregates.',
      tags: ['Fleet', 'Hierarchical', 'Aggregates'],
    },
    {
      icon: Network,
      title: 'Industrial Integrations',
      desc: 'Native connectors for SCADA, PLC, CMMS, ERP, and MES systems. Pre-built integrations for Siemens, Rockwell, and Schneider.',
      tags: ['SCADA', 'CMMS', 'ERP', 'MES'],
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Core Features" subtitle="Eight pillars of industrial intelligence" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/40 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary-dark-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed mb-4">{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded bg-white/5 text-xs font-mono text-soft-industrial-gray border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
