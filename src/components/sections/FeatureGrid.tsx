export default function FeatureGrid() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.fg-root{background:#0b1820;padding:80px 0 88px;font-family:'IBM Plex Sans',sans-serif;width:100%}
.fg-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.fg-section-tag::before,.fg-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.fg-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.fg-sub{font-size:13px;color:rgba(175,205,218,0.45);text-align:center;max-width:400px;margin:0 auto 56px;line-height:1.65}
.fg-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.fg-card{position:relative;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;padding:26px 24px 22px;background:rgba(255,255,255,0.025);overflow:hidden;transition:border-color 0.22s,background 0.22s;cursor:default;display:flex;flex-direction:column;gap:0}
.fg-card:hover{border-color:rgba(16,76,100,0.45);background:rgba(16,76,100,0.06)}
.fg-card-num{position:absolute;top:18px;right:20px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:rgba(255,255,255,0.06);letter-spacing:0.05em;transition:color 0.22s}
.fg-card:hover .fg-card-num{color:rgba(232,112,64,0.3)}
.fg-top{display:flex;align-items:flex-start;gap:14px;margin-bottom:14px}
.fg-icon-wrap{width:38px;height:38px;border-radius:8px;border:0.5px solid rgba(16,76,100,0.35);background:rgba(16,76,100,0.12);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:border-color 0.22s,background 0.22s}
.fg-card:hover .fg-icon-wrap{border-color:rgba(232,112,64,0.45);background:rgba(232,112,64,0.09)}
.fg-icon-wrap i{font-size:16px;color:rgba(16,76,100,0.9);transition:color 0.22s}
.fg-card:hover .fg-icon-wrap i{color:#e87040}
.fg-title-block{flex:1;min-width:0}
.fg-card-proto{font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(232,112,64,0.4);margin-bottom:4px;transition:color 0.22s}
.fg-card:hover .fg-card-proto{color:rgba(232,112,64,0.65)}
.fg-card-title{font-size:14px;font-weight:700;color:#edf2f5;line-height:1.25}
.fg-divider{height:0.5px;background:rgba(255,255,255,0.05);margin-bottom:14px}
.fg-card-desc{font-size:11px;color:rgba(175,205,218,0.38);line-height:1.7;margin-bottom:16px;flex:1;transition:color 0.22s}
.fg-card:hover .fg-card-desc{color:rgba(175,205,218,0.55)}
.fg-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}
.fg-tag{font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:0.06em;color:rgba(175,205,218,0.3);border:0.5px solid rgba(255,255,255,0.08);border-radius:4px;padding:3px 8px;background:rgba(255,255,255,0.02);transition:border-color 0.2s,color 0.2s}
.fg-card:hover .fg-tag{border-color:rgba(16,76,100,0.35);color:rgba(175,205,218,0.5)}
.fg-bottom{display:flex;align-items:center;gap:16px;margin-top:40px}
.fg-bottom-line{flex:1;height:0.5px;background:rgba(255,255,255,0.05)}
.fg-bottom-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border:0.5px solid rgba(16,76,100,0.35);border-radius:99px;background:rgba(16,76,100,0.07)}
.fg-bottom-badge i{font-size:14px;color:rgba(232,112,64,0.65)}
.fg-bottom-badge span{font-family:'IBM Plex Mono',monospace;font-size:10px;color:rgba(175,205,218,0.38);letter-spacing:0.07em}
      `}</style>

      <h2 className="sr-only">Core features — eight pillars of industrial intelligence</h2>

      <div className="fg-root">
        <div style={{maxWidth:1280,margin:'0 auto',padding:'0 24px'}}>
        <div className="fg-section-tag">Core Features</div>
        <h2 className="fg-title">Core Features</h2>
        <p className="fg-sub">Eight pillars of industrial intelligence — from raw ingestion to actionable AI output</p>

        <div className="fg-grid">
          <div className="fg-card">
            <span className="fg-card-num">01</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-wifi" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">Ingestion</div>
                <div className="fg-card-title">Sensor Ingestion Engine</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Ingest millions of sensor data points per second from IoT, SCADA, PLC, and edge devices. Supports MQTT, OPC-UA, Modbus, and custom protocols.</div>
            <div className="fg-tags">
              <span className="fg-tag">MQTT</span><span className="fg-tag">OPC-UA</span><span className="fg-tag">Modbus</span><span className="fg-tag">Kafka</span>
            </div>
          </div>

          <div className="fg-card">
            <span className="fg-card-num">02</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-brain" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">AI Models</div>
                <div className="fg-card-title">Predictive AI Models</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Production-grade deep learning models including LSTM, Transformer, and ensemble methods. Continuous retraining with new failure data.</div>
            <div className="fg-tags">
              <span className="fg-tag">LSTM</span><span className="fg-tag">Transformers</span><span className="fg-tag">XGBoost</span><span className="fg-tag">AutoML</span>
            </div>
          </div>

          <div className="fg-card">
            <span className="fg-card-num">03</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-gauge" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">Health Scoring</div>
                <div className="fg-card-title">Machine Health Scores</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Composite health indices per asset based on multi-sensor fusion. Dynamic scoring with trend visualization and historical comparison.</div>
            <div className="fg-tags">
              <span className="fg-tag">Real-time</span><span className="fg-tag">Multi-sensor</span><span className="fg-tag">Trending</span>
            </div>
          </div>

          <div className="fg-card">
            <span className="fg-card-num">04</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-clock" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">Forecasting</div>
                <div className="fg-card-title">Failure Prediction</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Time-to-failure estimates with confidence intervals. Probabilistic forecasting for remaining useful life across all asset types.</div>
            <div className="fg-tags">
              <span className="fg-tag">RUL</span><span className="fg-tag">Confidence</span><span className="fg-tag">Probabilistic</span>
            </div>
          </div>

          <div className="fg-card">
            <span className="fg-card-num">05</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-database" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">Detection</div>
                <div className="fg-card-title">Anomaly Detection</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Statistical, machine learning, and deep learning-based anomaly detection. Unsupervised learning for unknown failure modes.</div>
            <div className="fg-tags">
              <span className="fg-tag">Isolation Forest</span><span className="fg-tag">Autoencoders</span><span className="fg-tag">Statistical</span>
            </div>
          </div>

          <div className="fg-card">
            <span className="fg-card-num">06</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-chart-bar" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">Analytics</div>
                <div className="fg-card-title">Real-Time Analytics</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Sub-second analytics dashboards with live sensor data, computed metrics, and AI inference results. Custom metric definitions.</div>
            <div className="fg-tags">
              <span className="fg-tag">Sub-second</span><span className="fg-tag">Custom</span><span className="fg-tag">Live</span>
            </div>
          </div>

          <div className="fg-card">
            <span className="fg-card-num">07</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-activity" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">Monitoring</div>
                <div className="fg-card-title">Asset Monitoring</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Fleet-wide asset tracking with hierarchical views. Group by line, plant, or region. Fleet-level health and performance aggregates.</div>
            <div className="fg-tags">
              <span className="fg-tag">Fleet</span><span className="fg-tag">Hierarchical</span><span className="fg-tag">Aggregates</span>
            </div>
          </div>

          <div className="fg-card">
            <span className="fg-card-num">08</span>
            <div className="fg-top">
              <div className="fg-icon-wrap"><i className="ti ti-plug" aria-hidden="true" /></div>
              <div className="fg-title-block">
                <div className="fg-card-proto">Integrations</div>
                <div className="fg-card-title">Industrial Integrations</div>
              </div>
            </div>
            <div className="fg-divider" />
            <div className="fg-card-desc">Native connectors for SCADA, PLC, CMMS, ERP, and MES systems. Pre-built integrations for Siemens, Rockwell, and Schneider.</div>
            <div className="fg-tags">
              <span className="fg-tag">SCADA</span><span className="fg-tag">CMMS</span><span className="fg-tag">ERP</span><span className="fg-tag">MES</span>
            </div>
          </div>
        </div>

        <div className="fg-bottom">
          <div className="fg-bottom-line" />
          <div className="fg-bottom-badge">
            <i className="ti ti-stack-2" aria-hidden="true" />
            <span>8 Production-Grade Modules</span>
          </div>
          <div className="fg-bottom-line" />
        </div>
        </div>
      </div>
    </>
  );
}
