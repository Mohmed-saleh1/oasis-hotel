import { useState } from "react";
import { Plane, Clock, DollarSign, Users, MapPin, X, CheckCircle } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  guests: string;
  transferType: string;
  flightNumber: string;
  arrivalDate: string;
  arrivalTime: string;
  departureDate: string;
  departureTime: string;
  hotel: string;
  luggage: string;
  childSeat: string;
  notes: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  guests: "1",
  transferType: "arrival",
  flightNumber: "",
  arrivalDate: "",
  arrivalTime: "",
  departureDate: "",
  departureTime: "",
  hotel: "",
  luggage: "standard",
  childSeat: "no",
  notes: "",
};

const AirportTransferForm = ({ onClose }: { onClose?: () => void }) => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a brief submission delay
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <CheckCircle className="w-16 h-16 text-terracotta mb-6" strokeWidth={1.2} />
        <h3 className="font-display text-3xl font-light italic text-foreground mb-3">
          Booking Received!
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed mb-2 max-w-sm">
          Thank you, <strong className="text-foreground font-medium">{form.fullName}</strong>. Our team will confirm your transfer to <strong className="text-foreground font-medium">{form.hotel || "your hotel"}</strong> within 24 hours.
        </p>
        <p className="text-muted-foreground text-sm font-light mb-8">
          A confirmation will be sent to <span className="text-foreground">{form.email}</span>
        </p>
        <div className="border border-border p-5 text-left w-full max-w-sm mb-8 text-sm text-muted-foreground space-y-1.5">
          {(form.transferType === "arrival" || form.transferType === "both") && (
            <p><span className="text-terracotta font-body text-[10px] tracking-[0.15em] uppercase mr-2">Arrival</span>{form.arrivalDate} · {form.arrivalTime}</p>
          )}
          {(form.transferType === "departure" || form.transferType === "both") && (
            <p><span className="text-terracotta font-body text-[10px] tracking-[0.15em] uppercase mr-2">Departure</span>{form.departureDate} · {form.departureTime}</p>
          )}
          <p><span className="text-terracotta font-body text-[10px] tracking-[0.15em] uppercase mr-2">Guests</span>{form.guests}</p>
          <p><span className="text-terracotta font-body text-[10px] tracking-[0.15em] uppercase mr-2">Flight</span>{form.flightNumber || "—"}</p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); onClose?.(); }}
          className="bg-foreground text-background px-10 py-3 font-body text-xs tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  const inputCls = "w-full border border-border bg-background text-foreground font-body text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors placeholder:text-muted-foreground/50";
  const labelCls = "block font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5";
  const sectionCls = "border border-border p-6 mb-5";

  return (
    <div className="relative">
      {/* Header */}
      <div className="bg-foreground text-background px-6 py-8 mb-0 relative">
        {onClose && (
          <button onClick={onClose} className="absolute top-4 right-4 text-background/60 hover:text-background transition-colors">
            <X className="w-5 h-5" />
          </button>
        )}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-warm-gold/40" />
          <span className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gold">Canary Travels</span>
          <div className="h-px w-8 bg-warm-gold/40" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-light italic text-sand text-center leading-tight mb-2">
          Airport Transfer Booking
        </h2>
        <p className="text-center text-background/60 text-sm font-light mb-6">
          Private, door-to-door transfers between Zanzibar Airport (ZNZ) and Nungwi Beach
        </p>
        {/* Info tiles */}
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
          {[
            { icon: Clock, label: "Travel Time", value: "~60–75 min" },
            { icon: DollarSign, label: "Fixed Rate", value: "USD 45 / trip" },
            { icon: Users, label: "Capacity", value: "Up to 4 guests" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="border border-background/20 p-3 text-center">
              <Icon className="w-4 h-4 text-warm-gold mx-auto mb-1.5" strokeWidth={1.4} />
              <p className="font-body text-[9px] tracking-[0.1em] uppercase text-background/50 mb-0.5">{label}</p>
              <p className="font-display text-sm text-sand">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meeting point note */}
      <div className="flex items-start gap-3 border border-warm-gold/30 bg-warm-gold/5 px-5 py-4 mb-5 mt-5 mx-6">
        <MapPin className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" strokeWidth={1.4} />
        <p className="text-sm text-foreground font-light leading-relaxed">
          <strong className="font-medium">Meeting Point:</strong> Our driver will wait at the arrivals exit holding a sign with your name. Please share your flight number so we can track any delays.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-6 pb-8">

        {/* 1. Guest Info */}
        <div className={sectionCls}>
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
            <span className="w-7 h-7 bg-foreground text-background flex items-center justify-center font-body text-xs rounded-full flex-shrink-0">1</span>
            <h3 className="font-display text-xl text-foreground">Guest Information</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelCls}>Full Name <span className="text-terracotta">*</span></label>
              <input required className={inputCls} type="text" placeholder="e.g. John Smith" value={form.fullName} onChange={e => set("fullName", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Email <span className="text-terracotta">*</span></label>
              <input required className={inputCls} type="email" placeholder="your@email.com" value={form.email} onChange={e => set("email", e.target.value)} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Phone / WhatsApp <span className="text-terracotta">*</span></label>
              <input required className={inputCls} type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={e => set("phone", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Number of Guests <span className="text-terracotta">*</span></label>
              <select required className={inputCls} value={form.guests} onChange={e => set("guests", e.target.value)}>
                {["1","2","3","4"].map(n => <option key={n} value={n}>{n} {n === "1" ? "Guest" : "Guests"}</option>)}
                <option value="5+">5+ Guests (contact us)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 2. Transfer Type */}
        <div className={sectionCls}>
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
            <span className="w-7 h-7 bg-foreground text-background flex items-center justify-center font-body text-xs rounded-full flex-shrink-0">2</span>
            <h3 className="font-display text-xl text-foreground">Transfer Details</h3>
          </div>
          <div className="mb-5">
            <label className={labelCls}>Transfer Type <span className="text-terracotta">*</span></label>
            <div className="grid grid-cols-3 gap-3 mt-1">
              {[
                { value: "arrival", label: "Arrival", desc: "Airport → Hotel" },
                { value: "departure", label: "Departure", desc: "Hotel → Airport" },
                { value: "both", label: "Both Ways", desc: "Round Trip" },
              ].map(opt => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => set("transferType", opt.value)}
                  className={`border p-3 text-center transition-all duration-200 ${form.transferType === opt.value ? "border-terracotta bg-terracotta/5" : "border-border hover:border-foreground/30"}`}
                >
                  <p className={`font-body text-xs tracking-[0.1em] uppercase mb-0.5 ${form.transferType === opt.value ? "text-terracotta" : "text-foreground"}`}>{opt.label}</p>
                  <p className="text-muted-foreground text-[11px]">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className={labelCls}>Flight Number</label>
            <input className={inputCls} type="text" placeholder="e.g. KQ202" value={form.flightNumber} onChange={e => set("flightNumber", e.target.value)} />
            <p className="text-muted-foreground text-[11px] mt-1.5 font-light">We track your flight for delays — no extra charge</p>
          </div>

          {(form.transferType === "arrival" || form.transferType === "both") && (
            <div className="grid sm:grid-cols-2 gap-4 mb-4 border-l-2 border-terracotta/40 pl-4">
              <div>
                <label className={labelCls}>Arrival Date <span className="text-terracotta">*</span></label>
                <input required className={inputCls} type="date" value={form.arrivalDate} onChange={e => set("arrivalDate", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Arrival Time <span className="text-terracotta">*</span></label>
                <input required className={inputCls} type="time" value={form.arrivalTime} onChange={e => set("arrivalTime", e.target.value)} />
              </div>
            </div>
          )}

          {(form.transferType === "departure" || form.transferType === "both") && (
            <div className="grid sm:grid-cols-2 gap-4 border-l-2 border-foreground/20 pl-4">
              <div>
                <label className={labelCls}>Departure Date <span className="text-terracotta">*</span></label>
                <input required className={inputCls} type="date" value={form.departureDate} onChange={e => set("departureDate", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Departure Time <span className="text-terracotta">*</span></label>
                <input required className={inputCls} type="time" value={form.departureTime} onChange={e => set("departureTime", e.target.value)} />
              </div>
            </div>
          )}
        </div>

        {/* 3. Hotel & Preferences */}
        <div className={sectionCls}>
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
            <span className="w-7 h-7 bg-foreground text-background flex items-center justify-center font-body text-xs rounded-full flex-shrink-0">3</span>
            <h3 className="font-display text-xl text-foreground">Hotel & Preferences</h3>
          </div>
          <div className="mb-4">
            <label className={labelCls}>Hotel / Accommodation <span className="text-terracotta">*</span></label>
            <select required className={inputCls} value={form.hotel} onChange={e => set("hotel", e.target.value)}>
              <option value="">Select your hotel…</option>
              <option>Canary Hotel & SPA (Nungwi)</option>
              <option>Canary Kendwa Beach Resort</option>
              <option>Canary Boutique Hotel (Nungwi)</option>
              <option>Other (mention in notes)</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelCls}>Luggage</label>
              <select className={inputCls} value={form.luggage} onChange={e => set("luggage", e.target.value)}>
                <option value="standard">Standard (1–2 bags/person)</option>
                <option value="heavy">Heavy (3+ bags/person)</option>
                <option value="surfboard">Surfboard / Oversized</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Child Seat Needed?</label>
              <select className={inputCls} value={form.childSeat} onChange={e => set("childSeat", e.target.value)}>
                <option value="no">No</option>
                <option value="infant">Infant seat (0–12 months)</option>
                <option value="toddler">Toddler seat (1–4 years)</option>
                <option value="booster">Booster seat (4–8 years)</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls}>Special Requests / Notes</label>
            <textarea className={inputCls} rows={3} placeholder="Any special requests, dietary needs, extra stops…" value={form.notes} onChange={e => set("notes", e.target.value)} />
          </div>
        </div>

        {/* Price note */}
        <div className="border border-border bg-muted/30 px-5 py-3 mb-6 text-sm text-muted-foreground font-light">
          <strong className="text-foreground font-medium">Pricing:</strong> USD 45 per one-way transfer (up to 4 guests). Round trip: USD 85. Payment on arrival or via bank transfer.
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={submitting}
            className="bg-foreground hover:bg-foreground/90 text-background px-12 py-4 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-60 flex items-center gap-2 mx-auto"
          >
            <Plane className="w-4 h-4" strokeWidth={1.4} />
            {submitting ? "Sending…" : "Book My Transfer"}
          </button>
          <p className="text-muted-foreground text-xs mt-3 font-light">
            Our team will confirm your booking within 24 hours
          </p>
        </div>
      </form>
    </div>
  );
};

export default AirportTransferForm;
