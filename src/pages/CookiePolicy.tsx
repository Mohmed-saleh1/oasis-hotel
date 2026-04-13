import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
          <p className="text-muted-foreground text-sm font-light">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-10">

            <div>
              <h2 className="font-display text-2xl text-foreground font-light italic mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners. Cookies do not harm your device and do not contain any personally identifiable information.
              </p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-display text-2xl text-foreground font-light italic mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
                Canary Hotels uses cookies to:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm font-light list-none">
                {[
                  "Remember your preferences and settings across visits",
                  "Understand how visitors use our website (analytics)",
                  "Improve the performance and functionality of our site",
                  "Ensure the security of our website",
                  "Remember your cookie consent choice",
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
              <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                {[
                  {
                    type: "Essential Cookies",
                    desc: "These cookies are strictly necessary for the website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies.",
                  },
                  {
                    type: "Analytics Cookies",
                    desc: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This allows us to improve the site's structure and content over time.",
                  },
                  {
                    type: "Preference Cookies",
                    desc: "These cookies allow the website to remember choices you have made in the past (such as your cookie consent) to provide a more personalised experience.",
                  },
                  {
                    type: "Third-Party Cookies",
                    desc: "Some pages on our website may include content from third-party services (such as embedded maps or social media buttons). These services may set their own cookies on your device.",
                  },
                ].map(({ type, desc }) => (
                  <div key={type} className="border-l-2 border-warm-gold/30 pl-5">
                    <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground mb-1.5">{type}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Managing Your Cookies</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
                You can control and manage cookies in several ways. Please note that removing or blocking cookies may impact your experience on our website.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
                Most web browsers allow you to manage cookies through their settings. You can set your browser to refuse cookies or to delete certain cookies. For more information, visit the help section of your browser or the links below:
              </p>
              <ul className="space-y-2 text-sm font-light list-none">
                {[
                  { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
                  { label: "Mozilla Firefox", href: "https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" },
                  { label: "Apple Safari", href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
                  { label: "Microsoft Edge", href: "https://support.microsoft.com/help/4027947" },
                ].map(({ label, href }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:text-terracotta transition-colors underline underline-offset-2">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically to stay informed about how we use cookies.
              </p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <h2 className="font-display text-2xl text-foreground font-light italic mb-4">Contact Us</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4">
                If you have any questions about our use of cookies, please contact us:
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
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CookiePolicy;
