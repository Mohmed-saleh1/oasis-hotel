import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const amenities = [
  { title: "Spa & Wellness", description: "Tranquil relaxation lounge, steam room, sauna, and private treatment rooms.", image: "/amenity-spa.png", link: "/spa" },
  { title: "Gym & Sports", description: "Fully-equipped fitness center with modern cardio and strength training.", image: "/amenity-gym.png", link: "/amenities" },
  { title: "Swimming Pool", description: "Tropical pool surrounded by sun loungers, cabanas, and lush gardens.", image: "/amenity-pool.jpg", link: "/amenities" },
  { title: "Restaurant & Dining", description: "Rooftop restaurant with panoramic views and refined à la carte dining.", image: "/amenity-restaurant.jpg", link: "/dining" },
  { title: "Breakfast", description: "A lavish breakfast buffet of local and international flavors each morning.", image: "/amenity-breakfast.png", link: "/amenities" },
];

const AmenitiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / amenities.length;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / amenities.length;
      const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (newIndex !== activeIndex) setActiveIndex(newIndex);
    }
  };

  return (
    <section id="amenities" className="py-16 md:py-28 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Label + header */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-16 bg-white/20" />
          <span className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gold">
            Amenities
          </span>
          <div className="h-px w-16 bg-white/20" />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-sand leading-tight italic">
            Everything You Need
            <br />
            <span className="not-italic text-sand/80">to Feel at Ease</span>
          </h2>
        </div>

        {/* Swipeable carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {amenities.map((amenity) => (
            <Link
              key={amenity.title}
              to={amenity.link}
              className="flex-shrink-0 w-[240px] md:w-[300px] lg:w-[320px] snap-center group"
            >
              <div className="relative overflow-hidden" style={{ borderRadius: "999px 999px 0 0" }}>
                <div className="aspect-[3/4] relative">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={426}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-center">
                    <h3 className="font-display text-lg md:text-xl text-sand mb-2">{amenity.title}</h3>
                    <div className="w-8 h-px bg-warm-gold mx-auto mb-3" />
                    <p className="text-sand/60 text-xs leading-relaxed font-light font-body">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation dots + arrows */}
        <div className="flex items-center justify-center gap-5 mt-7 md:mt-8">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-sand/60 hover:text-sand hover:border-warm-gold transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {amenities.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to amenity ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 h-1.5 bg-warm-gold" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToIndex(Math.min(amenities.length - 1, activeIndex + 1))}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-sand/60 hover:text-sand hover:border-warm-gold transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
