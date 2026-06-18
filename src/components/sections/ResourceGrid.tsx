import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, FileCheck, BookOpen, FileSpreadsheet, Video, Terminal, ExternalLink, ArrowRight } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function ResourceGrid() {
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
