import { Link } from 'react-router-dom';

import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Product', href: '/product' },
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'API Docs', href: '/api-docs' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/#blog' },
      { label: 'Whitepapers', href: '/#resources' },
      { label: 'Case Studies', href: '/#resources' },
      { label: 'Technical Guides', href: '/#resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Careers', href: '/#careers' },
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
    <footer className="border-t border-white/5 bg-deep-machine-shadow/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary-dark-teal flex items-center justify-center">
                <span className="font-mono font-bold text-text-primary text-sm">SP</span>
              </div>
              <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
                SensorPilots
              </span>
            </Link>
            <p className="text-soft-industrial-gray text-sm leading-relaxed max-w-xs">
              AI Predictive Maintenance & Industrial Sensor Analytics Platform.
              Transforming machines into intelligent systems.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-soft-industrial-gray hover:text-text-primary transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-soft-industrial-gray hover:text-text-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-text-primary text-sm mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-1 text-sm text-soft-industrial-gray hover:text-text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-soft-industrial-gray/60 text-sm">
            &copy; {new Date().getFullYear()} SensorPilots. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-soft-industrial-gray/60 text-sm hover:text-soft-industrial-gray transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-soft-industrial-gray/60 text-sm hover:text-soft-industrial-gray transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
