import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Hero } from "@/components/site/Hero";
import { Studio } from "@/components/site/Studio";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { PrivacyPolicy } from "@/components/site/PrivacyPolicy";
import { TermsOfService } from "@/components/site/TermsOfService";
import { CookieConsent } from "@/components/site/CookieConsent";

const Home = () => (
  <main data-testid="home-page">
    <Hero />
    <Studio />
    <Services />
    <Work />
    <Contact />
    <Footer />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
