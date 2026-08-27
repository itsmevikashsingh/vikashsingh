import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MaskedLines, Reveal, Eyebrow, GoldButton, GhostButton } from "@/components/Motion";
import { BRANDS } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const LiveBrandCard = ({ brand, index }) => (
  <Reveal delay={index * 0.1}>
    <article
      data-testid={`brands-page-card-${brand.id}`}
      className="group grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#121215] overflow-hidden transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_60px_rgba(212,175,55,0.1)]"
    >
      <div className={`lg:col-span-7 overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <img
          src={brand.cover}
          alt={brand.name}
          loading="lazy"
          className="w-full h-full min-h-[320px] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
        />
      </div>
      <div className={`lg:col-span-5 p-10 sm:p-14 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/70">{brand.category}</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light text-slate-50 mt-4 tracking-wide">{brand.name}</h2>
        <p className="text-sm text-slate-400 font-light leading-relaxed mt-6">{brand.description}</p>
        <div className="flex flex-wrap gap-2 mt-8">
          {brand.services.map((s) => (
            <span key={s} className="border border-white/10 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          <GoldButton to={brand.path} testid={`explore-${brand.id}-button`}>{brand.cta}</GoldButton>
          {brand.id === "the-post-house" && (
            <GhostButton to="/the-post-house#booking" testid="book-post-house-button">Book The Post House</GhostButton>
          )}
        </div>
      </div>
    </article>
  </Reveal>
);

const SoonCard = ({ brand, index }) => (
  <Reveal delay={index * 0.1}>
    <article
      data-testid={`brands-page-card-${brand.id}`}
      className="relative border border-white/10 bg-[#0e0e10] overflow-hidden h-full"
    >
      <div className="overflow-hidden aspect-[16/8]">
        <img src={brand.cover} alt={brand.name} loading="lazy" className="w-full h-full object-cover opacity-40 saturate-50" />
      </div>
      <span className="absolute top-5 right-5 border border-gold/50 text-gold text-[10px] font-mono uppercase tracking-[0.3em] px-4 py-2">
        Coming Soon
      </span>
      <div className="p-8 sm:p-10">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/60">{brand.category}</p>
        <h3 className="font-serif text-3xl font-light text-slate-200 mt-3 tracking-wide">{brand.name}</h3>
        <p className="text-sm text-slate-500 font-light leading-relaxed mt-4">{brand.description}</p>
      </div>
    </article>
  </Reveal>
);

export default function Brands() {
  useSEO(
    "Our Brands — Vikash Singh Films",
    "Explore the brands of Vikash Singh Films: Wedding Diaries (photography & cinematography) and The Post House (wedding post-production studio)."
  );
  const live = BRANDS.filter((b) => b.status === "live");
  const soon = BRANDS.filter((b) => b.status === "soon");
  return (
    <motion.main
      data-testid="page-brands"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-36 pb-24"
    >
      <section className="px-6 sm:px-10 max-w-[1500px] mx-auto">
        <Eyebrow>Our Brands</Eyebrow>
        <MaskedLines
          className="mt-6"
          lines={["One umbrella company.", "Many specialised houses."]}
          lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-slate-50"
        />
        <Reveal className="max-w-2xl mt-10">
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Vikash Singh Films is the parent house. Each brand beneath it is a specialist —
            built to master one craft completely, and designed to grow as new houses join the family.
          </p>
        </Reveal>

        <div className="space-y-12 mt-20">
          {live.map((b, i) => (
            <LiveBrandCard key={b.id} brand={b} index={i} />
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-gold/70">The Future of the House</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {soon.map((b, i) => (
              <SoonCard key={b.id} brand={b} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
