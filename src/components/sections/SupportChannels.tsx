import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Headphones, Globe, MessageSquare } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function SupportChannels() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const channels = [
    { icon: Headphones, title: 'Technical Support', desc: '24/7 support for enterprise customers. Standard support via email and chat.', cta: 'Open Ticket', color: 'bg-primary-dark-teal/20' },
    { icon: Globe, title: 'Developer Portal', desc: 'API documentation, SDKs, code samples, and community forums for developers.', cta: 'Visit Portal', color: 'bg-industrial-copper/20' },
    { icon: MessageSquare, title: 'Community', desc: 'Join the SensorPilots community for discussions, best practices, and events.', cta: 'Join Community', color: 'bg-warm-signal-alert/20' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Support Channels" subtitle="Multiple ways to get help and connect" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch, i) => (
            <motion.div key={ch.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all text-center">
              <div className={`w-12 h-12 rounded-lg ${ch.color} flex items-center justify-center mx-auto mb-4`}>
                <ch.icon className="w-6 h-6 text-text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{ch.title}</h3>
              <p className="text-sm text-soft-industrial-gray mb-4 leading-relaxed">{ch.desc}</p>
              <button className="text-sm font-medium text-industrial-copper hover:text-warm-signal-alert transition-colors">
                {ch.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
