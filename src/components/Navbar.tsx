import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, MapPin, Star, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { hotels } from "@/data/hotels";
import canaryLogo from "@/assets/canary-logo-full.png";
import { useI18n, LANGUAGE_LABELS, type Language } from "@/i18n/context";

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileHotelsOpen, setIsMobileHotelsOpen] = useState(false);
  const [isMobileSpaOpen, setIsMobileSpaOpen] = useState(false);
  const [isHotelsOpen, setIsHotelsOpen] = useState(false);
  const [isSpaOpen, setIsSpaOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const spaRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";
  const useDarkText = !isHomepage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (hotelsRef.current && !hotelsRef.current.contains(e.target as Node)) {
        setIsHotelsOpen(false);
      }
      if (spaRef.current && !spaRef.current.contains(e.target as Node)) {
        setIsSpaOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.replace("/", ""));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-cream/95 backdrop-blur-lg shadow-sm py-3" : isHomepage ? "bg-transparent py-6" : "bg-cream/90 backdrop-blur-lg py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Hotels Mega Menu */}
            <div
              ref={hotelsRef}
              className="relative"
              onMouseEnter={() => setIsHotelsOpen(true)}
              onMouseLeave={() => setIsHotelsOpen(false)}
            >
              <button
                onClick={() => { setIsHotelsOpen(!isHotelsOpen); navigate("/hotels"); }}
                className={`font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-terracotta flex items-center gap-1.5 ${useDarkText ? "text-charcoal" : "text-white"}`}
              >
                {t.nav.hotels}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isHotelsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Hotels Mega Menu Dropdown */}
              {isHotelsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-cream border border-border shadow-xl p-8 min-w-[700px]">
                    <div className="grid grid-cols-3 gap-8">
                      {hotels.map((hotel) => (
                        <div key={hotel.id} className="group/card flex flex-col">
                          <Link
                            to={`/hotels/${hotel.id}`}
                            onClick={() => setIsHotelsOpen(false)}
                            className="block flex-1 cursor-pointer"
                          >
                            <div className="aspect-[4/3] overflow-hidden mb-4">
                             <img
                                src={hotel.image}
                                alt={hotel.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="flex items-center gap-1 mb-1.5">
                              {hotel.stars && (
                                <div className="flex items-center gap-0.5">
                                  {[...Array(hotel.stars)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-warm-gold text-warm-gold" />
                                  ))}
                                </div>
                              )}
                            </div>
                            <h4 className="font-display text-foreground text-base font-medium mb-1 group-hover/card:text-terracotta transition-colors">
                              {hotel.name}
                            </h4>
                            <div className="flex items-center gap-1 text-muted-foreground text-xs">
                              <MapPin className="w-3 h-3" />
                              {hotel.location}
                            </div>
                          </Link>
                          <a
                            href={hotel.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-foreground hover:bg-foreground/90 text-white text-xs py-2.5 font-body tracking-[0.1em] uppercase transition-colors mt-4"
                          >
                            {t.nav.bookNow}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border mt-8 pt-5">
                      <Link
                        to="/hotels"
                        onClick={() => setIsHotelsOpen(false)}
                        className="text-muted-foreground text-sm hover:text-terracotta transition-colors flex items-center gap-2"
                      >
                        {t.nav.viewAllHotels}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Spa & Wellness Dropdown */}
            <div
              ref={spaRef}
              className="relative"
              onMouseEnter={() => setIsSpaOpen(true)}
              onMouseLeave={() => setIsSpaOpen(false)}
            >
              <button
                onClick={() => { setIsSpaOpen(!isSpaOpen); navigate("/spa"); }}
                className={`font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-terracotta flex items-center gap-1.5 ${useDarkText ? "text-charcoal" : "text-white"}`}
              >
                {t.nav.spaWellness}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSpaOpen ? "rotate-180" : ""}`} />
              </button>

              {isSpaOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-cream border border-border shadow-xl p-5 min-w-[280px]">
                    <Link
                      to="/spa/canary-hotel-spa"
                      onClick={() => setIsSpaOpen(false)}
                      className="block p-3 hover:bg-muted transition-colors rounded-sm"
                    >
                      <h4 className="font-display text-foreground text-base font-medium mb-1">{t.nav.hotelSpa}</h4>
                      <p className="text-muted-foreground text-xs">{t.nav.hotelSpaDesc}</p>
                    </Link>
                    <Link
                      to="/spa/canary-kendwa-spa"
                      onClick={() => setIsSpaOpen(false)}
                      className="block p-3 hover:bg-muted transition-colors rounded-sm"
                    >
                      <h4 className="font-display text-foreground text-base font-medium mb-1">{t.nav.ceylonSpa}</h4>
                      <p className="text-muted-foreground text-xs">{t.nav.ceylonSpaDesc}</p>
                    </Link>
                    <div className="border-t border-border mt-3 pt-3">
                      <Link
                        to="/spa"
                        onClick={() => setIsSpaOpen(false)}
                        className="text-muted-foreground text-sm hover:text-terracotta transition-colors flex items-center gap-2"
                      >
                        {t.nav.viewAllSpa}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/dining"
              className={`font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-terracotta ${useDarkText ? "text-charcoal" : "text-white"}`}
            >
              {t.nav.dining}
            </Link>

            <Link
              to="/tours"
              className={`font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-terracotta ${useDarkText ? "text-charcoal" : "text-white"}`}
            >
              {t.nav.tours}
            </Link>
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center transition-colors lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <img alt="Canary Hotels" className="h-[70px] lg:h-[90px] w-auto" src={canaryLogo} />
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1.5 font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-terracotta ${useDarkText ? "text-charcoal" : "text-white"}`}
              >
                <Globe className="w-3.5 h-3.5" />
                {LANGUAGE_LABELS[lang].label}
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-cream border border-border shadow-xl py-1 min-w-[110px] z-50">
                  {(Object.keys(LANGUAGE_LABELS) as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 font-body text-xs tracking-[0.1em] uppercase transition-colors hover:bg-muted ${l === lang ? "text-terracotta" : "text-charcoal"}`}
                    >
                      <span>{LANGUAGE_LABELS[l].flag}</span>
                      {LANGUAGE_LABELS[l].label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-terracotta ${useDarkText ? "text-charcoal" : "text-white"}`}
            >
              {t.nav.contactUs}
            </Link>
            <a 
              href="https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-7 py-2.5 font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 ${useDarkText ? "bg-foreground text-white" : "bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30"}`}
            >
              {t.nav.bookNow}
            </a>
          </div>

          {/* Mobile: lang switcher + menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 font-body text-[10px] tracking-[0.1em] uppercase ${useDarkText ? "text-charcoal" : "text-white"}`}
              >
                <Globe className="w-3.5 h-3.5" />
                {LANGUAGE_LABELS[lang].label}
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-cream border border-border shadow-xl py-1 min-w-[100px] z-50">
                  {(Object.keys(LANGUAGE_LABELS) as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2.5 font-body text-xs tracking-[0.1em] uppercase transition-colors hover:bg-muted ${l === lang ? "text-terracotta" : "text-charcoal"}`}
                    >
                      <span>{LANGUAGE_LABELS[l].flag}</span>
                      {LANGUAGE_LABELS[l].label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={useDarkText ? "text-charcoal" : "text-white"}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-cream shadow-lg py-8 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col items-center gap-5">
              {/* Hotels accordion */}
              <div className="w-full px-6">
                <button 
                  onClick={() => setIsMobileHotelsOpen(!isMobileHotelsOpen)}
                  className="font-body text-sm text-charcoal tracking-[0.1em] uppercase hover:text-terracotta transition-colors flex items-center gap-2 mx-auto"
                >
                  {t.nav.hotels}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileHotelsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileHotelsOpen && (
                  <div className="mt-4 space-y-4">
                    {hotels.map((hotel) => (
                      <div key={hotel.id} className="bg-muted p-4 rounded-sm">
                        <Link
                          to={`/hotels/${hotel.id}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block"
                        >
                          <div className="aspect-[16/9] overflow-hidden mb-3 rounded-sm">
                           <img
                              src={hotel.image}
                              alt={hotel.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="flex items-center gap-1 mb-1">
                            {hotel.stars && (
                              <div className="flex items-center gap-0.5">
                                {[...Array(hotel.stars)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-warm-gold text-warm-gold" />
                                ))}
                              </div>
                            )}
                          </div>
                          <h4 className="font-display text-foreground text-sm font-medium mb-1">
                            {hotel.name}
                          </h4>
                          <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
                            <MapPin className="w-3 h-3" />
                            {hotel.location}
                          </div>
                        </Link>
                        <a
                          href={hotel.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-foreground text-white text-xs py-2.5 font-body tracking-[0.1em] uppercase transition-colors"
                        >
                          {t.nav.bookNow}
                        </a>
                      </div>
                    ))}
                    <Link
                      to="/hotels"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-center text-muted-foreground text-sm hover:text-terracotta transition-colors py-2"
                    >
                      {t.nav.viewAllHotels}
                    </Link>
                  </div>
                )}
              </div>

              {/* Spa & Wellness accordion */}
              <div className="w-full px-6">
                <button 
                  onClick={() => setIsMobileSpaOpen(!isMobileSpaOpen)}
                  className="font-body text-sm text-charcoal tracking-[0.1em] uppercase hover:text-terracotta transition-colors flex items-center gap-2 mx-auto"
                >
                  {t.nav.spaWellness}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSpaOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileSpaOpen && (
                  <div className="mt-4 space-y-2 text-center">
                    <Link
                      to="/spa/canary-hotel-spa"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 text-muted-foreground hover:text-terracotta transition-colors"
                    >
                      {t.nav.hotelSpa}
                    </Link>
                    <Link
                      to="/spa/canary-kendwa-spa"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 text-muted-foreground hover:text-terracotta transition-colors"
                    >
                      {t.nav.ceylonSpa}
                    </Link>
                    <Link
                      to="/spa"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-muted-foreground text-sm hover:text-terracotta transition-colors py-2"
                    >
                      {t.nav.viewAllSpa}
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/dining" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="font-body text-sm text-charcoal tracking-[0.1em] uppercase hover:text-terracotta transition-colors"
              >
                {t.nav.dining}
              </Link>

              <Link 
                to="/tours" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="font-body text-sm text-charcoal tracking-[0.1em] uppercase hover:text-terracotta transition-colors"
              >
                {t.nav.tours}
              </Link>

              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="font-body text-sm text-charcoal tracking-[0.1em] uppercase hover:text-terracotta transition-colors"
              >
                {t.nav.contactUs}
              </Link>

              <a 
                href="https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-foreground text-white px-8 py-3 font-body text-xs tracking-[0.15em] uppercase"
              >
                {t.nav.bookNow}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

