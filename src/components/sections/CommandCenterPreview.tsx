import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function MiniChart() {
  return (
    <svg className="w-full h-8" viewBox="0 0 200 32" fill="none">
      <path
        d="M0 28 Q 20 24 40 26 T 80 22 T 120 18 T 160 20 T 200 14"
        stroke="rgba(232,112,64,0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M0 28 Q 20 24 40 26 T 80 22 T 120 18 T 160 20 T 200 14 L 200 32 L 0 32 Z"
        fill="url(#chartGrad)"
        opacity="0.15"
      />
    </svg>
  );
}

function DonutChart() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
      <motion.circle
        cx="24" cy="24" r="18"
        stroke="#e87040"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="113"
        strokeDashoffset="28"
        transform="rotate(-90 24 24)"
        initial={{ strokeDashoffset: 113 }}
        animate={{ strokeDashoffset: 28 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.circle
        cx="24" cy="24" r="18"
        stroke="#1a7a9a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="113"
        strokeDashoffset="76"
        transform="rotate(120 24 24)"
        initial={{ strokeDashoffset: 113 }}
        animate={{ strokeDashoffset: 76 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
    </svg>
  );
}

export default function CommandCenterPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const alerts = [
    { label: 'Motor #7 · Vibration spike', time: '2m ago', severity: 'high' },
    { label: 'Conveyor Line 3 · Temp drop', time: '15m ago', severity: 'medium' },
    { label: 'Pump B12 · Pressure normal', time: '1h ago', severity: 'resolved' },
   
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.cp-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.cp-section-tag::before,.cp-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.cp-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.cp-sub{font-size:13px;color:rgba(175,205,218,0.45);text-align:center;max-width:360px;margin:0 auto 60px;line-height:1.65}
        `}</style>

        <div className="cp-section-tag">Platform Command Center</div>
        <h2 className="cp-title">Command Center Preview</h2>
        <p className="cp-sub">Real-time intelligence at your fingertips</p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(10,25,35,0.95)] to-[rgba(5,12,18,0.95)] overflow-hidden shadow-2xl"
        >
          <svg className="absolute" style={{ width: 0, height: 0 }}>
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e87040" />
                <stop offset="100%" stopColor="#e87040" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.03]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4ecf8e] animate-pulse" />
                <span className="font-mono text-[11px] text-[rgba(200,220,228,0.5)]">LIVE</span>
              </div>
              <span className="font-mono text-[11px] text-[rgba(200,220,228,0.3)]">|</span>
              <span className="font-mono text-[11px] text-[rgba(200,220,228,0.45)]">Plant Alpha · Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              {['Overview', 'Sensors', 'Alerts', 'Analytics'].map((tab) => (
                <span
                  key={tab}
                  className={`font-mono text-[10px] px-2.5 py-1 rounded ${
                    tab === 'Overview'
                      ? 'bg-white/10 text-[rgba(200,220,228,0.7)]'
                      : 'text-[rgba(200,220,228,0.25)] hover:text-[rgba(200,220,228,0.5)] cursor-pointer transition-colors'
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Overall Health', value: '94.2%', color: 'text-[#4ecf8e]', sub: '+2.1% vs yesterday' },
                  { label: 'Active Sensors', value: '2,847', color: 'text-[rgba(200,220,228,0.85)]', sub: '12 offline' },
                  { label: 'Avg Response', value: '48ms', color: 'text-[rgba(200,220,228,0.85)]', sub: '< 50ms target' },
                  { label: 'Uptime SLA', value: '99.97%', color: 'text-[#4ecf8e]', sub: '30d rolling' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="p-5 rounded-lg bg-white/[0.04] border border-white/[0.06]"
                  >
                    <div className="text-[10px] font-mono text-[rgba(200,220,228,0.3)] uppercase mb-1">{stat.label}</div>
                    <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[9px] font-mono text-[rgba(200,220,228,0.2)] mt-0.5">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-5 rounded-lg bg-white/[0.04] border border-white/[0.06]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[rgba(200,220,228,0.35)] uppercase">Sensor Throughput (24h)</span>
                  <span className="text-[10px] font-mono text-[rgba(200,220,228,0.25)]">2.4M signals/s</span>
                </div>
                <MiniChart />
                <div className="flex justify-between mt-1.5">
                  {['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', 'Now'].map((t) => (
                    <span key={t} className="text-[8px] font-mono text-[rgba(200,220,228,0.15)]">{t}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="grid grid-cols-3 gap-3"
              >
                {[
                  { label: 'Machine Health Scores', value: '87.4%', sub: '42 machines · 3 warning', color: 'text-[#4ecf8e]', bar: '87.4%', barColor: 'bg-[#4ecf8e]' },
                  { label: 'Failure Probability', value: '12.3%', sub: 'Below threshold', color: 'text-[#e87040]', bar: '12.3%', barColor: 'bg-[#e87040]' },
                  { label: 'Prediction Accuracy', value: '96.7%', sub: '+0.4% vs last week', color: 'text-[rgba(200,220,228,0.85)]', bar: '96.7%', barColor: 'bg-[#1a7a9a]' },
                ].map((m) => (
                  <div key={m.label} className="p-5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[rgba(200,220,228,0.3)] uppercase">{m.label}</span>
                      <span className={`text-sm font-bold ${m.color}`}>{m.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: m.bar } : {}}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                        className={`h-full ${m.barColor} rounded-full`}
                      />
                    </div>
                    <div className="text-[9px] font-mono text-[rgba(200,220,228,0.2)] mt-1.5">{m.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>


            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="p-4 rounded-lg bg-white/[0.04] border border-white/[0.06]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[rgba(200,220,228,0.35)] uppercase">Asset Distribution</span>
                  <DonutChart />
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Motors', count: 18, color: 'bg-[#e87040]' },
                    { label: 'Pumps', count: 12, color: 'bg-[#1a7a9a]' },
                    { label: 'Conveyors', count: 8, color: 'bg-[rgba(200,220,228,0.3)]' },
                    { label: 'Valves', count: 4, color: 'bg-[rgba(200,220,228,0.12)]' },
                  ].map((a) => (
                    <div key={a.label} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${a.color}`} />
                      <span className="flex-1 text-[11px] text-[rgba(200,220,228,0.45)]">{a.label}</span>
                      <span className="text-[11px] text-[rgba(200,220,228,0.6)] font-mono">{a.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="p-4 rounded-lg bg-white/[0.04] border border-white/[0.06]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[rgba(200,220,228,0.35)] uppercase">Recent Alerts</span>
                  <span className="text-[9px] font-mono text-[rgba(200,220,228,0.2)]">4 new</span>
                </div>
                <div className="space-y-2">
                  {alerts.map((a) => (
                    <div key={a.label} className="flex items-start gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${
                        a.severity === 'high' ? 'bg-[#e87040]' :
                        a.severity === 'medium' ? 'bg-[#d4a030]' :
                        a.severity === 'resolved' ? 'bg-[#4ecf8e]' : 'bg-[rgba(200,220,228,0.2)]'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-[rgba(200,220,228,0.5)] truncate">{a.label}</div>
                        <div className="text-[9px] font-mono text-[rgba(200,220,228,0.2)]">{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>


            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="col-span-1 lg:col-span-3 p-4 rounded-lg bg-white/[0.04] border border-white/[0.06]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[rgba(200,220,228,0.35)] uppercase">Equipment Status Overview</span>
                <span className="text-[9px] font-mono text-[rgba(200,220,228,0.2)]">Auto-refreshing</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                {[
                  { id: 'M-001', label: 'Motor A1', status: 'online', temp: '72°C', vib: '0.4mm' },
                  { id: 'M-007', label: 'Motor B3', status: 'warning', temp: '89°C', vib: '1.2mm' },
                  { id: 'P-012', label: 'Pump C2', status: 'online', temp: '64°C', vib: '0.3mm' },
                  { id: 'P-004', label: 'Pump D1', status: 'critical', temp: '94°C', vib: '2.1mm' },
                  { id: 'C-003', label: 'Conv. Line 3', status: 'online', temp: '—', vib: '0.6mm' },
                  { id: 'F-001', label: 'Furnace A', status: 'idle', temp: '155°C', vib: '—' },
                  { id: 'V-008', label: 'Valve Unit 2', status: 'online', temp: '48°C', vib: '0.1mm' },
                  { id: 'M-012', label: 'Motor C7', status: 'offline', temp: '—', vib: '—' },
                ].map((eq) => (
                  <div
                    key={eq.id}
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        eq.status === 'online' ? 'bg-[#4ecf8e]' :
                        eq.status === 'warning' ? 'bg-[#d4a030]' :
                        eq.status === 'critical' ? 'bg-[#e87040]' :
                        eq.status === 'idle' ? 'bg-[rgba(200,220,228,0.3)]' :
                        'bg-[rgba(200,220,228,0.1)]'
                      }`} />
                      <span className="text-[9px] font-mono text-[rgba(200,220,228,0.25)]">{eq.id}</span>
                    </div>
                    <div className="text-[11px] text-[rgba(200,220,228,0.6)] font-medium">{eq.label}</div>
                    <div className="flex gap-2 mt-1">
                      {eq.temp !== '—' && <span className="text-[8px] font-mono text-[rgba(200,220,228,0.2)]">{eq.temp}</span>}
                      {eq.vib !== '—' && <span className="text-[8px] font-mono text-[rgba(200,220,228,0.2)]">{eq.vib}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
