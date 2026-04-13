import { useState } from "react";
import { MapPin, Clock, Users, Camera, ChevronRight, Mountain, Waves, Building2, Leaf, Ship, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import tourMnembaDolphins from "@/assets/tour-mnemba-dolphins.jpg";
import tourSpiceStonetown from "@/assets/tour-spice-stonetown.jpg";
import tourNakupenda from "@/assets/tour-nakupenda.jpg";
import tourJozaniCave from "@/assets/tour-jozani-cave.jpg";
import tourMtendeBeach from "@/assets/tour-mtende-beach.jpg";
import tourTheRock from "@/assets/tour-the-rock.jpg";
import tourKuzaCave from "@/assets/tour-kuza-cave.jpg";
import tourPrisonIslandTortoise from "@/assets/tour-prison-island-tortoise.jpg";
import tourStoneTownAlley from "@/assets/tour-stone-town-alley.jpg";
import tourSpicePlantation from "@/assets/tour-spice-plantation.jpg";
import tourNightMarket from "@/assets/tour-night-market.jpg";
import tourVillageBiking from "@/assets/tour-village-biking.jpg";
import tourDhowSunset from "@/assets/tour-dhow-sunset.jpg";
import tourScubaDiving from "@/assets/tour-scuba-diving.jpg";
import tourNungwiBeach from "@/assets/tour-nungwi-beach.jpg";
import tourKitesurfing from "@/assets/tour-kitesurfing.jpg";
import tourYachtHopping from "@/assets/tour-yacht-hopping.jpg";
import tourSkydiving from "@/assets/tour-skydiving.jpg";
import tourJetSki from "@/assets/tour-jet-ski.jpg";
import tourBlueSafari from "@/assets/tour-blue-safari.jpg";
import tourPajeBeach from "@/assets/tour-paje-beach.jpg";

const categories = [
  { id: "islands", label: "Islands & History", icon: Building2 },
  { id: "beach", label: "Beach & Water", icon: Waves },
  { id: "cultural", label: "Cultural", icon: Leaf },
  { id: "water-sports", label: "Water Sports", icon: Ship },
  { id: "safari", label: "Safari", icon: Mountain },
];

const zanzibarTours = [
  { category: "islands", name: "Prison Island & Stone Town Tour", highlights: ["Giant tortoises", "UNESCO heritage", "Historic streets"], duration: "Half Day", groupSize: "2-12", image: tourPrisonIslandTortoise },
  { category: "islands", name: "Prison Island & Nakupenda Tour", highlights: ["Tortoises", "Sandbank beach", "Lunch included"], duration: "Full Day", groupSize: "4-15", image: tourNakupenda },
  { category: "islands", name: "Jozani Forest & Salaam Cave", highlights: ["Red Colobus monkeys", "Cave exploration", "Nature walk"], duration: "Half Day", groupSize: "2-12", image: tourJozaniCave },
  { category: "islands", name: "Jozani, Salaam Cave & Mtende Beach", highlights: ["Wildlife", "Cave swim", "Beach relaxation"], duration: "Full Day", groupSize: "2-10", image: tourMtendeBeach },
  { category: "islands", name: "Jozani, Kuza Cave & Paje Beach", highlights: ["Monkey spotting", "Cave swimming", "Paje Beach"], duration: "Full Day", groupSize: "2-12", image: tourKuzaCave },
  { category: "islands", name: "Stone Town Heritage Walk", highlights: ["Arabic architecture", "Carved doorways", "Swahili history"], duration: "Half Day", groupSize: "2-15", image: tourStoneTownAlley },
  { category: "beach", name: "Nungwi Beach", highlights: ["World-class beach", "Traditional dhow boats", "Shallow waters"], duration: "Full Day", groupSize: "2-12", image: tourNungwiBeach },
  { category: "beach", name: "Paje Beach", highlights: ["Kitesurfing", "Snorkeling", "Swimming with turtles"], duration: "Full Day", groupSize: "2-10", image: tourPajeBeach },
  { category: "beach", name: "Nakupenda Beach", highlights: ["Nature reserve", "Pristine sands", "Crystal waters"], duration: "Half Day", groupSize: "4-20", image: tourNakupenda },
  { category: "beach", name: "The Rock & Blue Lagoons Snorkelling", highlights: ["Iconic Rock Restaurant", "Starfish spotting", "Blue lagoons"], duration: "Full Day", groupSize: "2-10", image: tourTheRock },
  { category: "beach", name: "Scuba Diving", highlights: ["Vibrant coral reefs", "Tropical fish", "Underwater paradise"], duration: "Half Day", groupSize: "2-6", image: tourScubaDiving },
  { category: "cultural", name: "Spice Tour & Stone Town with Lunch", highlights: ["Spice tasting", "UNESCO heritage", "Local lunch"], duration: "Full Day", groupSize: "2-15", image: tourSpicePlantation },
  { category: "cultural", name: "Spice Tour Extended", highlights: ["Plantation visit", "Hands-on spice tour", "Local cooking"], duration: "Half Day", groupSize: "2-12", image: tourSpiceStonetown },
  { category: "cultural", name: "Night Market Experience", highlights: ["Street food", "Local culture", "Vibrant atmosphere"], duration: "Evening", groupSize: "2-8", image: tourNightMarket },
  { category: "cultural", name: "Village Biking Tour", highlights: ["Rural exploration", "Local communities", "Authentic experience"], duration: "Half Day", groupSize: "2-10", image: tourVillageBiking },
  { category: "water-sports", name: "Mnemba Island & Dolphin Swimming", highlights: ["Swim with dolphins", "Snorkeling", "Marine paradise"], duration: "Full Day", groupSize: "2-10", image: tourMnembaDolphins },
  { category: "water-sports", name: "Dhow Sunset Cruise", highlights: ["Traditional sailing", "Sunset views", "Fresh seafood"], duration: "3 Hours", groupSize: "2-20", image: tourDhowSunset },
  { category: "water-sports", name: "Blue Safari", highlights: ["Full-day trip", "Snorkeling", "BBQ lunch"], duration: "Full Day", groupSize: "4-12", image: tourBlueSafari },
  { category: "water-sports", name: "Kitesurfing", highlights: ["Professional instruction", "Equipment rental", "Paje Beach"], duration: "2-4 Hours", groupSize: "1-4", image: tourKitesurfing },
  { category: "water-sports", name: "Jet Skiing", highlights: ["High-speed adventure", "Ocean exploration", "Thrilling ride"], duration: "30-60 min", groupSize: "1-2", image: tourJetSki },
  { category: "water-sports", name: "Yacht Island Hopping", highlights: ["Luxury yacht", "Multiple islands", "Lunch included"], duration: "Full Day", groupSize: "2-8", image: tourYachtHopping },
  { category: "water-sports", name: "Skydiving", highlights: ["Tandem jump", "Ocean views", "Ultimate thrill"], duration: "Half Day", groupSize: "1-4", image: tourSkydiving },
];

const safariDestinations = [
  { name: "Serengeti National Park", features: "Great Wildebeest Migration, endless plains", wildlife: "Big Five, millions of wildebeest, zebras, cheetahs", duration: "2-5 Days" },
  { name: "Ngorongoro Crater", features: "World's largest intact volcanic caldera, UNESCO site", wildlife: "Densest wildlife concentration, black rhinos", duration: "1-2 Days" },
  { name: "Tarangire National Park", features: "Permanent water sources, baobab trees", wildlife: "250,000 mammals in dry season, large elephant herds", duration: "1-2 Days" },
  { name: "Lake Manyara National Park", features: "Diverse microclimates, compact park", wildlife: "Tree-climbing lions, flamingos, elephants", duration: "1 Day" },
  { name: "Nyerere National Park (Selous)", features: "Africa's largest game reserve, Rufiji River", wildlife: "Boat safaris, walking safaris, wild dogs", duration: "2-4 Days" },
  { name: "Mahale Mountains", features: "Lake Tanganyika shores, mountain forests", wildlife: "Over 800 wild chimpanzees", duration: "3-5 Days" },
];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState("islands");
  const filteredTours = zanzibarTours.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative" style={{ height: "85vh", minHeight: 560 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-sand/30" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gold">
                Canary Travels
              </span>
              <div className="h-px w-12 bg-sand/30" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-sand font-light italic leading-tight">
              Tours & Excursions
            </h1>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
              Complete Travel Solutions
            </span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light italic mb-8 leading-tight">
            Seamless Travel<br />from Start to Finish
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-light mb-10">
            At Canary Travels, we pride ourselves on offering a complete travel solution — airport transfers, island-wide transportation, curated excursions, and unforgettable safaris.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Plane, label: "Airport Transfers" },
              { icon: MapPin, label: "Island Transportation" },
              { icon: Mountain, label: "Safari Expeditions" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 border border-border px-5 py-3">
                <Icon className="w-4 h-4 text-terracotta" />
                <span className="text-sm text-foreground font-light">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport Transfer CTA ── */}
      <section id="airport-transfer" className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">Hassle-Free Travel</span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light italic mb-4 leading-tight">
            Airport Transfer
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-lg mx-auto">
            Seamless arrivals and departures — our driver will be waiting for you at the airport, ready to take you directly to your hotel.
          </p>
          <a
            href="https://forms.gle/QTYDHdnmGCKCZZ7XA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-10 py-4 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            <Plane className="w-4 h-4" />
            Book Airport Transfer
          </a>
        </div>
      </section>

      {/* ── Zanzibar Excursions ── */}
      <section className="py-28 bg-foreground">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-background/20" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                The Spice Island
              </span>
              <div className="h-px w-10 bg-background/20" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-sand font-light italic">
              Zanzibar Excursions
            </h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 font-body text-[11px] tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-warm-gold text-sand"
                    : "bg-background/10 text-sand/70 hover:bg-background/20 hover:text-sand"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tours grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.name}
                className="group border border-background/10 bg-background/5 overflow-hidden hover:border-warm-gold/40 hover:bg-background/10 transition-all duration-500"
              >
                {/* Arch image */}
                <div
                  className="overflow-hidden mx-6 mt-6"
                  style={{ borderRadius: "999px 999px 0 0", aspectRatio: "3/4" }}
                >
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 pb-8">
                  <h3 className="font-display text-2xl text-sand font-light italic mb-3">
                    {tour.name}
                  </h3>
                  <div className="flex items-center gap-5 text-xs text-sand/50 mb-4 font-body tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3 h-3" />
                      {tour.groupSize} guests
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.highlights.map((h, i) => (
                      <span key={i} className="flex items-center gap-1 border border-background/15 text-sand/70 px-2.5 py-1 text-[10px] tracking-wide font-body">
                        <Camera className="w-2.5 h-2.5" />
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full text-center border border-background/30 text-sand/80 hover:bg-warm-gold hover:border-warm-gold hover:text-sand py-3 font-body text-[11px] tracking-[0.15em] uppercase transition-all duration-200"
                  >
                    Book This Tour
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safari Destinations ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-border" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                Ultimate African Adventure
              </span>
              <div className="h-px w-10 bg-border" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic mb-6">
              Tanzania Safaris
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
              Tanzania is the quintessential African safari destination — vast plains, iconic wildlife, and breathtaking landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariDestinations.map((dest) => (
              <div
                key={dest.name}
                className="border border-border p-8 hover:border-warm-gold/40 transition-colors duration-300 bg-background"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Mountain className="w-4 h-4 text-terracotta" />
                  <span className="text-xs text-muted-foreground font-body tracking-wider">{dest.duration}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground font-light italic mb-3">{dest.name}</h3>
                <p className="text-muted-foreground text-sm font-light mb-3 leading-relaxed">{dest.features}</p>
                <p className="text-foreground/70 text-sm font-light">
                  <span className="text-terracotta font-body text-[10px] tracking-[0.15em] uppercase mr-2">Wildlife</span>
                  {dest.wildlife}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-8 font-light">
              We also offer safaris to Ruaha National Park, Mikumi, Gombe Stream, and Mount Kilimanjaro treks.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-10 py-5 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              Plan Your Safari
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">Let's Go</span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic leading-tight mb-6">
            Start Your<br />Adventure
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed max-w-md mx-auto">
            Contact our team to customize your perfect Zanzibar and Tanzania experience
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-12 py-5 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Tours;
