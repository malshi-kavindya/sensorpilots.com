import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileCheck } from 'lucide-react';

export default function Terms() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(16, 76, 100, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 76, 100, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-industrial-copper/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
              <FileCheck className="w-4 h-4 text-industrial-copper" />
              <span className="text-sm font-mono text-soft-industrial-gray">Legal</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
              Terms of
              <br />
              <span className="text-gradient-teal">Service</span>
            </h1>
            <p className="text-lg text-soft-industrial-gray max-w-2xl mx-auto leading-relaxed">
              Last updated: June 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-deep-machine-shadow/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8 text-sm text-text-primary/80 leading-relaxed">
            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">1. Acceptance of Terms</h2>
              <p className="mb-3">By accessing or using the SensorPilots website, platform, and related services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the Services.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">2. Description of Services</h2>
              <p className="mb-3">SensorPilots provides an AI-powered predictive maintenance and industrial sensor analytics platform. We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time with reasonable notice.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">3. User Accounts</h2>
              <p className="mb-3">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage arising from your failure to protect your account.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">4. Acceptable Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3">
                <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Reverse engineer, decompile, or disassemble any aspect of the platform</li>
                <li>Upload or transmit malicious code, viruses, or harmful data</li>
                <li>Use the Services to infringe upon the rights of others</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">5. Intellectual Property</h2>
              <p className="mb-3">The Services, including all content, features, and functionality, are owned by SensorPilots, Inc. and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">6. Payment Terms</h2>
              <p className="mb-3">Paid plans are billed in advance on a monthly or annual basis as selected during sign-up. All fees are non-refundable except as expressly stated in our refund policy. We may change our fees with 30 days' notice. Late payments may result in service suspension.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">7. Limitation of Liability</h2>
              <p className="mb-3">To the maximum extent permitted by law, SensorPilots shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">8. Termination</h2>
              <p className="mb-3">We may terminate or suspend your account at any time for violation of these terms, illegal activity, or conduct that may harm other users or third parties. Upon termination, your right to use the Services immediately ceases. We will provide notice and an opportunity to cure where feasible.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">9. Governing Law</h2>
              <p className="mb-3">These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Suffolk County, Massachusetts.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">10. Contact</h2>
              <p className="mb-3">For questions about these Terms of Service, please contact us at legal@sensorpilots.com or write to us at 100 Industrial Way, Suite 400, Boston, MA 02110, USA.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
