import { useState, useRef, useCallback } from "react";
import { MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";
import HeroBookingWidget from "@/components/HeroBookingWidget";
import { useI18n } from "@/i18n/context";
import { useTranslatedHotels } from "@/hooks/useTranslatedHotels";

const hotelImages: Record<string, string> = {
  "canary-kendwa": "/lovable-uploads/canary-kendwa-aerial.webp",
  "canary-spa":    "/lovable-uploads/canary-spa-hero.jpg",
  "golden-nungwi": "/lovable-uploads/golden-hero.jpg",
};

const SWIPE_OFFSET   = 50;
const SWIPE_VELOCITY = 250;

const DestinationsSection = () => {
  const { t } = useI18n();
  const hotels = useTranslatedHotels();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction,   setDirection]   = useState(1);
  const [isDragging,  setIsDragging]  = useState(false);
  const [hasSwipedOnce, setHasSwipedOnce] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });

  const goTo = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((p) => (p - 1 + hotels.length) % hotels.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((p) => (p + 1) % hotels.length);
  }, []);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(false);
      const { offset, velocity } = info;
      const goNext = offset.x < -SWIPE_OFFSET || velocity.x < -SWIPE_VELOCITY;
      const goPrev = offset.x >  SWIPE_OFFSET || velocity.x >  SWIPE_VELOCITY;
      if (goNext) { next(); setHasSwipedOnce(true); }
      else if (goPrev) { prev(); setHasSwipedOnce(true); }
    },
    [next, prev],
  );

  const getImage = (id: string) =>
    hotelImages[id] || hotels.find((h) => h.id === id)?.image || "";

  const hotel = hotels[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="pt-12 pb-20 md:pb-28 bg-background overflow-hidden"
    >
      {/* ── Booking Widget ── */}
      <HeroBookingWidget />

      {/* ── Section label ── */}
      <motion.div
        className="flex items-center justify-center gap-4 mt-16 mb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="h-px bg-border"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />
        <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
          {t.destinations.ourProperties}
        </span>
        <motion.div
          className="h-px bg-border"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />
      </motion.div>

      {/* ── Unified swipeable card (image + text move together) ── */}
      <motion.div
        className="select-none touch-pan-y cursor-grab active:cursor-grabbing md:cursor-default"
        drag="x"
        dragDirectionLock
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={{ left: 0.15, right: 0.15 }}
        whileDrag={{ scale: 0.995 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {/* Image */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(300px, 52vw, 600px)" }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={hotel.id}
              src={getImage(hotel.id)}
              alt={hotel.name}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 1.04 }}
              animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.97, transition: { duration: 0.35, ease: "easeIn" } }}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </AnimatePresence>

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/10 to-transparent pointer-events-none" />

          {/* Desktop arrows */}
          <button
            onClick={prev}
            aria-label="Previous property"
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center border border-sand/40 bg-charcoal/30 backdrop-blur-sm text-sand hover:bg-warm-gold hover:border-warm-gold hover:text-charcoal transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next property"
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center border border-sand/40 bg-charcoal/30 backdrop-blur-sm text-sand hover:bg-warm-gold hover:border-warm-gold hover:text-charcoal transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile swipe hint — fades out after first swipe */}
          <AnimatePresence>
            {!hasSwipedOnce && !isDragging && (
              <motion.div
                className="md:hidden absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.0, duration: 0.6 } }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
              >
                <motion.div
                  animate={{ x: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-sand/50" />
                  <span className="font-body text-[9px] tracking-[0.3em] uppercase text-sand/50">{t.destinations.swipe}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-sand/50" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {hotels.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to property ${i + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-8 h-1.5 bg-warm-gold"
                    : "w-1.5 h-1.5 bg-sand/40 hover:bg-sand/70"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-5 right-5 font-body text-[10px] tracking-[0.3em] text-sand/60 z-10 pointer-events-none">
            {String(activeIndex + 1).padStart(2, "0")} / {String(hotels.length).padStart(2, "0")}
          </div>
        </div>

        {/* Text block — same drag container, seamlessly below image */}
        <div className="container mx-auto px-6 md:px-8 mt-8 max-w-3xl pointer-events-none md:pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.05 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-0.5 bg-warm-gold mb-5" />

              <p className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-body text-terracotta mb-2">
                <MapPin className="w-3 h-3" />
                {hotel.location}
              </p>

              <h3 className="font-display font-light italic text-foreground text-3xl md:text-5xl leading-tight mb-4">
                {hotel.name}
              </h3>

              <p className="text-sm font-light leading-relaxed text-muted-foreground mb-5 max-w-xl">
                {hotel.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {hotel.features.slice(0, 3).map((f) => (
                  <span
                    key={f}
                    className="font-body text-[9px] tracking-[0.15em] uppercase border border-warm-gold/50 text-foreground/70 bg-warm-gold/5 px-3 py-1"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Re-enable pointer events on CTA row */}
              <div className="flex items-center gap-5 pointer-events-auto">
                <a
                  href={hotel.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-warm-gold hover:bg-terracotta text-sand font-body text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-all duration-200"
                >
                  {t.destinations.bookNow} <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  to={`/hotels/${hotel.id}`}
                  className="text-muted-foreground font-body text-[10px] tracking-[0.2em] uppercase hover:text-terracotta transition-colors underline underline-offset-4"
                >
                  {t.destinations.explore}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop tab switcher */}
          <div className="hidden md:flex gap-0 mt-12 border-t border-border/30">
            {hotels.map((h, i) => (
              <button
                key={h.id}
                onClick={() => goTo(i)}
                className={`flex-1 pt-4 pb-3 text-left px-2 border-t-2 transition-all duration-300 ${
                  i === activeIndex
                    ? "border-warm-gold"
                    : "border-transparent opacity-40 hover:opacity-70 hover:border-warm-gold/30"
                }`}
              >
                <p className={`font-body text-[9px] tracking-wider uppercase mb-1 ${i === activeIndex ? "text-terracotta" : "text-muted-foreground"}`}>
                  {h.location}
                </p>
                <p className={`font-display italic leading-tight ${i === activeIndex ? "text-foreground text-base" : "text-muted-foreground text-sm"}`}>
                  {h.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DestinationsSection;
