import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, ArrowRight, Facebook, X, Youtube } from 'lucide-react';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Product', href: '/product' },
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'API Docs', comingSoon: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/#blog' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Use Cases', href: '/#use-cases' },
      { label: 'Technical Guides', comingSoon: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Vision & Mission', href: '/#vision-mission' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-deep-machine-shadow/60 overflow-hidden">

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-primary-dark-teal/5 blur-[120px] rounded-full" />
      </div>

      {/* Giant wordmark — the signature element */}
      <div className="relative border-b border-white/[0.05] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* CTA row above wordmark */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary-dark-teal font-semibold mb-2">
                  Ready to transform your operations?
                </p>
                <p className="text-soft-industrial-gray text-sm max-w-sm leading-relaxed">
                  Join 500+ industrial enterprises already running on SensorPilots.
                </p>
              </div>
              <Link
                to="/#contact"
                className="group flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-dark-teal hover:bg-primary-dark-teal/85 text-text-primary text-sm font-semibold transition-all duration-300 overflow-hidden relative w-fit"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative">Get in touch</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Oversized wordmark */}
            <div className="relative overflow-hidden -mx-6">
              <span
                className="block text-[clamp(4.5rem,14vw,12rem)] font-black tracking-tighter leading-none text-white/[0.04] select-none whitespace-nowrap px-6 transition-colors duration-700 hover:text-white/[0.07]"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                SENSORPILOTS
              </span>
              {/* Gradient fade at right edge */}
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-deep-machine-shadow/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center w-fit">
              <img src="/Logo.svg" alt="Logo" className="h-7 md:h-8 w-auto" />
            </Link>

            {/* Tagline */}
            <p className="text-soft-industrial-gray text-sm leading-relaxed max-w-xs">
              AI-powered predictive maintenance and industrial sensor analytics. Transforming machines into intelligent, self-aware systems.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                
                { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://www.facebook.com/SensorPilots/', icon: Facebook, label: 'Facebook' },
                { href: 'https://x.com/SensorPilots', icon: X, label: 'twitter' },
                { href: 'https://www.pinterest.com/SensorPilots/', icon: PinterestIcon, label: 'Pinterest' },
                { href: 'https://www.youtube.com/@SensorPilots', icon: Youtube, label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.07] hover:border-primary-dark-teal/40 hover:bg-primary-dark-teal/10 text-soft-industrial-gray hover:text-text-primary transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-[0.14em] font-semibold">{label}</span>
                </a>
              ))}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-dark-teal opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-dark-teal" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-soft-industrial-gray/60 font-semibold">
                All systems operational
              </span>
            </div>
          </div>

          {/* Links cols */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerSections.map((section, si) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: si * 0.07 }}
              >
                <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-soft-industrial-gray/50 mb-5 font-heading">
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link: any) => (
                    <li key={link.label}>
                      {link.comingSoon ? (
                        <span className="flex items-center gap-2 text-sm text-soft-industrial-gray/40 cursor-default font-heading tracking-wide">
                          {link.label}
                          <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-soft-industrial-gray/50 font-semibold">
                            Coming Soon
                          </span>
                        </span>
                      ) : (
                        <Link
                          to={link.href}
                          className="group flex items-center gap-1 text-sm text-soft-industrial-gray/70 hover:text-text-primary transition-colors duration-200 font-heading tracking-wide"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-soft-industrial-gray/40 tracking-wide">
            © {new Date().getFullYear()} SensorPilots Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
            ].map(({ label, href }, i, arr) => (
              <span key={label} className="flex items-center gap-1">
                <Link
                  to={href}
                  className="text-[11px] text-soft-industrial-gray/40 hover:text-soft-industrial-gray transition-colors px-2 font-heading tracking-wide"
                >
                  {label}
                </Link>
                {i < arr.length - 1 && <span className="text-white/10">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}