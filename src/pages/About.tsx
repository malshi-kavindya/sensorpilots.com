import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Rocket, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
            <Globe className="w-4 h-4 text-industrial-copper" />
            <span className="text-sm font-mono text-soft-industrial-gray">Our Story</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Building the Future of
            <br />
            <span className="text-gradient-teal">Industrial Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto leading-relaxed">
            SensorPilots was founded by Kavya Narayanan, who believes industrial machines should be intelligent. We're building the infrastructure to make that reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-industrial-copper font-mono text-sm uppercase tracking-wider mb-4 block">Company Story</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
              From Factory Floor to AI Platform
            </h2>
            <div className="space-y-4 text-soft-industrial-gray leading-relaxed">
              <p>
                SensorPilots was founded on January 27, 2024 when Kavya Narayanan recognized a critical gap: the world's manufacturing infrastructure was generating petabytes of sensor data, but almost none of it was being used to predict failures.
              </p>
              <p>
                We started by building predictive models for a single automotive plant. Within six months, we had reduced unplanned downtime by 38%. The approach scaled. Today, SensorPilots monitors over 2 million industrial sensors across 15 countries.
              </p>
              <p>
                Our mission remains unchanged: transform industrial operations through predictive intelligence. Every machine should know when it needs maintenance before it fails.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-2xl border border-white/10 bg-background/80 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-primary-dark-teal">2024</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Founded</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-industrial-copper">150+</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Team Members</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-warm-signal-alert">2M+</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Sensors Monitored</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                  <div className="font-heading font-bold text-3xl text-primary-dark-teal">15</div>
                  <div className="text-xs text-soft-industrial-gray mt-1">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: Target,
      title: 'Mission',
      desc: 'Make every industrial machine intelligent through predictive AI. Eliminate unplanned downtime and extend equipment life through data-driven maintenance.',
      color: 'bg-primary-dark-teal/20',
      border: 'border-primary-dark-teal/30',
    },
    {
      icon: Eye,
      title: 'Vision',
      desc: 'A world where industrial failures are predicted, not experienced. Where maintenance is proactive, not reactive. Where machines and humans work together with full visibility.',
      color: 'bg-industrial-copper/20',
      border: 'border-industrial-copper/30',
    },
    {
      icon: Rocket,
      title: 'Future',
      desc: 'Autonomous maintenance systems that self-diagnose, self-schedule, and self-optimize. AI that not only predicts failures but prescribes optimal repair strategies.',
      color: 'bg-warm-signal-alert/20',
      border: 'border-warm-signal-alert/30',
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Mission, Vision & Future" subtitle="Why we exist and where we're going" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
              <div className={`w-12 h-12 rounded-lg ${card.color} ${card.border} border flex items-center justify-center mb-4`}>
                <card.icon className="w-6 h-6 text-text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">{card.title}</h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const leaders = [
    { name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder', initials: 'SC', bg: 'bg-primary-dark-teal/30' },
    { name: 'James Rodriguez', role: 'CTO & Co-Founder', initials: 'JR', bg: 'bg-industrial-copper/30' },
    { name: 'Priya Patel', role: 'VP of Engineering', initials: 'PP', bg: 'bg-warm-signal-alert/30' },
    { name: 'Dr. Marcus Wei', role: 'Chief Scientist', initials: 'MW', bg: 'bg-primary-dark-teal/30' },
    { name: 'Elena Volkov', role: 'VP of Product', initials: 'EV', bg: 'bg-industrial-copper/30' },
    { name: 'David Kim', role: 'VP of Sales', initials: 'DK', bg: 'bg-warm-signal-alert/30' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Leadership" subtitle="Engineers and researchers building the future of industry" centered />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {leaders.map((leader, i) => (
            <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className={`w-16 h-16 rounded-full ${leader.bg} flex items-center justify-center mx-auto mb-3`}>
                <span className="font-heading font-bold text-text-primary text-lg">{leader.initials}</span>
              </div>
              <h4 className="font-heading font-semibold text-text-primary text-sm mb-1">{leader.name}</h4>
              <p className="text-xs text-soft-industrial-gray">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const events = [
    { year: '2024', title: 'Founded', desc: 'SensorPilots founded by Kavya Narayanan in South San Francisco.' },
    { year: '2024', title: 'First Deployment', desc: 'Deployed at first automotive manufacturing plant. 38% downtime reduction achieved.' },
    { year: '2024', title: 'Seed Funding', desc: 'Raised $8M seed round led by top industrial technology VC.' },
    { year: '2025', title: 'Platform Launch', desc: 'Public launch of SensorPilots platform with 50,000+ sensors monitored.' },
    { year: '2025', title: 'Series A', desc: 'Raised $25M Series A to scale engineering and go-to-market.' },
    { year: '2026', title: 'Global Expansion', desc: 'Expanded to 15 countries with 1M+ sensors under monitoring.' },
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
              <motion.div key={event.year} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
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

export default function About() {
  return (
    <div>
      <AboutHero />
      <StorySection />
      <MissionVision />
      <LeadershipSection />
      <Timeline />
    </div>
  );
}
