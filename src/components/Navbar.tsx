import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Youtube } from 'lucide-react';

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

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
        <Link to="/" className="no-underline">
          <img src="/Logo.svg" alt="Logo" className="h-7 md:h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-[22px] font-heading">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-[13px] tracking-wide no-underline transition-colors duration-300 ${
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

        <div className="hidden lg:flex items-center gap-1.5">
          {[
            { href: 'https://www.facebook.com/SensorPilots/', icon: Facebook, label: 'Facebook' },
            { href: 'https://x.com/SensorPilots', icon: X, label: 'X' },
            { href: 'https://www.pinterest.com/SensorPilots/', icon: PinterestIcon, label: 'Pinterest' },
            { href: 'https://www.youtube.com/@SensorPilots', icon: Youtube, label: 'YouTube' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/35 hover:text-white/75 hover:bg-white/5 transition-all duration-300"
              title={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <Link
            to="/product"
            className="flex items-center gap-[5px] px-3 py-[5px] rounded-full border-[0.5px] border-primary-dark-teal/55 bg-primary-dark-teal text-[12px] text-white no-underline cursor-pointer select-none hover:bg-primary-dark-teal/85 transition-colors"
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
                  className={`px-3 py-3 text-[13px] no-underline rounded-lg transition-colors font-heading tracking-wide ${
                    isActive(link.href)
                      ? 'text-white/75 bg-[rgba(16,76,100,0.35)]'
                      : 'text-white/35 hover:text-white/75 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/product"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-full border-[0.5px] border-primary-dark-teal/55 bg-primary-dark-teal text-[12px] text-white no-underline hover:bg-primary-dark-teal/85 transition-colors"
              >
                Get Started ⊞
              </Link>
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
                {[
                  { href: 'https://www.facebook.com/SensorPilots/', icon: Facebook, label: 'Facebook' },
                  { href: 'https://x.com/SensorPilots', icon: X, label: 'X' },
                  { href: 'https://www.pinterest.com/SensorPilots/', icon: PinterestIcon, label: 'Pinterest' },
                  { href: 'https://www.youtube.com/@SensorPilots', icon: Youtube, label: 'YouTube' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-white/35 hover:text-white/75 hover:bg-white/5 transition-all duration-300"
                    title={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
