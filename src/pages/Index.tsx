import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhatsAppButton from "@/components/WhatsAppButton";
const MobileBookingBar = lazy(() => import("@/components/MobileBookingBar"));

// Lazy-load below-fold sections to cut initial parse/render cost
const DestinationsSection = lazy(() => import("@/components/DestinationsSection"));
const AmenitiesSection    = lazy(() => import("@/components/AmenitiesSection"));
const ServicesSection     = lazy(() => import("@/components/ServicesSection"));
const BeachBreakSection   = lazy(() => import("@/components/BeachBreakSection"));
const GuestReviews        = lazy(() => import("@/components/GuestReviews"));
const ToursSection        = lazy(() => import("@/components/ToursSection"));
const ZanzibarVibeSection = lazy(() => import("@/components/ZanzibarVibeSection"));
const Footer              = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <Suspense fallback={null}>
        <DestinationsSection />
        <AmenitiesSection />
        <ServicesSection />
        <BeachBreakSection />
        <GuestReviews />
        <ToursSection />
        <ZanzibarVibeSection />
        <section id="contact">
          <Footer />
        </section>
      </Suspense>
      <WhatsAppButton />
      <Suspense fallback={null}>
        <MobileBookingBar />
      </Suspense>
    </div>
  );
};

export default Index;
