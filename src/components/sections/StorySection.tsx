export default function StorySection() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.st-root{position:relative;background:#0b1820;padding:80px 48px 88px;font-family:'IBM Plex Sans',sans-serif;width:100%;overflow:hidden}
.st-content{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.st-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;margin-bottom:22px}
.st-tag::before{content:'';display:block;width:28px;height:1px;background:rgba(232,112,64,0.35)}
.st-title{font-size:36px;font-weight:900;color:#edf2f5;line-height:1.1;letter-spacing:-0.02em;margin-bottom:28px}
.st-title em{font-style:normal;color:#e87040}
.st-body{display:flex;flex-direction:column;gap:16px}
.st-p{font-size:12.5px;color:rgba(175,205,218,0.42);line-height:1.8}
.st-p strong{color:rgba(175,205,218,0.72);font-weight:600}
.st-right{display:flex;flex-direction:column;gap:12px}
.st-stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.st-stat{position:relative;padding:22px 20px;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.025);overflow:hidden;transition:border-color 0.22s}
.st-stat:hover{border-color:rgba(16,76,100,0.45)}
.st-stat-bg{position:absolute;bottom:-8px;right:-8px;width:56px;height:56px;border-radius:50%;opacity:0.06}
.st-stat-num{font-size:32px;font-weight:900;color:#edf2f5;letter-spacing:-0.03em;line-height:1}
.st-stat-num.copper{color:#e87040}
.st-stat-num.teal{color:#1d7a9a}
.st-stat-lbl{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.3);letter-spacing:0.08em;text-transform:uppercase;margin-top:5px}
.st-timeline{border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.02);padding:20px 22px;display:flex;flex-direction:column;gap:0}
.st-tl-header{font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(175,205,218,0.22);margin-bottom:16px}
.st-tl-item{display:flex;gap:14px;align-items:flex-start;padding:10px 0;border-bottom:0.5px solid rgba(255,255,255,0.04)}
.st-tl-item:last-child{border-bottom:none;padding-bottom:0}
.st-tl-dot-col{display:flex;flex-direction:column;align-items:center;gap:0;padding-top:3px}
.st-tl-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.st-tl-dot.active{background:#e87040;box-shadow:0 0 0 3px rgba(232,112,64,0.15)}
.st-tl-dot.done{background:#104c64}
.st-tl-line{width:1px;flex:1;min-height:16px;background:rgba(255,255,255,0.06);margin-top:4px}
.st-tl-body{flex:1}
.st-tl-year{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(232,112,64,0.55);letter-spacing:0.06em;margin-bottom:2px}
.st-tl-event{font-size:11px;font-weight:700;color:rgba(237,242,245,0.78);margin-bottom:1px}
.st-tl-detail{font-size:10px;color:rgba(175,205,218,0.32);line-height:1.5}
      `}</style>

      <h2 className="sr-only">SensorPilots company story — from factory floor to AI platform</h2>

      <div className="st-root">
        <div className="st-content">
          <div className="st-left">
            <div className="st-tag">Company Story</div>
            <h2 className="st-title">From Factory Floor<br />to <em>AI Platform</em></h2>
            <div className="st-body">
              <p className="st-p">SensorPilots began in 2022 when a team of industrial engineers and ML researchers recognized a critical gap: the world's manufacturing infrastructure was generating <strong>petabytes of sensor data</strong> — but almost none of it was being used to predict failures.</p>
              <p className="st-p">We started by building predictive models for a single automotive plant. Within six months, we had <strong>reduced unplanned downtime by 38%</strong>. The approach scaled. Today, SensorPilots monitors over 2 million industrial sensors across 15 countries.</p>
              <p className="st-p">Our mission remains unchanged: transform industrial operations through predictive intelligence. <strong>Every machine should know when it needs maintenance before it fails.</strong></p>
            </div>
          </div>

          <div className="st-right">
            <div className="st-stat-grid">
              <div className="st-stat">
                <div className="st-stat-bg" style={{ background: '#104c64' }} />
                <div className="st-stat-num teal">2022</div>
                <div className="st-stat-lbl">Founded</div>
              </div>
              <div className="st-stat">
                <div className="st-stat-bg" style={{ background: '#e87040' }} />
                <div className="st-stat-num copper">150+</div>
                <div className="st-stat-lbl">Team Members</div>
              </div>
              <div className="st-stat">
                <div className="st-stat-bg" style={{ background: '#e87040' }} />
                <div className="st-stat-num copper">2M+</div>
                <div className="st-stat-lbl">Sensors Monitored</div>
              </div>
              <div className="st-stat">
                <div className="st-stat-bg" style={{ background: '#104c64' }} />
                <div className="st-stat-num teal">15</div>
                <div className="st-stat-lbl">Countries</div>
              </div>
            </div>

            <div className="st-timeline">
              <div className="st-tl-header">/ Growth Timeline</div>

              <div className="st-tl-item">
                <div className="st-tl-dot-col"><div className="st-tl-dot done" /><div className="st-tl-line" /></div>
                <div className="st-tl-body">
                  <div className="st-tl-year">2022 — Q1</div>
                  <div className="st-tl-event">Company Founded</div>
                  <div className="st-tl-detail">Industrial engineers + ML researchers form SensorPilots in Berlin</div>
                </div>
              </div>

              <div className="st-tl-item">
                <div className="st-tl-dot-col"><div className="st-tl-dot done" /><div className="st-tl-line" /></div>
                <div className="st-tl-body">
                  <div className="st-tl-year">2022 — Q4</div>
                  <div className="st-tl-event">First Deployment</div>
                  <div className="st-tl-detail">Automotive plant pilot — 38% reduction in unplanned downtime</div>
                </div>
              </div>

              <div className="st-tl-item">
                <div className="st-tl-dot-col"><div className="st-tl-dot done" /><div className="st-tl-line" /></div>
                <div className="st-tl-body">
                  <div className="st-tl-year">2023 — Q2</div>
                  <div className="st-tl-event">Series A · $18M</div>
                  <div className="st-tl-detail">Scaled to 200k sensors, expanded to 6 countries</div>
                </div>
              </div>

              <div className="st-tl-item">
                <div className="st-tl-dot-col"><div className="st-tl-dot active" /><div className="st-tl-line" /></div>
                <div className="st-tl-body">
                  <div className="st-tl-year">2024 — Now</div>
                  <div className="st-tl-event">2M+ Sensors · 15 Countries</div>
                  <div className="st-tl-detail">NVIDIA partnership · 150-person team · global deployments</div>
                </div>
              </div>

              <div className="st-tl-item">
                <div className="st-tl-dot-col"><div className="st-tl-dot" style={{ background: 'rgba(255,255,255,0.1)', border: '0.5px dashed rgba(255,255,255,0.2)' }} /></div>
                <div className="st-tl-body">
                  <div className="st-tl-year">2025 — Roadmap</div>
                  <div className="st-tl-event">Autonomous Maintenance</div>
                  <div className="st-tl-detail">Self-diagnosing, self-scheduling AI maintenance agents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
