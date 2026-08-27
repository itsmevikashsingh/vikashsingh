import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MaskedLines, Reveal, ParallaxImage, SectionHead, Eyebrow, GoldButton } from "@/components/Motion";
import { IMAGES, TEAM, CONTACT } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const STATS = [
  { n: "12+", l: "Years Behind the Lens" },
  { n: "400+", l: "Weddings Told" },
  { n: "6", l: "Countries Filmed" },
  { n: "40+", l: "International Awards" },
];

const APPROACH = [
  { t: "We listen first", d: "Every commission begins with a long conversation — your story, your family, the moments you cannot afford to lose." },
  { t: "We shoot unobtrusively", d: "Small crews, cinematic gear, zero stage direction. The day belongs to you; the frames belong to us." },
  { t: "We finish obsessively", d: "Every deliverable passes through The Post House — edited, graded and scored to a theatrical standard." },
];

export default function About() {
  useSEO(
    "About — Vikash Singh Films",
    "Vikash Singh Films is the umbrella brand uniting wedding photography, cinematic films and professional post-production under one roof."
  );
  return (
    <motion.main
      data-testid="page-about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-36"
    >
      <section className="px-6 sm:px-10 max-w-[1500px] mx-auto">
        <Eyebrow>About the House</Eyebrow>
        <MaskedLines
          className="mt-6"
          lines={["One name. Every craft", "a wedding story needs."]}
          lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-slate-50"
        />
        <Reveal className="max-w-2xl mt-10">
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Vikash Singh Films is the umbrella brand bringing together wedding photography,
            cinematic wedding films and professional post-production. What began as one man
            and one camera is today a multi-brand studio — Wedding Diaries on the field,
            The Post House in the edit suite — with a single obsession: stories that outlive us.
          </p>
        </Reveal>
      </section>

      <section data-testid="founder-section" className="py-24 sm:py-32 px-6 sm:px-10 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <ParallaxImage src={IMAGES.founder} alt="Vikash Singh — Founder" className="aspect-[3/4]" />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>The Founder</Eyebrow>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-slate-50 mt-4">Vikash Singh</h2>
              <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/70 mt-2">
                Founder & Creative Director
              </p>
              <div className="space-y-5 mt-8 text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl">
                <p>
                  Twelve years ago, Vikash shot his first wedding on a borrowed camera in Varanasi.
                  The film was imperfect — but the bride's mother wept watching it, and he understood
                  what this craft was really for.
                </p>
                <p>
                  Since then he has directed over 400 wedding commissions across palaces in Rajasthan,
                  villas on the Amalfi Coast and ballrooms in London — building a studio where
                  photography, film and post-production live under one roof, held to one standard.
                </p>
                <p className="font-serif italic text-xl text-slate-200">
                  “A wedding lasts a day. A story, told properly, lasts forever.”
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-testid="stats-section" className="border-y border-white/10">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className={`px-8 py-14 text-center ${i > 0 ? "border-l border-white/10" : ""}`}>
              <p className="font-serif text-5xl sm:text-6xl font-light text-gold-gradient">{s.n}</p>
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 mt-3">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-testid="team-section" className="py-24 sm:py-32 px-6 sm:px-10 max-w-[1500px] mx-auto">
        <SectionHead
          eyebrow="The Team"
          title="A small crew of obsessive craftspeople."
          copy="Directors of photography, colorists, editors and album designers — every commission is touched by senior hands only."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div data-testid={`team-member-${i}`} className="group">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif text-xl text-slate-100 mt-4">{m.name}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold/70 mt-1">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-testid="locations-section" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHead eyebrow="Where We Work" title="Based in India. Fluent in everywhere." />
            <div className="flex flex-wrap gap-3 mt-10">
              {CONTACT.locations.map((loc) => (
                <span
                  key={loc}
                  data-testid={`location-chip-${loc.toLowerCase().replace(/\s/g, "-")}`}
                  className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-300 hover:border-gold/60 hover:text-gold transition-colors duration-300"
                >
                  <MapPin className="h-3.5 w-3.5 text-gold/70" />
                  {loc}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Our Approach" title="Client-focused, always." />
            <div className="space-y-8 mt-10">
              {APPROACH.map((a, i) => (
                <Reveal key={a.t} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <span className="font-serif text-3xl font-light text-gold/40">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-slate-100">{a.t}</h3>
                      <p className="text-sm text-slate-400 font-light leading-relaxed mt-2">{a.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-slate-50">
            Meet the brands of the house.
          </h2>
          <div className="mt-10">
            <GoldButton to="/brands" testid="about-explore-brands-button">Explore Our Brands</GoldButton>
          </div>
        </Reveal>
      </section>
    </motion.main>
  );
}
