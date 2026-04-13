import { Martini, Plane, Dumbbell, Wifi, Sparkles, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Martini, title: "Personalized Service", description: "Dedicated staff attending to your every need — from arrival to departure.", cta: null },
  { icon: Plane, title: "Airport Transfer", description: "Seamless arrivals and departures with professional drivers to and from all our properties.", cta: { label: "Book Transfer", href: "https://forms.gle/QTYDHdnmGCKCZZ7XA", external: true } },
  { icon: Dumbbell, title: "Activities & Recreation", description: "Snorkeling, diving, tennis, volleyball, live music, and cultural evenings.", cta: null },
  { icon: Wifi, title: "High-Speed Wi-Fi", description: "Complimentary high-speed internet throughout all properties and common areas.", cta: null },
  { icon: Sparkles, title: "Laundry & Dry Cleaning", description: "Convenient same-day laundry and professional dry cleaning on request.", cta: null },
  { icon: Compass, title: "Tours & Excursions", description: "Curated Zanzibar tours and experiences arranged by our travel desk.", cta: { label: "Explore Tours", href: "/tours", external: false } },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">

        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <div className="h-px w-16 bg-border" />
          <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">Services</span>
          <div className="h-px w-16 bg-border" />
        </div>

        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground italic">
            Thoughtful Service.{" "}
            <span className="not-italic text-foreground">Seamless Stay.</span>
          </h2>
        </div>

        {/* 2-col on mobile, 3-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const rightBorderMobile = i % 2 === 0 ? "border-r" : "";
            const rightBorderLg = i % 3 !== 2 ? "lg:border-r" : "lg:border-r-0";
            return (
              <div
                key={service.title}
                className={`py-6 md:py-8 px-5 md:px-8 border-t border-border flex flex-col ${rightBorderMobile} ${rightBorderLg}`}
              >
                <service.icon className="w-5 h-5 text-warm-gold mb-4" strokeWidth={1.4} />
                <h3 className="text-xs md:text-sm text-foreground font-body font-medium tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-xs md:text-sm flex-1">
                  {service.description}
                </p>
                {service.cta && (
                  service.cta.external ? (
                    <a
                      href={service.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-body text-[10px] tracking-[0.2em] uppercase text-terracotta border-b border-terracotta/40 hover:border-terracotta transition-colors pb-px self-start"
                    >
                      {service.cta.label} →
                    </a>
                  ) : (
                    <Link
                      to={service.cta.href}
                      className="mt-4 inline-block font-body text-[10px] tracking-[0.2em] uppercase text-terracotta border-b border-terracotta/40 hover:border-terracotta transition-colors pb-px self-start"
                    >
                      {service.cta.label} →
                    </Link>
                  )
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

