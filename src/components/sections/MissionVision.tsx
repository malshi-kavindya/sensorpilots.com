import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function MissionVision() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: Target,
      title: 'Mission',
      desc: 'Make every industrial machine intelligent through predictive AI. Eliminate unplanned downtime and extend equipment life through data-driven maintenance.',
      color: 'bg-primary-dark-teal/20',
      border: 'border-primary-dark-teal/30',
    },
    {
      icon: Eye,
      title: 'Vision',
      desc: 'A world where industrial failures are predicted, not experienced. Where maintenance is proactive, not reactive. Where machines and humans work together with full visibility.',
      color: 'bg-industrial-copper/20',
      border: 'border-industrial-copper/30',
    },
    {
      icon: Rocket,
      title: 'Future',
      desc: 'Autonomous maintenance systems that self-diagnose, self-schedule, and self-optimize. AI that not only predicts failures but prescribes optimal repair strategies.',
      color: 'bg-warm-signal-alert/20',
      border: 'border-warm-signal-alert/30',
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Mission, Vision & Future" subtitle="Why we exist and where we're going" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
              <div className={`w-12 h-12 rounded-lg ${card.color} ${card.border} border flex items-center justify-center mb-4`}>
                <card.icon className="w-6 h-6 text-text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">{card.title}</h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
