import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl p-4 sm:p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={reject}
                className="absolute top-3 right-3 text-soft-industrial-gray hover:text-text-primary transition-colors sm:hidden"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-3 flex-1">
                <div className="w-9 h-9 rounded-lg bg-primary-dark-teal/20 border border-primary-dark-teal/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Cookie className="w-4 h-4 text-primary-dark-teal" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-text-primary mb-0.5">Cookie Consent</p>
                  <p className="text-xs text-soft-industrial-gray leading-relaxed max-w-xl">
                    We use cookies to enhance your browsing experience and analyze site traffic.
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 flex-shrink-0 self-end sm:self-center">
                <button
                  onClick={reject}
                  className="hidden sm:inline-flex text-xs font-medium text-soft-industrial-gray hover:text-text-primary transition-colors px-3 py-2"
                >
                  Reject All
                </button>
                <button
                  onClick={reject}
                  className="sm:hidden text-xs font-medium text-soft-industrial-gray hover:text-text-primary transition-colors px-3 py-1.5 rounded-lg border border-white/10"
                >
                  Reject
                </button>
                <button
                  onClick={accept}
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-industrial-copper hover:bg-industrial-copper/90 text-white transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
