export default function PlatformOverview() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.po-root{background:#0b1820;padding:80px 48px 88px;font-family:'IBM Plex Sans',sans-serif;width:100%}
.po-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.po-section-tag::before,.po-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.po-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.po-sub{font-size:13px;color:rgba(175,205,218,0.45);text-align:center;max-width:480px;margin:0 auto 60px;line-height:1.65}
.pipeline-rail{position:relative;display:flex;align-items:center;justify-content:space-between;margin-bottom:60px;padding:0 4px}
.pipeline-line{position:absolute;top:50%;left:0;right:0;height:1px;background:rgba(255,255,255,0.06);z-index:0;transform:translateY(-50%)}
.pipeline-line-animated{position:absolute;top:50%;left:0;right:0;height:1px;z-index:0;transform:translateY(-50%);overflow:hidden}
.pipeline-dashes{width:200%;height:1px;background:repeating-linear-gradient(90deg,rgba(16,76,100,0.0) 0px,rgba(16,76,100,0.0) 8px,rgba(16,76,100,0.55) 8px,rgba(16,76,100,0.55) 14px);animation:slidedash 3s linear infinite}
@keyframes slidedash{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.pipeline-node{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;flex:none}
.node-circle{width:52px;height:52px;border-radius:50%;background:#0b1820;border:1px solid rgba(16,76,100,0.55);display:flex;align-items:center;justify-content:center;transition:border-color 0.2s}
.node-circle:hover{border-color:rgba(232,112,64,0.7)}
.node-circle i{font-size:18px;color:rgba(16,76,100,0.9)}
.node-circle:hover i{color:#e87040}
.node-circle.highlight{border-color:rgba(232,112,64,0.6);background:rgba(232,112,64,0.07)}
.node-circle.highlight i{color:#e87040}
.node-num{position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:#e87040;font-family:'IBM Plex Mono',monospace;font-size:8px;font-weight:500;color:#fff;display:flex;align-items:center;justify-content:center}
.node-label{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.35);letter-spacing:0.07em;text-transform:uppercase;text-align:center}
.pipeline-node:hover .node-label{color:rgba(175,205,218,0.65)}
.divider-row{display:flex;align-items:center;gap:16px;margin-bottom:48px}
.divider-line{flex:1;height:0.5px;background:rgba(255,255,255,0.05)}
.divider-badge{display:flex;align-items:center;gap:8px;padding:7px 14px;border:0.5px solid rgba(16,76,100,0.4);border-radius:99px;background:rgba(16,76,100,0.08)}
.divider-badge i{font-size:14px;color:rgba(232,112,64,0.65)}
.divider-badge span{font-family:'IBM Plex Mono',monospace;font-size:10px;color:rgba(175,205,218,0.4);letter-spacing:0.06em}
.cap-header{text-align:center;margin-bottom:36px}
.cap-title{font-size:20px;font-weight:700;color:#edf2f5;margin-bottom:6px}
.cap-sub{font-size:12px;color:rgba(175,205,218,0.38);max-width:400px;margin:0 auto;line-height:1.6}
.bento{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:auto auto;gap:10px}
.bcard{background:rgba(255,255,255,0.025);border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;padding:22px 20px;transition:border-color 0.2s,background 0.2s;cursor:default;position:relative;overflow:hidden}
.bcard::before{content:'';position:absolute;inset:0;border-radius:12px;opacity:0;transition:opacity 0.3s;background:rgba(16,76,100,0.05)}
.bcard:hover{border-color:rgba(16,76,100,0.38)}
.bcard:hover::before{opacity:1}
.bcard.featured{grid-column:span 3;grid-row:span 2;background:rgba(16,76,100,0.1);border-color:rgba(16,76,100,0.3);padding:32px 28px;display:flex;flex-direction:column;justify-content:space-between}
.bcard.wide{grid-column:span 3}
.bcard.normal{grid-column:span 2}
.bcard-icon-wrap{width:38px;height:38px;border-radius:8px;background:rgba(16,76,100,0.2);border:0.5px solid rgba(16,76,100,0.3);display:flex;align-items:center;justify-content:center;margin-bottom:14px;flex-shrink:0}
.bcard-icon-wrap i{font-size:16px;color:rgba(16,76,100,0.9)}
.bcard:hover .bcard-icon-wrap i{color:#e87040}
.bcard.featured .bcard-icon-wrap{width:48px;height:48px;border-radius:10px;margin-bottom:20px}
.bcard.featured .bcard-icon-wrap i{font-size:20px}
.bcard-tag{font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(232,112,64,0.55);margin-bottom:8px}
.bcard-title{font-size:14px;font-weight:700;color:#edf2f5;margin-bottom:6px;line-height:1.3}
.bcard.featured .bcard-title{font-size:20px;margin-bottom:10px}
.bcard-desc{font-size:11px;color:rgba(175,205,218,0.38);line-height:1.6}
.bcard.featured .bcard-desc{font-size:13px;color:rgba(175,205,218,0.45);line-height:1.65}
.bcard-bottom{margin-top:auto;padding-top:24px}
.bcard-metric{font-size:32px;font-weight:900;color:#edf2f5;letter-spacing:-0.03em;font-family:'IBM Plex Sans',sans-serif}
.bcard-metric-label{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.3);letter-spacing:0.07em;text-transform:uppercase;margin-top:2px}
.nvidia-row{display:flex;justify-content:center;margin-top:48px}
.nvidia-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border:0.5px solid rgba(16,76,100,0.35);border-radius:99px;background:rgba(16,76,100,0.07)}
.nvidia-badge i{font-size:14px;color:#e87040}
.nvidia-badge span{font-family:'IBM Plex Mono',monospace;font-size:10px;color:rgba(175,205,218,0.38);letter-spacing:0.06em}
      `}</style>

      <h2 className="sr-only">Platform architecture and intelligence engine — six core AI capabilities from sensor to insight</h2>

      <div className="po-root">
        <div className="po-section-tag">Platform Architecture</div>
        <h2 className="po-title">Architecture &amp; Intelligence Engine</h2>
        <p className="po-sub">From raw sensor signals to predictive maintenance intelligence — six core AI capabilities in a unified pipeline</p>

        <div className="pipeline-rail">
          <div className="pipeline-line" />
          <div className="pipeline-line-animated"><div className="pipeline-dashes" /></div>

          <div className="pipeline-node">
            <div className="node-circle"><span className="node-num">1</span><i className="ti ti-building-factory-2" aria-hidden="true" /></div>
            <span className="node-label">Machines</span>
          </div>
          <div className="pipeline-node">
            <div className="node-circle"><span className="node-num">2</span><i className="ti ti-wifi" aria-hidden="true" /></div>
            <span className="node-label">IoT Sensors</span>
          </div>
          <div className="pipeline-node">
            <div className="node-circle"><span className="node-num">3</span><i className="ti ti-database" aria-hidden="true" /></div>
            <span className="node-label">Data Pipeline</span>
          </div>
          <div className="pipeline-node">
            <div className="node-circle highlight"><span className="node-num">4</span><i className="ti ti-cpu" aria-hidden="true" /></div>
            <span className="node-label">NVIDIA AI</span>
          </div>
          <div className="pipeline-node">
            <div className="node-circle highlight"><span className="node-num">5</span><i className="ti ti-brain" aria-hidden="true" /></div>
            <span className="node-label">AI Models</span>
          </div>
          <div className="pipeline-node">
            <div className="node-circle highlight"><span className="node-num">6</span><i className="ti ti-activity" aria-hidden="true" /></div>
            <span className="node-label">Intel.</span>
          </div>
        </div>

        <div className="divider-row">
          <div className="divider-line" />
          <div className="divider-badge">
            <i className="ti ti-cpu" aria-hidden="true" />
            <span>Intelligence Layer</span>
          </div>
          <div className="divider-line" />
        </div>

        <div className="cap-header">
          <div className="cap-title">Intelligence Capabilities</div>
          <p className="cap-sub">Six core capabilities that transform raw data into actionable maintenance intelligence</p>
        </div>

        <div className="bento">
          <div className="bcard featured">
            <div>
              <div className="bcard-tag">Core Capability</div>
              <div className="bcard-icon-wrap"><i className="ti ti-brain" aria-hidden="true" /></div>
              <div className="bcard-title">Predictive Maintenance</div>
              <div className="bcard-desc">AI models forecast equipment failures before they occur, giving maintenance teams the lead time to act — not react. Combines vibration, thermal, and operational signals into a single failure probability score.</div>
            </div>
            <div className="bcard-bottom">
              <div className="bcard-metric">14 days</div>
              <div className="bcard-metric-label">Avg. failure prediction lead time</div>
            </div>
          </div>

          <div className="bcard wide">
            <div className="bcard-icon-wrap"><i className="ti ti-activity" aria-hidden="true" /></div>
            <div className="bcard-title">Sensor Analytics</div>
            <div className="bcard-desc">Real-time processing of multi-sensor streams at scale</div>
          </div>

          <div className="bcard normal">
            <div className="bcard-icon-wrap"><i className="ti ti-gauge" aria-hidden="true" /></div>
            <div className="bcard-title">Machine Health</div>
            <div className="bcard-desc">Continuous health scoring across all assets</div>
          </div>

          <div className="bcard normal">
            <div className="bcard-icon-wrap"><i className="ti ti-alert-triangle" aria-hidden="true" /></div>
            <div className="bcard-title">Anomaly Detection</div>
            <div className="bcard-desc">Statistical and ML-based outlier identification</div>
          </div>

          <div className="bcard normal">
            <div className="bcard-icon-wrap"><i className="ti ti-clock" aria-hidden="true" /></div>
            <div className="bcard-title">Failure Prediction</div>
            <div className="bcard-desc">Time-to-failure estimates with confidence intervals</div>
          </div>

          <div className="bcard normal">
            <div className="bcard-icon-wrap"><i className="ti ti-bulb" aria-hidden="true" /></div>
            <div className="bcard-title">Industrial Insights</div>
            <div className="bcard-desc">Actionable intelligence for maintenance teams</div>
          </div>
        </div>

        <div className="nvidia-row">
          <div className="nvidia-badge">
            <i className="ti ti-cpu" aria-hidden="true" />
            <span>Powered by NVIDIA SDK</span>
          </div>
        </div>
      </div>
    </>
  );
}
