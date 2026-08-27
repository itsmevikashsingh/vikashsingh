import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";
import { MaskedLines, Reveal, Eyebrow } from "@/components/Motion";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Portfolio() {
  useSEO(
    "Portfolio — Vikash Singh Films",
    "Editorial wedding portfolio: weddings, pre-weddings, cinematic films, brides, grooms, details, events and post production."
  );
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const items = cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === cat);

  return (
    <motion.main
      data-testid="page-portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-36 pb-24"
    >
      <section className="px-6 sm:px-10 max-w-[1500px] mx-auto">
        <Eyebrow>Portfolio</Eyebrow>
        <MaskedLines
          className="mt-6"
          lines={["The work speaks", "in whispers and gold."]}
          lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-slate-50"
        />

        <div data-testid="portfolio-filters" className="flex flex-wrap gap-3 mt-14">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`portfolio-filter-tab-${slug(c)}`}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 text-[10px] font-mono uppercase tracking-[0.25em] border transition-all duration-300 ${
                cat === c
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 text-slate-400 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div data-testid="portfolio-grid" className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-12">
          {items.map((p, i) => (
            <Reveal key={`${cat}-${i}`} delay={(i % 3) * 0.06} className="break-inside-avoid mb-5">
              <button
                data-testid={`portfolio-item-${slug(p.title)}`}
                onClick={() => setLightbox(p)}
                className="group relative block w-full overflow-hidden text-left"
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-5 left-5 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="font-serif italic text-2xl text-slate-50">{p.title}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gold/80 mt-1">
                    {p.cat} · {p.loc}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </motion.main>
  );
}
