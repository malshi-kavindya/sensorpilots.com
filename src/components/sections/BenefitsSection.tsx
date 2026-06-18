import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Globe, Cpu, Brain, Cog, Database } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    { icon: Zap, title: 'Competitive Compensation', desc: 'Top-quartile salaries, equity, and annual bonuses for all full-time employees.' },
    { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere. We have offices in Boston and Berlin for those who prefer in-person.' },
    { icon: Cpu, title: 'Cutting-Edge Tech', desc: 'Work with the latest in AI, GPU computing, distributed systems, and industrial IoT.' },
    { icon: Brain, title: 'Learning Budget', desc: '$5,000 annual learning budget for conferences, courses, books, and certifications.' },
    { icon: Cog, title: 'Impact', desc: 'Your work directly reduces industrial downtime and improves manufacturing efficiency worldwide.' },
    { icon: Database, title: 'Health & Wellness', desc: 'Comprehensive health insurance, mental health support, and wellness stipends.' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Why SensorPilots" subtitle="Benefits and culture that attract top industrial talent" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center mb-3">
                <b.icon className="w-5 h-5 text-primary-dark-teal" />
              </div>
              <h4 className="font-heading font-semibold text-text-primary mb-2">{b.title}</h4>
              <p className="text-sm text-soft-industrial-gray leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
