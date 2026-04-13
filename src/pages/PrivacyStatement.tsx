import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const PrivacyStatement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-border" />
            <span className="font-body text-[10px] tracking-[0.45em] uppercase text-terracotta">
              Legal
            </span>
            <div className="h-px w-10 bg-border" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-foreground font-light italic leading-tight mb-4">
            Privacy Statement
          </h1>
          <p className="text-muted-foreground text-sm font-light">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl space-y-10">

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Introduction</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              Canary Hotels ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Statement explains how we collect, use, disclose, and safeguard your information when you visit our website or make enquiries about our services. Please read this statement carefully. If you do not agree with its terms, please discontinue use of our site.
            </p>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Information We Collect</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mb-5">
              We may collect the following categories of personal information:
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "Personal Identifiers",
                  desc: "Name, email address, phone number, and postal address — provided when you contact us, make an enquiry, or complete a booking form.",
                },
                {
                  title: "Booking & Travel Details",
                  desc: "Arrival and departure dates, number of guests, room preferences, and any special requests submitted through our booking channels.",
                },
                {
                  title: "Usage Data",
                  desc: "Information about how you interact with our website, including pages visited, time spent, browser type, and referring URLs — collected via cookies and analytics tools.",
                },
                {
                  title: "Communications",
                  desc: "Content of messages you send us via email, contact forms, or WhatsApp, including any attachments or supporting information you choose to share.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="border-l-2 border-warm-gold/30 pl-5">
                  <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground mb-1.5">{title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-2.5 text-muted-foreground text-sm font-light list-none">
              {[
                "To process and manage reservations and enquiries",
                "To communicate with you regarding your booking or stay",
                "To personalise your experience and tailor our services",
                "To send you relevant offers and updates (only with your consent)",
                "To improve the functionality and content of our website",
                "To comply with legal obligations and resolve disputes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Sharing Your Information</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
            </p>
            <ul className="space-y-2.5 text-muted-foreground text-sm font-light list-none">
              {[
                "With trusted service providers who assist in operating our website or conducting our business (e.g. booking platforms, payment processors), subject to strict confidentiality agreements",
                "With our hotel staff who require the information to fulfil your reservation",
                "When required by law, regulation, or legal process",
                "To protect the rights, property, or safety of Canary Hotels, our guests, or others",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Data Retention</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this statement, unless a longer retention period is required or permitted by law. Booking records are typically retained for up to 7 years in accordance with applicable accounting and legal requirements. Analytics data is retained in anonymised form.
            </p>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Your Rights</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="space-y-2.5 text-muted-foreground text-sm font-light list-none">
              {[
                "Right to access — request a copy of the personal data we hold about you",
                "Right to rectification — request correction of inaccurate or incomplete data",
                "Right to erasure — request deletion of your personal data where applicable",
                "Right to restrict processing — request we limit how we use your data",
                "Right to object — object to our processing of your personal data",
                "Right to data portability — request transfer of your data in a structured format",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mt-4">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Security</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Cookies</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              Our website uses cookies to enhance your experience. For detailed information on how we use cookies and how to manage your preferences, please refer to our{" "}
              <Link to="/cookie-policy" className="text-warm-gold hover:text-terracotta transition-colors underline underline-offset-2">
                Cookie Policy
              </Link>.
            </p>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Changes to This Statement</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              We may update this Privacy Statement periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the date at the top of this page. We encourage you to review this statement regularly.
            </p>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Contact Us</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Statement or our data practices, please contact us:
            </p>
            <div className="border border-border p-6 space-y-2 text-sm text-muted-foreground font-light">
              <p><span className="text-foreground">Canary Hotels</span></p>
              <p>Zanzibar, Tanzania</p>
              <p>
                Email:{" "}
                <a href="mailto:info@canaryworld.co" className="text-warm-gold hover:text-terracotta transition-colors">
                  info@canaryworld.co
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+255777700006" className="text-warm-gold hover:text-terracotta transition-colors">
                  +255 777 700 006
                </a>
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyStatement;
