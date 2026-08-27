import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import Marquee from "@/components/Marquee";
import {
  MaskedLines, Reveal, ParallaxImage, SectionHead, Eyebrow, GoldButton, GhostButton,
} from "@/components/Motion";
import { IMAGES, MANIFESTO, BRANDS, MARQUEE_ITEMS, TESTIMONIALS, PORTFOLIO } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative min-h-screen overflow-hidden grain">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <img
          src={IMAGES.hero}
          alt="Cinematic wedding moment"
          className="w-full h-full object-cover animate-kenburns"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/45 to-black/55" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 min-h-screen flex flex-col justify-end max-w-[1500px] mx-auto px-6 sm:px-10 pb-24 pt-40"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 1 }}
          className="text-[11px] font-mono uppercase tracking-[0.4em] text-gold/90 mb-8"
        >
          Photography · Cinematography · Post Production
        </motion.p>

        <MaskedLines
          lines={["VIKASH", "SINGH FILMS"]}
          lineClassName="font-serif font-light leading-[0.95] tracking-tight text-[15vw] sm:text-[11vw] lg:text-[8.5vw] text-slate-50"
        />

        <div className="mt-10 max-w-2xl">
          <MaskedLines
            delay={0.7}
            lines={[<span key="t" className="italic text-gold-gradient">We Capture Moments. We Create Stories.</span>]}
            lineClassName="font-serif text-2xl sm:text-3xl lg:text-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base text-slate-300/90 font-light leading-relaxed mt-6"
          >
            A complete wedding visual storytelling house bringing photography, cinematography
            and professional post-production together under one roof.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <GoldButton to="/portfolio" testid="hero-explore-work-button">Explore Our Work</GoldButton>
            <GhostButton to="/contact" testid="hero-book-date-button">Book Your Date</GhostButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-400"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
};

const Manifesto = () => (
  <section data-testid="manifesto-section" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
    <div className="max-w-[1500px] mx-auto">
      <SectionHead
        eyebrow="The Manifesto"
        title="Three disciplines. One obsessive standard."
        copy="Vikash Singh Films is the umbrella house where every stage of your wedding story — the seeing, the shooting, the sculpting — is mastered in-house."
      />
      <div className="mt-20 space-y-24 lg:space-y-36">
        {MANIFESTO.map((ch, i) => (
          <div
            key={ch.no}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
              i % 2 === 1 ? "" : ""
            }`}
          >
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <ParallaxImage src={ch.image} alt={ch.title} className="aspect-[4/3]" />
            </div>
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
              <Reveal>
                <span className="font-serif text-7xl sm:text-8xl font-light text-gold/20">{ch.no}</span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-slate-50 mt-2">{ch.title}</h3>
                <p className={`text-sm sm:text-base text-slate-400 font-light leading-relaxed mt-6 max-w-md ${
                  i % 2 === 1 ? "lg:ml-auto" : ""
                }`}>
                  {ch.copy}
                </p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BrandShowcase = () => {
  const live = BRANDS.filter((b) => b.status === "live");
  return (
    <section data-testid="brands-showcase" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Our Brands"
            title="One umbrella company. Specialized houses."
          />
          <Reveal delay={0.15}>
            <GhostButton to="/brands" testid="showcase-all-brands-button">All Brands</GhostButton>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {live.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.12}>
              <Link
                to={b.path}
                data-testid={`brand-card-${b.id}`}
                className="group block border border-white/10 bg-[#121215] transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.12)]"
              >
                <div className="overflow-hidden aspect-[16/9]">
                  <img
                    src={b.cover}
                    alt={b.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/70">{b.category}</p>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-slate-50 mt-3 tracking-wide">{b.name}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed mt-4">{b.description}</p>
                  <p className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-gold">
                    {b.cta}
                    <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const SelectedWork = () => (
  <section data-testid="selected-work-section" className="py-24 sm:py-32 border-t border-white/10 overflow-hidden">
    <div className="max-w-[1500px] mx-auto px-6 sm:px-10">
      <SectionHead
        eyebrow="Selected Frames"
        title="Work that outlives the wedding."
      />
    </div>
    <Reveal className="mt-14">
      <div
        data-testid="selected-work-strip"
        className="flex gap-5 overflow-x-auto px-6 sm:px-10 pb-6 snap-x [scrollbar-width:thin]"
      >
        {PORTFOLIO.slice(0, 8).map((p, i) => (
          <Link
            to="/portfolio"
            key={i}
            data-testid={`selected-work-item-${i}`}
            className="group relative shrink-0 w-72 sm:w-96 snap-start overflow-hidden"
          >
            <img
              src={p.src}
              alt={p.title}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-serif italic text-xl text-slate-50">{p.title}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gold/80 mt-1">{p.loc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  </section>
);

const Testimonial = () => (
  <section data-testid="testimonial-section" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 border-t border-white/10 grain relative">
    <div className="max-w-4xl mx-auto text-center">
      <Reveal>
        <Eyebrow className="justify-center">Client Stories</Eyebrow>
        <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light italic leading-snug text-slate-100 mt-8">
          “{TESTIMONIALS[0].quote}”
        </blockquote>
        <p className="mt-8 text-[11px] font-mono uppercase tracking-[0.3em] text-gold/80">
          {TESTIMONIALS[0].name} — {TESTIMONIALS[0].detail}
        </p>
      </Reveal>
    </div>
  </section>
);

const CTASection = () => (
  <section data-testid="home-cta-section" className="relative py-32 sm:py-44 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
    <div className="relative max-w-5xl mx-auto text-center">
      <Reveal>
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-tight text-slate-50">
          Let's Create Something <span className="italic text-gold-gradient">Timeless.</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-light mt-8 max-w-xl mx-auto">
          Dates for the 2026–27 wedding season are now open. Tell us your story.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <GoldButton to="/contact" testid="home-cta-book-button">Book Your Date</GoldButton>
          <GhostButton to="/the-post-house" testid="home-cta-posthouse-button">Visit The Post House</GhostButton>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function Home() {
  useSEO(
    "Vikash Singh Films — We Capture Moments. We Create Stories.",
    "Premium wedding photography, cinematography and post-production house. Home of Wedding Diaries and The Post House."
  );
  return (
    <motion.main
      data-testid="page-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Manifesto />
      <BrandShowcase />
      <SelectedWork />
      <Testimonial />
      <CTASection />
    </motion.main>
  );
}
