import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, HelpCircle, ArrowRight, Cpu } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

function PricingHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <Cpu className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Transparent Pricing</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Pricing for Every
            <br />
            <span className="text-gradient-copper">Scale of Industry</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            Start small, scale infinitely. Per-machine, per-sensor, or enterprise licensing — pricing that aligns with your industrial operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PricingTiers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const tiers = [
    {
      name: 'Starter',
      priceMonthly: 499,
      priceAnnual: 399,
      desc: 'For small teams and pilot deployments',
      features: [
        { text: 'Up to 100 sensors', included: true },
        { text: 'Basic predictive models', included: true },
        { text: 'Email alerts', included: true },
        { text: '7-day data retention', included: true },
        { text: 'Community support', included: true },
        { text: 'Custom dashboards', included: false },
        { text: 'SCADA integration', included: false },
        { text: 'On-premise deployment', included: false },
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      priceMonthly: 2499,
      priceAnnual: 1999,
      desc: 'For scaling industrial operations',
      features: [
        { text: 'Up to 2,000 sensors', included: true },
        { text: 'Advanced AI models', included: true },
        { text: 'Real-time alerts & SMS', included: true },
        { text: '90-day data retention', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom dashboards', included: true },
        { text: 'SCADA integration', included: true },
        { text: 'On-premise deployment', included: false },
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      priceMonthly: null,
      priceAnnual: null,
      desc: 'For global industrial organizations',
      features: [
        { text: 'Unlimited sensors', included: true },
        { text: 'Custom AI model training', included: true },
        { text: 'Multi-site deployment', included: true },
        { text: 'Unlimited data retention', included: true },
        { text: 'Dedicated success team', included: true },
        { text: 'On-premise option', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'Custom integrations', included: true },
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center p-1 rounded-lg bg-white/5 border border-white/10">
            <button onClick={() => setBilling('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${billing === 'monthly' ? 'bg-primary-dark-teal text-text-primary' : 'text-soft-industrial-gray hover:text-text-primary'}`}>
              Monthly
            </button>
            <button onClick={() => setBilling('annual')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${billing === 'annual' ? 'bg-primary-dark-teal text-text-primary' : 'text-soft-industrial-gray hover:text-text-primary'}`}>
              Annual <span className="text-xs text-industrial-copper">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
              className={`relative p-6 rounded-xl border ${tier.highlighted ? 'border-industrial-copper/40 bg-industrial-copper/5' : 'border-white/5 bg-white/5'} hover:border-white/10 transition-all duration-300`}>
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-industrial-copper text-text-primary text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="font-heading font-bold text-4xl text-text-primary">
                      ${billing === 'monthly' ? tier.priceMonthly : tier.priceAnnual}
                    </span>
                    <span className="text-soft-industrial-gray text-sm">/month</span>
                  </>
                ) : (
                  <span className="font-heading font-bold text-4xl text-text-primary">Custom</span>
                )}
              </div>
              <p className="text-sm text-soft-industrial-gray mb-6">{tier.desc}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm">
                    {f.included ? (
                      <Check className="w-4 h-4 text-primary-dark-teal flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-soft-industrial-gray/40 flex-shrink-0" />
                    )}
                    <span className={f.included ? 'text-text-primary' : 'text-soft-industrial-gray/40'}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${tier.highlighted ? 'bg-industrial-copper hover:bg-industrial-copper/80 text-text-primary' : 'bg-white/10 hover:bg-white/20 text-text-primary border border-white/10'}`}>
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingModels() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const models = [
    {
      title: 'Per Machine Pricing',
      desc: 'Pay per monitored machine. Ideal for focused deployments with high-value assets.',
      price: 'From $49/machine/month',
      icon: 'machine',
    },
    {
      title: 'Per Sensor Pricing',
      desc: 'Pay per sensor endpoint. Best for high-density IoT sensor deployments.',
      price: 'From $2.49/sensor/month',
      icon: 'sensor',
    },
    {
      title: 'Enterprise Licensing',
      desc: 'Unlimited usage with annual enterprise licensing. Predictable costs at scale.',
      price: 'Custom pricing',
      icon: 'enterprise',
    },
    {
      title: 'Custom Deployment',
      desc: 'On-premise, air-gapped, or hybrid deployment with professional services.',
      price: 'Contact sales',
      icon: 'custom',
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

function FAQ() {
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

function PricingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-lg text-soft-industrial-gray mb-8 max-w-xl mx-auto">
            Our team will work with you to build a pricing model that matches your infrastructure, sensor count, and deployment needs.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg">
            Request Custom Pricing
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <div>
      <PricingHero />
      <PricingTiers />
      <PricingModels />
      <FAQ />
      <PricingCTA />
    </div>
  );
}
