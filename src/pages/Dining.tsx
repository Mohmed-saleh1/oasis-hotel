import { Utensils, Clock, Star, Citrus, Coffee, UtensilsCrossed, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const diningVenues = [
  {
    name: "Essence Beach Restaurant",
    subtitle: "Feet in the Sand Experience",
    description: "Dine with your feet in the sand as you savor fresh seafood and Swahili dishes with the gentle waves as your backdrop.",
    image: "/lovable-uploads/essence-restaurant.jpg",
    hours: "12:00 PM – 10:00 PM",
  },
  {
    name: "Rooftop Restaurant",
    subtitle: "Fine Dining with Panoramic Views",
    description: "Breathtaking 360° views of Nungwi and the Indian Ocean paired with refined à la carte dining and spectacular sunsets.",
    image: "/lovable-uploads/rooftop-restaurant.jpg",
    hours: "6:00 PM – 10:30 PM",
  },
  {
    name: "Poolside Grill",
    subtitle: "Casual Dining by the Pool",
    description: "Fresh grilled specialties, light bites, tropical smoothies and fresh juices in a relaxed, sun-drenched setting.",
    image: "/lovable-uploads/poolside-grill.jpg",
    hours: "10:00 AM – 6:00 PM",
  },
];

const cuisineHighlights = [
  { icon: UtensilsCrossed, title: "Swahili Fusion", description: "Traditional recipes reimagined with contemporary flair" },
  { icon: Star, title: "Fresh Seafood", description: "Daily catches from local fishermen" },
  { icon: Citrus, title: "Fresh Juices & Smoothies", description: "Refreshing blends with fresh local tropical fruits" },
  { icon: Coffee, title: "Breakfast Buffet", description: "Full English, American, and continental options" },
];

const Dining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative" style={{ height: "85vh", minHeight: 560 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/dining-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-sand/30" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gold">
                Culinary Excellence
              </span>
              <div className="h-px w-12 bg-sand/30" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-sand font-light italic leading-tight">
              Dining & Cuisine
            </h1>
          </div>
        </div>
      </section>

      {/* ── Chef Intro ── */}
      <section className="py-24 bg-background">
        <div className="w-full px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <blockquote className="border-l-2 border-warm-gold pl-6">
              <p className="font-display text-2xl md:text-3xl text-foreground font-light italic leading-relaxed">
                "Every dish begins with creativity and is finished with heart."
              </p>
              <cite className="text-muted-foreground font-body text-sm mt-4 block not-italic tracking-wider">
                — Chef Franco Tarek
              </cite>
            </blockquote>
            <p className="text-muted-foreground font-light leading-relaxed text-base">
              Under the direction of Chef Franco Tarek, our kitchen delivers a refined, chef-driven dining experience defined by precision, creativity, and consistency. Each dish is thoughtfully composed to highlight flavor, balance, and presentation.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-base">
              The menu celebrates premium ingredients and carefully crafted dishes, prepared in a professionally run kitchen. From relaxed daytime dining to elevated evening service — unhurried, sophisticated, and deeply satisfying.
            </p>
          </div>
        </div>
      </section>

      {/* ── Dish Gallery ── */}
      <section className="bg-background">
        <div className="grid grid-cols-3 gap-0">
          <div className="overflow-hidden aspect-square">
            <img src="/lovable-uploads/dish-lobster.jpg" alt="Grilled lobster" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src="/lovable-uploads/dish-octopus.png" alt="Grilled octopus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src="/lovable-uploads/dish-steak.jpg" alt="Seared steak" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── Cuisine Highlights ── */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuisineHighlights.map((item, index) => (
              <div key={index} className="border border-border bg-background p-7 text-center hover:border-warm-gold/40 transition-colors duration-300">
                <div className="w-12 h-12 bg-warm-gold/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-warm-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground font-light italic mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dining Venues ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-border" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                Our Venues
              </span>
              <div className="h-px w-10 bg-border" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic">
              Dining Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diningVenues.map((venue) => (
              <div
                key={venue.name}
                className="group border border-border overflow-hidden hover:border-warm-gold/50 hover:shadow-xl transition-all duration-500 bg-background"
              >
                {/* Arch image */}
                <div
                  className="overflow-hidden mx-7 mt-7"
                  style={{ borderRadius: "999px 999px 0 0", aspectRatio: "3/4" }}
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 text-center">
                  <span className="text-terracotta font-body text-[10px] tracking-[0.3em] uppercase">{venue.subtitle}</span>
                  <h3 className="font-display text-3xl text-foreground font-light italic mt-2 mb-3">
                    {venue.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-light">{venue.description}</p>
                  <p className="text-muted-foreground/60 text-xs tracking-wide flex items-center justify-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {venue.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">Reserve</span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic leading-tight mb-6">
            Reserve<br />Your Table
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed max-w-md mx-auto">
            For special dining experiences or group reservations, please contact our team
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-10 py-5 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              Book Your Stay
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border hover:border-terracotta text-foreground hover:text-terracotta px-10 py-5 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dining;
