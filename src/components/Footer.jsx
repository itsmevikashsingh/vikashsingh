import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT, waLink } from "@/data/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-white/10 bg-[#0b0b0d]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl tracking-[0.15em] text-slate-50">
            VIKASH SINGH <span className="text-gold">FILMS</span>
          </p>
          <p className="text-sm text-slate-500 font-light leading-relaxed mt-4 max-w-sm">
            We Capture Moments. We Create Stories. A complete wedding visual storytelling house —
            photography, cinematography and professional post-production under one roof.
          </p>
          <div className="flex gap-3 mt-6">
            <a data-testid="footer-instagram-link" href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 border border-white/15 grid place-items-center text-slate-400 hover:text-gold hover:border-gold/60 transition-colors duration-300">
              <Instagram className="h-4 w-4" />
            </a>
            <a data-testid="footer-whatsapp-link" href={waLink("Hello Vikash Singh Films")} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-10 w-10 border border-white/15 grid place-items-center text-slate-400 hover:text-gold hover:border-gold/60 transition-colors duration-300">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a data-testid="footer-email-link" href={`mailto:${CONTACT.email}`} aria-label="Email" className="h-10 w-10 border border-white/15 grid place-items-center text-slate-400 hover:text-gold hover:border-gold/60 transition-colors duration-300">
              <Mail className="h-4 w-4" />
            </a>
            <a data-testid="footer-phone-link" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} aria-label="Phone" className="h-10 w-10 border border-white/15 grid place-items-center text-slate-400 hover:text-gold hover:border-gold/60 transition-colors duration-300">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/70">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><Link data-testid="footer-link-about" to="/about" className="hover:text-gold transition-colors">About the Studio</Link></li>
            <li><Link data-testid="footer-link-brands" to="/brands" className="hover:text-gold transition-colors">Our Brands</Link></li>
            <li><Link data-testid="footer-link-portfolio" to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link data-testid="footer-link-services" to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link data-testid="footer-link-contact" to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/70">Our Brands</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><Link data-testid="footer-link-wedding-diaries" to="/wedding-diaries" className="hover:text-gold transition-colors">Wedding Diaries — Photography & Films</Link></li>
            <li><Link data-testid="footer-link-post-house" to="/the-post-house" className="hover:text-gold transition-colors">The Post House — Wedding Post Production</Link></li>
          </ul>
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/70 mt-8">Studios</p>
          <p className="text-sm text-slate-500 mt-4">{CONTACT.locations.join(" · ")}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-600">
            © {new Date().getFullYear()} Vikash Singh Films. All rights reserved.
          </p>
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-600">
            One Company. Many Brands. One Story.
          </p>
        </div>
      </div>
    </footer>
  );
}
