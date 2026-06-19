import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      const hash = '#' + href.split('#')[1];
      return location.pathname === '/' && location.hash === hash;
    }
    return location.pathname === href;
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(11,24,32,0.85)] backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-9 py-4 flex items-center justify-between">
        <Link to="/" className="font-mono text-[12px] text-white/35 tracking-[0.1em] no-underline hover:text-white/55 transition-colors">
          SYNTHOS
        </Link>

        <nav className="hidden lg:flex items-center gap-[22px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-[13px] no-underline transition-colors duration-300 ${
                isActive(link.href)
                  ? 'text-white/75'
                  : 'text-white/35 hover:text-white/75'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-[2px] left-0 right-0 h-[1.5px] bg-[#e87040] rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {['✕', '◎', '⊙'].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-[5px] px-3 py-[5px] rounded-full border-[0.5px] border-white/10 bg-white/[0.04] text-[12px] text-white/38 cursor-pointer select-none"
            >
              {s}
            </span>
          ))}
          <Link
            to="/#contact"
            className="flex items-center gap-[5px] px-3 py-[5px] rounded-full border-[0.5px] border-[rgba(16,76,100,0.55)] bg-[rgba(16,76,100,0.35)] text-[12px] text-[rgba(200,225,235,0.75)] no-underline cursor-pointer select-none"
          >
            Get Started ⊞
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-white/75"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/[0.06]"
            style={{ background: 'rgba(11,24,32,0.95)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-3 text-[13px] no-underline rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-white/75 bg-[rgba(16,76,100,0.35)]'
                      : 'text-white/35 hover:text-white/75 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-full border-[0.5px] border-[rgba(16,76,100,0.55)] bg-[rgba(16,76,100,0.35)] text-[12px] text-[rgba(200,225,235,0.75)] no-underline"
              >
                Get Started ⊞
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
