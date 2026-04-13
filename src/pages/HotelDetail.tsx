import { useParams, Link } from "react-router-dom";
import { guestServices } from "@/data/hotels";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RoomImageGallery from "@/components/RoomImageGallery";
import { MapPin, Star, ExternalLink, ArrowLeft, Wifi, Coffee, Car, Waves, Plane } from "lucide-react";
import { useTranslatedHotel } from "@/hooks/useTranslatedHotels";
import { useI18n } from "@/i18n/context";

// Best editorial image per hotel
const heroImages: Record<string, string> = {
  "canary-kendwa": "/lovable-uploads/canary-kendwa-aerial.webp",
  "canary-spa": "/lovable-uploads/canary-spa-hero.jpg",
  "golden-nungwi": "/lovable-uploads/golden-hero.jpg",
};

const mapEmbeds: Record<string, string> = {
  "canary-kendwa":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2!2d39.2283!3d-5.7567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDUnMjQuMSJTIDM5wrAxMyczOS45IkU!5e0!3m2!1sen!2stz!4v1640000000001!5m2!1sen!2stz",
  "canary-spa":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d39.2983!3d-5.7247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDMnMjkuMiJTIDM5wrAxNyc1NC42IkU!5e0!3m2!1sen!2stz!4v1640000000002!5m2!1sen!2stz",
  "golden-nungwi":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d39.2983!3d-5.7247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDMnMjkuMiJTIDM5wrAxNyc1NC42IkU!5e0!3m2!1sen!2stz!4v1640000000003!5m2!1sen!2stz",
};

