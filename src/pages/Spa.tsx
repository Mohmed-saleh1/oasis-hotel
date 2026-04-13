import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaLocations = [
  {
    id: "canary-hotel-spa",
    name: "Hotel & SPA",
    subtitle: "Nungwi",
    location: "Nungwi, Zanzibar",
    description: "Our flagship full-service spa offering a complete wellness journey. Experience our state-of-the-art facilities including sauna, Turkish hammam, jacuzzi, and four private treatment rooms for the ultimate pampering experience.",
    image: "/lovable-uploads/2bc97e94-cef3-46d8-97b9-0bbb32f8574f.png",
    features: ["Steam Room & Sauna", "Turkish Hammam", "Jacuzzi", "Four Private Rooms", "Full Body Massages", "Couples Treatments"],
    type: "Full-Service Spa",
  },
  {
    id: "canary-kendwa-spa",
    name: "Ceylon SPA",
    subtitle: "Kendwa",
    location: "Kendwa, Zanzibar",
    description: "A serene beachside retreat offering essential spa treatments and relaxing massages. Perfect for guests seeking rejuvenation with stunning ocean views as the backdrop to their wellness experience.",
    image: "/lovable-uploads/26ab2598-f85c-4fba-ba08-5a309669bb7e.jpg",
    features: ["Relaxing Massages", "Aromatherapy", "Hot Stone Therapy", "Foot Reflexology", "Head & Shoulder", "Herbal Treatments"],
    type: "Essential Spa Services",
  },
];

const atmosphereImages = [
  { src: "/lovable-uploads/spa-relaxation-room.jpg", label: "Treatment Suites" },
  { src: "/lovable-uploads/spa-hot-stones.jpg", label: "Hot Stone Therapy" },
  { src: "/lovable-uploads/spa-sauna.jpg", label: "Finnish Sauna" },
  { src: "/lovable-uploads/spa-bath-petals.jpg", label: "Ritual Baths" },
  { src: "/lovable-uploads/spa-robes.jpg", label: "Comfort & Care" },
  { src: "/lovable-uploads/spa-eco-products.jpg", label: "Premium Products" },
];

const Spa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative" style={{ height: "85vh", minHeight: 560 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/spa-relaxation-room.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-sand/30" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gold">
                Wellness & Relaxation
              </span>
              <div className="h-px w-12 bg-sand/30" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-sand font-light italic leading-tight">
              Spa & Wellness
            </h1>
          </div>
        </div>
      </section>

      {/* ── Intro Quote ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Sparkles className="w-7 h-7 text-warm-gold mx-auto mb-7" />
          <p className="font-display text-3xl md:text-4xl text-foreground font-light italic leading-relaxed">
            "Where the warmth of Zanzibar meets the art of healing — every visit is a journey back to yourself."
          </p>
        </div>
      </section>

      {/* ── Atmosphere strip ── */}
      <section className="bg-background overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {atmosphereImages.map((img, index) => (
            <div key={index} className="relative overflow-hidden aspect-square">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Spa Locations ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-border" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                Our Locations
              </span>
              <div className="h-px w-10 bg-border" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic">
              Choose Your Sanctuary
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {spaLocations.map((spa) => (
              <Link
                key={spa.id}
                to={`/spa/${spa.id}`}
                className="group block border border-border overflow-hidden hover:border-warm-gold/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Arch image */}
                <div
                  className="overflow-hidden mx-8 mt-8"
                  style={{ borderRadius: "999px 999px 0 0", aspectRatio: "3/4" }}
                >
                  <img
                    src={spa.image}
                    alt={spa.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-8 pb-10 text-center">
                  <span className="inline-block border border-border text-muted-foreground font-body text-[10px] tracking-[0.25em] uppercase px-4 py-1.5 mb-5 rounded-full">
                    {spa.type}
                  </span>
                  <p className="text-muted-foreground text-xs font-body uppercase tracking-widest mb-2">
                    {spa.location}
                  </p>
                  <h3 className="font-display text-4xl text-foreground font-light italic mb-1 group-hover:text-terracotta transition-colors duration-300">
                    {spa.name}
                  </h3>
                  <p className="text-warm-gold font-body text-xs tracking-[0.2em] uppercase mb-5">{spa.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-7 font-light max-w-sm mx-auto">
                    {spa.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-8 text-left max-w-xs mx-auto">
                    {spa.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-foreground/60">
                        <div className="w-1 h-1 bg-warm-gold rounded-full shrink-0" />
                        <span className="text-xs font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-warm-gold font-body text-xs tracking-[0.15em] uppercase group-hover:gap-4 transition-all duration-300">
                    Explore {spa.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three-col image strip ── */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { src: "/lovable-uploads/spa-deep-tissue.jpg", label: "Signature Service", title: "Expert Massage Therapy" },
            { src: "/lovable-uploads/spa-robes.jpg", label: "Comfort & Luxury", title: "Complimentary Robes" },
            { src: "/lovable-uploads/spa-bath-petals.jpg", label: "Ritual Experience", title: "Flower & Petal Baths" },
          ].map((item) => (
            <div key={item.title} className="relative overflow-hidden group" style={{ height: 360 }}>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent flex items-end p-8">
                <div>
                  <p className="text-warm-gold text-[10px] font-body uppercase tracking-[0.3em] mb-1">{item.label}</p>
                  <h3 className="font-display text-2xl text-sand font-light italic">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">Reserve</span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic leading-tight mb-6">
            Begin Your<br />Wellness Journey
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed max-w-md mx-auto">
            Book your spa experience and discover the ultimate in relaxation and rejuvenation
          </p>
          <a
            href="https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-12 py-5 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Spa;
