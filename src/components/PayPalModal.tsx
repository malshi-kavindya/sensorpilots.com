import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { X, Check } from 'lucide-react';

interface Plan {
  name: string;
  price: number;
  billing: 'monthly' | 'annual';
  features: string[];
}

interface PayPalModalProps {
  plan: Plan | null;
  onClose: () => void;
}

export default function PayPalModal({ plan, onClose }: PayPalModalProps) {
  useEffect(() => {
    if (plan) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [plan]);

  return (
    <AnimatePresence>
      {plan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-soft-industrial-gray hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl text-text-primary mb-1">
                {plan.name} Plan
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-bold text-3xl text-text-primary">
                  ${plan.price}
                </span>
                <span className="text-soft-industrial-gray text-sm">/{plan.billing === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text-primary">
                  <Check className="w-4 h-4 text-primary-dark-teal flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-5">
              <PayPalButtons
                createOrder={(_data, actions) =>
                  actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                      amount: { value: plan.price.toString(), currency_code: 'USD' },
                      description: `SensorPilots ${plan.name} Plan (${plan.billing})`,
                    }],
                  })
                }
                onApprove={async (_data, actions) => {
                  await actions.order!.capture();
                  onClose();
                }}
                onError={(_err) => {}}
                style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
