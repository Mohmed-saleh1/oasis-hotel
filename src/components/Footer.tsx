import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import canaryLogo from "@/assets/canary-logo-full.png";
import { useI18n } from "@/i18n/context";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="relative text-white py-16 md:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/footer-background.png')` }}
      />
      <div className="absolute inset-0 bg-charcoal/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="mb-5 inline-block">
              <img alt="Canary Hotels" className="h-[80px] md:h-[100px] w-auto" src={canaryLogo} loading="lazy" />
            </Link>
            <p className="text-white/50 leading-relaxed mb-5 font-light text-sm max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Canary.Hotels.zanzibar" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-white/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/canary.hotels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-white/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Our Hotels */}
          <div>
            <h4 className="font-display text-base md:text-lg font-light mb-4 tracking-wide text-warm-gold">{t.footer.ourHotels}</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><Link to="/hotels/canary-kendwa" className="hover:text-white transition-colors">Canary Kendwa</Link></li>
              <li><Link to="/hotels/canary-spa" className="hover:text-white transition-colors">Canary Hotel & Spa</Link></li>
              <li><Link to="/hotels/golden-nungwi" className="hover:text-white transition-colors">Canary Golden Hotel</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base md:text-lg font-light mb-4 tracking-wide text-warm-gold">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><Link to="/hotels" className="hover:text-white transition-colors">{t.footer.allHotels}</Link></li>
              <li><Link to="/spa" className="hover:text-white transition-colors">{t.footer.spaWellness}</Link></li>
              <li><Link to="/dining" className="hover:text-white transition-colors">{t.footer.dining}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.footer.contactUs}</Link></li>
              <li>
                <a
                  href="https://forms.gle/QTYDHdnmGCKCZZ7XA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.airportTransfer}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display text-base md:text-lg font-light mb-4 tracking-wide text-warm-gold">{t.footer.contact}</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-60" />
                <span>Zanzibar, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 opacity-60" />
                <a href="tel:+255777700006" className="hover:text-white transition-colors">+255 777 700 006</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 opacity-60" />
                <a href="mailto:info@canaryworld.co" className="hover:text-white transition-colors">info@canaryworld.co</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Canary Hotels. {t.footer.allRights}</p>
          <div className="flex items-center gap-4">
            <Link to="/faq" className="hover:text-white/60 transition-colors underline underline-offset-2">
              {t.footer.faq}
            </Link>
            <span className="opacity-30">·</span>
            <Link to="/privacy-statement" className="hover:text-white/60 transition-colors underline underline-offset-2">
              {t.footer.privacy}
            </Link>
            <span className="opacity-30">·</span>
            <Link to="/cookie-policy" className="hover:text-white/60 transition-colors underline underline-offset-2">
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
