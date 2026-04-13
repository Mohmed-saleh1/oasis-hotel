import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Users, Award, Heart, Globe } from "lucide-react";

const values = [
  { icon: Heart, title: "Authentic Hospitality", description: "We believe in genuine warmth and personalized service that makes every guest feel like family." },
  { icon: Award, title: "Excellence in Service", description: "Our commitment to quality ensures every detail of your stay exceeds expectations." },
  { icon: Globe, title: "Cultural Heritage", description: "We celebrate Zanzibar's rich culture and traditions, sharing its beauty with the world." },
  { icon: Users, title: "Community Focus", description: "We invest in our local community, supporting sustainable tourism and local partnerships." },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/canary-kendwa-sunset.webp')" }}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl text-background mb-4 font-light">About Us</h1>
          <p className="font-body text-lg md:text-xl text-background/80 max-w-2xl mx-auto">
            Discover the story behind Canary Hotels and our passion for exceptional hospitality
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-terracotta font-body text-[11px] tracking-[0.4em] uppercase">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-6 font-light">
                A Legacy of Zanzibar Hospitality
              </h2>
              <div className="space-y-4 text-muted-foreground font-body">
                <p>
                  Founded with a vision to showcase the natural beauty and cultural richness of Zanzibar, 
                  Canary Hotels has grown into a collection of distinctive properties that embody the spirit 
                  of the island.
                </p>
                <p>
                  Our journey began with a simple belief: that true hospitality comes from the heart. 
                  Each of our hotels is designed to provide an authentic Zanzibari experience while 
                  offering modern comforts and world-class amenities.
                </p>
                <p>
                  From the pristine beaches of Kendwa to the historic streets of Stone Town, our 
                  properties are strategically located to offer guests the very best of what this 
                  magical island has to offer.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/canary-kendwa-main.webp" 
                alt="Canary Hotels property" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-warm-gold text-white p-6">
                <span className="font-display text-3xl block">10+</span>
                <span className="font-body text-sm">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-terracotta font-body text-[11px] tracking-[0.4em] uppercase">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl text-background mt-3 font-light">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-background/5 border border-background/10 p-6 text-center hover:border-terracotta/30 transition-colors"
              >
                <div className="w-14 h-14 bg-terracotta/15 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-display text-xl text-background mb-2">{value.title}</h3>
                <p className="font-body text-background/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-terracotta font-body text-[11px] tracking-[0.4em] uppercase">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-6 font-light">
              Dedicated to Your Experience
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Our team of hospitality professionals brings together local expertise and international 
              standards to ensure every guest enjoys an unforgettable stay. From our front desk staff 
              to our culinary team, everyone at Canary Hotels is committed to making your visit special.
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-warm-gold text-white px-8 py-3 font-body text-sm hover:bg-warm-gold/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
