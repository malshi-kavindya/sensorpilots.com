import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Activity, Gauge, AlertTriangle, Clock, Lightbulb } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function SolutionSection() {
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
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary-dark-teal/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary-dark-teal/5 blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
