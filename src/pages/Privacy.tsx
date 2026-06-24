import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Privacy() {
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
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-dark-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-dark-teal/40 bg-primary-dark-teal/10 mb-8">
              <Shield className="w-4 h-4 text-industrial-copper" />
              <span className="text-sm font-mono text-soft-industrial-gray">Legal</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
              Privacy
              <br />
              <span className="text-gradient-teal">Policy</span>
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
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">1. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly to us, including your name, email address, company name, and phone number when you fill out forms on our website, subscribe to our newsletter, or contact us for support.</p>
              <p className="mb-3">We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. We use cookies and similar tracking technologies to collect this data.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3">
                <li>Provide, maintain, and improve our products and services</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">3. Data Sharing and Disclosure</h2>
              <p className="mb-3">We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services. These providers are contractually bound to protect your information.</p>
              <p className="mb-3">We may disclose your information if required by law or in response to valid legal requests by public authorities.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">4. Data Security</h2>
              <p className="mb-3">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption at rest and in transit, access controls, and regular security audits.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">5. Data Retention</h2>
              <p className="mb-3">We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. When we no longer need your information, we will securely delete or anonymize it.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">6. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to restrict or object to certain processing activities. To exercise these rights, please contact us at privacy@sensorpilots.com.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">7. Cookies</h2>
              <p className="mb-3">We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">8. Changes to This Policy</h2>
              <p className="mb-3">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-text-primary mb-3">9. Contact Us</h2>
              <p className="mb-3">If you have any questions about this Privacy Policy, please contact us at privacy@sensorpilots.com or write to us at 611 Gateway Blvd, South San Francisco, CA 94080, USA.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
