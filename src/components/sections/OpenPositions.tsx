import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, DollarSign, Cpu, Brain, Database, Cog, ArrowRight } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function OpenPositions() {
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
