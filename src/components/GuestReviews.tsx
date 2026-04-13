import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const reviews = [
  {
    quote: "Clean, elegant, and excellent value. The breakfast buffet is incredible and beach access is perfect. We didn't want to leave.",
    name: "Thomas K.",
    location: "Germany",
    room: "Golden Nungwi",
    platform: "booking" as const
  },
  {
    quote: "There's a rare kind of magic here. You wake up to filtered light, soft sounds, and the warmth of something real. The staff somehow know when to be invisible and when to be right there.",
    name: "Elena V.",
    location: "Italy",
    room: "Canary Hotel & Spa",
    platform: "google" as const
  },
  {
    quote: "An absolutely transformative experience. The attention to detail, the pristine beaches, and the warmth of the people made this our best vacation ever.",
    name: "Sarah M.",
    location: "USA",
    room: "Golden Nungwi",
    platform: "booking" as const
  },
  {
    quote: "We came here for our honeymoon and found ourselves planning our anniversary before we even checked out. The Canary Hotels really are that beautiful.",
    name: "Natalie & Theo",
    location: "France",
    room: "Canary Kendwa",
    platform: "google" as const
  },
  {
    quote: "The spa treatments were divine, and watching the sunset from our private terrace was pure magic. From the moment we arrived, we felt like royalty.",
    name: "Aisha R.",
    location: "UAE",
    room: "Canary Hotel & Spa",
    platform: "tripadvisor" as const
  },
];

const ratingSummary = [
  {
    platform: "google",
    rating: 4.6,
    reviews: 500,
    link: "https://www.google.com/maps/place/Canary+Hotel+%26+SPA/@-5.7301669,39.2922405,17z",
    name: "Google Maps",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    platform: "tripadvisor",
    rating: 4.5,
    reviews: 320,
    link: "https://www.tripadvisor.com/Hotel_Review-g616016-d23970210-Reviews-Canary_Hotel_Spa-Nungwi_Zanzibar_Island_Zanzibar_Archipelago.html",
    name: "Tripadvisor",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
        <circle cx="12" cy="12" r="12" fill="#34E0A1" />
        <circle cx="8" cy="12" r="3" fill="white" />
        <circle cx="16" cy="12" r="3" fill="white" />
        <circle cx="8" cy="12" r="1.5" fill="#1A1A1A" />
        <circle cx="16" cy="12" r="1.5" fill="#1A1A1A" />
        <path d="M12 8 L8 12 M12 8 L16 12" stroke="#1A1A1A" strokeWidth="1" fill="none" />
        <path d="M11 6 L12 4 L13 6" fill="#FF8C00" />
      </svg>
    ),
  },
  {
    platform: "booking",
    rating: 9.4,
    reviews: 280,
    link: "https://www.booking.com/hotel/tz/canary-two-amp-spa.html",
    name: "Booking.com",
    logo: (
      <div className="w-5 h-5 bg-[#003580] rounded flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-[10px]">B.</span>
      </div>
    ),
  },
];

const PlatformDot = ({ platform }: { platform: "google" | "tripadvisor" | "booking" }) => {
  const colors = { google: "bg-blue-400", tripadvisor: "bg-emerald-400", booking: "bg-[#003580]" };
  return <div className={`w-2 h-2 rounded-full ${colors[platform]}`} />;
};

const GuestReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [activeReview, setActiveReview] = useState(0);

  // Marquee auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.45;
    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    const pause = () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
    const resume = () => { animationRef.current = requestAnimationFrame(animate); };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  const duplicated = [...reviews, ...reviews];

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-16 bg-border" />
          <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
            Guest Stories
          </span>
          <div className="h-px w-16 bg-border" />
        </div>

        {/* Large feature quote */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed text-foreground mb-6 transition-all duration-500">
            &ldquo;{reviews[activeReview].quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <PlatformDot platform={reviews[activeReview].platform} />
            <span className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground font-medium">
              {reviews[activeReview].name}
            </span>
            <span className="text-border">·</span>
            <span className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
              {reviews[activeReview].location} · {reviews[activeReview].room}
            </span>
          </div>

          {/* Dot nav for featured quote */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === activeReview ? "w-6 h-1.5 bg-warm-gold" : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground/40"}`}
              />
            ))}
          </div>
        </div>

        {/* Rating strip */}
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4 mb-12 py-8 border-y border-border">
          {ratingSummary.map((item) => (
            <a
              key={item.platform}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="flex items-center gap-2">
                {item.logo}
                <span className="font-display text-2xl font-light text-foreground">{item.rating}</span>
              </div>
              <span className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-terracotta transition-colors">
                {item.name} · {item.reviews}+ reviews
              </span>
            </a>
          ))}
        </div>


      </div>

      {/* Marquee scroll strip */}
      <div
        ref={scrollRef}
        className="overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        <div className="flex gap-5 px-4" style={{ width: "max-content" }}>
          {duplicated.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              onClick={() => setActiveReview(index % reviews.length)}
              className="bg-muted/60 border border-border p-6 w-[340px] flex-shrink-0 cursor-pointer hover:border-warm-gold/50 transition-colors duration-300 group"
            >
              {/* Platform indicator */}
              <div className="flex items-center gap-2 mb-4">
                <PlatformDot platform={review.platform} />
                <span className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                  {review.platform === "tripadvisor" ? "Tripadvisor" : review.platform === "google" ? "Google" : "Booking.com"}
                </span>
              </div>

              {/* Large opening quote */}
              <p className="font-display text-3xl text-warm-gold/40 leading-none mb-1 italic">"</p>
              <p className="text-foreground/70 font-body text-sm leading-relaxed mb-5 font-light min-h-[72px]">
                {review.quote}
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border/60">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground font-medium">
                  {review.name}
                </p>
                <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  {review.location} · {review.room}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform links */}
      <div className="container mx-auto px-4 mt-8 flex flex-wrap justify-center gap-6">
        {ratingSummary.map((item) => (
          <a
            key={item.platform}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-body text-[10px] tracking-[0.15em] uppercase transition-colors"
          >
            View on {item.name}
            <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default GuestReviews;
