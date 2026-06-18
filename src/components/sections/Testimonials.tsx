import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: "SensorPilots reduced our unplanned downtime by 42% in the first quarter. The predictive accuracy is unlike anything we've seen.",
      author: 'Dr. Sarah Chen',
      role: 'VP of Operations, Meridian Manufacturing',
    },
    {
      quote: "The sensor analytics platform gave us visibility into our turbine health we never had before. Real game changer for our maintenance program.",
      author: 'James Rodriguez',
      role: 'Chief Engineer, Apex Energy',
    },
    {
      quote: "Deploying SensorPilots across 12 plants was seamless. The AI engine started detecting anomalies within days of sensor connection.",
      author: 'Priya Patel',
      role: 'Director of Digital Transformation, Titan Automotive',
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Enterprise Testimonials"
          subtitle="What industrial leaders say about SensorPilots"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-industrial-copper/40 mb-4" />
              <p className="text-text-primary leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-dark-teal/30 flex items-center justify-center">
                  <span className="font-heading font-bold text-text-primary text-sm">
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-text-primary text-sm">{t.author}</div>
                  <div className="text-xs text-soft-industrial-gray">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
