import { useRef, useState } from "react";
import { Clock, Users, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import tourMnembaDolphins from "@/assets/tour-mnemba-dolphins.jpg";
import tourSpiceStonetown from "@/assets/tour-spice-stonetown.jpg";
import tourPrisonIsland from "@/assets/tour-prison-island.jpg";
import tourNakupenda from "@/assets/tour-nakupenda.jpg";
import tourJozaniCave from "@/assets/tour-jozani-cave.jpg";
import tourMtendeBeach from "@/assets/tour-mtende-beach.jpg";
import tourTheRock from "@/assets/tour-the-rock.jpg";
import tourKuzaCave from "@/assets/tour-kuza-cave.jpg";

const tours = [
  { title: "Mnemba Island & Dolphin Swimming", duration: "Full Day", groupSize: "2–10 guests", image: tourMnembaDolphins, description: "Swim with wild dolphins near Mnemba Island and snorkel in pristine coral reefs." },
  { title: "Jozani, Kuza Cave & Paje Beach", duration: "Full Day", groupSize: "2–12 guests", image: tourKuzaCave, description: "Explore Jozani Forest, swim in the natural Kuza Cave pool, and relax at Paje Beach." },
  { title: "Prison Island & Nakupenda Tour", duration: "Full Day", groupSize: "4–15 guests", image: tourNakupenda, description: "Experience Prison Island's wildlife and relax on the pristine Nakupenda sandbank." },
  { title: "Jozani Forest & Salaam Cave", duration: "Half Day", groupSize: "2–12 guests", image: tourJozaniCave, description: "Encounter rare Red Colobus monkeys and explore the mysterious Salaam Cave." },
  { title: "Spice Tour & Stone Town with Lunch", duration: "Full Day", groupSize: "2–15 guests", image: tourSpiceStonetown, description: "Explore aromatic spice plantations followed by a guided tour of historic Stone Town." },
  { title: "Prison Island & Stone Town Tour", duration: "Half Day", groupSize: "2–12 guests", image: tourPrisonIsland, description: "Visit the giant tortoises on Prison Island and explore Stone Town's historic streets." },
  { title: "Jozani, Salaam Cave & Mtende Beach", duration: "Full Day", groupSize: "2–10 guests", image: tourMtendeBeach, description: "A complete adventure combining forest, cave, and beach experiences." },
  { title: "The Rock & Blue Lagoons Snorkelling", duration: "Full Day", groupSize: "2–10 guests", image: tourTheRock, description: "Visit the iconic Rock Restaurant and snorkel in crystal-clear lagoons with starfish." },
];

const CARD_WIDTH = 280;
const CARD_GAP = 20;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

const ToursSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(tours.length - 1, index));
    setActiveIndex(clamped);
    scrollRef.current?.scrollTo({ left: clamped * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const newIndex = Math.round(scrollRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP));
      setActiveIndex(Math.min(newIndex, tours.length - 1));
    }
  };

  return (
    <section ref={sectionRef} id="tours" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="h-px w-16 bg-border" />
          <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
            Tours & Experiences
          </span>
          <div className="h-px w-16 bg-border" />
        </motion.div>

        {/* Headline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground italic leading-tight mb-3">
            Discover <span className="not-italic">Zanzibar</span>
          </h2>
          <p className="text-muted-foreground text-sm font-light max-w-md mx-auto">
            Curated experiences that capture the essence of the island — from thrilling ocean adventures to cultural immersions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-shrink-0 group"
              style={{ width: CARD_WIDTH }}
            >
              {/* Arch image */}
              <div
                className="relative overflow-hidden mb-4"
                style={{ borderRadius: "999px 999px 0 0", height: 340 }}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  width={280}
                  height={340}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-warm-gold/0 group-hover:bg-warm-gold/8 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Text */}
              <div className="px-1">
                <h3 className="font-body text-sm font-medium text-foreground leading-snug mb-2 group-hover:text-warm-gold transition-colors duration-300">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground mb-3">
                  <span className="flex items-center gap-1 text-[10px] font-body">
                    <Users className="w-3 h-3" />
                    {tour.groupSize}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-body">
                    <Clock className="w-3 h-3" />
                    {tour.duration}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed font-light mb-4">
                  {tour.description}
                </p>
                <Link
                  to="/tours"
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-body text-warm-gold hover:text-terracotta transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots + View All */}
        <motion.div
          className="flex items-center justify-between max-w-5xl mx-auto mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            {tours.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to tour ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 h-1.5 bg-warm-gold"
                    : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-body text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 group/all"
          >
            View All Tours
            <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ToursSection;
