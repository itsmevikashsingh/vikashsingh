import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Marquee from "@/components/Marquee";
import { MaskedLines, Reveal, ParallaxImage, SectionHead, Eyebrow, GoldButton, GhostButton } from "@/components/Motion";
import { IMAGES, WEDDINGS, TESTIMONIALS, waLink } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const FilmStrip = ({ film, cover, testid }) => (
  <a
    data-testid={testid}
    href={waLink(`Hello, I'd love to watch the full film — ${film}`)}
    target="_blank"
    rel="noreferrer"
    className="group relative block overflow-hidden"
  >
    <img src={cover} alt={film} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <span className="h-16 w-16 rounded-full border border-gold/70 grid place-items-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
        <Play className="h-6 w-6 ml-0.5" />
      </span>
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-200">{film}</span>
    </div>
  </a>
);

export default function WeddingDiaries() {
  useSEO(
    "Wedding Diaries — Wedding Photography & Cinematic Films | Vikash Singh Films",
    "Wedding Diaries by Vikash Singh Films — authentic wedding photography, cinematic wedding films, pre-weddings and real wedding stories."
  );
  return (
    <motion.main
      data-testid="page-wedding-diaries"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative min-h-[85vh] overflow-hidden grain flex items-end">
        <img src={IMAGES.weddingDiariesCover} alt="Wedding Diaries" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/40 to-black/50" />
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 pb-20 pt-48 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 1 }}
            className="text-[11px] font-mono uppercase tracking-[0.4em] text-gold/90 mb-6"
          >
            A Vikash Singh Films Brand
          </motion.p>
          <MaskedLines
            lines={["WEDDING", "DIARIES"]}
            lineClassName="font-serif font-light leading-[0.95] tracking-tight text-[14vw] sm:text-[10vw] lg:text-[8vw] text-slate-50"
          />
          <Reveal delay={0.4} className="max-w-xl mt-8">
            <p className="text-sm sm:text-base text-slate-300/90 font-light leading-relaxed">
              Authentic emotions. Beautiful photography. Cinematic wedding films —
              told the way your family will want to remember them.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["Featured Weddings", "Cinematic Films", "Real Stories", "Pre-Weddings", "Heirloom Albums"]} />

      <section data-testid="featured-weddings-section" className="py-24 sm:py-32 px-6 sm:px-10 max-w-[1500px] mx-auto">
        <SectionHead
          eyebrow="Featured Weddings"
          title="Real weddings. Real cinema."
          copy="Every wedding below was photographed, filmed, edited and graded entirely in-house."
        />
        <div className="space-y-28 mt-20">
          {WEDDINGS.map((w, i) => (
            <article key={w.couple} data-testid={`wedding-story-${i}`} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <ParallaxImage src={w.cover} alt={w.couple} className="aspect-[4/3]" />
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {w.gallery.map((g, gi) => (
                    <div key={gi} className="overflow-hidden">
                      <img src={g} alt={`${w.couple} gallery ${gi + 1}`} loading="lazy" className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`lg:col-span-5 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Reveal>
                  <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-gold/70">
                    {w.location} · {w.date}
                  </p>
                  <h3 className="font-serif text-4xl sm:text-5xl font-light italic text-slate-50 mt-4">{w.couple}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed mt-6">{w.story}</p>
                  <div className="mt-8">
                    <FilmStrip film={w.film} cover={w.cover} testid={`wedding-film-${i}`} />
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mt-3">
                      Full film delivered privately to the family — request a viewing
                    </p>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-testid="photography-section" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto">
          <SectionHead eyebrow="Photography" title="Frames that feel like memory." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[IMAGES.bride, IMAGES.hands, IMAGES.indianCouple, IMAGES.royalBride].map((img, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden">
                  <img src={img} alt={`Wedding photography ${i + 1}`} loading="lazy" className="aspect-[3/4] w-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="prewedding-section" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto">
          <SectionHead eyebrow="Pre-Wedding" title="The story before the story." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {[IMAGES.couple, IMAGES.sparklerNight].map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <ParallaxImage src={img} alt={`Pre-wedding ${i + 1}`} className="aspect-[16/10]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="client-stories-section" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto">
          <SectionHead eyebrow="Client Stories" title="Love letters from our couples." center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <blockquote data-testid={`client-story-${i}`} className="border border-white/10 bg-[#121215] p-8 h-full flex flex-col">
                  <p className="font-serif text-lg italic font-light text-slate-200 leading-relaxed flex-1">“{t.quote}”</p>
                  <footer className="mt-8">
                    <p className="text-sm text-gold">{t.name}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-1">{t.detail}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07),transparent_60%)]" />
        <Reveal className="relative">
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-slate-50">
            Your wedding deserves <span className="italic text-gold-gradient">a diary.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <GoldButton to="/contact" testid="wd-book-date-button">Book Your Date</GoldButton>
            <GhostButton
              href={waLink("Hello Wedding Diaries, we'd like to enquire about our wedding.")}
              testid="wd-whatsapp-button"
            >
              WhatsApp Us
            </GhostButton>
          </div>
        </Reveal>
      </section>
    </motion.main>
  );
}
