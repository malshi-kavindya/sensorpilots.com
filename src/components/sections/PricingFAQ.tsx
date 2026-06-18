import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function PricingFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    { q: 'How is SensorPilots priced?', a: 'SensorPilots offers tier-based pricing (Starter, Growth, Enterprise) and custom per-machine or per-sensor pricing for large deployments. Enterprise customers can opt for annual licensing.' },
    { q: 'Can I start with a pilot program?', a: 'Yes. We offer a 30-day pilot program with full platform access on the Growth tier. This lets you validate ROI before committing to a longer-term contract.' },
    { q: 'What is included in Enterprise support?', a: 'Enterprise includes a dedicated Customer Success Manager, 24/7 phone support, SLA-backed response times, custom onboarding, and quarterly business reviews.' },
    { q: 'Is there a free tier?', a: 'We do not offer a free tier, but we provide a comprehensive sandbox environment for evaluation and proof-of-concept deployments.' },
    { q: 'Can I deploy on-premise?', a: 'Yes. Enterprise customers can deploy SensorPilots fully on-premise or in a hybrid configuration. Our platform is Kubernetes-native and supports air-gapped environments.' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle title="Pricing FAQ" subtitle="Common questions about SensorPilots pricing" centered />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-white/5 border border-white/5">
              <h4 className="font-heading font-semibold text-text-primary mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-primary-dark-teal flex-shrink-0 mt-0.5" />
                {faq.q}
              </h4>
              <p className="text-sm text-soft-industrial-gray pl-7">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
