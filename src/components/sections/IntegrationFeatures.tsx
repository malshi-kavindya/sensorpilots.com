import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Server, Globe, BarChart3 } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function IntegrationFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const integrations = [
    {
      title: 'SCADA Integration',
      icon: Monitor,
      desc: 'Bidirectional integration with SCADA systems including Wonderware, Ignition, and WinCC. Read sensor data and write back predictions.',
      features: ['Wonderware', 'Ignition', 'WinCC', 'GE iFIX'],
    },
    {
      title: 'PLC Connectivity',
      icon: Server,
      desc: 'Direct PLC connectivity via Ethernet/IP, Profinet, and OPC-UA. No middleware required for Siemens S7, Rockwell ControlLogix, and Schneider.',
      features: ['Siemens S7', 'Rockwell', 'Schneider', 'Mitsubishi'],
    },
    {
      title: 'Cloud IoT Support',
      icon: Globe,
      desc: 'Cloud-native IoT connectors for AWS IoT, Azure IoT Hub, and Google Cloud IoT. Bridge on-premise sensors to cloud analytics.',
      features: ['AWS IoT', 'Azure IoT', 'GCP IoT', 'MQTT'],
    },
    {
      title: 'Custom Dashboards',
      icon: BarChart3,
      desc: 'Drag-and-drop dashboard builder with 30+ widget types. Real-time charts, gauges, heatmaps, and anomaly overlays.',
      features: ['30+ Widgets', 'Real-time', 'Heatmaps', 'Export'],
    },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Integration & Dashboards" subtitle="Connect everything, visualize anything" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((int, i) => (
            <motion.div key={int.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-industrial-copper/20 border border-industrial-copper/30 flex items-center justify-center mb-4">
                <int.icon className="w-6 h-6 text-industrial-copper" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">{int.title}</h3>
              <p className="text-sm text-soft-industrial-gray leading-relaxed mb-4">{int.desc}</p>
              <div className="flex flex-wrap gap-2">
                {int.features.map((f) => (
                  <span key={f} className="px-2 py-1 rounded bg-industrial-copper/10 text-xs font-mono text-industrial-copper border border-industrial-copper/20">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
