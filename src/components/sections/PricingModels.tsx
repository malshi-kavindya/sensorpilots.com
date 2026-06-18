import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';

export default function PricingModels() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const models = [
    {
      title: 'Per Machine Pricing',
      desc: 'Pay per monitored machine. Ideal for focused deployments with high-value assets.',
      price: 'From $49/machine/month',
    },
    {
      title: 'Per Sensor Pricing',
      desc: 'Pay per sensor endpoint. Best for high-density IoT sensor deployments.',
      price: 'From $2.49/sensor/month',
    },
    {
      title: 'Enterprise Licensing',
      desc: 'Unlimited usage with annual enterprise licensing. Predictable costs at scale.',
      price: 'Custom pricing',
    },
    {
      title: 'Custom Deployment',
      desc: 'On-premise, air-gapped, or hybrid deployment with professional services.',
      price: 'Contact sales',
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Pricing Models" subtitle="Flexible pricing that fits your industrial architecture" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((m, i) => (
            <motion.div key={m.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary-dark-teal/40 hover:bg-white/10 transition-all">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{m.title}</h3>
              <p className="text-sm text-soft-industrial-gray mb-4">{m.desc}</p>
              <div className="font-heading font-bold text-xl text-industrial-copper">{m.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
