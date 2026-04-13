import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaData = {
  "canary-hotel-spa": {
    name: "Hotel & SPA",
    location: "Nungwi, Zanzibar",
    heroImage: "/lovable-uploads/2bc97e94-cef3-46d8-97b9-0bbb32f8574f.png",
    description: "Our flagship full-service spa offering a complete wellness journey. Experience state-of-the-art facilities including sauna, Turkish hammam, jacuzzi, and four private treatment rooms.",
    treatments: [
      { name: "Zanzibar Signature Massage", duration: "90 min", description: "A unique blend of Swahili techniques with aromatic spice oils" },
      { name: "Deep Tissue Massage", duration: "60 min", description: "Intensive therapy targeting muscle tension and chronic pain" },
      { name: "Hot Stone Therapy", duration: "75 min", description: "Heated volcanic stones for deep relaxation" },
      { name: "Couples Retreat", duration: "120 min", description: "Shared experience with massage, facial, and champagne" },
      { name: "Hammam Ritual", duration: "90 min", description: "Traditional cleansing, exfoliation, and massage" },
      { name: "Rejuvenating Facial", duration: "60 min", description: "Deep cleansing and hydration using tropical ingredients" },
      { name: "Body Wrap & Scrub", duration: "75 min", description: "Exfoliating coffee scrub followed by nourishing wrap" },
      { name: "Reflexology", duration: "45 min", description: "Pressure point therapy on feet for whole-body wellness" },
    ],
    productImage: "/lovable-uploads/spa-eco-products.jpg",
    robeImage: "/lovable-uploads/spa-hot-stones.jpg",
  },
  "canary-kendwa-spa": {
    name: "Ceylon SPA",
    location: "Kendwa, Zanzibar",
    heroImage: "/lovable-uploads/26ab2598-f85c-4fba-ba08-5a309669bb7e.jpg",
    description: "A serene beachside retreat offering essential spa treatments and relaxing massages with stunning ocean views as your backdrop.",
    treatments: [
      { name: "Relaxing Swedish Massage", duration: "60 min", description: "Classic massage for stress relief and relaxation" },
      { name: "Aromatherapy Massage", duration: "75 min", description: "Essential oils tailored to your needs" },
      { name: "Hot Stone Massage", duration: "60 min", description: "Warm stones melt away tension" },
      { name: "Head & Shoulder Massage", duration: "30 min", description: "Focused relief for upper body tension" },
      { name: "Foot Reflexology", duration: "45 min", description: "Pressure point therapy for whole-body wellness" },
      { name: "Sunset Beach Massage", duration: "60 min", description: "Outdoor massage as the sun sets over the ocean" },
    ],
    productImage: "/lovable-uploads/spa-eco-products.jpg",
    robeImage: "/lovable-uploads/spa-robes.jpg",
  },
};

const SpaDetail = () => {
  const { spaId } = useParams<{ spaId: string }>();
  const spa = spaId ? spaData[spaId as keyof typeof spaData] : null;

  if (!spa) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="font-display text-4xl text-foreground italic mb-4">Spa Not Found</h1>
          <Link to="/spa" className="text-warm-gold hover:underline text-sm tracking-wider">
            Return to Spa & Wellness
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative" style={{ height: "85vh", minHeight: 560 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${spa.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>

        {/* Back link */}
        <div className="absolute top-28 left-0 right-0">
          <div className="container mx-auto px-6">
            <Link
              to="/spa"
              className="inline-flex items-center gap-2 text-sand/70 hover:text-sand transition-colors text-xs tracking-[0.15em] uppercase font-body"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Spa & Wellness
            </Link>
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-sand/30" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gold">
                {spa.location}
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-sand font-light italic leading-tight">
              {spa.name}
            </h1>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
              Our Sanctuary
            </span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light italic mb-8 leading-tight">
            A Journey Back<br />to Yourself
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-light">{spa.description}</p>
        </div>
      </section>

      {/* ── Treatment Menu ── */}
      <section className="py-28 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-border" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                Treatment Menu
              </span>
              <div className="h-px w-10 bg-border" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic">
              Our Treatments
            </h2>
          </div>

          <div className="space-y-3">
            {spa.treatments.map((treatment, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-7 border border-border hover:border-warm-gold/40 bg-background hover:bg-muted/20 transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-foreground font-light italic mb-1">
                    {treatment.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light">{treatment.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-3 md:mt-0 text-warm-gold shrink-0 ml-8">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-body tracking-wider">{treatment.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products & Comfort ── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative overflow-hidden group"
          style={{ height: 420 }}
        >
          <img
            src={spa.productImage}
            alt="Spa products"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent flex items-end p-10">
            <div>
              <p className="text-warm-gold text-[10px] font-body uppercase tracking-[0.3em] mb-2">Premium Range</p>
              <h3 className="font-display text-3xl text-sand font-light italic">Natural Products</h3>
            </div>
          </div>
        </div>
        <div
          className="relative overflow-hidden group"
          style={{ height: 420 }}
        >
          <img
            src={spa.robeImage}
            alt="Spa comfort"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent flex items-end p-10">
            <div>
              <p className="text-warm-gold text-[10px] font-body uppercase tracking-[0.3em] mb-2">Comfort & Care</p>
              <h3 className="font-display text-3xl text-sand font-light italic">Complete Comfort</h3>
            </div>
          </div>
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
            Book Your<br />Treatment
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed max-w-md mx-auto">
            Contact our spa reception to schedule your personalized wellness experience
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

export default SpaDetail;
