import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

const BeachBreakSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative h-[55vh] min-h-[320px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/nungwi-beach-aerial.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 font-body text-[10px] tracking-[0.45em] uppercase mb-4">
            {t.beach.location}
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-white italic mb-8 leading-tight">
            {t.beach.headline1}
            <br />{t.beach.headline2}
          </h2>
          <Link
            to="/hotels"
            className="inline-flex items-center gap-3 bg-warm-gold/90 hover:bg-warm-gold text-sand px-8 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 group hover:scale-[1.02]"
          >
            {t.beach.exploreHotels}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BeachBreakSection;
