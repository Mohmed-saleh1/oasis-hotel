import { useState } from "react";
import { format, addDays } from "date-fns";
import { CalendarIcon, ChevronDown, Search, Users, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { hotels } from "@/data/hotels";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";

const HeroBookingWidget = () => {
  const { t } = useI18n();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedHotelId, setSelectedHotelId] = useState<string>("canary-kendwa");
  const [hotelOpen, setHotelOpen] = useState(false);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const selectedHotel = hotels.find((h) => h.id === selectedHotelId)!;

  const guestsSummary =
    children > 0
      ? `${adults} ${adults !== 1 ? t.widget.adultsPlural : t.widget.adult}, ${children} ${children !== 1 ? t.widget.childrenPlural : t.widget.child}`
      : `${adults} ${adults !== 1 ? t.widget.adultsPlural : t.widget.adult}`;

  const handleSearch = () => {
    let url = selectedHotel.bookingUrl;
    const params: string[] = [];
    if (checkIn) params.push(`start=${format(checkIn, "yyyy-MM-dd")}`);
    if (checkOut) params.push(`end=${format(checkOut, "yyyy-MM-dd")}`);
    params.push(`adults=${adults}`);
    if (children > 0) params.push(`children=${children}`);
    url += (url.includes("?") ? "&" : "?") + params.join("&");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const Counter = ({
    label,
    value,
    min,
    max,
    onChange,
  }: {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (v: number) => void;
  }) => (
    <div className="flex items-center justify-between py-3">
      <span className="font-body text-sm text-foreground">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-7 h-7 flex items-center justify-center border border-border hover:border-warm-gold hover:text-warm-gold transition-colors text-muted-foreground"
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="font-display text-sm text-foreground w-4 text-center">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-7 h-7 flex items-center justify-center border border-border hover:border-warm-gold hover:text-warm-gold transition-colors text-muted-foreground"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-4 md:px-8 -mt-8 relative z-20 max-w-4xl"
    >
      {/* Label */}
      <p className="font-body text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-3 text-center">
        {t.widget.checkAvailabilityLabel}
      </p>

      {/* Widget panel */}
      <div className="bg-background border border-border shadow-xl">
        {/* Fields row — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">

          {/* Hotel selector */}
          <div className="relative">
            <button
              onClick={() => { setHotelOpen(!hotelOpen); setGuestsOpen(false); }}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-0.5">
                  {t.widget.property}
                </p>
                <p className="font-display text-sm text-foreground truncate">
                  {selectedHotel.name}
                </p>
              </div>
              <ChevronDown className={cn("w-4 h-4 text-muted-foreground ml-2 flex-shrink-0 transition-transform", hotelOpen && "rotate-180")} />
            </button>

            {hotelOpen && (
              <div className="absolute top-full left-0 right-0 sm:right-auto sm:min-w-[280px] z-50 bg-background border border-border shadow-xl mt-0.5">
                {hotels.map((hotel) => (
                  <button
                    key={hotel.id}
                    onClick={() => { setSelectedHotelId(hotel.id); setHotelOpen(false); }}
                    className={cn("w-full text-left px-4 py-3 hover:bg-muted transition-colors", selectedHotelId === hotel.id && "bg-muted")}
                  >
                    <p className="font-display text-foreground text-sm font-medium">{hotel.name}</p>
                    <p className="text-muted-foreground text-xs">{hotel.location}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Check-in */}
          <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-0.5">{t.widget.checkIn}</p>
                  <p className={cn("font-display text-sm", checkIn ? "text-foreground" : "text-muted-foreground")}>
                    {checkIn ? format(checkIn, "dd MMM yyyy") : t.widget.addDate}
                  </p>
                </div>
                <CalendarIcon className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  setCheckIn(date);
                  if (date && (!checkOut || checkOut <= date)) setCheckOut(addDays(date, 1));
                  setCheckInOpen(false);
                }}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>

          {/* Check-out */}
          <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-0.5">{t.widget.checkOut}</p>
                  <p className={cn("font-display text-sm", checkOut ? "text-foreground" : "text-muted-foreground")}>
                    {checkOut ? format(checkOut, "dd MMM yyyy") : t.widget.addDate}
                  </p>
                </div>
                <CalendarIcon className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={(date) => { setCheckOut(date); setCheckOutOpen(false); }}
                disabled={(date) => date <= (checkIn ?? new Date(new Date().setHours(0, 0, 0, 0)))}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>

          {/* Guests selector */}
          <div className="relative">
            <button
              onClick={() => { setGuestsOpen(!guestsOpen); setHotelOpen(false); }}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-0.5">{t.widget.guests}</p>
                <p className="font-display text-sm text-foreground truncate">{guestsSummary}</p>
              </div>
              <Users className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
            </button>

            {guestsOpen && (
              <div className="absolute top-full right-0 left-0 lg:left-auto lg:min-w-[220px] z-50 bg-background border border-border shadow-xl mt-0.5 px-4 py-2">
                <Counter label={t.widget.adults} value={adults} min={1} max={10} onChange={setAdults} />
                <div className="border-t border-border" />
                <Counter label={t.widget.children} value={children} min={0} max={6} onChange={setChildren} />
                <div className="border-t border-border pt-3 pb-1">
                  <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted-foreground">
                    {t.widget.childrenNote}
                  </p>
                </div>
                <button
                  onClick={() => setGuestsOpen(false)}
                  className="w-full text-center font-body text-[10px] tracking-[0.2em] uppercase text-warm-gold hover:text-terracotta transition-colors py-2"
                >
                  {t.widget.done}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CTA bar */}
        <div className="border-t border-border px-5 py-3 flex items-center justify-between bg-muted/30">
          <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted-foreground hidden sm:block">
            {t.widget.bestRate}
          </p>
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-warm-gold hover:bg-terracotta text-sand font-body text-[10px] tracking-[0.25em] uppercase px-6 py-3 transition-colors duration-200 ml-auto"
          >
            <Search className="w-3.5 h-3.5" />
            {t.widget.checkAvailability}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroBookingWidget;
