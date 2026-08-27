import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Brands from "@/pages/Brands";
import WeddingDiaries from "@/pages/WeddingDiaries";
import PostHouse from "@/pages/PostHouse";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";

const AnimatedRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 450);
        return () => clearTimeout(t);
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/wedding-diaries" element={<WeddingDiaries />} />
        <Route path="/the-post-house" element={<PostHouse />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-ink text-slate-100 min-h-screen font-sans">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppFloat />
        <Toaster theme="dark" position="bottom-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
