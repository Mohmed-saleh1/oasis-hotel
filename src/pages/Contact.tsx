import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, Plane } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().max(255).optional().default(""),
  phone: z.string().trim().max(20).optional().default(""),
  subject: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: MapPin, title: "Location", details: ["Zanzibar, Tanzania", "East Africa"] },
  { icon: Phone, title: "Phone", details: ["+255 777 700 006"] },
  { icon: Mail, title: "Email", details: ["info@canaryworld.co"], href: "mailto:info@canaryworld.co" },
  { icon: Clock, title: "Hours", details: ["24/7 Front Desk", "Reservations: 8AM – 10PM"] },
];

const faqs: { q: string; a: string | React.ReactNode }[] = [
  { q: "What are the check-in and check-out times?", a: "Check-in is from 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged upon request, subject to availability." },
  { q: "Is breakfast included in the room rate?", a: "Yes, all our room rates include a complimentary breakfast buffet featuring local and international cuisines served daily at our restaurant." },
  {
    q: "Do you offer airport transfers?",
    a: (
      <span>
        Yes, we provide airport transfer services from Zanzibar International Airport to all our hotel properties.{" "}
        <a
          href="https://forms.gle/QTYDHdnmGCKCZZ7XA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terracotta underline underline-offset-2 hover:text-warm-gold transition-colors"
        >
          Book your transfer here →
        </a>
      </span>
    ),
  },
  {
    q: "What free services & facilities are included?",
    a: (
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
        {[
          "Gym",
          "Pools",
          "Rooftop restaurant with ocean view",
          "Main Restaurant",
          "Makuti Restaurant",
          "Unlimited WiFi everywhere in the hotel",
          "Daily housekeeping service",
          "Free drinkable water in the room every day",
          "Free tea & coffee tray in the room every day",
          "24-hour reception",
          "Continental breakfast buffet",
          "Free bathroom supplies (towels, hand soap, shampoo, conditioner, toilet paper…)",
          "Free beach towels",
          "Free use of our private beach",
          "Late check-out (contact reception — subject to availability)",
          "Library",
          "Free luggage storage (early arrival / late check-out)",
          "Free honeymoon decoration",
          "Free games (cards, darts, foosball, chess, ping pong, billiard, volleyball, tennis, basketball)",
          "Free welcome drink upon arrival",
          "Free private parking",
          "Free baby cot & baby chair",
          "Free iron",
          "Bicycles",
          "Kettle",
          "Lounge areas",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-terracotta rounded-full mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  { q: "Can you arrange tours and excursions?", a: "Absolutely! We offer a variety of tours including Spice Tours, Stone Town Heritage Tours, Dolphin Tours, Snorkeling & Diving, Sunset Dhow Cruises, and Safari Blue excursions." },
  {
    q: "What is your cancellation policy?",
    a: (
      <ul className="space-y-2">
        <li><span className="text-foreground font-medium">More than 15 days before arrival:</span> No cancellation fee applies.</li>
        <li><span className="text-foreground font-medium">15 to 11 days before arrival:</span> 50% cancellation fee of the total booking value.</li>
        <li><span className="text-foreground font-medium">10 days or less before arrival:</span> 100% cancellation fee of the total booking value.</li>
        <li><span className="text-foreground font-medium">No-show:</span> 100% cancellation fee of the total booking value.</li>
      </ul>
    ),
  },
];

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const values = form.watch();

  const buildMailto = () => {
    const subject = encodeURIComponent(values.subject || "Enquiry from website");
    const body = encodeURIComponent(
      [
        values.name    ? `Name: ${values.name}`    : "",
        values.phone   ? `Phone: ${values.phone}`  : "",
        values.email   ? `Email: ${values.email}`  : "",
        "",
        values.message || "",
      ]
        .filter((l, i) => !(i < 3 && l === ""))
        .join("\n")
        .trim()
    );
    return `mailto:info@canaryworld.co?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative" style={{ height: "75vh", minHeight: 480 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/contact-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-sand/30" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-gold">
                Get in Touch
              </span>
              <div className="h-px w-12 bg-sand/30" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-sand font-light italic leading-tight">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="border border-border p-7 text-center hover:border-warm-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-terracotta/10 flex items-center justify-center mx-auto mb-5">
                  <info.icon className="w-5 h-5 text-terracotta" />
                </div>
                <h3 className="font-display text-xl text-foreground font-light italic mb-2">{info.title}</h3>
                {info.details.map((detail, idx) =>
                  info.href ? (
                    <a key={idx} href={info.href} className="font-body text-sm text-terracotta hover:underline block font-light">
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="font-body text-sm text-muted-foreground font-light">{detail}</p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport Transfer Banner ── */}
      <section className="py-10 bg-foreground">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-background/10 px-8 py-7">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-warm-gold/10 flex items-center justify-center shrink-0">
                <Plane className="w-5 h-5 text-warm-gold" />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.35em] uppercase text-warm-gold mb-1">Hassle-Free Arrivals</p>
                <h3 className="font-display text-2xl text-sand font-light italic">Book Your Airport Transfer</h3>
                <p className="text-sand/50 text-sm font-light mt-0.5">All properties · Meet &amp; greet service</p>
              </div>
            </div>
            <a
              href="https://forms.gle/QTYDHdnmGCKCZZ7XA"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 border border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-sand px-8 py-3.5 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              Book Now →
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Map ── */}
      <section className="py-28 bg-foreground">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-background/20" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
                Reach Out
              </span>
              <div className="h-px w-10 bg-background/20" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-sand font-light italic">
              Send Us a Message
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Form */}
            <div className="bg-background p-10">
              <Form {...form}>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-body text-xs tracking-[0.15em] uppercase">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-background border-border focus:border-warm-gold rounded-none h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-body text-xs tracking-[0.15em] uppercase">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="bg-background border-border focus:border-warm-gold rounded-none h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-body text-xs tracking-[0.15em] uppercase">Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+255 123 456 789" className="bg-background border-border focus:border-warm-gold rounded-none h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-body text-xs tracking-[0.15em] uppercase">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="bg-background border-border focus:border-warm-gold rounded-none h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-body text-xs tracking-[0.15em] uppercase">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="bg-background border-border focus:border-warm-gold min-h-[160px] resize-none rounded-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <a
                    href={buildMailto()}
                    className="w-full flex items-center justify-center gap-2 bg-warm-gold hover:bg-terracotta text-sand py-4 font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Message
                  </a>
                </form>
              </Form>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-sand font-light italic mb-4 leading-tight">
                  Visit Us<br />in Paradise
                </h3>
                <p className="text-sand/60 leading-relaxed font-light text-sm">
                  Nestled along the pristine shores of Zanzibar, Canary Hotels offers an escape to paradise. Whether you're planning a romantic getaway, family vacation, or corporate retreat, our team is here to make your dreams a reality.
                </p>
              </div>

              {/* Square map */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253903.95142459087!2d39.17931725!3d-6.1622899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd0ba235a7eb5%3A0x9d7f3e4e0e8e0e8e!2sZanzibar!5e0!3m2!1sen!2stz!4v1234567890"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Canary Hotels Location"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-border" />
              <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">FAQ</span>
              <div className="h-px w-10 bg-border" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-light italic">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border border-border px-7 hover:border-warm-gold/40 transition-colors duration-300"
              >
                <AccordionTrigger className="text-foreground font-display text-xl font-light italic hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
