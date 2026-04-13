import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ZanzibarVibeSection = () => {
  return (
    <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/zanzibar-aerial-beach.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-white/60 font-body text-[10px] tracking-[0.45em] uppercase mb-5">
            Escape to Zanzibar
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            Escape to <em>stillness</em>,
            <br /> privacy and soul.
          </h2>
          <Link
            to="/hotels"
            className="inline-flex items-center gap-3 bg-warm-gold/90 hover:bg-warm-gold text-sand px-8 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 group hover:scale-[1.02]"
          >
            Book Your Escape
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ZanzibarVibeSection;
