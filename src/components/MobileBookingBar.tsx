import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n/context";

const MobileBookingBar = () => {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("section.relative.min-h-screen");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 36 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-background/90 backdrop-blur-md border-t border-border px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted-foreground leading-tight">
                {t.mobileBar.brand}
              </p>
              <p className="font-display text-sm italic text-foreground truncate">
                {t.mobileBar.from}
              </p>
            </div>
            <a
              href="https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 bg-warm-gold hover:bg-terracotta text-sand font-body text-[10px] tracking-[0.2em] uppercase px-5 py-3 transition-colors duration-200"
            >
              {t.mobileBar.bookNow}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBookingBar;
