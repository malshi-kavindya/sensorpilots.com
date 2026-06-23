import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, Zap } from 'lucide-react';
import PayPalModal from '../PayPalModal';

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

export default function PricingTiers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string; price: number; billing: 'monthly' | 'annual'; features: string[];
  } | null>(null);

  return (
    <section id="pricing" ref={ref} className="relative py-32 bg-deep-machine-shadow/30 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-dark-teal/5 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-industrial-copper/4 blur-[120px] rounded-full" />
      </div>

      {/* Watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <span className="text-[clamp(5rem,16vw,14rem)] font-black tracking-tighter leading-none text-white/[0.022] whitespace-nowrap">
          PRICING
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.pt-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.pt-section-tag::before,.pt-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.pt-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.pt-sub{font-size:13px;color:rgba(175,205,218,0.45);text-align:center;max-width:480px;margin:0 auto 48px;line-height:1.65}
        `}</style>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="pt-section-tag">Transparent Pricing</div>
          <h2 className="pt-title">Scale at your own pace</h2>
          <p className="pt-sub">From pilot deployments to global enterprise rollouts — a plan built for every stage of your industrial journey.</p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            {(['monthly', 'annual'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`relative px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                  billing === b ? 'text-text-primary' : 'text-soft-industrial-gray hover:text-text-primary'
                }`}
              >
                {billing === b && (
                  <motion.div
                    layoutId="billingPill"
                    className="absolute inset-0 rounded-lg bg-primary-dark-teal"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {b === 'monthly' ? 'Monthly' : (
                    <>Annual <span className="text-industrial-copper font-bold">−20%</span></>
                  )}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`group relative flex flex-col p-8 md:p-10 rounded-xl border border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.06] hover:border-[rgba(16,76,100,0.45)] transition-all duration-300 overflow-hidden ${
                tier.highlighted ? 'bg-[rgba(232,112,64,0.06)] border-[rgba(232,112,64,0.2)] hover:bg-[rgba(232,112,64,0.1)] hover:border-[rgba(232,112,64,0.4)]' : ''
              }`}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px ${
                tier.highlighted
                  ? 'bg-gradient-to-r from-transparent via-industrial-copper/70 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-primary-dark-teal/0 to-transparent group-hover:via-primary-dark-teal/40 transition-all duration-500'
              }`} />

              {/* Badge */}
              {tier.highlighted && (
                <div className="flex items-center gap-1.5 w-fit mb-6 px-3 py-1 rounded-full bg-industrial-copper/20 border border-industrial-copper/30">
                  <Zap className="w-3 h-3 text-industrial-copper" />
                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-industrial-copper">Most Popular</span>
                </div>
              )}

              {/* Plan name & desc */}
              <div className={tier.highlighted ? 'mb-6' : 'mb-6 mt-0 pt-0'} style={!tier.highlighted ? { paddingTop: '2rem' } : {}}>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-soft-industrial-gray mb-1">{tier.name}</p>
                <p className="text-xs text-soft-industrial-gray/70 leading-snug">{tier.desc}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {tier.priceMonthly ? (
                  <div className="flex items-end gap-2">
                    <motion.span
                      key={billing + tier.name}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-heading font-black text-5xl text-text-primary tabular-nums leading-none"
                    >
                      ${billing === 'monthly' ? tier.priceMonthly.toLocaleString() : tier.priceAnnual!.toLocaleString()}
                    </motion.span>
                    <span className="text-xs text-soft-industrial-gray mb-1.5">/month</span>
                  </div>
                ) : (
                  <span className="font-heading font-black text-5xl text-text-primary leading-none">Custom</span>
                )}
                {billing === 'annual' && tier.priceMonthly && (
                  <p className="text-[11px] text-primary-dark-teal mt-1.5 font-medium">
                    Billed annually — ${(tier.priceAnnual! * 12).toLocaleString()}/yr
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.07] mb-7" />

              {/* Features */}
              <ul className="space-y-3.5 flex-1 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    {f.included ? (
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                        tier.highlighted ? 'bg-industrial-copper/20' : 'bg-primary-dark-teal/20'
                      }`}>
                        <Check className={`w-2.5 h-2.5 ${tier.highlighted ? 'text-industrial-copper' : 'text-primary-dark-teal'}`} />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-white/[0.04] flex items-center justify-center mt-0.5">
                        <X className="w-2.5 h-2.5 text-white/20" />
                      </div>
                    )}
                    <span className={f.included ? 'text-text-primary/85' : 'text-soft-industrial-gray/30'}>{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.priceMonthly ? (
                tier.name === 'Starter' ? (
                  <Link
                    to="/product"
                    className={`group/btn relative w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-industrial-copper hover:bg-industrial-copper/85 text-text-primary'
                        : 'bg-white/[0.07] hover:bg-white/[0.12] text-text-primary border border-white/[0.1] hover:border-white/20'
                    }`}
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="relative">{tier.cta}</span>
                    <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                ) : (
                <button
                  onClick={() => setSelectedPlan({
                    name: tier.name,
                    price: billing === 'monthly' ? tier.priceMonthly! : tier.priceAnnual!,
                    billing,
                    features: tier.features.filter(f => f.included).map(f => f.text),
                  })}
                  className={`group/btn relative w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-industrial-copper hover:bg-industrial-copper/85 text-text-primary'
                      : 'bg-white/[0.07] hover:bg-white/[0.12] text-text-primary border border-white/[0.1] hover:border-white/20'
                  }`}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span className="relative">{tier.cta}</span>
                  <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
                )
              ) : (
                <Link
                  to="/#contact"
                  className="group/btn relative w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold overflow-hidden bg-white/[0.07] hover:bg-white/[0.12] text-text-primary border border-white/[0.1] hover:border-primary-dark-teal/40 transition-all duration-300"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span className="relative">{tier.cta}</span>
                  <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-[11px] text-soft-industrial-gray/50 mt-8 tracking-wide"
        >
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </motion.p>
      </div>

      <PayPalModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </section>
  );
}