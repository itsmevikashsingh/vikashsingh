import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { MaskedLines, Reveal, SectionHead, Eyebrow, GoldButton, GhostButton, inputCls } from "@/components/Motion";
import { IMAGES, POST_HOUSE_SERVICES, waLink } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  return (
    <div data-testid="before-after-slider" className="relative aspect-video overflow-hidden border border-white/10 select-none">
      <img src={IMAGES.tealGoldBride} alt="After grade" className="absolute inset-0 w-full h-full object-cover img-grade-after" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={IMAGES.tealGoldBride} alt="Before grade" className="absolute inset-0 w-full h-full object-cover img-grade-before" draggable={false} />
      </div>
      <div className="absolute top-0 bottom-0 w-px bg-gold" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full border border-gold bg-black/60 backdrop-blur grid place-items-center text-gold text-[10px] font-mono">
          {Math.round(pos)}
        </span>
      </div>
      <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-300 bg-black/50 px-3 py-1.5">RAW · LOG</span>
      <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-[0.3em] text-gold bg-black/50 px-3 py-1.5">Film Grade</span>
      <input
        data-testid="before-after-range"
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 accent-[#D4AF37]"
        aria-label="Before after comparison"
      />
    </div>
  );
};

const FIELD_DEFS = [
  { name: "full_name", label: "Full Name", required: true, span: 1 },
  { name: "studio_name", label: "Studio / Company Name", span: 1 },
  { name: "whatsapp", label: "WhatsApp Number", required: true, span: 1 },
  { name: "email", label: "Email", type: "email", required: true, span: 1 },
  { name: "wedding_date", label: "Wedding Date", type: "date", span: 1 },
  { name: "event_location", label: "Event Location", span: 1 },
  { name: "number_of_photos", label: "Number of Photos", span: 1 },
  { name: "video_duration", label: "Video Duration", span: 1 },
  { name: "expected_delivery", label: "Expected Delivery Date", type: "date", span: 1 },
  { name: "reference_style", label: "Reference / Style", span: 1 },
  { name: "budget", label: "Budget", span: 1 },
];

