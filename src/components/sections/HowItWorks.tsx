import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import AnimatedCounter from '../AnimatedCounter';

const steps = [
  { num: '01', title: 'Connect Sensors', desc: 'Deploy IoT sensors across machines, lines, and facilities', icon: 'ti-wifi' },
  { num: '02', title: 'Ingest Data', desc: 'Stream millions of data points into the pipeline in real-time', icon: 'ti-database' },
  { num: '03', title: 'Analyze Signals', desc: 'AI processes vibration, temperature, pressure, and performance data', icon: 'ti-brain' },
  { num: '04', title: 'Predict Failures', desc: 'Machine learning models forecast equipment failures with confidence', icon: 'ti-alert-triangle' },
  { num: '05', title: 'Optimize Maintenance', desc: 'Intelligent scheduling based on predicted health and availability', icon: 'ti-wrench' },
];

const metrics = [
  { target: 40, prefix: '-', suffix: '%', label: 'Reduce Downtime' },
  { target: 32, prefix: '-', suffix: '%', label: 'Maintenance Cost Reduction' },
  { target: 28, prefix: '+', suffix: '%', label: 'Equipment Availability' },
  { target: 35, prefix: '+', suffix: '%', label: 'Operational Efficiency' },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="hw-section">
      {/* Background decorative elements */}
      <div className="hw-bg">
        <div className="hw-grid-lines" />
        <div className="hw-glow1" />
        <div className="hw-glow2" />
      </div>
      <div className="hw-inner">
        <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.hw-section{position:relative;background:#0b1820;padding:80px 0 88px;overflow:hidden;font-family:'IBM Plex Sans',sans-serif;width:100%}
.hw-inner{position:relative;z-index:2;max-width:1280px;margin:0 auto;padding:0 24px}
.hw-bg{position:absolute;inset:0;pointer-events:none}
.hw-grid-lines{position:absolute;inset:0;opacity:0.03;background-image:linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px);background-size:80px 80px}
.hw-glow1{position:absolute;top:33%;left:25%;width:384px;height:384px;border-radius:50%;background:rgba(16,76,100,0.08);filter:blur(120px)}
.hw-glow2{position:absolute;bottom:25%;right:33%;width:320px;height:320px;border-radius:50%;background:rgba(16,76,100,0.05);filter:blur(100px)}
.hw-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.hw-section-tag::before,.hw-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.hw-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.hw-sub{font-size:13px;color:rgba(175,205,218,0.45);text-align:center;max-width:640px;margin:0 auto 60px;line-height:1.65}
.hw-timeline{position:relative}
.hw-timeline-line{display:none}
@media(min-width:1024px){.hw-timeline-line{display:block;position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(255,255,255,0.06);transform:translateX(-50%)}}
.hw-step-row{position:relative}
.hw-step-row+.hw-step-row{margin-top:16px}
@media(min-width:1024px){.hw-step-row{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}.hw-step-row+.hw-step-row{margin-top:48px}}
.hw-step-circle{display:none}
@media(min-width:1024px){.hw-step-circle{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;background:#0b1820;border:1px solid rgba(232,112,64,0.5);display:flex;align-items:center;justify-content:center;z-index:2}}
.hw-step-circle span{font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:500;color:#e87040}
.hw-step-spacer{display:none}
@media(min-width:1024px){.hw-step-spacer{display:block}.hw-step-right{grid-column:2}}
.hw-step-card{display:flex;align-items:flex-start;gap:16px;padding:20px 24px;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.025);cursor:default;transition:border-color 0.22s,background 0.22s}
.hw-step-card:hover{border-color:rgba(16,76,100,0.45);background:rgba(16,76,100,0.06)}
.hw-step-icon{width:40px;height:40px;border-radius:8px;border:0.5px solid rgba(16,76,100,0.35);background:rgba(16,76,100,0.12);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:border-color 0.22s,background 0.22s}
.hw-step-icon .step-num{font-family:'IBM Plex Sans',sans-serif;font-size:16px;font-weight:700;color:rgba(16,76,100,0.9);transition:color 0.22s}
.hw-step-card:hover .hw-step-icon .step-num{color:#e87040}
.hw-step-card:hover .hw-step-icon{border-color:rgba(232,112,64,0.45);background:rgba(232,112,64,0.09)}
.hw-step-icon i{font-size:18px;color:rgba(16,76,100,0.9);transition:color 0.22s}
.hw-step-card:hover .hw-step-icon i{color:#e87040}
.hw-step-num{font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(232,112,64,0.55);margin-bottom:4px}
.hw-step-title{font-size:15px;font-weight:700;color:#edf2f5;margin-bottom:4px;line-height:1.3}
.hw-step-desc{font-size:11px;color:rgba(175,205,218,0.38);line-height:1.6}
.hw-divider{display:flex;align-items:center;gap:16px;margin:56px 0;justify-content:center}
.hw-divider-line{width:80px;height:0.5px;background:rgba(255,255,255,0.05)}
.hw-divider-icon{width:36px;height:36px;border-radius:50%;border:0.5px solid rgba(16,76,100,0.4);background:rgba(16,76,100,0.08);display:flex;align-items:center;justify-content:center}
.hw-divider-icon i{font-size:14px;color:rgba(232,112,64,0.65)}
.hw-metrics-title{font-size:20px;font-weight:700;color:#edf2f5;text-align:center;margin-bottom:6px}
.hw-metrics-sub{font-size:12px;color:rgba(175,205,218,0.38);text-align:center;max-width:400px;margin:0 auto 40px;line-height:1.6}
.hw-metrics-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
@media(min-width:1024px){.hw-metrics-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
.hw-metric-card{position:relative;padding:26px 20px;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.025);overflow:hidden;transition:border-color 0.22s;cursor:default;text-align:center}
.hw-metric-card:hover{border-color:rgba(16,76,100,0.45);background:rgba(16,76,100,0.06)}
.hw-metric-value{font-size:32px;font-weight:900;color:#edf2f5;letter-spacing:-0.03em;line-height:1;font-family:'IBM Plex Sans',sans-serif}
.hw-metric-label{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.3);letter-spacing:0.07em;text-transform:uppercase;margin-top:6px}
        `}</style>

        <h2 className="sr-only">How it works — from sensor to intelligence in five steps</h2>

        <div className="hw-section-tag">How It Works</div>
        <h2 className="hw-title">From sensor to intelligence<br />in five steps.</h2>
        <p className="hw-sub">Backed by measurable enterprise results — deployed and proven across 500+ industrial sites.</p>

        <div className="hw-timeline">
          <div className="hw-timeline-line" />

          <div>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="hw-step-row"
              >
                <div className="hw-step-circle">
                  <span>{step.num}</span>
                </div>

                <div className={i % 2 === 1 ? 'hw-step-right' : ''}>
                  <div className="hw-step-card">
                    <div className="hw-step-icon">
                      <span className="step-num">{step.num}</span>
                    </div>
                    <div>
                      <div className="hw-step-num">Step {step.num}</div>
                      <h3 className="hw-step-title">{step.title}</h3>
                      <p className="hw-step-desc">{step.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="hw-step-spacer" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hw-divider">
          <div className="hw-divider-line" />
          <div className="hw-divider-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1 L14 4.5 V11.5 L8 15 L2 11.5 V4.5 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
              <line x1="8" y1="5" x2="8" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <line x1="5" y1="6.5" x2="11" y2="6.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <line x1="5" y1="9.5" x2="11" y2="9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div className="hw-divider-line" />
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="hw-metrics-title"
          >
            Proven ROI Impact
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65 }}
            className="hw-metrics-sub"
          >
            Measurable results from enterprise deployments
          </motion.p>

          <div className="hw-metrics-grid">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="hw-metric-card"
              >
                <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} label={m.label} valueClassName="hw-metric-value" labelClassName="hw-metric-label" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
