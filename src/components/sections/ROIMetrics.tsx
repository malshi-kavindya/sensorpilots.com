import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import AnimatedCounter from '../AnimatedCounter';

export default function ROIMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { target: 40, prefix: '-', suffix: '%', label: 'Reduce Downtime' },
    { target: 32, prefix: '-', suffix: '%', label: 'Maintenance Cost Reduction' },
    { target: 28, prefix: '+', suffix: '%', label: 'Equipment Availability' },
    { target: 35, prefix: '+', suffix: '%', label: 'Operational Efficiency' },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-deep-machine-shadow/50 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Proven ROI Impact"
          subtitle="Measurable results from enterprise deployments"
          centered
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 text-center"
            >
              <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} label={m.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