const QuoteForm = () => {
  const [form, setForm] = useState({ service_required: "", additional_requirements: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries/post-house`, form);
      setDone(true);
    } catch (err) {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div data-testid="posthouse-success-message" className="border border-gold/40 bg-gold/5 p-12 text-center">
        <p className="font-serif text-3xl sm:text-4xl font-light text-slate-50">
          Thank you. <span className="italic text-gold-gradient">Our team will contact you shortly.</span>
        </p>
        <p className="text-sm text-slate-400 mt-4">For urgent edits, reach us instantly on WhatsApp.</p>
        <div className="mt-8">
          <GoldButton href={waLink("Hello The Post House, I just submitted a quote request.")} testid="posthouse-success-whatsapp">
            Continue on WhatsApp
          </GoldButton>
        </div>
      </div>
    );
  }

  return (
    <form data-testid="post-house-quote-form" onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {FIELD_DEFS.map((f) => (
        <label key={f.name} className="block">
          <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">
            {f.label} {f.required && <span className="text-gold">*</span>}
          </span>
          <input
            data-testid={`ph-field-${f.name.replace(/_/g, "-")}`}
            type={f.type || "text"}
            required={f.required}
            value={form[f.name] || ""}
            onChange={set(f.name)}
            className={inputCls}
          />
        </label>
      ))}
      <label className="block">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Service Required</span>
        <select
          data-testid="ph-field-service-required"
          value={form.service_required}
          onChange={set("service_required")}
          className={`${inputCls} bg-[#121215]`}
        >
          <option value="">Select a service</option>
          {POST_HOUSE_SERVICES.map((s) => (
            <option key={s.name} value={s.name}>{s.name}</option>
          ))}
          <option value="Complete Post Production">Complete Post Production</option>
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Additional Requirements</span>
        <textarea
          data-testid="ph-field-additional-requirements"
          rows={4}
          value={form.additional_requirements}
          onChange={set("additional_requirements")}
          className={`${inputCls} resize-none`}
          placeholder="Tell us about the wedding, the footage, the mood you're after..."
        />
      </label>
      <div className="md:col-span-2 flex flex-wrap items-center gap-5 mt-2">
        <GoldButton type="submit" testid="post-house-quote-form-submit" className={submitting ? "opacity-60 pointer-events-none" : ""}>
          {submitting ? "Sending..." : "Request a Quote"}
        </GoldButton>
        <GhostButton href={waLink("Hello The Post House, I need a wedding post-production quote.")} testid="posthouse-whatsapp-button">
          <MessageCircle className="h-4 w-4" /> Book via WhatsApp
        </GhostButton>
      </div>
    </form>
  );
};

export default function PostHouse() {
  useSEO(
    "The Post House — Wedding Post Production Studio | Vikash Singh Films",
    "Professional wedding post-production: film editing, color grading, photo editing, album design and cinematic highlights for photographers and studios."
  );
  return (
    <motion.main
      data-testid="page-post-house"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative min-h-[90vh] overflow-hidden grain flex items-end">
        <img src={IMAGES.postHouseCover} alt="The Post House edit suite" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/50 to-black/60" />
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 pb-20 pt-48 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 1 }}
            className="text-[11px] font-mono uppercase tracking-[0.4em] text-gold/90 mb-6"
          >
            A Vikash Singh Films Brand — Post Production Studio
          </motion.p>
          <MaskedLines
            lines={["WHERE YOUR WEDDING STORY", "BECOMES CINEMA."]}
            lineClassName="font-serif font-light leading-[1.02] tracking-tight text-[8.5vw] sm:text-[6.5vw] lg:text-[4.8vw] text-slate-50"
          />
          <Reveal delay={0.5} className="max-w-xl mt-8">
            <p className="text-sm sm:text-base text-slate-300/90 font-light leading-relaxed">
              Professional wedding post-production crafted for photographers,
              cinematographers and studios.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <GoldButton href="#booking" testid="ph-hero-quote-button">Request a Quote</GoldButton>
              <GhostButton href={waLink("Hello The Post House, I'd like to discuss post-production.")} testid="ph-hero-whatsapp-button">
                <MessageCircle className="h-4 w-4" /> Chat With Our Head Colorist
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="ph-services-section" className="py-24 sm:py-32 px-6 sm:px-10 max-w-[1500px] mx-auto">
        <SectionHead
          eyebrow="Services"
          title="Everything after the shutter."
          copy="Send us your RAWs. We return films and galleries your clients will pay a premium for."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-16">
          {POST_HOUSE_SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.08}>
              <div data-testid={`ph-service-${i}`} className="group bg-[#0e0e10] p-8 h-full transition-colors duration-500 hover:bg-[#141416]">
                <span className="font-serif text-3xl font-light text-gold/30 group-hover:text-gold/70 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl font-light text-slate-100 mt-4">{s.name}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mt-3">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-testid="ph-before-after-section" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHead
            eyebrow="The Grade"
            title="RAW footage in. Cinema out."
            copy="Drag the slider — this is the difference a senior colorist makes."
            center
          />
          <Reveal className="mt-14">
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      <section data-testid="ph-work-section" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto">
          <SectionHead eyebrow="Finished Work" title="Recently shipped from the suite." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[IMAGES.editingTimeline, IMAGES.cinema, IMAGES.tealGoldBride, IMAGES.royalBride].map((img, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden group">
                  <img src={img} alt={`Post house work ${i + 1}`} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" data-testid="ph-booking-section" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_55%)]" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHead
            eyebrow="Book The Post House"
            title="Request a quote."
            copy="Dedicated booking for post-production only — separate from Vikash Singh Films wedding commissions."
            center
          />
          <Reveal className="mt-14">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </motion.main>
  );
}
