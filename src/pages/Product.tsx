import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, Cpu, Brain, Database, Shield,
  Server, Cloud, Lock, Terminal, BarChart3, Zap, HardDrive,
  CheckCircle2, GitBranch, Network, Wifi, AlertTriangle, Clock, Gauge,
  Box, Fingerprint, Key, FileCheck, Check, Monitor, Settings
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

/* ────────────────────────────────────────────────
   PRODUCT HERO
   ──────────────────────────────────────────────── */
function ProductHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <Cpu className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Technical Product Overview</span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            SensorPilots
            <br />
            <span className="text-gradient-teal">Data Intelligence Engine</span>
          </h1>

          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            A complete industrial AI platform for predictive maintenance, sensor analytics, and machine health monitoring — built for engineers, by engineers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group flex items-center gap-2 px-8 py-4 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg">
              Book Demo
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/features" className="group flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg">
              Explore Features
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   PREDICTIVE MAINTENANCE SYSTEM
   ──────────────────────────────────────────────── */
function PredictiveMaintenanceSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: Brain, label: 'Deep Learning Models', desc: 'LSTM, Transformer, and hybrid architectures trained on failure signatures' },
    { icon: Clock, label: 'Time-to-Failure', desc: 'Probabilistic estimates with confidence intervals and degradation curves' },
    { icon: AlertTriangle, label: 'Anomaly Detection', desc: 'Statistical, isolation forest, and autoencoder-based outlier detection' },
    { icon: Gauge, label: 'Health Scoring', desc: 'Dynamic asset health scores from 0-100 with trend visualization' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-industrial-copper font-mono text-sm uppercase tracking-wider mb-4 block">Core System</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
              Predictive Maintenance System
            </h2>
            <p className="text-soft-industrial-gray leading-relaxed mb-8">
              Our AI engine continuously learns from sensor streams to predict equipment failures before they occur. Models are retrained weekly with new failure data to maintain accuracy.
            </p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={f.label} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-primary-dark-teal" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary text-sm mb-1">{f.label}</h4>
                    <p className="text-xs text-soft-industrial-gray">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-2xl border border-white/10 bg-background/80 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-warm-signal-alert" />
                <div className="w-3 h-3 rounded-full bg-industrial-copper" />
                <div className="w-3 h-3 rounded-full bg-primary-dark-teal" />
                <span className="ml-2 font-mono text-xs text-soft-industrial-gray">Predictive Model — Motor Assembly</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-soft-industrial-gray">DEGRADATION CURVE</span>
                    <span className="text-xs font-mono text-warm-signal-alert">RUL: 14 days</span>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {Array.from({ length: 28 }).map((_, i) => {
                      const val = Math.min(100, 100 - (i / 28) * 60 + (Math.random() - 0.5) * 8);
                      return (
                        <div key={i} className="flex-1 rounded-t-sm" style={{
                          height: `${val}%`,
                          backgroundColor: i > 20 ? '#D59080' : i > 14 ? '#C0754D' : '#104C64',
                          opacity: 0.7 + (i / 28) * 0.3,
                        }} />
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-soft-industrial-gray font-mono">
                    <span>Day 0</span>
                    <span>Day 14</span>
                    <span>Day 28</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="font-heading font-bold text-xl text-primary-dark-teal">96.2%</div>
                    <div className="text-xs text-soft-industrial-gray mt-1">Accuracy</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="font-heading font-bold text-xl text-industrial-copper">14d</div>
                    <div className="text-xs text-soft-industrial-gray mt-1">Lead Time</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="font-heading font-bold text-xl text-warm-signal-alert">0.3%</div>
                    <div className="text-xs text-soft-industrial-gray mt-1">False Pos.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   MACHINE HEALTH MONITORING
   ──────────────────────────────────────────────── */
function MachineHealthMonitoring() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { label: 'Vibration RMS', value: '4.2 mm/s', status: 'normal', color: 'text-primary-dark-teal' },
    { label: 'Bearing Temp', value: '68°C', status: 'warning', color: 'text-industrial-copper' },
    { label: 'Oil Pressure', value: '3.8 bar', status: 'normal', color: 'text-primary-dark-teal' },
    { label: 'Motor Current', value: '12.4 A', status: 'alert', color: 'text-warm-signal-alert' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
            <div className="rounded-2xl border border-white/10 bg-background/80 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Monitor className="w-4 h-4 text-primary-dark-teal" />
                <span className="font-mono text-xs text-soft-industrial-gray">Machine Health — Turbine Unit A</span>
              </div>
              <div className="space-y-3">
                {metrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${m.status === 'normal' ? 'bg-primary-dark-teal' : m.status === 'warning' ? 'bg-industrial-copper' : 'bg-warm-signal-alert'} ${m.status === 'alert' ? 'animate-pulse' : ''}`} />
                      <span className="text-sm text-text-primary">{m.label}</span>
                    </div>
                    <span className={`font-heading font-bold ${m.color}`}>{m.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-primary-dark-teal/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-primary font-medium">Overall Health Score</span>
                  <span className="font-heading font-bold text-xl text-primary-dark-teal">82.4</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[82.4%] bg-gradient-to-r from-primary-dark-teal via-industrial-copper to-warm-signal-alert rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="order-1 lg:order-2">
            <span className="text-industrial-copper font-mono text-sm uppercase tracking-wider mb-4 block">Monitoring</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
              Machine Health Monitoring
            </h2>
            <p className="text-soft-industrial-gray leading-relaxed mb-8">
              Real-time health scoring across all critical machine parameters. Each asset receives a composite health score based on vibration, temperature, pressure, and electrical signatures.
            </p>
            <div className="space-y-3">
              {['Real-time parameter tracking', 'Trend analysis and forecasting', 'Threshold-based alerting', 'Historical baseline comparison'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-primary">
                  <CheckCircle2 className="w-5 h-5 text-primary-dark-teal flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   INDUSTRIAL ANALYTICS LAYER
   ──────────────────────────────────────────────── */
function IndustrialAnalyticsLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const analytics = [
    { icon: BarChart3, label: 'Descriptive Analytics', desc: 'Historical performance summaries and trend reports' },
    { icon: Brain, label: 'Diagnostic Analytics', desc: 'Root cause analysis and failure chain attribution' },
    { icon: Zap, label: 'Predictive Analytics', desc: 'Failure forecasting and remaining useful life estimates' },
    { icon: Settings, label: 'Prescriptive Analytics', desc: 'Optimal maintenance scheduling and resource allocation' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Industrial Analytics Layer" subtitle="Four layers of analytical depth from data to action" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analytics.map((a, i) => (
            <motion.div key={a.label} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/40 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center mb-4">
                <a.icon className="w-6 h-6 text-primary-dark-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{a.label}</h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   TECHNICAL ARCHITECTURE
   ──────────────────────────────────────────────── */
function TechnicalArchitecture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const layers = [
    { name: 'Ingestion Layer', icon: Wifi, items: ['MQTT', 'OPC-UA', 'Modbus', 'REST APIs', 'Kafka Streams'] },
    { name: 'Processing Layer', icon: Database, items: ['Stream Processing', 'Feature Engineering', 'Signal Filtering', 'Edge Inference', 'Batch Jobs'] },
    { name: 'AI Engine', icon: Brain, items: ['LSTM Networks', 'Isolation Forest', 'Autoencoders', 'Gradient Boosting', 'Transformer Models'] },
    { name: 'Serving Layer', icon: Server, items: ['REST API', 'GraphQL', 'WebSocket', 'SDK', 'CLI'] },
    { name: 'Visualization', icon: Monitor, items: ['Dashboards', 'Alerts', 'Reports', 'Mobile App', 'Embedded'] },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Technical Architecture" subtitle="Cloud-native, scalable, and enterprise-ready" centered />

        <div className="space-y-4">
          {layers.map((layer, i) => (
            <motion.div key={layer.name} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center">
                    <layer.icon className="w-5 h-5 text-primary-dark-teal" />
                  </div>
                  <h4 className="font-heading font-semibold text-text-primary">{layer.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-soft-industrial-gray">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   DEPLOYMENT OPTIONS
   ──────────────────────────────────────────────── */
function DeploymentOptions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const options = [
    { name: 'Cloud SaaS', icon: Cloud, desc: 'Fully managed on SensorPilots cloud. Zero infrastructure overhead.', features: ['Auto-scaling', '99.99% uptime SLA', 'Global CDN', 'Managed backups'] },
    { name: 'Hybrid Cloud', icon: GitBranch, desc: 'Edge inference on-premise, cloud analytics and dashboard.', features: ['Edge AI nodes', 'Local data caching', 'Cloud sync', 'Air-gapped mode'] },
    { name: 'On-Premise', icon: HardDrive, desc: 'Complete self-hosted deployment for regulated environments.', features: ['Kubernetes-native', 'Private registry', 'Offline capable', 'Custom certificates'] },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Deployment Options" subtitle="Choose the deployment model that fits your infrastructure" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <motion.div key={opt.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center mb-4">
                <opt.icon className="w-6 h-6 text-primary-dark-teal" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">{opt.name}</h3>
              <p className="text-sm text-soft-industrial-gray mb-6">{opt.desc}</p>
              <ul className="space-y-2">
                {opt.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-soft-industrial-gray">
                    <Check className="w-4 h-4 text-primary-dark-teal" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   API INTEGRATIONS
   ──────────────────────────────────────────────── */
function APIIntegrations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const integrations = [
    { name: 'REST API', desc: 'Full-featured REST API with OpenAPI 3.0 spec', icon: Terminal },
    { name: 'GraphQL', desc: 'Flexible queries for complex data relationships', icon: GitBranch },
    { name: 'WebSocket', desc: 'Real-time streaming for live dashboards', icon: Zap },
    { name: 'Webhooks', desc: 'Event-driven notifications to external systems', icon: Network },
    { name: 'SDK', desc: 'Python, JavaScript, and Go SDKs', icon: Box },
    { name: 'CLI', desc: 'Command-line interface for DevOps workflows', icon: Terminal },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="API & Integrations" subtitle="Connect SensorPilots to your existing industrial stack" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((int, i) => (
            <motion.div key={int.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl border border-white/5 bg-white/5 hover:border-primary-dark-teal/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center mb-3">
                <int.icon className="w-5 h-5 text-primary-dark-teal" />
              </div>
              <h4 className="font-heading font-semibold text-text-primary mb-1">{int.name}</h4>
              <p className="text-xs text-soft-industrial-gray">{int.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   SECURITY & COMPLIANCE
   ──────────────────────────────────────────────── */
function SecurityCompliance() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    { icon: Shield, label: 'SOC 2 Type II', desc: 'Certified security controls and audit trail' },
    { icon: Lock, label: 'End-to-End Encryption', desc: 'TLS 1.3 in transit, AES-256 at rest' },
    { icon: Fingerprint, label: 'RBAC & SSO', desc: 'Role-based access control with SAML/OIDC' },
    { icon: Key, label: 'API Key Management', desc: 'Scoped tokens with rotation and revocation' },
    { icon: FileCheck, label: 'ISO 27001', desc: 'Information security management certified' },
    { icon: Check, label: 'GDPR Compliant', desc: 'Data residency, right-to-erasure, and DPA' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Security & Compliance" subtitle="Enterprise-grade security for mission-critical data" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-primary-dark-teal" />
              </div>
              <h4 className="font-heading font-semibold text-text-primary mb-1">{item.label}</h4>
              <p className="text-xs text-soft-industrial-gray">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   ENTERPRISE READINESS
   ──────────────────────────────────────────────── */
function EnterpriseReadiness() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    '99.99% uptime SLA with dedicated support',
    'Multi-tenant with tenant isolation',
    'Custom branding and white-label options',
    'Professional services and onboarding',
    'Annual security audits and penetration testing',
    'Custom model training for proprietary equipment',
    'Integration with CMMS, ERP, and MES systems',
    'Dedicated customer success manager',
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-industrial-copper font-mono text-sm uppercase tracking-wider mb-4 block">Enterprise</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
              Enterprise Readiness
            </h2>
            <p className="text-soft-industrial-gray leading-relaxed mb-8">
              SensorPilots is built for the largest industrial organizations. Our enterprise tier includes everything needed for mission-critical deployments at scale.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all">
              Talk to Enterprise Sales
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="space-y-3">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary-dark-teal flex-shrink-0" />
                  <span className="text-sm text-text-primary">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Product() {
  return (
    <div>
      <ProductHero />
      <PredictiveMaintenanceSystem />
      <MachineHealthMonitoring />
      <IndustrialAnalyticsLayer />
      <TechnicalArchitecture />
      <DeploymentOptions />
      <APIIntegrations />
      <SecurityCompliance />
      <EnterpriseReadiness />
    </div>
  );
}
