import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, BookOpen, Video, ArrowRight, ExternalLink, FileSpreadsheet, GraduationCap, FileCheck, Terminal } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

function ResourcesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <FileText className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Knowledge Center</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Resources for
            <br />
            <span className="text-gradient-copper">Industrial Engineers</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto leading-relaxed">
            Whitepapers, case studies, technical guides, and research reports to help you build and scale industrial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ResourceGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const resources = [
    {
      icon: FileText,
      title: 'Whitepapers',
      desc: 'In-depth technical documents on predictive maintenance architecture, sensor analytics, and AI model design.',
      items: [
        'Predictive Maintenance Architecture Patterns',
        'Sensor Data Pipeline Design at Scale',
        'AI Model Selection for Industrial Failure Prediction',
        'Edge vs Cloud Inference for Industrial AI',
      ],
      color: 'bg-primary-dark-teal/20',
      borderColor: 'border-primary-dark-teal/30',
      iconColor: 'text-primary-dark-teal',
    },
    {
      icon: FileCheck,
      title: 'Case Studies',
      desc: 'Real-world deployments showing measurable ROI and operational improvements.',
      items: [
        'Meridian Manufacturing: 42% Downtime Reduction',
        'Apex Energy: Turbine Health Monitoring at Scale',
        'Titan Automotive: 12-Plant Deployment',
        'GridCore Utilities: Transformer Monitoring Network',
      ],
      color: 'bg-industrial-copper/20',
      borderColor: 'border-industrial-copper/30',
      iconColor: 'text-industrial-copper',
    },
    {
      icon: BookOpen,
      title: 'Technical Guides',
      desc: 'Step-by-step implementation guides for engineers deploying sensor analytics.',
      items: [
        'Sensor Installation and Calibration Guide',
        'Connecting SCADA to SensorPilots',
        'Building Custom AI Models',
        'API Integration Best Practices',
      ],
      color: 'bg-warm-signal-alert/20',
      borderColor: 'border-warm-signal-alert/30',
      iconColor: 'text-warm-signal-alert',
    },
    {
      icon: FileSpreadsheet,
      title: 'Industrial AI Reports',
      desc: 'Annual research reports on the state of industrial AI and predictive maintenance.',
      items: [
        'State of Industrial AI 2026',
        'Predictive Maintenance ROI Benchmarks',
        'Sensor Technology Adoption Report',
        'Industry 4.0 Readiness Assessment',
      ],
      color: 'bg-primary-dark-teal/20',
      borderColor: 'border-primary-dark-teal/30',
      iconColor: 'text-primary-dark-teal',
    },
    {
      icon: Video,
      title: 'Webinars',
      desc: 'Live and recorded sessions with SensorPilots engineers and industry experts.',
      items: [
        'Building a Predictive Maintenance Program',
        'Sensor Data Architecture Deep Dive',
        'AI Model Interpretability for Maintenance',
        'Scaling from Pilot to Enterprise',
      ],
      color: 'bg-industrial-copper/20',
      borderColor: 'border-industrial-copper/30',
      iconColor: 'text-industrial-copper',
    },
    {
      icon: Terminal,
      title: 'API Documentation',
      desc: 'Complete API reference with examples, SDKs, and code samples for integration.',
      items: [
        'REST API Reference (OpenAPI 3.0)',
        'GraphQL Schema Documentation',
        'Python SDK Guide',
        'WebSocket Streaming API',
      ],
      color: 'bg-warm-signal-alert/20',
      borderColor: 'border-warm-signal-alert/30',
      iconColor: 'text-warm-signal-alert',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Resource Library" subtitle="Curated content for every stage of your industrial AI journey" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg ${r.color} ${r.borderColor} border flex items-center justify-center mb-4`}>
                <r.icon className={`w-6 h-6 ${r.iconColor}`} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{r.title}</h3>
              <p className="text-sm text-soft-industrial-gray mb-4 leading-relaxed">{r.desc}</p>
              <ul className="space-y-2 mb-4">
                {r.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-soft-industrial-gray">
                    <ExternalLink className="w-3 h-3 text-industrial-copper" />
                    <span className="hover:text-text-primary transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1 text-sm text-industrial-copper font-medium cursor-pointer">
                Browse All
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5">
          <GraduationCap className="w-12 h-12 text-industrial-copper mx-auto mb-6" />
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">Stay Ahead of Industrial AI</h2>
          <p className="text-soft-industrial-gray mb-8 max-w-lg mx-auto">
            Get monthly insights on predictive maintenance, sensor analytics, and industrial AI delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" />
            <button className="w-full sm:w-auto px-6 py-3 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Resources() {
  return (
    <div>
      <ResourcesHero />
      <ResourceGrid />
      <NewsletterCTA />
    </div>
  );
}
