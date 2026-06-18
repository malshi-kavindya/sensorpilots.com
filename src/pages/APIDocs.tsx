import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Code, AlertTriangle, Cpu, BookOpen, Server, Zap, Shield } from 'lucide-react';

function APIDocsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-warm-signal-alert/40 bg-warm-signal-alert/10 mb-8">
            <AlertTriangle className="w-4 h-4 text-warm-signal-alert" />
            <span className="text-sm font-mono text-warm-signal-alert">Coming Soon</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            API Documentation
            <br />
            <span className="text-gradient-copper">In Development</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-industrial-gray max-w-2xl mx-auto leading-relaxed">
            Our comprehensive API documentation is currently being prepared. Here's a preview of what to expect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PreviewContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const endpoints = [
    { method: 'GET', path: '/v1/sensors', desc: 'List all sensors with filtering and pagination' },
    { method: 'GET', path: '/v1/sensors/{id}/telemetry', desc: 'Retrieve telemetry data for a specific sensor' },
    { method: 'POST', path: '/v1/predictions', desc: 'Run predictive model on a sensor stream' },
    { method: 'GET', path: '/v1/health-scores', desc: 'Get machine health scores across assets' },
    { method: 'GET', path: '/v1/alerts', desc: 'List active alerts with severity filtering' },
    { method: 'POST', path: '/v1/webhooks', desc: 'Register webhook endpoints for event notifications' },
  ];

  const features = [
    { icon: Terminal, title: 'REST API', desc: 'Full OpenAPI 3.0 spec with RESTful endpoints' },
    { icon: Code, title: 'GraphQL', desc: 'Flexible queries for complex data relationships' },
    { icon: Zap, title: 'WebSocket', desc: 'Real-time streaming for live dashboards' },
    { icon: Server, title: 'Webhooks', desc: 'Event-driven notifications to external systems' },
    { icon: BookOpen, title: 'SDKs', desc: 'Python, JavaScript, and Go SDKs with examples' },
    { icon: Shield, title: 'Auth', desc: 'OAuth 2.0, API keys, and scoped token management' },
  ];

  return (
    <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">API Preview</h2>
            <div className="space-y-3">
              {endpoints.map((ep, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${ep.method === 'GET' ? 'bg-primary-dark-teal/30 text-primary-dark-teal' : 'bg-warm-signal-alert/30 text-warm-signal-alert'}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-sm text-text-primary">{ep.path}</span>
                  </div>
                  <p className="text-xs text-soft-industrial-gray ml-16">{ep.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">Integration Features</h2>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary-dark-teal/20 flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-primary-dark-teal" />
                  </div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-soft-industrial-gray">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CodePreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const code = `import sensorpilots

client = sensorpilots.Client(api_key="YOUR_API_KEY")

# Get sensor telemetry
sensor = client.sensors.get("sensor-123")
telemetry = sensor.telemetry(
  start="2026-01-01T00:00:00Z",
  end="2026-01-02T00:00:00Z",
  resolution="1m"
)

# Run prediction
prediction = client.predictions.run(
  sensor_id="sensor-123",
  model="lstm-failure-v2",
  horizon="7d"
)

print(f"Health Score: {prediction.health_score}")
print(f"RUL Estimate: {prediction.rul} days")
print(f"Failure Probability: {prediction.failure_probability}")`;

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-6 text-center">Python SDK Preview</h2>
          <div className="rounded-xl border border-white/10 bg-deep-machine-shadow/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-warm-signal-alert" />
              <div className="w-3 h-3 rounded-full bg-industrial-copper" />
              <div className="w-3 h-3 rounded-full bg-primary-dark-teal" />
              <span className="ml-2 font-mono text-xs text-soft-industrial-gray">example.py</span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="font-mono text-sm text-soft-industrial-gray leading-relaxed">
                {code.split('\n').map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-white/20 w-8 text-right mr-4 select-none">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/import|from|client|sensor|print|def|class|return/g, '<span class="text-primary-dark-teal">$&</span>')
                        .replace(/".*?"/g, '<span class="text-industrial-copper">$&</span>')
                        .replace(/\d+/, '<span class="text-warm-signal-alert">$&</span>')
                    }} />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NotifySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5">
          <Cpu className="w-12 h-12 text-industrial-copper mx-auto mb-6" />
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">Get Notified</h2>
          <p className="text-soft-industrial-gray mb-8 max-w-lg mx-auto">
            Be the first to know when our API documentation and SDKs are released. Early access available for enterprise partners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-soft-industrial-gray focus:outline-none focus:border-primary-dark-teal/40 transition-colors" />
            <button className="w-full sm:w-auto px-6 py-3 bg-primary-dark-teal hover:bg-primary-dark-teal/80 text-text-primary font-semibold rounded-lg transition-all">
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function APIDocs() {
  return (
    <div>
      <APIDocsHero />
      <PreviewContent />
      <CodePreview />
      <NotifySection />
    </div>
  );
}
