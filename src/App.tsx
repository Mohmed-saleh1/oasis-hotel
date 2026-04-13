import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import { I18nProvider } from "./i18n/context";

// Route-level code splitting — only parse pages when navigated to
const Hotels       = lazy(() => import("./pages/Hotels"));
const HotelDetail  = lazy(() => import("./pages/HotelDetail"));
const Amenities    = lazy(() => import("./pages/Amenities"));
const AboutUs      = lazy(() => import("./pages/AboutUs"));
const Contact      = lazy(() => import("./pages/Contact"));
const Spa          = lazy(() => import("./pages/Spa"));
const SpaDetail    = lazy(() => import("./pages/SpaDetail"));
const Dining       = lazy(() => import("./pages/Dining"));
const Tours        = lazy(() => import("./pages/Tours"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const PrivacyStatement = lazy(() => import("./pages/PrivacyStatement"));
const NotFound     = lazy(() => import("./pages/NotFound"));

const App = () => (
  <I18nProvider>
    <BrowserRouter>
      <ScrollToTop />
      <CookieConsent />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:hotelId" element={<HotelDetail />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/spa/:spaId" element={<SpaDetail />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-statement" element={<PrivacyStatement />} />
          <Route path="/faq" element={<Navigate to="/contact#faq" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </I18nProvider>
);

export default App;
