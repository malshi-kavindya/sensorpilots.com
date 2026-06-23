export default function MissionVision() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=IBM+Plex+Sans:wght@300;400;700;900&display=swap');
.mv-root{position:relative;background:#0b1820;padding:80px 0 88px;font-family:'IBM Plex Sans',sans-serif;width:100%;overflow:hidden}
.mv-bg{position:absolute;inset:0;pointer-events:none}
.mv-grid-lines{position:absolute;inset:0;opacity:0.03;background-image:linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px);background-size:80px 80px}
.mv-glow1{position:absolute;top:33%;left:25%;width:384px;height:384px;border-radius:50%;background:rgba(16,76,100,0.08);filter:blur(120px)}
.mv-glow2{position:absolute;bottom:25%;right:33%;width:320px;height:320px;border-radius:50%;background:rgba(16,76,100,0.05);filter:blur(100px)}
.mv-content{position:relative;z-index:2}
.mv-section-tag{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.65);display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:22px}
.mv-section-tag::before,.mv-section-tag::after{content:'';display:block;width:32px;height:1px;background:rgba(232,112,64,0.28)}
.mv-title{font-size:36px;font-weight:900;color:#edf2f5;text-align:center;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.mv-sub{font-size:13px;color:rgba(175,205,218,0.45);text-align:center;max-width:360px;margin:0 auto 60px;line-height:1.65}
.mv-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.mv-card{position:relative;border-radius:14px;overflow:hidden;border:0.5px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.025);padding:36px 28px 32px;display:flex;flex-direction:column;gap:0;transition:border-color 0.25s;cursor:default}
.mv-card:hover{border-color:rgba(16,76,100,0.5)}
.mv-card-art{position:absolute;top:0;right:0;width:140px;height:140px;opacity:0.18;pointer-events:none}
.mv-card:hover .mv-card-art{opacity:0.28;transition:opacity 0.3s}
.mv-card-label{font-family:'IBM Plex Mono',monospace;font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,112,64,0.5);margin-bottom:18px}
.mv-card-title{font-size:28px;font-weight:900;color:#edf2f5;letter-spacing:-0.02em;line-height:1;margin-bottom:20px}
.mv-card.vision .mv-card-title{color:#edf2f5}
.mv-card.future .mv-card-title{color:#edf2f5}
.mv-divider{width:32px;height:2px;background:#e87040;border-radius:2px;margin-bottom:20px;opacity:0.7}
.mv-card.vision .mv-divider{background:#104c64;opacity:1}
.mv-card.future .mv-divider{background:rgba(232,112,64,0.5)}
.mv-card-desc{font-size:12px;color:rgba(175,205,218,0.42);line-height:1.75;flex:1;transition:color 0.22s}
.mv-card:hover .mv-card-desc{color:rgba(175,205,218,0.62)}
.mv-card-foot{margin-top:28px;display:flex;align-items:center;gap:10px}
.mv-card-foot-icon{width:32px;height:32px;border-radius:8px;border:0.5px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:border-color 0.22s,background 0.22s}
.mv-card:hover .mv-card-foot-icon{border-color:rgba(232,112,64,0.4);background:rgba(232,112,64,0.08)}
.mv-card-foot-icon i{font-size:14px;color:rgba(175,205,218,0.3);transition:color 0.22s}
.mv-card:hover .mv-card-foot-icon i{color:#e87040}
.mv-card-foot-text{font-family:'IBM Plex Mono',monospace;font-size:9px;color:rgba(175,205,218,0.2);letter-spacing:0.07em;line-height:1.5;transition:color 0.22s}
.mv-card:hover .mv-card-foot-text{color:rgba(175,205,218,0.4)}
.mv-bottom{display:flex;align-items:center;gap:16px;margin-top:48px}
.mv-bottom-line{flex:1;height:0.5px;background:rgba(255,255,255,0.05)}
.mv-bottom-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border:0.5px solid rgba(16,76,100,0.35);border-radius:99px;background:rgba(16,76,100,0.07)}
.mv-bottom-badge i{font-size:14px;color:rgba(232,112,64,0.65)}
.mv-bottom-badge span{font-family:'IBM Plex Mono',monospace;font-size:10px;color:rgba(175,205,218,0.38);letter-spacing:0.07em}
      `}</style>

      <h2 className="sr-only">Mission, Vision, and Future — why we exist and where we're going</h2>

      <div className="mv-root">
        {/* Background decorative elements */}
        <div className="mv-bg">
          <div className="mv-grid-lines" />
          <div className="mv-glow1" />
          <div className="mv-glow2" />
        </div>
        <div style={{maxWidth:1280,margin:'0 auto',padding:'0 24px'}}>
        <div className="mv-content">
          <div className="mv-section-tag">Our Purpose</div>
          <h2 className="mv-title">Mission, Vision &amp; Future</h2>
          <p className="mv-sub">Why we exist, what we believe, and where industrial AI is heading</p>

          <div className="mv-grid">
            <div className="mv-card mission">
              <svg className="mv-card-art" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70" cy="70" r="56" stroke="#e87040" strokeWidth="0.5" />
                <circle cx="70" cy="70" r="40" stroke="#e87040" strokeWidth="0.5" />
                <circle cx="70" cy="70" r="24" stroke="#e87040" strokeWidth="0.5" />
                <circle cx="70" cy="70" r="8" fill="#e87040" opacity="0.6" />
                <line x1="70" y1="0" x2="70" y2="140" stroke="#e87040" strokeWidth="0.4" strokeDasharray="3 6" />
                <line x1="0" y1="70" x2="140" y2="70" stroke="#e87040" strokeWidth="0.4" strokeDasharray="3 6" />
                <line x1="14" y1="14" x2="126" y2="126" stroke="#e87040" strokeWidth="0.3" strokeDasharray="2 8" />
                <line x1="126" y1="14" x2="14" y2="126" stroke="#e87040" strokeWidth="0.3" strokeDasharray="2 8" />
              </svg>
              <div className="mv-card-label">01 / Mission</div>
              <div className="mv-card-title">Mission</div>
              <div className="mv-divider" />
              <div className="mv-card-desc">Make every industrial machine intelligent through predictive AI. Eliminate unplanned downtime and extend equipment life through data-driven maintenance.</div>
              <div className="mv-card-foot">
                <div className="mv-card-foot-icon"><i className="ti ti-target" aria-hidden="true" /></div>
                <div className="mv-card-foot-text">Zero unplanned downtime.<br />Longer asset life.</div>
              </div>
            </div>

            <div className="mv-card vision" style={{ background: 'rgba(16,76,100,0.1)', borderColor: 'rgba(16,76,100,0.3)' }}>
              <svg className="mv-card-art" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="70" cy="70" rx="62" ry="30" stroke="#104c64" strokeWidth="0.5" />
                <ellipse cx="70" cy="70" rx="46" ry="22" stroke="#104c64" strokeWidth="0.5" />
                <ellipse cx="70" cy="70" rx="28" ry="14" stroke="#104c64" strokeWidth="0.5" />
                <circle cx="70" cy="70" r="6" fill="#104c64" opacity="0.8" />
                <line x1="8" y1="70" x2="132" y2="70" stroke="#104c64" strokeWidth="0.4" />
                <circle cx="70" cy="70" r="60" stroke="#104c64" strokeWidth="0.3" strokeDasharray="1 10" />
              </svg>
              <div className="mv-card-label">02 / Vision</div>
              <div className="mv-card-title">Vision</div>
              <div className="mv-divider" />
              <div className="mv-card-desc">A world where industrial failures are predicted, not experienced. Where maintenance is proactive, not reactive. Where machines and humans work together with full visibility.</div>
              <div className="mv-card-foot">
                <div className="mv-card-foot-icon"><i className="ti ti-eye" aria-hidden="true" /></div>
                <div className="mv-card-foot-text">Proactive over reactive.<br />Full-stack visibility.</div>
              </div>
            </div>

            <div className="mv-card future">
              <svg className="mv-card-art" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70 10 L80 50 L120 60 L80 70 L90 110 L70 80 L50 110 L60 70 L20 60 L60 50 Z" stroke="#e87040" strokeWidth="0.5" fill="none" />
                <path d="M70 30 L76 54 L100 60 L76 66 L82 90 L70 70 L58 90 L64 66 L40 60 L64 54 Z" stroke="#e87040" strokeWidth="0.4" fill="rgba(232,112,64,0.04)" />
                <circle cx="70" cy="60" r="6" fill="#e87040" opacity="0.5" />
                <circle cx="70" cy="10" r="2.5" fill="#e87040" opacity="0.4" />
                <circle cx="120" cy="60" r="2.5" fill="#e87040" opacity="0.4" />
                <circle cx="20" cy="60" r="2.5" fill="#e87040" opacity="0.4" />
                <circle cx="90" cy="110" r="2.5" fill="#e87040" opacity="0.4" />
                <circle cx="50" cy="110" r="2.5" fill="#e87040" opacity="0.4" />
              </svg>
              <div className="mv-card-label">03 / Future</div>
              <div className="mv-card-title">Future</div>
              <div className="mv-divider" />
              <div className="mv-card-desc">Autonomous maintenance systems that self-diagnose, self-schedule, and self-optimize. AI that not only predicts failures but prescribes optimal repair strategies.</div>
              <div className="mv-card-foot">
                <div className="mv-card-foot-icon"><i className="ti ti-rocket" aria-hidden="true" /></div>
                <div className="mv-card-foot-text">Self-healing machines.<br />Autonomous prescriptions.</div>
              </div>
            </div>
          </div>

          <div className="mv-bottom">
            <div className="mv-bottom-line" />
            <div className="mv-bottom-badge">
              <i className="ti ti-sparkles" aria-hidden="true" />
              <span>Industrial AI — Built for What's Next</span>
            </div>
            <div className="mv-bottom-line" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
