import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Cpu,
  Activity,
  AlertTriangle,
  Brain,
  Wifi,
  Zap,
  Factory,
  Car,
  Fuel,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle2,
  Quote,
  Database,
  Signal,
  Wrench,
  Hammer,
  Move,
  Lightbulb,
  Gauge,
  Crosshair,
  Thermometer,
  ArrowDown,
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import SectionTitle from '../components/SectionTitle';
import { blogPosts } from '../data/blogPosts';

/* ────────────────────────────────────────────────
   1. HERO SECTION
   ──────────────────────────────────────────────── */
function HeroSection() {
  const [particles, setParticles] = useState<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(p);
    let raf: number;
    const animate = () => {
      setParticles((prev) =>
        prev.map((pt) => ({
          ...pt,
          x: (pt.x + pt.vx + window.innerWidth) % window.innerWidth,
          y: (pt.y + pt.vy + window.innerHeight) % window.innerHeight,
        }))
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Animated particles */}
        {particles.map((pt, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-dark-teal"
            style={{
              left: pt.x,
              top: pt.y,
              width: pt.size,
              height: pt.size,
              opacity: pt.opacity,
            }}
          />
        ))}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <Signal className="w-4 h-4 text-warm-signal-alert" />
            <span className="text-sm font-mono text-soft-industrial-gray">
              Industrial Intelligence Command Center
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6">
            Predictive Maintenance
            <br />
            <span className="text-gradient-copper">Intelligence</span>
            <br />
            for Modern Manufacturing
          </h1>

          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform industrial sensor streams into actionable AI-driven maintenance intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Book Demo
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/product"
              className="group flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Explore Platform
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Hero stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '2M+', label: 'Sensors Monitored' },
            { value: '99.7%', label: 'Uptime SLA' },
            { value: '50TB', label: 'Daily Data Ingestion' },
            { value: '<50ms', label: 'Inference Latency' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-lg bg-white/5 border border-white/5">
              <div className="font-heading font-bold text-2xl text-text-primary">{stat.value}</div>
              <div className="text-sm text-soft-industrial-gray mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   2. TRUST BAR
   ──────────────────────────────────────────────── */
function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const industries = [
    { name: 'Manufacturing', icon: Factory },
    { name: 'Energy', icon: Fuel },
    { name: 'Automotive', icon: Car },
    { name: 'Heavy Industry', icon: Hammer },
    { name: 'Smart Factory', icon: Cpu },
    { name: 'Utilities', icon: Zap },
  ];

  return (
    <section ref={ref} className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-sm text-soft-industrial-gray mb-8 font-mono uppercase tracking-wider"
        >
          Trusted by Industrial Leaders Across Sectors
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              <ind.icon className="w-6 h-6 text-primary-dark-teal" />
              <span className="font-heading font-semibold text-text-primary text-sm">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   3. PLATFORM OVERVIEW
   ──────────────────────────────────────────────── */
function PlatformOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { label: 'Machines', icon: Factory, color: 'bg-deep-machine-shadow' },
    { label: 'IoT Sensors', icon: Wifi, color: 'bg-primary-dark-teal/40' },
    { label: 'Data Pipeline', icon: Database, color: 'bg-primary-dark-teal/60' },
    { label: 'NVIDIA AI Engine', icon: Cpu, color: 'bg-industrial-copper/60' },
    { label: 'Predictive Models', icon: Brain, color: 'bg-industrial-copper/80' },
    { label: 'Maintenance Intelligence', icon: Activity, color: 'bg-warm-signal-alert/80' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Platform Architecture"
          subtitle="A complete pipeline from raw sensor signals to predictive maintenance intelligence"
          centered
        />

        <div className="relative mt-16">
          {/* Flow line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark-teal via-industrial-copper to-warm-signal-alert rounded-full transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center group">
                  <div className={`w-16 h-16 rounded-xl ${step.color} border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm">{step.label}</h4>
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex items-center justify-center my-4">
                      <ArrowDown className="w-4 h-4 text-industrial-copper" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/30 bg-primary-dark-teal/5">
            <Cpu className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Powered by NVIDIA SDK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   4. INDUSTRIAL PROBLEM
   ──────────────────────────────────────────────── */
function IndustrialProblem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    'Unexpected Downtime',
    'Reactive Maintenance',
    'Equipment Failure',
    'High Operational Costs',
    'Lost Production Time',
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-warm-signal-alert font-mono text-sm uppercase tracking-wider mb-4 block">
              The Problem
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-8 leading-tight">
              Industrial Operations Are Still Operating Blind
            </h2>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/5"
                >
                  <AlertTriangle className="w-5 h-5 text-warm-signal-alert flex-shrink-0" />
                  <span className="text-text-primary font-medium">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-background/80 p-6 shadow-2xl">
              {/* Mock dashboard */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-warm-signal-alert" />
                <div className="w-3 h-3 rounded-full bg-industrial-copper" />
                <div className="w-3 h-3 rounded-full bg-primary-dark-teal" />
                <span className="ml-2 font-mono text-xs text-soft-industrial-gray">Sensor Dashboard — Critical</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-white/5 border border-warm-signal-alert/30">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-warm-signal-alert" />
                    <span className="text-xs text-warm-signal-alert font-mono">ALERT</span>
                  </div>
                  <div className="font-heading font-bold text-xl text-text-primary">Motor #7</div>
                  <div className="text-sm text-soft-industrial-gray mt-1">Vibration anomaly detected</div>
                  <div className="mt-3 h-2 bg-warm-signal-alert/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-warm-signal-alert rounded-full" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-primary-dark-teal" />
                    <span className="text-xs text-soft-industrial-gray font-mono">STATUS</span>
                  </div>
                  <div className="font-heading font-bold text-xl text-text-primary">4/12</div>
                  <div className="text-sm text-soft-industrial-gray mt-1">Machines offline</div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary-dark-teal rounded-full" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 col-span-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-soft-industrial-gray font-mono">DOWNTIME LOG</span>
                    <span className="text-xs text-warm-signal-alert font-mono">LIVE</span>
                  </div>
                  <div className="space-y-2">
                    {['Line 3 — Conveyor Belt', 'Pump Station B', 'Furnace Unit A'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5">
                        <span className="text-sm text-text-primary">{item}</span>
                        <span className="text-xs text-warm-signal-alert font-mono">{['2h 34m', '1h 12m', '45m'][i]}</span>
                      </div>
                    ))}
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
   5. SOLUTION SECTION
   ──────────────────────────────────────────────── */
function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    { title: 'Predictive Maintenance', desc: 'AI models forecast failures before they occur', icon: Brain },
    { title: 'Sensor Analytics', desc: 'Real-time processing of multi-sensor streams', icon: Activity },
    { title: 'Machine Health Monitoring', desc: 'Continuous health scoring across all assets', icon: Gauge },
    { title: 'Anomaly Detection', desc: 'Statistical and ML-based outlier identification', icon: AlertTriangle },
    { title: 'Failure Prediction', desc: 'Time-to-failure estimates with confidence intervals', icon: Clock },
    { title: 'Industrial AI Insights', desc: 'Actionable intelligence for maintenance teams', icon: Lightbulb },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="SensorPilots Intelligence Engine"
          subtitle="Six core capabilities that transform raw data into maintenance intelligence"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center mb-4 group-hover:bg-primary-dark-teal/30 transition-colors">
                <card.icon className="w-6 h-6 text-primary-dark-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{card.title}</h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   6. COMMAND CENTER PREVIEW
   ──────────────────────────────────────────────── */
function CommandCenterPreview() {
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
          {/* Header bar */}
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

/* ────────────────────────────────────────────────
   7. HOW IT WORKS
   ──────────────────────────────────────────────── */
function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { num: '01', title: 'Connect Sensors', desc: 'Deploy IoT sensors across machines, lines, and facilities', icon: Wifi },
    { num: '02', title: 'Ingest Data', desc: 'Stream millions of data points into the pipeline in real-time', icon: Database },
    { num: '03', title: 'Analyze Signals', desc: 'AI processes vibration, temperature, pressure, and performance data', icon: Brain },
    { num: '04', title: 'Predict Failures', desc: 'Machine learning models forecast equipment failures with confidence', icon: AlertTriangle },
    { num: '05', title: 'Optimize Maintenance', desc: 'Intelligent scheduling based on predicted health and availability', icon: Wrench },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="How It Works"
          subtitle="From sensor to intelligence in five steps"
          centered
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-dark-teal via-industrial-copper to-warm-signal-alert transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i > 0 ? 'lg:mt-12' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-industrial-copper items-center justify-center z-10">
                  <span className="font-mono text-xs text-industrial-copper font-bold">{step.num}</span>
                </div>

                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary-dark-teal" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-industrial-copper mb-1 block">STEP {step.num}</span>
                      <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-soft-industrial-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>

                <div className={`hidden lg:block ${i % 2 === 1 ? 'lg:order-1' : ''}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   8. INDUSTRIAL AI CAPABILITIES
   ──────────────────────────────────────────────── */
function IndustrialCapabilities() {
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

/* ────────────────────────────────────────────────
   9. INDUSTRY USE CASES
   ──────────────────────────────────────────────── */
function IndustryUseCases() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const useCases = [
    { title: 'Manufacturing Plants', icon: Factory, desc: 'Predictive maintenance across assembly lines, CNC machines, and robotics', color: 'bg-primary-dark-teal/20' },
    { title: 'Automotive Production', icon: Car, desc: 'Real-time quality monitoring on stamping, welding, and painting operations', color: 'bg-industrial-copper/20' },
    { title: 'Energy Facilities', icon: Fuel, desc: 'Turbine and generator health monitoring for power generation', color: 'bg-warm-signal-alert/20' },
    { title: 'Industrial Equipment', icon: Hammer, desc: 'Heavy machinery and construction equipment failure prediction', color: 'bg-primary-dark-teal/20' },
    { title: 'Utilities', icon: Zap, desc: 'Grid infrastructure and transformer monitoring at scale', color: 'bg-industrial-copper/20' },
    { title: 'Smart Factories', icon: Cpu, desc: 'End-to-end Industry 4.0 intelligence and automation', color: 'bg-warm-signal-alert/20' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Industry Use Cases"
          subtitle="Proven intelligence across industrial sectors"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${uc.color} opacity-30`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <uc.icon className="w-6 h-6 text-text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{uc.title}</h3>
                <p className="text-sm text-soft-industrial-gray leading-relaxed">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   10. ROI METRICS
   ──────────────────────────────────────────────── */
function ROIMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { target: 40, prefix: '-', suffix: '%', label: 'Reduce Downtime' },
    { target: 32, prefix: '-', suffix: '%', label: 'Maintenance Cost Reduction' },
    { target: 28, prefix: '+', suffix: '%', label: 'Equipment Availability' },
    { target: 35, prefix: '+', suffix: '%', label: 'Operational Efficiency' },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-deep-machine-shadow/50 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Proven ROI Impact"
          subtitle="Measurable results from enterprise deployments"
          centered
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 text-center"
            >
              <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} label={m.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   11. TESTIMONIALS
   ──────────────────────────────────────────────── */
function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: "SensorPilots reduced our unplanned downtime by 42% in the first quarter. The predictive accuracy is unlike anything we've seen.",
      author: 'Dr. Sarah Chen',
      role: 'VP of Operations, Meridian Manufacturing',
      company: 'Meridian Manufacturing',
    },
    {
      quote: "The sensor analytics platform gave us visibility into our turbine health we never had before. Real game changer for our maintenance program.",
      author: 'James Rodriguez',
      role: 'Chief Engineer, Apex Energy',
      company: 'Apex Energy',
    },
    {
      quote: "Deploying SensorPilots across 12 plants was seamless. The AI engine started detecting anomalies within days of sensor connection.",
      author: 'Priya Patel',
      role: 'Director of Digital Transformation, Titan Automotive',
      company: 'Titan Automotive',
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Enterprise Testimonials"
          subtitle="What industrial leaders say about SensorPilots"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-industrial-copper/40 mb-4" />
              <p className="text-text-primary leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-dark-teal/30 flex items-center justify-center">
                  <span className="font-heading font-bold text-text-primary text-sm">
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-text-primary text-sm">{t.author}</div>
                  <div className="text-xs text-soft-industrial-gray">{t.role}</div>
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
   12. BLOG PREVIEW
   ──────────────────────────────────────────────── */
function BlogPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featured = blogPosts.slice(0, 3);

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary">Latest Insights</h2>
            <p className="text-soft-industrial-gray mt-2">Industrial AI research and best practices</p>
          </div>
          <Link
            to="/blog"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-industrial-copper hover:text-warm-signal-alert transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-industrial-copper px-2 py-1 rounded bg-industrial-copper/10">
                  {post.category}
                </span>
                <span className="text-xs text-soft-industrial-gray">{post.readTime}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-3 group-hover:text-industrial-copper transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-industrial-copper font-medium">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   13. PRICING PREVIEW
   ──────────────────────────────────────────────── */
function PricingPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tiers = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      desc: 'For small teams and pilot deployments',
      features: ['Up to 100 sensors', 'Basic predictive models', 'Email alerts', '7-day data retention', 'Community support'],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$2,499',
      period: '/month',
      desc: 'For scaling industrial operations',
      features: ['Up to 2,000 sensors', 'Advanced AI models', 'Real-time alerts & SMS', '90-day data retention', 'Priority support', 'Custom dashboards', 'SCADA integration'],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For global industrial organizations',
      features: ['Unlimited sensors', 'Custom AI model training', 'Multi-site deployment', 'Unlimited data retention', 'Dedicated success team', 'On-premise option', 'SLA guarantee'],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Flexible Pricing"
          subtitle="Scale your industrial intelligence as you grow"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`relative p-6 rounded-xl border ${
                tier.highlighted
                  ? 'border-industrial-copper/40 bg-industrial-copper/5'
                  : 'border-white/5 bg-white/5'
              } hover:border-white/10 transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-industrial-copper text-text-primary text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-heading font-bold text-4xl text-text-primary">{tier.price}</span>
                <span className="text-soft-industrial-gray text-sm">{tier.period}</span>
              </div>
              <p className="text-sm text-soft-industrial-gray mb-6">{tier.desc}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-soft-industrial-gray">
                    <CheckCircle2 className="w-4 h-4 text-primary-dark-teal flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                  tier.highlighted
                    ? 'bg-industrial-copper hover:bg-industrial-copper/80 text-text-primary'
                    : 'bg-white/10 hover:bg-white/20 text-text-primary border border-white/10'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   14. FINAL CTA
   ──────────────────────────────────────────────── */
function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-teal/20 via-background to-industrial-copper/20" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16, 76, 100, 0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(192, 117, 77, 0.3), transparent 50%)`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-text-primary leading-tight mb-6">
            Start Predicting Failures
            <br />
            <span className="text-gradient-copper">Before They Happen</span>
          </h2>
          <p className="text-lg text-soft-industrial-gray mb-10 max-w-xl mx-auto">
            Join the industrial leaders who have transformed their maintenance operations with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Book Demo
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   HOME PAGE EXPORT
   ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <PlatformOverview />
      <IndustrialProblem />
      <SolutionSection />
      <CommandCenterPreview />
      <HowItWorks />
      <IndustrialCapabilities />
      <IndustryUseCases />
      <ROIMetrics />
      <Testimonials />
      <BlogPreview />
      <PricingPreview />
      <FinalCTA />
    </div>
  );
}
