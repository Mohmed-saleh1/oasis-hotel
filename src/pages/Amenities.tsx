import { 
  Waves, Utensils, Dumbbell, Music, 
  Sparkles, Sun, Heart, Wifi, Car, Shirt, Clock, Shield, Baby, Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const amenitiesData = [
  {
    id: "spa", title: "Spa & Wellness", subtitle: "Ultimate Relaxation",
    description: "Relax in our state-of-the-art facilities, which feature a tranquil relaxation lounge, a steam room, and a sauna. For those seeking a complete retreat, we offer bespoke spa packages that combine a range of treatments for the ultimate pampering experience.",
    image: "/lovable-uploads/amenity-spa.jpg", icon: Sparkles,
    features: ["Steam Room & Sauna", "Turkish Hammam", "Jacuzzi", "Four Private Treatment Rooms", "Relaxing Massages", "Rejuvenating Beauty Rituals", "Bespoke Spa Packages"]
  },
  {
    id: "restaurant", title: "Restaurant & Dining", subtitle: "Culinary Excellence",
    description: "In the morning we serve a breakfast buffet, a Full English/Irish or American breakfast can be enjoyed at the property. Our rooftop restaurant offers panoramic views serving à la carte meals, while the poolside grill features fresh bites, grill specialties, and refreshing beverages.",
    image: "/lovable-uploads/amenity-restaurant.jpg", icon: Utensils,
    features: ["Breakfast Buffet", "Rooftop Restaurant", "Panoramic Views", "À la Carte Dining", "Poolside Grill", "Fresh Juices & Smoothies", "Fresh Local Cuisine"]
  },
  {
    id: "gym", title: "Gym & Sports", subtitle: "Stay Active",
    description: "Whether working out in the gym or enjoying games like table tennis, foosball, billiards, and darts, guests have a variety of fun and active options to choose from.",
    image: "/lovable-uploads/amenity-gym.jpg", icon: Dumbbell,
    features: ["Fully Equipped Fitness Center", "Table Tennis", "Billiards", "Volleyball", "Darts", "Foosball", "Complimentary Bicycles"]
  },
  {
    id: "pool", title: "Swimming Pool", subtitle: "Tropical Oasis",
    description: "Unwind by our main swimming pool surrounded by sun loungers and cabanas in a tropical garden environment, with refreshing beverages and attentive poolside service.",
    image: "/lovable-uploads/amenity-pool.jpg", icon: Waves,
    features: ["Main Swimming Pool", "Sun Loungers & Cabanas", "Tropical Garden Setting", "Poolside Refreshments", "Water Sports Access", "Beach Access (1-2 min walk)"]
  },
  {
    id: "entertainment", title: "Entertainment", subtitle: "Evening Magic",
    description: "Our evenings come alive with traditional cultural shows, live entertainment, and BBQ nights, creating a vibrant atmosphere that celebrates the rhythm and energy of Zanzibar.",
    image: "/lovable-uploads/amenity-entertainment-detail.jpg", icon: Music,
    features: ["Traditional Cultural Shows", "Live Music Performances", "BBQ Nights", "Evening Entertainment", "Cultural Performances", "Vibrant Atmosphere"]
  }
];

const guestServices = [
  { icon: Clock, title: "24/7 Reception & Concierge" },
  { icon: Shield, title: "24-Hour Security + CCTV" },
  { icon: Car, title: "Airport Transfers" },
  { icon: Shirt, title: "Laundry & Dry Cleaning" },
  { icon: Baby, title: "Babysitting, Cots & High Chairs" },
  { icon: Phone, title: "Room Service" },
  { icon: Heart, title: "Doctor on Call" },
  { icon: Wifi, title: "High-Speed Wi-Fi" },
];

const Amenities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/amenity-spa.jpg')" }}
        >
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center text-background px-4">
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-terracotta">
            Experience Excellence
          </span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 tracking-wide font-light">
            Our Amenities
          </h1>
          <p className="font-body text-lg text-background/80 mt-6 max-w-2xl mx-auto">
            From world-class wellness facilities to exciting activities, discover everything that makes your stay unforgettable
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {amenitiesData.map((amenity, index) => (
            <div 
              key={amenity.id}
              id={amenity.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 mb-24 last:mb-0`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden group">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center">
                      <amenity.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-terracotta font-body text-[11px] tracking-[0.4em] uppercase">
                  {amenity.subtitle}
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2 mb-6 font-light">
                  {amenity.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{amenity.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {amenity.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                      <span className="font-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Services */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-terracotta font-body text-[11px] tracking-[0.4em] uppercase">At Your Service</span>
            <h2 className="font-display text-4xl md:text-5xl text-background mt-3 font-light">Guest Services</h2>
            <p className="text-background/60 max-w-2xl mx-auto mt-4">
              From arrival to departure, our dedicated team ensures every detail of your stay is taken care of
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {guestServices.map((service, index) => (
              <div key={index} className="bg-background/5 border border-background/10 p-6 text-center hover:bg-background/10 transition-colors">
                <div className="w-14 h-14 bg-terracotta/15 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-terracotta" />
                </div>
                <h3 className="font-body text-sm text-background">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4 font-light">
            Experience It All
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Book your stay and enjoy all our world-class amenities and services
          </p>
          <a
            href="https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground hover:bg-foreground/90 text-background px-8 py-4 font-body tracking-wider text-sm transition-all duration-300"
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

export default Amenities;
