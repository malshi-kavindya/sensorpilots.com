import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Clock, DollarSign, Cpu, Brain, Database, Cog, Globe, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

function CareersHero() {
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
            <Globe className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Join the Team</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Build the Future of
            <br />
            <span className="text-gradient-teal">Industrial Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto leading-relaxed">
            We're hiring engineers, researchers, and industrial experts who want to transform how the world maintains its machines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function OpenPositions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const departments = [
    {
      name: 'Engineering',
      icon: Cpu,
      positions: [
        { title: 'Senior Backend Engineer', location: 'Boston, MA / Remote', type: 'Full-time', salary: '$160k - $220k', tags: ['Go', 'Kubernetes', 'Kafka'] },
        { title: 'Platform Engineer', location: 'Boston, MA / Remote', type: 'Full-time', salary: '$150k - $200k', tags: ['Terraform', 'AWS', 'CI/CD'] },
        { title: 'Frontend Engineer', location: 'Remote', type: 'Full-time', salary: '$140k - $190k', tags: ['React', 'TypeScript', 'D3'] },
        { title: 'DevOps Engineer', location: 'Boston, MA', type: 'Full-time', salary: '$145k - $195k', tags: ['K8s', 'Prometheus', 'GitOps'] },
      ],
    },
    {
      name: 'AI Research',
      icon: Brain,
      positions: [
        { title: 'Staff ML Engineer — Time Series', location: 'Boston, MA / Remote', type: 'Full-time', salary: '$200k - $300k', tags: ['PyTorch', 'LSTM', 'Transformers'] },
        { title: 'AI Research Scientist', location: 'Boston, MA', type: 'Full-time', salary: '$180k - $280k', tags: ['Deep Learning', 'Anomaly Detection', 'NLP'] },
        { title: 'MLOps Engineer', location: 'Remote', type: 'Full-time', salary: '$160k - $220k', tags: ['Kubeflow', 'MLflow', 'GPU'] },
      ],
    },
    {
      name: 'Data Science',
      icon: Database,
      positions: [
        { title: 'Senior Data Scientist', location: 'Boston, MA / Remote', type: 'Full-time', salary: '$170k - $240k', tags: ['Python', 'R', 'Statistics'] },
        { title: 'Data Engineer', location: 'Remote', type: 'Full-time', salary: '$150k - $200k', tags: ['Spark', 'Airflow', 'SQL'] },
      ],
    },
    {
      name: 'Industrial Systems',
      icon: Cog,
      positions: [
        { title: 'Industrial Solutions Engineer', location: 'Boston, MA / Remote', type: 'Full-time', salary: '$140k - $190k', tags: ['SCADA', 'PLC', 'OPC-UA'] },
        { title: 'Customer Success Engineer', location: 'Remote', type: 'Full-time', salary: '$130k - $170k', tags: ['Pre-sales', 'Onboarding', 'Support'] },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Open Positions" subtitle="Join one of our four core teams" centered />
        <div className="space-y-12">
          {departments.map((dept, di) => (
            <div key={dept.name}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center">
                  <dept.icon className="w-5 h-5 text-primary-dark-teal" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-primary">{dept.name}</h3>
              </div>
              <div className="space-y-3">
                {dept.positions.map((pos, pi) => (
                  <motion.div key={pos.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: di * 0.1 + pi * 0.05 }}
                    className="group p-5 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/40 hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary mb-1 group-hover:text-industrial-copper transition-colors">{pos.title}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-soft-industrial-gray">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{pos.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{pos.type}</span>
                          <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{pos.salary}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-wrap gap-2">
                          {pos.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded bg-white/5 text-xs font-mono text-soft-industrial-gray border border-white/10">{tag}</span>
                          ))}
                        </div>
                        <ArrowRight className="w-4 h-4 text-industrial-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
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

export default function Careers() {
  return (
    <div>
      <CareersHero />
      <OpenPositions />
      <BenefitsSection />
    </div>
  );
}
