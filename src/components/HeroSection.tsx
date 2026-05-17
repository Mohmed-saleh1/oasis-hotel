import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/context";

const HeroSection = () => {
  const { t } = useI18n();

  const scrollToHotels = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <picture className="absolute inset-0 block">
        <source type="image/webp" srcSet="/lovable-uploads/hero-beach-kendwa.webp" />
        <img
          src="/lovable-uploads/hero-beach-kendwa.jpg"
          alt=""
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-charcoal/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-white/60 font-body text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-8 animate-fade-in">
          {t.hero.stepInto}
        </p>

        <div className="mb-8 animate-fade-in [animation-delay:200ms] opacity-0 flex flex-col items-center">
          <h1 className="font-display text-[4rem] sm:text-7xl md:text-8xl lg:text-[10rem] text-white font-light tracking-[0.05em] leading-none">
            CANARY
          </h1>
        </div>

        <p className="text-white/50 font-body text-sm md:text-base max-w-xs sm:max-w-md mx-auto mb-12 leading-relaxed animate-fade-in [animation-delay:400ms] opacity-0 font-light">
          {t.hero.tagline}
        </p>

        <button
          onClick={scrollToHotels}
          className="inline-flex items-center gap-2 bg-warm-gold/90 hover:bg-warm-gold text-white px-8 sm:px-12 py-4 font-body text-[11px] uppercase tracking-[0.25em] transition-all duration-300 animate-fade-in [animation-delay:600ms] opacity-0"
        >
          {t.hero.exploreHotels}
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToHotels}
        aria-label="Scroll down to explore hotels"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </button>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
