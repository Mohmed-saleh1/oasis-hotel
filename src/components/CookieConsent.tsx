import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "canary_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
        >
          <div className="max-w-4xl mx-auto bg-charcoal border border-white/10 shadow-2xl">
            <div className="flex items-start gap-4 p-5 md:p-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 border border-warm-gold/30 flex items-center justify-center mt-0.5">
                <Cookie className="w-4 h-4 text-warm-gold" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-1.5">
                  Cookie Notice
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. By clicking{" "}
                  <span className="text-white/90">Accept</span>, you consent to our use of cookies. View our{" "}
                  <Link
                    to="/cookie-policy"
                    className="text-warm-gold hover:text-terracotta underline underline-offset-2 transition-colors"
                    onClick={() => setVisible(false)}
                  >
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-statement"
                    className="text-warm-gold hover:text-terracotta underline underline-offset-2 transition-colors"
                    onClick={() => setVisible(false)}
                  >
                    Privacy Statement
                  </Link>.
                </p>
              </div>

              {/* Actions */}
              <div className="flex-shrink-0 flex items-center gap-2 ml-2">
                <button
                  onClick={decline}
                  className="hidden sm:block text-white/40 hover:text-white/70 font-body text-[10px] tracking-[0.15em] uppercase transition-colors px-3 py-2 border border-transparent hover:border-white/10"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="bg-warm-gold hover:bg-terracotta text-charcoal font-body text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-colors duration-300 whitespace-nowrap"
                >
                  Accept
                </button>
                <button
                  onClick={decline}
                  aria-label="Close"
                  className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white/60 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile decline link */}
            <div className="sm:hidden border-t border-white/10 px-5 py-3 text-center">
              <button
                onClick={decline}
                className="text-white/40 hover:text-white/60 font-body text-[10px] tracking-[0.15em] uppercase transition-colors"
              >
                Decline & continue
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
