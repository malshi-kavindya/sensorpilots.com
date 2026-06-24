import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const faqs = [
  {
    question: 'What is SensorPilots?',
    answer:
      'SensorPilots is an AI-powered predictive maintenance and industrial sensor analytics platform. We help manufacturers monitor equipment health, predict failures before they happen, and optimize maintenance schedules using machine learning.',
  },
  {
    question: 'How does the predictive maintenance work?',
    answer:
      'Our platform connects to your existing industrial sensors and IoT infrastructure. We ingest real-time vibration, temperature, pressure, and other sensor data, then apply proprietary ML models to detect anomalies and predict equipment failures days or weeks in advance.',
  },
  {
    question: 'What types of sensors and equipment do you support?',
    answer:
      'We support virtually any industrial sensor that generates time-series data, including vibration sensors, temperature sensors, pressure transducers, flow meters, and more. Our platform integrates with common IIoT protocols including MQTT, OPC-UA, Modbus, and BACnet.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most customers are up and running within 2–4 weeks. Our onboarding team handles sensor integration, model configuration, and dashboard setup. For complex enterprise deployments with custom models, timelines typically range from 4–8 weeks.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We implement encryption at rest and in transit, SOC 2 compliant infrastructure, role-based access controls, and regular security audits. Your sensor data remains your property and is never shared or sold to third parties.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer:
      'Our customers typically see a 30–50% reduction in unplanned downtime, 15–25% reduction in maintenance costs, and 10–20% extension in equipment lifespan. Most customers achieve full ROI within 6–12 months of deployment.',
  },
  {
    question: 'Do you offer custom model training?',
    answer:
      'Yes, our Enterprise AI tier includes custom model training tailored to your specific equipment and operational patterns. Our ML engineers work with your team to develop, validate, and deploy models optimized for your environment.',
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="faq-item-root">
      <button
        onClick={onToggle}
        className="faq-item-trigger"
        aria-expanded={isOpen}
      >
        <span className="faq-item-question">{question}</span>
        <ChevronDown
          className={`faq-item-chevron ${isOpen ? 'faq-item-chevron-open' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-item-answer-wrapper"
          >
            <div className="faq-item-answer-content">
              <p className="faq-item-answer">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FrequentlyAskedQuestions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="relative py-32 bg-deep-machine-shadow/30 overflow-hidden">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.faq-item-root{border-bottom:0.5px solid rgba(255,255,255,0.06);transition:border-color 0.3s}
.faq-item-root:first-child{border-top:0.5px solid rgba(255,255,255,0.06)}
.faq-item-trigger{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px 0;background:transparent;border:none;cursor:pointer;text-align:left;color:#edf2f5;transition:color 0.2s}
.faq-item-trigger:hover{color:#fff}
.faq-item-question{font-family:'IBM Plex Sans',sans-serif;font-size:15px;font-weight:600;line-height:1.4;letter-spacing:-0.01em;flex:1}
.faq-item-chevron{width:18px;height:18px;flex-shrink:0;color:rgba(232,112,64,0.7);transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),color 0.2s}
.faq-item-chevron-open{transform:rotate(180deg);color:#e87040}
.faq-item-answer-wrapper{overflow:hidden}
.faq-item-answer-content{padding-bottom:22px}
.faq-item-answer{font-size:13.5px;color:rgba(175,205,218,0.55);line-height:1.8;max-width:720px}
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary-dark-teal/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary-dark-teal/5 blur-[100px]" />
      </div>

      {/* Oversized watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <span
          className="text-[clamp(6rem,18vw,16rem)] font-black tracking-tighter leading-none text-white/[0.025] whitespace-nowrap"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          FAQ
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about SensorPilots"
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-primary-dark-teal/40 hover:bg-primary-dark-teal/10 text-soft-industrial-gray hover:text-text-primary text-sm font-semibold transition-all duration-300"
          >
            <HelpCircle className="w-4 h-4 text-industrial-copper" />
            Still have questions? Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
