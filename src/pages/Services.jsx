import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskedLines, Reveal, Eyebrow, GoldButton } from "@/components/Motion";
import { SERVICES } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export default function Services() {
  useSEO(
    "Services — Vikash Singh Films",
    "Wedding photography, cinematic films, pre-weddings, editing, color grading, album design, reels and complete post production."
  );
  return (
    <motion.main
      data-testid="page-services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-36 pb-24"
    >
      <section className="px-6 sm:px-10 max-w-[1500px] mx-auto">
        <Eyebrow>Services</Eyebrow>
        <MaskedLines
          className="mt-6"
          lines={["Every craft your", "wedding story needs."]}
          lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-slate-50"
        />
        <Reveal className="max-w-2xl mt-10">
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Field services are delivered by Wedding Diaries. Everything after the wedding
            is crafted inside The Post House. One brief, one team, one standard.
          </p>
        </Reveal>

        <div data-testid="services-list" className="mt-20 border-t border-white/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.03 * i}>
              <div
                data-testid={`service-row-${i}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-10 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02] px-2 sm:px-4"
              >
                <span className="lg:col-span-1 font-serif text-3xl font-light text-gold/30 group-hover:text-gold transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:col-span-4">
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-slate-50">{s.name}</h2>
                </div>
                <p className="lg:col-span-4 text-sm text-slate-400 font-light leading-relaxed">{s.desc}</p>
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold/80">{s.price}</span>
                  <Link
                    to={s.name === "Wedding Editing" || s.name === "Color Grading" || s.name === "Post Production" ? "/the-post-house#booking" : "/contact"}
                    data-testid={`service-inquire-${i}`}
                    aria-label={`Inquire about ${s.name}`}
                    className="h-12 w-12 shrink-0 border border-white/20 grid place-items-center text-slate-300 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-24">
          <p className="font-serif text-3xl sm:text-4xl font-light text-slate-50">
            Not sure what you need? <span className="italic text-gold-gradient">Talk to us.</span>
          </p>
          <div className="mt-10">
            <GoldButton to="/contact" testid="services-cta-button">Book a Consultation</GoldButton>
          </div>
        </Reveal>
      </section>
    </motion.main>
  );
}
