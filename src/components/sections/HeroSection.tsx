import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

function MosaicCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    if (!cx) return;

    const root = cv.parentElement!;

    const draw = () => {
      const W = root.offsetWidth;
      const H = root.offsetHeight;
      cv.width = W;
      cv.height = H;
      cx.fillStyle = '#0b1820';
      cx.fillRect(0, 0, W, H);

      const tw = 54, th = 54;
      const cols = Math.ceil(W / tw) + 1, rows = Math.ceil(H / th) + 1;
      const cx2 = W * 0.54, cy2 = H * 0.44;

      const rnd = (s: number) => ((s * 1664525 + 1013904223) & 0x7fffffff) / 0x7fffffff;
      const rnd2 = (s: number) => ((s * 22695477 + 1) & 0x7fffffff) / 0x7fffffff;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * tw, y = r * th;
          const pcx = x + tw / 2, pcy = y + th / 2;
          const dist = Math.sqrt((pcx - cx2) ** 2 + (pcy - cy2) ** 2);
          const maxD = Math.sqrt(cx2 ** 2 + cy2 ** 2);
          const norm = Math.min(dist / maxD, 1);
          const s1 = (r * 997 + c) * 6151;
          const r1 = rnd(s1), r2 = rnd2(s1);
          const thresh = norm < 0.2 ? 0 : norm < 0.5 ? ((norm - 0.2) / 0.3) * 0.3 : 0.3 + ((norm - 0.5) / 0.5) * 0.65;

          if (r1 < thresh) {
            const br = 0.1 + r2 * 0.55 + norm * 0.3;
            let col = '', alpha = 0;

            if (r2 > 0.72) {
              const rv = Math.floor(65 + br * 160), gv = Math.floor(28 + br * 52), bv = Math.floor(10 + br * 22);
              col = `rgb(${rv},${gv},${bv})`;
              alpha = Math.min(0.55 + br * 0.38, 0.9);
            } else if (r2 > 0.42) {
              const rv = Math.floor(10 + br * 28), gv = Math.floor(48 + br * 72), bv = Math.floor(60 + br * 95);
              col = `rgb(${rv},${gv},${bv})`;
              alpha = Math.min(0.45 + br * 0.42, 0.88);
            } else {
              const lv = Math.floor(12 + br * 28);
              col = `rgb(${lv},${lv + 3},${lv + 5})`;
              alpha = Math.min(0.38 + br * 0.45, 0.82);
            }

            if (norm < 0.22) alpha *= (norm / 0.22);
            cx.globalAlpha = alpha;
            cx.fillStyle = col;
            cx.fillRect(x + 1.5, y + 1.5, tw - 3, th - 3);
          }
        }
      }

      cx.globalAlpha = 1;
      const maxD2 = (w: number, h: number, ox: number, oy: number) =>
        Math.sqrt(Math.max(ox, w - ox) ** 2 + Math.max(oy, h - oy) ** 2);
      const g1 = cx.createRadialGradient(cx2, cy2, 0, cx2, cy2, maxD2(W, H, cx2, cy2));
      g1.addColorStop(0, 'rgba(8,14,20,0)');
      g1.addColorStop(0.3, 'rgba(8,14,20,0.08)');
      g1.addColorStop(0.65, 'rgba(6,11,16,0.55)');
      g1.addColorStop(1, 'rgba(5,9,14,0.9)');
      cx.fillStyle = g1;
      cx.fillRect(0, 0, W, H);
    };

    draw();
    const onResize = () => draw();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <canvas ref={ref} className="absolute inset-0 z-0" />;
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[620px] bg-[#0b1820] overflow-hidden rounded-[14px] pt-32">
      <MosaicCanvas />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 55% 45%, rgba(10,50,68,0) 0%, rgba(7,13,18,0.5) 65%, rgba(5,10,14,0.92) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[11]"
        style={{
          background: 'linear-gradient(to right, rgba(5,10,14,0.94) 0%, rgba(5,10,14,0.6) 35%, rgba(5,10,14,0) 60%)',
        }}
      />

      <div className="relative z-20 flex flex-col lg:flex-row items-start gap-12 px-6 md:px-9 pb-4 pt-4">
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[11px] text-[rgba(200,220,228,0.35)] tracking-[0.08em] uppercase mb-6 flex items-center gap-2 before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-[rgba(200,220,228,0.25)]">
            Industrial AI Platform
          </div>

          <h1 className="text-[72px] font-black leading-[0.96] text-[#edf2f5] tracking-[0.08em] mb-6">
            Predictive<br />Maintenance<br />
            <span className="bg-gradient-to-r from-[#c95a20] via-[#f07038] to-[#c04818] bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>

          <div className="text-[21px] font-extrabold text-[rgba(237,242,245,0.6)] tracking-[-0.02em] mt-6">
            for Modern Manufacturing
          </div>

          <p className="text-[14px] text-[rgba(175,205,218,0.5)] leading-[1.65] max-w-[350px] my-8">
            Transform industrial sensor streams into actionable AI-driven maintenance intelligence.
          </p>

          <div className="flex gap-2.5 flex-wrap items-center">
            <Link
              to="/product"
              className="flex items-center gap-[7px] px-7 py-[13px] bg-[#e87040] hover:bg-[#cf5e30] rounded-lg text-white text-[15px] font-extrabold no-underline transition-all duration-200 hover:-translate-y-[1px]"
            >
              Start Now
            </Link>
            <Link
              to="/#command-center"
              className="flex items-center gap-[7px] px-[26px] py-3 border-[1.5px] border-white/20 hover:border-white/48 rounded-lg text-[rgba(237,245,250,0.82)] text-[15px] font-bold no-underline transition-all duration-200 hover:-translate-y-[1px]"
            >
              Explore Platform <span className="opacity-65 text-[16px]">›</span>
            </Link>
          </div>

          <div className="mt-12">
            <div className="font-mono text-[10px] text-[rgba(180,205,215,0.22)] tracking-[0.08em] uppercase mb-[9px]">
              Our Partners
            </div>
            <div className="flex gap-[18px] flex-wrap">
              {['✕ SIEMENS', '⬡ BOSCH', '○ ABB', '⊕ HONEYWELL'].map((p) => (
                <span key={p} className="font-mono text-[11px] text-[rgba(180,205,215,0.25)] tracking-[0.05em]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:flex flex-row items-center gap-4 mt-10"
          >
            <div className="font-mono text-[10px] text-[rgba(200,220,228,0.18)] tracking-[0.07em] uppercase">
              /we do
            </div>
            <div className="font-mono text-[11px] text-[rgba(200,220,228,0.28)] tracking-[0.06em]">MONITORING</div>
            <div className="font-mono text-[11px] text-[rgba(200,220,228,0.72)] tracking-[0.06em] font-bold">PREDICTION</div>
            <div className="font-mono text-[11px] text-[rgba(200,220,228,0.28)] tracking-[0.06em]">ANALYTICS</div>
          </motion.div>
        </div>

        <div className="w-full lg:w-[248px] flex-shrink-0 flex flex-col gap-5 pt-[2px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[13px] p-[15px_17px] backdrop-blur-[6px] bg-[rgba(12,62,82,0.32)] border-[0.5px] border-white/10"
          >
            <div className="text-[44px] font-black text-[#edf2f5] leading-[1] tracking-[-0.035em]">2M+</div>
            <div className="font-mono text-[10px] text-[rgba(175,205,218,0.4)] tracking-[0.05em] uppercase mt-[2px]">
              Sensors Monitored
            </div>
            <div className="mt-3 flex flex-col gap-[5px]">
              {[
                { label: 'Active', pct: 89, color: '#104c64' },
                { label: 'Alert', pct: 7, color: '#e87040' },
                { label: 'Idle', pct: 4, color: 'rgba(175,205,218,0.28)' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-[6px]">
                  <span className="font-mono text-[9px] text-[rgba(175,205,218,0.28)] w-[38px] flex-shrink-0">{b.label}</span>
                  <div className="flex-1 h-[2.5px] rounded-[3px] bg-white/5 overflow-hidden">
                    <div className="h-full rounded-[3px]" style={{ width: `${b.pct}%`, background: b.color }} />
                  </div>
                  <span className="font-mono text-[9px] text-[rgba(175,205,218,0.35)] w-6 text-right">{b.pct}%</span>
                </div>
              ))}
            </div>
            <Link to="/#contact" className="mt-3 w-full py-2 bg-white/5 border-[0.5px] border-white/10 rounded-lg text-[rgba(237,245,250,0.5)] text-[12px] no-underline cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center">
              Book a call →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[13px] p-[15px_17px] backdrop-blur-[6px] bg-white/4 border-[0.5px] border-white/10 flex items-center justify-between"
          >
            <div>
              <div className="text-[13px] font-bold text-[rgba(237,245,250,0.8)]">System Uptime</div>
              <div className="font-mono text-[10px] text-[rgba(175,205,218,0.38)] mt-[2px] tracking-[0.03em]">99.7% SLA guaranteed</div>
            </div>
            <div className="flex items-center gap-[5px] bg-[rgba(16,155,85,0.13)] border-[0.5px] border-[rgba(16,155,85,0.27)] rounded-[99px] px-[10px] py-[4px] text-[11px] text-[#4ecf8e] font-semibold">
              <span className="w-[5px] h-[5px] rounded-full bg-[#4ecf8e] animate-pulse" />
              Live
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 gap-2"
          >
            {[
              { val: '50TB', label: 'Daily Ingestion' },
              { val: '<50ms', label: 'Latency' },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-[10px] p-[11px_12px] bg-white/4 border-[0.5px] border-white/10"
              >
                <div className="text-[22px] font-black text-[#edf2f5] tracking-[-0.02em]">{m.val}</div>
                <div className="font-mono text-[9px] text-[rgba(175,205,218,0.35)] tracking-[0.04em] uppercase mt-[2px]">{m.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-[13px] p-[15px_17px] backdrop-blur-[6px] bg-white/4 border-[0.5px] border-white/10"
          >
            <div className="text-[13px] font-bold text-[rgba(237,245,250,0.78)] mb-[10px]">Book a Demo</div>
            <Link
              to="/#contact"
              className="flex items-center justify-center gap-2 w-full h-[38px] bg-[#e87040] rounded-md text-white text-[13px] font-bold no-underline hover:bg-[#cf5e30] transition-colors"
            >
              Get Started →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
