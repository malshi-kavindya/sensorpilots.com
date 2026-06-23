import { Link } from 'react-router-dom';
import { Cpu, Activity, TrendingUp, ShieldAlert, Layers, Terminal } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function SectionWrapper({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>
      {children}
    </section>
  );
}

function AnimateIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Product() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-body selection:bg-industrial-copper selection:text-white overflow-x-hidden antialiased">

      {/* GLOBAL INJECTED KINETIC DESIGN EFFECTS */}
      <style>{`
        @keyframes panGrid {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
        @keyframes floatNode {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.25; }
          50% { transform: translateY(-15px) scale(1.08); opacity: 0.55; }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1) translate(0px, 0px); opacity: 0.12; }
          50% { transform: scale(1.15) translate(15px, -15px); opacity: 0.18; }
        }
        .animated-grid {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(16, 76, 100, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 76, 100, 0.04) 1px, transparent 1px);
          animation: panGrid 16s linear infinite;
        }
        .node-float-fast { animation: floatNode 5s ease-in-out infinite; }
        .node-float-slow { animation: floatNode 8s ease-in-out infinite 1s; }
        .node-float-delayed { animation: floatNode 11s ease-in-out infinite 2.2s; }
        .radial-glow-1 { animation: pulseGlow 12s ease-in-out infinite alternate; }
        .radial-glow-2 { animation: pulseGlow 15s ease-in-out infinite alternate-reverse; }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-20 border-b border-white/[0.06] overflow-hidden bg-background">
        <div className="absolute inset-0 animated-grid pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-0" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-dark-teal rounded-full blur-[140px] pointer-events-none radial-glow-1 z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-industrial-copper rounded-full blur-[160px] pointer-events-none radial-glow-2 z-0" />
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
          <div className="absolute top-[18%] left-[15%] w-8 h-8 bg-industrial-copper rounded-sm blur-[1px] node-float-fast" />
          <div className="absolute top-[42%] left-[22%] w-11 h-11 bg-primary-dark-teal rounded-sm blur-[2px] node-float-slow" />
          <div className="absolute top-[68%] left-[8%] w-12 h-12 bg-industrial-copper rounded-sm blur-[1px] node-float-delayed" />
          <div className="absolute top-[78%] left-[42%] w-7 h-7 bg-primary-dark-teal rounded-sm blur-[2px] node-float-fast" />
          <div className="absolute bottom-[18%] left-[26%] w-14 h-14 bg-industrial-copper rounded-sm blur-[3px] node-float-slow" />
          <div className="absolute top-[12%] left-[78%] w-9 h-9 bg-primary-dark-teal rounded-sm blur-[1px] node-float-delayed" />
          <div className="absolute bottom-[30%] left-[82%] w-11 h-11 bg-industrial-copper rounded-sm blur-[2px] node-float-fast" />
          <div className="absolute top-[52%] left-[74%] w-10 h-10 bg-primary-dark-teal/40 rounded-sm blur-[3px] node-float-slow" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.1] backdrop-blur-md mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#4ecf8e] animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-soft-industrial-gray uppercase">Powered by NVIDIA H100 Tensor Core</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading mb-6 bg-gradient-to-r from-white via-text-primary to-primary-dark-teal bg-clip-text text-transparent drop-shadow-sm">
            Smart Grid Optimization & <br />
            <span className="bg-gradient-to-r from-industrial-copper to-[#d4a030] bg-clip-text text-transparent">Energy Forecasting AI</span>
          </h1>

          <p className="text-[14px] text-[rgba(175,205,218,0.5)] leading-[1.65] max-w-[480px] mx-auto mb-10 font-body">
            GridMinds AI scales infrastructure monitoring, utility automation, and renewable energy forecasting using next-generation parallel GPU architectures.
          </p>

          <div className="flex gap-2.5 flex-wrap items-center justify-center">
            <Link
              to="/product"
              className="flex items-center gap-[7px] px-7 py-[13px] bg-[#e87040] hover:bg-[#cf5e30] rounded-lg text-white text-[15px] font-extrabold no-underline transition-all duration-200 hover:-translate-y-[1px]"
            >
              Launch Live Dashboard
            </Link>
            <Link
              to="/#contact"
              className="flex items-center gap-[7px] px-[26px] py-3 border-[1.5px] border-white/20 hover:border-white/48 rounded-lg text-[rgba(237,245,250,0.82)] text-[15px] font-bold no-underline transition-all duration-200 hover:-translate-y-[1px]"
            >
              Contact Us <span className="opacity-65 text-[16px]">›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: BENTO GRID */}
      <SectionWrapper className="bg-deep-machine-shadow/30 border-b border-white/[0.06]">
        <div className="px-6 max-w-7xl mx-auto">
          <AnimateIn>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black font-heading text-text-primary mb-2">Platform Capabilities</h2>
              <p className="text-[13px] text-soft-industrial-gray">Autonomous energy intelligence encapsulated into highly performant layout matrices.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large card */}
            <AnimateIn delay={0.1}>
              <div className="group/card md:col-span-2 row-span-2 relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-8 flex flex-col justify-between hover:bg-white/[0.06] hover:border-primary-dark-teal/40 transition-all duration-300">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/0 to-transparent group-hover/card:via-primary-dark-teal/60 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-dark-teal/10 rounded-full blur-[80px] pointer-events-none group-hover/card:bg-primary-dark-teal/20 transition-all" />
                <div>
                  <div className="p-3 bg-primary-dark-teal/10 rounded-xl w-fit mb-6 text-primary-dark-teal">
                    <Activity size={28} />
                  </div>
                  <h3 className="text-[18px] font-bold font-heading mb-2">Real-Time SCADA & IoT Telemetry</h3>
                  <p className="text-[11px] text-soft-industrial-gray max-w-xl font-body leading-relaxed">
                    Processes and analyzes massive volumes of smart meter readings, substation monitoring loops, weather metrics, and transmission network status dynamically.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-4 text-[11px] font-mono text-[#4ecf8e]">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#4ecf8e]" /> 100k+ streams/sec</span>
                  <span className="text-white/[0.15]">|</span>
                  <span className="text-soft-industrial-gray">Low-latency data processing pipelines</span>
                </div>
              </div>
            </AnimateIn>

            {/* Demand Forecasting */}
            <AnimateIn delay={0.15}>
              <div className="group/card relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-8 flex flex-col justify-between hover:bg-white/[0.06] hover:border-primary-dark-teal/40 transition-all duration-300 h-full">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/0 to-transparent group-hover/card:via-primary-dark-teal/60 transition-all duration-500" />
                <div>
                  <div className="p-3 bg-industrial-copper/10 rounded-xl w-fit mb-6 text-industrial-copper">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-[15px] font-bold font-heading mb-2">Demand Forecasting</h3>
                  <p className="text-[11px] text-soft-industrial-gray font-body leading-relaxed">
                    Predictive insights mapped to weather influences and grid load histories.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-soft-industrial-gray/50">
                  Real-time load pattern analysis
                </div>
              </div>
            </AnimateIn>

            {/* Anomaly Detection */}
            <AnimateIn delay={0.2}>
              <div className="group/card relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-8 flex flex-col justify-between hover:bg-white/[0.06] hover:border-primary-dark-teal/40 transition-all duration-300 h-full">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/0 to-transparent group-hover/card:via-primary-dark-teal/60 transition-all duration-500" />
                <div>
                  <div className="p-3 bg-[#d4a030]/10 rounded-xl w-fit mb-6 text-[#d4a030]">
                    <ShieldAlert size={24} />
                  </div>
                  <h3 className="text-[15px] font-bold font-heading mb-2">Anomaly Detection</h3>
                  <p className="text-[11px] text-soft-industrial-gray font-body leading-relaxed">
                    Instant identification of infrastructural inefficiencies and potential network faults.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-soft-industrial-gray/50">
                  Multi-variate fault pattern matching
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Renewable Energy Matrix — standalone full-width card */}
          <AnimateIn delay={0.25}>
            <div className="group/card mt-6 relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white/[0.06] hover:border-primary-dark-teal/40 transition-all duration-300">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/0 to-transparent group-hover/card:via-primary-dark-teal/60 transition-all duration-500" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#4ecf8e]/10 text-[#4ecf8e] border border-[#4ecf8e]/20">LIVE METRIC</span>
                  <h3 className="text-[18px] font-bold font-heading">Renewable Energy Matrix</h3>
                </div>
                <p className="text-[11px] text-soft-industrial-gray font-body leading-relaxed">
                  GridMinds optimizes multi-tier clean energy integrations, regulating solar fluctuations and wind yield forecasts against active battery energy storage performance metrics.
                </p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-white/[0.07] font-mono text-[11px] w-full md:w-64 shrink-0">
                <div className="flex justify-between mb-2">
                  <span className="text-soft-industrial-gray/70">Solar Index:</span>
                  <span className="text-[#4ecf8e] font-semibold">94.2% Eff</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-industrial-gray/70">Grid Strain:</span>
                  <span className="text-[#d4a030] font-semibold">Nominal Minimal</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* SECTION 3: DEEP TECH */}
      <SectionWrapper className="border-b border-white/[0.06]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-dark-teal/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="px-6 max-w-4xl mx-auto">
          <AnimateIn>
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl p-8 md:p-12 relative z-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <h3 className="text-[18px] font-bold font-heading mb-3 text-text-primary">Autonomous Energy Intelligence Engine</h3>
                  <p className="text-soft-industrial-gray font-body text-[11px] leading-relaxed mb-3">
                    Our platform continuously reviews structural performance markers, power outputs, weather fluctuations, and infrastructure patterns to issue intelligent recommendations.
                  </p>
                  <p className="text-soft-industrial-gray font-body text-[11px] leading-relaxed">
                    By accelerating analytics workloads, GridMinds reduces standard iteration friction, empowering utilities to execute immediate grid re-routing strategies safely.
                  </p>
                </div>
                <div className="md:col-span-2 space-y-4 font-mono text-[11px]">
                  <div className="p-4 rounded-xl bg-background border border-white/[0.07]">
                    <span className="block text-soft-industrial-gray/70 mb-1">// SYSTEM METRIC</span>
                    <div className="text-text-primary font-semibold text-[13px]">Predictive Latency &lt; 14ms</div>
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-white/[0.07]">
                    <span className="block text-soft-industrial-gray/70 mb-1">// FAILURE HAZARD PREDICTION</span>
                    <div className="text-[#4ecf8e] font-semibold text-[13px]">99.4% Critical Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* SECTION 4: NVIDIA SDK */}
      <SectionWrapper className="bg-deep-machine-shadow/30 border-b border-white/[0.06]">
        <div className="px-6 max-w-7xl mx-auto">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-heading text-text-primary mb-3">Accelerated GPU Framework Integration</h2>
              <p className="text-[13px] text-soft-industrial-gray font-body">Leveraging NVIDIA's deep computational software layer to handle processing pipelines seamlessly.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "NVIDIA NeMo", desc: "Builds context-aware models interpreting consumption patterns and grid behaviors." },
              { title: "NVIDIA RAPIDS", desc: "Speeds up data ingestion of multi-million sensor inputs and telemetry feeds." },
              { title: "NVIDIA TensorRT", desc: "Optimizes models to output lightning-fast pipeline state classifications." },
              { title: "NVIDIA Triton", desc: "Ensures scalable, concurrent cross-cluster network model inferencing." },
              { title: "NVIDIA CUDA", desc: "Powers low-level multi-threaded linear algebraic compute layers." }
            ].map((sdk, index) => (
              <AnimateIn key={index} delay={0.1 + index * 0.08}>
                <div className="group/card p-6 rounded-xl border border-white/[0.07] bg-white/[0.025] flex flex-col justify-between hover:bg-white/[0.06] hover:border-primary-dark-teal/40 transition-all duration-300">
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-dark-teal/0 to-transparent group-hover/card:via-primary-dark-teal/60 transition-all duration-500" />
                  <div>
                    <div className="text-[10px] font-mono text-primary-dark-teal mb-2">SDK MODULE 0{index + 1}</div>
                    <h4 className="text-[15px] font-bold font-heading text-text-primary mb-1">{sdk.title}</h4>
                  </div>
                  <p className="text-[11px] text-soft-industrial-gray font-body leading-relaxed mt-3">{sdk.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 5: AWS EDGE */}
      <SectionWrapper className="border-b border-white/[0.06]">
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-industrial-copper/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateIn>
            <div>
              <div className="inline-block px-3 py-1 rounded bg-industrial-copper/10 text-industrial-copper text-[10px] font-mono mb-4 border border-industrial-copper/20">
                AWS EC2 ARCHITECTURE
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-text-primary mb-4">Enterprise Cloud Scalability</h2>
              <p className="text-[11px] text-soft-industrial-gray font-body mb-6 leading-relaxed">
                We design and configure GridMinds AI systems to scale horizontally over high-performance AWS GPU clusters. These target environments maintain operational precision even under highly demanding concurrent workloads.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-1.5 bg-white/[0.07] rounded text-primary-dark-teal"><Cpu size={16} /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-[13px] text-text-primary">Amazon EC2 P5 Instances</h4>
                    <p className="text-[11px] text-soft-industrial-gray font-body">Leveraging modern NVIDIA H100 Tensor Core GPUs for major model optimization cycles.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-1.5 bg-white/[0.07] rounded text-primary-dark-teal"><Layers size={16} /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-[13px] text-text-primary">Amazon EC2 P4d Instances</h4>
                    <p className="text-[11px] text-soft-industrial-gray font-body">Utilizing distributed NVIDIA A100 setups for sustained regional forecasting arrays.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="p-6 rounded-xl bg-background border border-white/[0.07] font-mono text-[11px] text-soft-industrial-gray relative shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/40" />
                  <span className="w-3 h-3 rounded-full bg-[#d4a030]/40" />
                  <span className="w-3 h-3 rounded-full bg-[#4ecf8e]/40" />
                  <span className="text-[11px] text-soft-industrial-gray/50 ml-2">aws_cluster_config.json</span>
                </div>
                <Terminal size={14} className="text-soft-industrial-gray/40" />
              </div>
              <pre className="text-soft-industrial-gray/70 overflow-x-auto p-2 bg-white/[0.025] rounded-lg">
{`{
  "infrastructure": {
    "provider": "AWS",
    "target_instances": ["p5.48xlarge", "p4d.24xlarge"],
    "accelerators": "NVIDIA H100 Tensor Core",
    "orchestration": "Triton Inference Server"
  },
  "workloads": {
    "smart_grid_optimizations": "active",
    "load_balancing_concurrency": "scaled",
    "telemetry_ingest_rate": "real-time"
  }
}`}
              </pre>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* SECTION 6: METRICS */}
      <SectionWrapper className="bg-deep-machine-shadow/30">
        <div className="px-6 max-w-7xl mx-auto">
          <AnimateIn>
            <div className="p-8 md:p-16 rounded-xl border border-white/[0.07] bg-white/[0.025] relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4ecf8e]/5 rounded-full blur-[120px] pointer-events-none" />

              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-black font-heading text-text-primary mb-4">Our Core Scalability Commitments</h2>
                <p className="text-[13px] text-soft-industrial-gray font-body mb-10">
                  We focus on shifting global energy management platforms into optimized, proactive infrastructures using accelerated intelligence layers.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="text-2xl md:text-[28px] font-black font-heading text-industrial-copper mb-1">Accelerated</div>
                  <p className="text-[10px] text-soft-industrial-gray/70 font-body uppercase tracking-wider">Training Pipelines</p>
                </div>
                <div>
                  <div className="text-2xl md:text-[28px] font-black font-heading text-[#4ecf8e] mb-1">Enhanced</div>
                  <p className="text-[10px] text-soft-industrial-gray/70 font-body uppercase tracking-wider">Demand Accuracy</p>
                </div>
                <div>
                  <div className="text-2xl md:text-[28px] font-black font-heading text-text-primary mb-1">Optimized</div>
                  <p className="text-[10px] text-soft-industrial-gray/70 font-body uppercase tracking-wider">Renewable Ingestion</p>
                </div>
                <div>
                  <div className="text-2xl md:text-[28px] font-black font-heading text-primary-dark-teal mb-1">Enterprise</div>
                  <p className="text-[10px] text-soft-industrial-gray/70 font-body uppercase tracking-wider">Scale Validation</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

    </div>
  );
}
