import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';

export default function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const leaders = [
    { name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder', initials: 'SC', bg: 'bg-primary-dark-teal/30' },
    { name: 'James Rodriguez', role: 'CTO & Co-Founder', initials: 'JR', bg: 'bg-industrial-copper/30' },
    { name: 'Priya Patel', role: 'VP of Engineering', initials: 'PP', bg: 'bg-warm-signal-alert/30' },
    { name: 'Dr. Marcus Wei', role: 'Chief Scientist', initials: 'MW', bg: 'bg-primary-dark-teal/30' },
    { name: 'Elena Volkov', role: 'VP of Product', initials: 'EV', bg: 'bg-industrial-copper/30' },
    { name: 'David Kim', role: 'VP of Sales', initials: 'DK', bg: 'bg-warm-signal-alert/30' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Leadership" subtitle="Engineers and researchers building the future of industry" centered />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {leaders.map((leader, i) => (
            <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className={`w-16 h-16 rounded-full ${leader.bg} flex items-center justify-center mx-auto mb-3`}>
                <span className="font-heading font-bold text-text-primary text-lg">{leader.initials}</span>
              </div>
              <h4 className="font-heading font-semibold text-text-primary text-sm mb-1">{leader.name}</h4>
              <p className="text-xs text-soft-industrial-gray">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