const HotelDetail = () => {
  const { hotelId } = useParams();
  const hotel = useTranslatedHotel(hotelId);
  const { t } = useI18n();

  const quickAmenities = [
    { icon: Wifi, label: t.hotelDetail.freewifi },
    { icon: Coffee, label: t.hotelDetail.breakfast },
    { icon: Car, label: t.hotelDetail.airportTransfer },
    { icon: Waves, label: t.hotelDetail.beachAccess },
  ];

  if (!hotel) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground italic mb-4">{t.hotelDetail.hotelNotFound}</h1>
          <Link to="/hotels" className="text-terracotta hover:underline text-sm tracking-wider">
            {t.hotelDetail.returnToHotels}
          </Link>
        </div>
      </div>
    );
  }

  const showStars = hotel.id !== "golden-nungwi";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative" style={{ height: "85vh", minHeight: 560 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImages[hotel.id] || hotel.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>

        {/* Back link */}
        <div className="absolute top-28 left-0 right-0">
          <div className="container mx-auto px-6">
            <Link
              to="/hotels"
              className="inline-flex items-center gap-2 text-sand/70 hover:text-sand transition-colors text-xs tracking-[0.15em] uppercase font-body"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t.hotelDetail.allProperties}
            </Link>
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-16">
            {showStars && (
              <div className="flex items-center gap-1 text-warm-gold mb-4">
                {[...Array(hotel.stars || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-2 text-sand/60 text-xs tracking-wider font-body">
                  {hotel.stars || 5}{t.hotelDetail.starResort}
                </span>
              </div>
            )}
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-sand font-light italic leading-tight mb-4">
              {hotel.name}
            </h1>
            <p className="flex items-center gap-2 text-sand/60 text-sm font-body tracking-wider">
              <MapPin className="w-4 h-4" />
              {hotel.location}
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-border" />
                <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                  {t.hotelDetail.aboutThisProperty}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-light italic mb-8 leading-tight">
                {t.hotelDetail.aPlaceHeading}<br />{t.hotelDetail.aPlaceHeading2}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10 font-light">
                {hotel.fullDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {hotel.features.map((feature) => (
                  <span
                    key={feature}
                    className="border border-border text-foreground/60 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase font-body"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Booking card */}
            <div className="border border-border p-8 h-fit sticky top-28">
              <h3 className="font-display text-3xl text-foreground font-light italic mb-6">
                {t.hotelDetail.bookYourStay}
              </h3>
              <div className="space-y-4 mb-8">
                {quickAmenities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-muted-foreground">
                    <Icon className="w-4 h-4 text-terracotta" />
                    <span className="text-sm font-light">{label}</span>
                  </div>
                ))}
              </div>
              {hotel.rooms?.[0]?.rate && (
                <p className="text-terracotta font-display text-lg italic mb-6">
                  {hotel.rooms[0].rate}
                </p>
              )}
              <a
                href={hotel.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-warm-gold hover:bg-terracotta text-sand py-4 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
              >
                {t.hotelDetail.reserveNow}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rooms ── */}
      <section className="py-28 bg-muted/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-border" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                {t.hotelDetail.accommodations}
              </span>
              <div className="h-px w-10 bg-border" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic">
              {t.hotelDetail.roomsAndSuites}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotel.rooms.map((room) => {
              const roomImages = room.images && room.images.length > 0 ? room.images : [room.image];
              return (
                <div key={room.name} className="group bg-background border border-border overflow-hidden hover:border-warm-gold/50 transition-colors duration-300">
                  <div className="overflow-hidden aspect-video">
                    <RoomImageGallery images={roomImages} alt={room.name} />
                  </div>
                  <div className="p-6 pb-8">
                    <h3 className="font-display text-2xl text-foreground font-light italic mb-2">
                      {room.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 font-light leading-relaxed">
                      {room.description}
                    </p>
                    {room.rate && (
                      <div className="border-t border-border pt-4">
                        <p className="text-terracotta font-display text-lg italic">{room.rate}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-border" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">{t.hotelDetail.gallery}</span>
              <div className="h-px w-10 bg-border" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic">
              {t.hotelDetail.exploreProperty}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {hotel.gallery.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                style={{ aspectRatio: index === 0 ? "4/3" : "1/1" }}
              >
                <img
                  src={image}
                  alt={`${hotel.name} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport Transfer CTA ── */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6 text-terracotta" strokeWidth={1.4} />
              </div>
              <div>
                <h3 className="font-display text-2xl text-background font-light italic mb-1">
                  {t.hotelDetail.needTransfer}
                </h3>
                <p className="text-background/50 text-sm font-light">
                  {t.hotelDetail.transferDesc} {hotel.name} {t.hotelDetail.transferDescSuffix}
                </p>
              </div>
            </div>
            <a
              href="https://forms.gle/QTYDHdnmGCKCZZ7XA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-10 py-4 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              {t.hotelDetail.bookTransfer}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      {hotel.mapLocation && (
        <section className="py-28 bg-muted/20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-10 bg-border" />
                <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">{t.hotelDetail.location}</span>
                <div className="h-px w-10 bg-border" />
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic">{t.hotelDetail.findUs}</h2>
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: 520 }}>
              <iframe
                src={mapEmbeds[hotel.id] || mapEmbeds["canary-spa"]}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${hotel.name} Location`}
                className="w-full h-full"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-3 text-sm font-light">
                <MapPin className="w-4 h-4 inline-block mr-2 text-terracotta" />
                Nungwi 73107, Zanzibar Tanzania
              </p>
              <a
                href={
                  hotel.googleMapsUrl ||
                  `https://www.google.com/maps/search/?api=1&query=${hotel.mapLocation.lat},${hotel.mapLocation.lng}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta/70 transition-colors text-xs tracking-[0.15em] uppercase font-body"
              >
                {t.hotelDetail.openInMaps}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── Guest Services ── */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-background/20" />
              <span className="text-terracotta font-body text-[10px] tracking-[0.45em] uppercase">
                {t.hotelDetail.atYourService}
              </span>
              <div className="h-px w-10 bg-background/20" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-background font-light italic">
              {t.hotelDetail.guestServices}
            </h2>
            <p className="text-background/50 max-w-xl mx-auto mt-5 font-light leading-relaxed">
              {t.hotelDetail.guestServicesDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {guestServices.map((service, index) => (
              <div
                key={index}
                className="border border-background/10 p-6 text-center hover:border-terracotta/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-terracotta/15 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-5 h-5 text-terracotta" />
                </div>
                <h3 className="font-body text-xs tracking-wide text-background/80 leading-snug">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
              {t.hotelDetail.reserve}
            </span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic leading-tight mb-6">
            {t.hotelDetail.experiencePrefix}<br />{hotel.name}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed">
            {t.hotelDetail.ctaDesc}
          </p>
          <a
            href={hotel.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand px-12 py-5 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            {t.hotelDetail.reserveYourRoom}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HotelDetail;
