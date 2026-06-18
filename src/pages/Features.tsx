import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight, Wifi, Database, Brain, Gauge, AlertTriangle,
  BarChart3, Activity, Shield, Zap, Network, Monitor, Server, Globe
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

function FeaturesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <Layers className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Platform Capabilities</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Every Feature for
            <br />
            <span className="text-gradient-teal">Industrial Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            From sensor ingestion to predictive maintenance scheduling — a complete feature set for modern manufacturing operations.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg">
            Book a Feature Walkthrough
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureGrid() {
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

function IntegrationFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const integrations = [
    {
      title: 'SCADA Integration',
      icon: Monitor,
      desc: 'Bidirectional integration with SCADA systems including Wonderware, Ignition, and WinCC. Read sensor data and write back predictions.',
      features: ['Wonderware', 'Ignition', 'WinCC', 'GE iFIX'],
    },
    {
      title: 'PLC Connectivity',
      icon: Server,
      desc: 'Direct PLC connectivity via Ethernet/IP, Profinet, and OPC-UA. No middleware required for Siemens S7, Rockwell ControlLogix, and Schneider.',
      features: ['Siemens S7', 'Rockwell', 'Schneider', 'Mitsubishi'],
    },
    {
      title: 'Cloud IoT Support',
      icon: Globe,
      desc: 'Cloud-native IoT connectors for AWS IoT, Azure IoT Hub, and Google Cloud IoT. Bridge on-premise sensors to cloud analytics.',
      features: ['AWS IoT', 'Azure IoT', 'GCP IoT', 'MQTT'],
    },
    {
      title: 'Custom Dashboards',
      icon: BarChart3,
      desc: 'Drag-and-drop dashboard builder with 30+ widget types. Real-time charts, gauges, heatmaps, and anomaly overlays.',
      features: ['30+ Widgets', 'Real-time', 'Heatmaps', 'Export'],
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Integration & Dashboards" subtitle="Connect everything, visualize anything" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((int, i) => (
            <motion.div key={int.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-industrial-copper/20 border border-industrial-copper/30 flex items-center justify-center mb-4">
                <int.icon className="w-6 h-6 text-industrial-copper" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{int.title}</h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed mb-4">{int.desc}</p>
              <div className="flex flex-wrap gap-2">
                {int.features.map((f) => (
                  <span key={f} className="px-2 py-1 rounded bg-industrial-copper/10 text-xs font-mono text-industrial-copper border border-industrial-copper/20">
                    {f}
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

function PlatformSpecs() {
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

export default function Features() {
  return (
    <div>
      <FeaturesHero />
      <FeatureGrid />
      <IntegrationFeatures />
      <PlatformSpecs />
    </div>
  );
}
