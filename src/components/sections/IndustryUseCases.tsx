export default function IndustryUseCases() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.iu-root{background:#0b1820;padding:80px 48px 88px;font-family:'IBM Plex Sans',sans-serif;width:100%}
.iu-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.iu-section-tag::before,.iu-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.iu-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.iu-sub{font-size:13px;color:rgba(175,205,218,0.45);text-align:center;max-width:400px;margin:0 auto 56px;line-height:1.65}
.iu-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.iu-card{position:relative;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;padding:28px 24px;background:rgba(255,255,255,0.025);overflow:hidden;transition:border-color 0.22s,background 0.22s;cursor:default}
.iu-card:hover{border-color:rgba(16,76,100,0.45);background:rgba(16,76,100,0.07)}
.iu-card-index{position:absolute;top:20px;right:22px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:rgba(255,255,255,0.07);letter-spacing:0.05em;font-weight:500;transition:color 0.22s}
.iu-card:hover .iu-card-index{color:rgba(232,112,64,0.35)}
.iu-corner-accent{position:absolute;bottom:0;right:0;width:80px;height:80px;border-top-left-radius:80px;opacity:0;transition:opacity 0.3s}
.iu-card:hover .iu-corner-accent{opacity:1}
.iu-icon-wrap{width:40px;height:40px;border-radius:8px;border:0.5px solid rgba(16,76,100,0.35);background:rgba(16,76,100,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:18px;transition:border-color 0.22s,background 0.22s}
.iu-card:hover .iu-icon-wrap{border-color:rgba(232,112,64,0.45);background:rgba(232,112,64,0.1)}
.iu-icon-wrap i{font-size:17px;color:rgba(16,76,100,0.9);transition:color 0.22s}
.iu-card:hover .iu-icon-wrap i{color:#e87040}
.iu-card-sector{font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(232,112,64,0.45);margin-bottom:7px;transition:color 0.22s}
.iu-card:hover .iu-card-sector{color:rgba(232,112,64,0.7)}
.iu-card-title{font-size:15px;font-weight:700;color:#edf2f5;margin-bottom:8px;line-height:1.25}
.iu-card-desc{font-size:11px;color:rgba(175,205,218,0.38);line-height:1.65;transition:color 0.22s}
.iu-card:hover .iu-card-desc{color:rgba(175,205,218,0.55)}
.iu-card-foot{margin-top:20px;display:flex;align-items:center;gap:6px;opacity:0;transform:translateY(4px);transition:opacity 0.22s,transform 0.22s}
.iu-card:hover .iu-card-foot{opacity:1;transform:translateY(0)}
.iu-card-foot-line{flex:1;height:0.5px;background:rgba(232,112,64,0.25)}
.iu-card-foot-label{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(232,112,64,0.5);letter-spacing:0.08em;white-space:nowrap}
.iu-bottom{display:flex;justify-content:center;margin-top:48px}
.iu-stat-row{display:flex;gap:0;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden}
.iu-stat{padding:18px 36px;display:flex;flex-direction:column;align-items:center;gap:3px;border-right:0.5px solid rgba(255,255,255,0.06)}
.iu-stat:last-child{border-right:none}
.iu-stat-val{font-size:22px;font-weight:900;color:#edf2f5;letter-spacing:-0.02em}
.iu-stat-lbl{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.3);letter-spacing:0.08em;text-transform:uppercase}
      `}</style>

      <h2 className="sr-only">Industry use cases — predictive AI across six industrial sectors</h2>

      <div className="iu-root">
        <div className="iu-section-tag">Use Cases</div>
        <h2 className="iu-title">Industry Use Cases</h2>
        <p className="iu-sub">Proven intelligence across industrial sectors — from discrete manufacturing to grid-scale utilities</p>

        <div className="iu-grid">
          <div className="iu-card">
            <span className="iu-card-index">01</span>
            <div className="iu-corner-accent" style={{ background: 'rgba(16,76,100,0.18)' }} />
            <div className="iu-icon-wrap"><i className="ti ti-building-factory-2" aria-hidden="true" /></div>
            <div className="iu-card-sector">Manufacturing</div>
            <div className="iu-card-title">Manufacturing Plants</div>
            <div className="iu-card-desc">Predictive maintenance across assembly lines, CNC machines, and robotics — zero unplanned downtime.</div>
            <div className="iu-card-foot"><div className="iu-card-foot-line" /><span className="iu-card-foot-label">Explore →</span></div>
          </div>

          <div className="iu-card">
            <span className="iu-card-index">02</span>
            <div className="iu-corner-accent" style={{ background: 'rgba(232,112,64,0.12)' }} />
            <div className="iu-icon-wrap"><i className="ti ti-car" aria-hidden="true" /></div>
            <div className="iu-card-sector">Automotive</div>
            <div className="iu-card-title">Automotive Production</div>
            <div className="iu-card-desc">Real-time quality monitoring on stamping, welding, and painting operations at line speed.</div>
            <div className="iu-card-foot"><div className="iu-card-foot-line" /><span className="iu-card-foot-label">Explore →</span></div>
          </div>

          <div className="iu-card">
            <span className="iu-card-index">03</span>
            <div className="iu-corner-accent" style={{ background: 'rgba(16,76,100,0.18)' }} />
            <div className="iu-icon-wrap"><i className="ti ti-flame" aria-hidden="true" /></div>
            <div className="iu-card-sector">Energy</div>
            <div className="iu-card-title">Energy Facilities</div>
            <div className="iu-card-desc">Turbine and generator health monitoring for reliable power generation at any scale.</div>
            <div className="iu-card-foot"><div className="iu-card-foot-line" /><span className="iu-card-foot-label">Explore →</span></div>
          </div>

          <div className="iu-card">
            <span className="iu-card-index">04</span>
            <div className="iu-corner-accent" style={{ background: 'rgba(232,112,64,0.12)' }} />
            <div className="iu-icon-wrap"><i className="ti ti-tool" aria-hidden="true" /></div>
            <div className="iu-card-sector">Heavy Industry</div>
            <div className="iu-card-title">Industrial Equipment</div>
            <div className="iu-card-desc">Heavy machinery and construction equipment failure prediction before it stops a site.</div>
            <div className="iu-card-foot"><div className="iu-card-foot-line" /><span className="iu-card-foot-label">Explore →</span></div>
          </div>

          <div className="iu-card">
            <span className="iu-card-index">05</span>
            <div className="iu-corner-accent" style={{ background: 'rgba(16,76,100,0.18)' }} />
            <div className="iu-icon-wrap"><i className="ti ti-bolt" aria-hidden="true" /></div>
            <div className="iu-card-sector">Utilities</div>
            <div className="iu-card-title">Utilities</div>
            <div className="iu-card-desc">Grid infrastructure and transformer monitoring at scale across distributed networks.</div>
            <div className="iu-card-foot"><div className="iu-card-foot-line" /><span className="iu-card-foot-label">Explore →</span></div>
          </div>

          <div className="iu-card">
            <span className="iu-card-index">06</span>
            <div className="iu-corner-accent" style={{ background: 'rgba(232,112,64,0.12)' }} />
            <div className="iu-icon-wrap"><i className="ti ti-cpu" aria-hidden="true" /></div>
            <div className="iu-card-sector">Industry 4.0</div>
            <div className="iu-card-title">Smart Factories</div>
            <div className="iu-card-desc">End-to-end Industry 4.0 intelligence and automation — from edge sensor to enterprise dashboard.</div>
            <div className="iu-card-foot"><div className="iu-card-foot-line" /><span className="iu-card-foot-label">Explore →</span></div>
          </div>
        </div>

        <div className="iu-bottom">
          <div className="iu-stat-row">
            <div className="iu-stat">
              <span className="iu-stat-val">6</span>
              <span className="iu-stat-lbl">Sectors</span>
            </div>
            <div className="iu-stat">
              <span className="iu-stat-val">200+</span>
              <span className="iu-stat-lbl">Deployments</span>
            </div>
            <div className="iu-stat">
              <span className="iu-stat-val">40%</span>
              <span className="iu-stat-lbl">Cost Reduction</span>
            </div>
            <div className="iu-stat">
              <span className="iu-stat-val">99.7%</span>
              <span className="iu-stat-lbl">Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
