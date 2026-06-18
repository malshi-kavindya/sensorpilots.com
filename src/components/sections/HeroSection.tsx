import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Signal } from 'lucide-react';

export default function HeroSection() {
  const [particles, setParticles] = useState<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(p);
    let raf: number;
    const animate = () => {
      setParticles((prev) =>
        prev.map((pt) => ({
          ...pt,
          x: (pt.x + pt.vx + window.innerWidth) % window.innerWidth,
          y: (pt.y + pt.vy + window.innerHeight) % window.innerHeight,
        }))
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {particles.map((pt, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-dark-teal"
            style={{
              left: pt.x,
              top: pt.y,
              width: pt.size,
              height: pt.size,
              opacity: pt.opacity,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <Signal className="w-4 h-4 text-warm-signal-alert" />
            <span className="text-sm font-mono text-soft-industrial-gray">
              Industrial Intelligence Command Center
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6">
            Predictive Maintenance
            <br />
            <span className="text-gradient-copper">Intelligence</span>
            <br />
            for Modern Manufacturing
          </h1>

          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform industrial sensor streams into actionable AI-driven maintenance intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Book Demo
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/product"
              className="group flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-text-primary font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Explore Platform
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '2M+', label: 'Sensors Monitored' },
            { value: '99.7%', label: 'Uptime SLA' },
            { value: '50TB', label: 'Daily Data Ingestion' },
            { value: '<50ms', label: 'Inference Latency' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-lg bg-white/5 border border-white/5">
              <div className="font-heading font-bold text-2xl text-text-primary">{stat.value}</div>
              <div className="text-sm text-soft-industrial-gray mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
