import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const events = [
    { year: '2022', title: 'Founded', desc: 'SensorPilots founded by industrial engineers and AI researchers in Boston.' },
    { year: '2023', title: 'First Deployment', desc: 'Deployed at first automotive manufacturing plant. 38% downtime reduction achieved.' },
    { year: '2023', title: 'Seed Funding', desc: 'Raised $8M seed round led by top industrial technology VC.' },
    { year: '2024', title: 'Platform Launch', desc: 'Public launch of SensorPilots platform with 50,000+ sensors monitored.' },
    { year: '2024', title: 'Series A', desc: 'Raised $25M Series A to scale engineering and go-to-market.' },
    { year: '2025', title: 'Global Expansion', desc: 'Expanded to 15 countries with 1M+ sensors under monitoring.' },
    { year: '2026', title: 'Enterprise AI', desc: 'Launched custom AI model training and enterprise tier.' },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Company Timeline" subtitle="Key milestones in our journey" centered />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-dark-teal via-industrial-copper to-warm-signal-alert transform md:-translate-x-1/2" />
          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div key={event.year + event.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block md:w-1/2 md:text-right">
                  {i % 2 === 0 && (
                    <div>
                      <div className="font-heading font-bold text-2xl text-primary-dark-teal">{event.year}</div>
                      <h4 className="font-heading font-semibold text-text-primary mb-1">{event.title}</h4>
                      <p className="text-sm text-soft-industrial-gray">{event.desc}</p>
                    </div>
                  )}
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-industrial-copper border-2 border-background z-10" />
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <div className="md:hidden">
                    <div className="font-heading font-bold text-2xl text-primary-dark-teal">{event.year}</div>
                  </div>
                  {i % 2 === 1 && (
                    <div>
                      <div className="hidden md:block font-heading font-bold text-2xl text-primary-dark-teal">{event.year}</div>
                      <h4 className="font-heading font-semibold text-text-primary mb-1">{event.title}</h4>
                      <p className="text-sm text-soft-industrial-gray">{event.desc}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
