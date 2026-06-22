export default function IndustrialProblem() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.ip-root{position:relative;background:#0b1820;padding:80px 48px 88px;font-family:'IBM Plex Sans',sans-serif;width:100%;overflow:hidden}
.ip-content{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.ip-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;margin-bottom:20px}
.ip-tag::before{content:'';display:block;width:28px;height:1px;background:rgba(232,112,64,0.35)}
.ip-title{font-size:34px;font-weight:900;color:#edf2f5;line-height:1.1;letter-spacing:-0.02em;margin-bottom:32px}
.ip-title em{font-style:normal;color:#e87040}
.ip-problems{display:flex;flex-direction:column;gap:7px}
.ip-problem{display:flex;align-items:center;gap:12px;padding:13px 16px;border:0.5px solid rgba(255,255,255,0.07);border-radius:10px;background:rgba(255,255,255,0.025);cursor:default;transition:border-color 0.22s,background 0.22s;position:relative;overflow:hidden}
.ip-problem::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:#e87040;opacity:0;border-radius:3px 0 0 3px;transition:opacity 0.22s}
.ip-problem:hover{border-color:rgba(232,80,50,0.35);background:rgba(232,80,50,0.06)}
.ip-problem:hover::before{opacity:1}
.ip-prob-icon{font-size:14px;color:rgba(232,112,64,0.6);flex-shrink:0;transition:color 0.22s}
.ip-problem:hover .ip-prob-icon{color:#e87040}
.ip-prob-label{font-size:13px;font-weight:600;color:rgba(237,242,245,0.72);transition:color 0.22s;flex:1}
.ip-problem:hover .ip-prob-label{color:#edf2f5}
.ip-prob-stat{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(232,112,64,0.4);letter-spacing:0.06em;flex-shrink:0}
.ip-dashboard{border:0.5px solid rgba(255,255,255,0.09);border-radius:14px;background:rgba(8,16,22,0.85);overflow:hidden}
.ip-dash-topbar{padding:12px 16px;border-bottom:0.5px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.2)}
.ip-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.ip-dash-title{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.35);letter-spacing:0.08em;margin-left:4px;flex:1}
.ip-live-pill{display:flex;align-items:center;gap:5px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:#e87040;letter-spacing:0.07em}
.ip-live-dot{width:5px;height:5px;border-radius:50%;background:#e87040;animation:blink 1.4s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
.ip-dash-body{padding:14px}
.ip-dash-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
.ip-alert-card{padding:14px;border-radius:10px;border:0.5px solid rgba(232,80,50,0.35);background:rgba(232,80,50,0.06);position:relative;overflow:hidden}
.ip-alert-card::after{content:'ALERT';position:absolute;top:8px;right:10px;font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:0.1em;color:rgba(232,80,50,0.5)}
.ip-status-card{padding:14px;border-radius:10px;border:0.5px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.025)}
.ip-card-icon-row{display:flex;align-items:center;gap:6px;margin-bottom:8px}
.ip-card-icon{font-size:13px}
.ip-card-badge{font-family:'IBM Plex Mono',monospace;font-size:8px;letter-spacing:0.09em}
.ip-card-val{font-size:22px;font-weight:900;color:#edf2f5;letter-spacing:-0.02em;line-height:1;margin-bottom:3px}
.ip-card-sub{font-size:10px;color:rgba(175,205,218,0.35);margin-bottom:10px}
.ip-bar-track{height:3px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden}
.ip-bar-fill{height:100%;border-radius:2px;transition:width 1s ease}
.ip-log{border:0.5px solid rgba(255,255,255,0.07);border-radius:10px;background:rgba(255,255,255,0.02);overflow:hidden}
.ip-log-header{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:0.5px solid rgba(255,255,255,0.05)}
.ip-log-title{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.28);letter-spacing:0.1em}
.ip-log-rows{display:flex;flex-direction:column}
.ip-log-row{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:0.5px solid rgba(255,255,255,0.04);transition:background 0.2s}
.ip-log-row:last-child{border-bottom:none}
.ip-log-row:hover{background:rgba(255,255,255,0.03)}
.ip-log-left{display:flex;align-items:center;gap:8px}
.ip-log-ind{width:4px;height:4px;border-radius:50%;background:#e87040;flex-shrink:0}
.ip-log-name{font-size:11px;color:rgba(237,242,245,0.65)}
.ip-log-time{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(232,80,50,0.7);letter-spacing:0.05em}
      `}</style>

      <h2 className="sr-only">The industrial problem — operations running blind without predictive AI</h2>

      <div className="ip-root">
        <div className="ip-content">
          <div>
            <div className="ip-tag">The Problem</div>
            <h2 className="ip-title">Industrial Operations<br />Are Still <em>Operating Blind</em></h2>

            <div className="ip-problems">
              <div className="ip-problem">
                <i className="ti ti-alert-triangle ip-prob-icon" aria-hidden="true" />
                <span className="ip-prob-label">Unexpected Downtime</span>
                <span className="ip-prob-stat">$260K / hr avg</span>
              </div>
              <div className="ip-problem">
                <i className="ti ti-tool ip-prob-icon" aria-hidden="true" />
                <span className="ip-prob-label">Reactive Maintenance</span>
                <span className="ip-prob-stat">3× higher cost</span>
              </div>
              <div className="ip-problem">
                <i className="ti ti-engine ip-prob-icon" aria-hidden="true" />
                <span className="ip-prob-label">Equipment Failure</span>
                <span className="ip-prob-stat">82% preventable</span>
              </div>
              <div className="ip-problem">
                <i className="ti ti-coin ip-prob-icon" aria-hidden="true" />
                <span className="ip-prob-label">High Operational Costs</span>
                <span className="ip-prob-stat">40% overspend</span>
              </div>
              <div className="ip-problem">
                <i className="ti ti-clock-off ip-prob-icon" aria-hidden="true" />
                <span className="ip-prob-label">Lost Production Time</span>
                <span className="ip-prob-stat">11% of capacity</span>
              </div>
            </div>
          </div>

          <div>
            <div className="ip-dashboard">
              <div className="ip-dash-topbar">
                <div className="ip-dot" style={{ background: '#e87040' }} />
                <div className="ip-dot" style={{ background: '#e87040', opacity: 0.5 }} />
                <div className="ip-dot" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <span className="ip-dash-title">Sensor Dashboard — Critical View</span>
                <div className="ip-live-pill"><div className="ip-live-dot" />LIVE</div>
              </div>

              <div className="ip-dash-body">
                <div className="ip-dash-grid">
                  <div className="ip-alert-card">
                    <div className="ip-card-icon-row">
                      <i className="ti ti-alert-triangle ip-card-icon" style={{ color: '#e87040' }} aria-hidden="true" />
                      <span className="ip-card-badge" style={{ color: '#e87040' }}>CRITICAL</span>
                    </div>
                    <div className="ip-card-val">Motor #7</div>
                    <div className="ip-card-sub">Vibration anomaly</div>
                    <div className="ip-bar-track"><div className="ip-bar-fill" style={{ width: '78%', background: '#e87040' }} /></div>
                  </div>

                  <div className="ip-status-card">
                    <div className="ip-card-icon-row">
                      <i className="ti ti-activity ip-card-icon" style={{ color: '#1d7a9a' }} aria-hidden="true" />
                      <span className="ip-card-badge" style={{ color: 'rgba(175,205,218,0.4)' }}>STATUS</span>
                    </div>
                    <div className="ip-card-val">4 / 12</div>
                    <div className="ip-card-sub">Machines offline</div>
                    <div className="ip-bar-track"><div className="ip-bar-fill" style={{ width: '33%', background: '#1d7a9a' }} /></div>
                  </div>
                </div>

                <div className="ip-log" style={{ marginTop: 10 }}>
                  <div className="ip-log-header">
                    <span className="ip-log-title">/ DOWNTIME LOG</span>
                    <span className="ip-live-pill"><div className="ip-live-dot" />LIVE</span>
                  </div>
                  <div className="ip-log-rows">
                    <div className="ip-log-row">
                      <div className="ip-log-left"><div className="ip-log-ind" /><span className="ip-log-name">Line 3 — Conveyor Belt</span></div>
                      <span className="ip-log-time">2h 34m</span>
                    </div>
                    <div className="ip-log-row">
                      <div className="ip-log-left"><div className="ip-log-ind" style={{ background: '#e87040', opacity: 0.6 }} /><span className="ip-log-name">Pump Station B</span></div>
                      <span className="ip-log-time">1h 12m</span>
                    </div>
                    <div className="ip-log-row">
                      <div className="ip-log-left"><div className="ip-log-ind" style={{ background: '#e87040', opacity: 0.4 }} /><span className="ip-log-name">Furnace Unit A</span></div>
                      <span className="ip-log-time">45m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
