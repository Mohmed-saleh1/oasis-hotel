const IntroSection = () => {
  return (
    <section className="py-16 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Top label */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <div className="h-px w-12 md:w-16 bg-border" />
          <span className="font-body text-[10px] tracking-[0.35em] md:tracking-[0.45em] uppercase text-terracotta">
            Welcome to Canary Hotels
          </span>
          <div className="h-px w-12 md:w-16 bg-border" />
        </div>

        {/* Asymmetric editorial layout */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-end max-w-6xl mx-auto">

          {/* Large display headline */}
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light text-foreground">
              Three Hotels.{" "}
              <br />
              <span className="italic text-muted-foreground">One Philosophy</span>
              <br />
              of Stillness.
            </h2>
          </div>

          {/* Right column — body text */}
          <div className="md:col-span-5 md:pb-3">
            <div className="w-8 h-px bg-warm-gold mb-5" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light font-body">
              A collection of refined stays crafted for comfort, calm, and meaningful moments — on the white-sand shores of Zanzibar.
            </p>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="max-w-6xl mx-auto mt-12 md:mt-14 pt-8 md:pt-10 border-t border-border grid grid-cols-3 gap-4 text-center">
          {[
            { value: "3", label: "Unique Properties" },
            { value: "4★", label: "Star Rated" },
            { value: "Zanzibar", label: "Tanzania" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-xl md:text-3xl font-light text-foreground italic">{stat.value}</p>
              <p className="font-body text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntroSection;
