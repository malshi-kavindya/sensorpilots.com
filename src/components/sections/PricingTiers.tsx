import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import PayPalModal from '../PayPalModal';

export default function PricingTiers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number; billing: 'monthly' | 'annual'; features: string[] } | null>(null);

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
    <section id="pricing" ref={ref} className="py-24 bg-deep-machine-shadow/30">
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
              {tier.priceMonthly ? (
                <button onClick={() => setSelectedPlan({
                  name: tier.name,
                  price: billing === 'monthly' ? tier.priceMonthly! : tier.priceAnnual!,
                  billing,
                  features: tier.features.filter(f => f.included).map(f => f.text),
                })}
                  className={`block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer ${tier.highlighted ? 'bg-industrial-copper hover:bg-industrial-copper/80 text-text-primary' : 'bg-white/10 hover:bg-white/20 text-text-primary border border-white/10'}`}>
                  {tier.cta}
                </button>
              ) : (
                <Link to="/#contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${tier.highlighted ? 'bg-industrial-copper hover:bg-industrial-copper/80 text-text-primary' : 'bg-white/10 hover:bg-white/20 text-text-primary border border-white/10'}`}>
                  {tier.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <PayPalModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </section>
  );
}
