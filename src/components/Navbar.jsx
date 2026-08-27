import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home", testid: "nav-link-home" },
  { to: "/about", label: "About", testid: "nav-link-about" },
  { to: "/brands", label: "Our Brands", testid: "nav-link-brands" },
  { to: "/wedding-diaries", label: "Wedding Diaries", testid: "nav-link-wedding-diaries" },
  { to: "/the-post-house", label: "The Post House", testid: "nav-link-post-house" },
  { to: "/portfolio", label: "Portfolio", testid: "nav-link-portfolio" },
  { to: "/services", label: "Services", testid: "nav-link-services" },
  { to: "/contact", label: "Contact", testid: "nav-link-contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header
        data-testid="main-navbar"
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-[#09090B]/85 border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
          <Link to="/" data-testid="nav-logo" className="leading-none">
            <span className="font-serif text-lg sm:text-xl tracking-[0.18em] text-slate-50">
              VIKASH SINGH <span className="text-gold">FILMS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={l.testid}
                className={({ isActive }) =>
                  `text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-gold" : "text-slate-400 hover:text-slate-100"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              data-testid="book-consultation-button"
              className="hidden md:inline-flex items-center border border-gold/50 text-gold px-6 py-2.5 text-[10px] font-semibold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold hover:text-ink"
            >
              Book a Consultation
            </Link>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen(!open)}
              className="lg:hidden text-slate-200"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] bg-[#09090B]/98 backdrop-blur-xl flex flex-col justify-center px-10 lg:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
              >
                <NavLink
                  to={l.to}
                  data-testid={`${l.testid}-mobile`}
                  className={({ isActive }) =>
                    `block font-serif text-4xl py-3 transition-colors ${
                      isActive ? "text-gold italic" : "text-slate-200"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
