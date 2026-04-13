import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { guestServices } from "@/data/hotels";
import { MapPin, Star, ArrowRight, ExternalLink } from "lucide-react";
import { useTranslatedHotels } from "@/hooks/useTranslatedHotels";
import { useI18n } from "@/i18n/context";

// Hero images per hotel (best editorial shots)
const heroImages: Record<string, string> = {
  "canary-kendwa": "/lovable-uploads/canary-kendwa-aerial.webp",
  "canary-spa": "/lovable-uploads/canary-spa-hero.jpg",
  "golden-nungwi": "/lovable-uploads/golden-hero.jpg",
};

const Hotels = () => {
  const hotels = useTranslatedHotels();
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 bg-background text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
              {t.hotelsPage.ourProperties}
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground font-light italic leading-tight mb-6">
            {t.hotelsPage.heading1}<br />{t.hotelsPage.heading2}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto font-light">
            {t.hotelsPage.subheading}
          </p>
          <a
            href="https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-10 py-4 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            {t.hotelsPage.bookNow}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ── Hotels List ── */}
      <section className="pb-28">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-0">
            {hotels.map((hotel, index) => (
              <Link
                key={hotel.id}
                to={`/hotels/${hotel.id}`}
                className="group block overflow-hidden border-t border-border last:border-b hover:bg-muted/20 transition-colors duration-300"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                  {/* ── Arch image ── */}
                  <div className="w-full lg:w-1/2 py-10 lg:py-14 flex justify-center items-end px-6 lg:px-14">
                    <div
                      className="relative overflow-hidden w-full max-w-sm"
                      style={{ borderRadius: "999px 999px 0 0", aspectRatio: "3/4" }}
                    >
                      <img
                        src={heroImages[hotel.id] || hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* stars badge */}
                      {hotel.id !== "golden-nungwi" && (
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 text-warm-gold">
                          {[...Array(hotel.stars || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      )}
                      {/* booking badge */}
                      <a
                        href={hotel.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-warm-gold hover:bg-terracotta text-sand px-6 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase transition-all duration-200 flex items-center gap-1.5 shadow-lg whitespace-nowrap z-10"
                      >
                        {t.hotelsPage.bookNow}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* ── Content ── */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center py-10 lg:py-14 px-6 lg:px-14 text-center lg:text-left">
                    <p className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground text-xs tracking-wider mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      {hotel.location}
                    </p>

                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground font-light italic leading-tight mb-5 group-hover:text-terracotta transition-colors duration-300">
                      {hotel.name}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-8 font-light max-w-md mx-auto lg:mx-0">
                      {hotel.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
                      {hotel.features.map((feature) => (
                        <span
                          key={feature}
                          className="border border-border text-foreground/60 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase font-body"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-warm-gold font-body text-xs tracking-[0.15em] uppercase group-hover:gap-4 transition-all duration-300">
                      {t.hotelsPage.exploreHotel}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guest Services ── */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-background/20" />
              <span className="text-terracotta font-body text-[10px] tracking-[0.45em] uppercase">
                {t.hotelsPage.atYourService}
              </span>
              <div className="h-px w-12 bg-background/20" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-background font-light italic">
              {t.hotelsPage.guestServices}
            </h2>
            <p className="text-background/50 max-w-xl mx-auto mt-5 font-light leading-relaxed">
              {t.hotelsPage.guestServicesDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {guestServices.map((service, index) => (
              <div
                key={index}
                className="border border-background/10 p-6 text-center hover:border-terracotta/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-terracotta/15 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-5 h-5 text-terracotta" />
                </div>
                <h3 className="font-body text-xs tracking-wide text-background/80 leading-snug">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Hotels;
