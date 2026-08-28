import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, Instagram, MessageCircle, MapPin } from "lucide-react";
import { MaskedLines, Reveal, Eyebrow, GoldButton, inputCls } from "@/components/Motion";
import { CONTACT, SERVICES, waLink } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INFO = [
  { icon: Phone, label: "Phone", value: "Call Us", href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, testid: "contact-phone-card" },
 { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}`, testid: "contact-whatsapp-card" },
  { icon: Mail, label: "Email", value: "Send an Email", href: `mailto:${CONTACT.email}`, testid: "contact-email-card" },
  { icon: Instagram, label: "Instagram", value: CONTACT.instagramHandle, href: CONTACT.instagram, testid: "contact-instagram-card" },
];

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", wedding_date: "", location: "", budget: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries/contact`, form);
      setDone(true);
    } catch (err) {
      toast.error("Something went wrong. Please reach us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div data-testid="contact-success-message" className="border border-gold/40 bg-gold/5 p-12 text-center h-full flex flex-col items-center justify-center">
        <p className="font-serif text-3xl sm:text-4xl font-light text-slate-50">
          Thank you. <span className="italic text-gold-gradient">Our team will contact you shortly.</span>
        </p>
      </div>
    );
  }

  return (
    <form data-testid="contact-enquiry-form" onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <label className="block">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Full Name <span className="text-gold">*</span></span>
        <input data-testid="contact-field-name" required value={form.name} onChange={set("name")} className={inputCls} />
      </label>
      <label className="block">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Email <span className="text-gold">*</span></span>
        <input data-testid="contact-field-email" type="email" required value={form.email} onChange={set("email")} className={inputCls} />
      </label>
      <label className="block">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Phone / WhatsApp</span>
        <input data-testid="contact-field-phone" value={form.phone} onChange={set("phone")} className={inputCls} />
      </label>
      <label className="block">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Wedding Date</span>
        <input data-testid="contact-field-date" type="date" value={form.wedding_date} onChange={set("wedding_date")} className={inputCls} />
      </label>
      <label className="block">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Event Location</span>
        <input data-testid="contact-field-location" value={form.location} onChange={set("location")} className={inputCls} />
      </label>
      <label className="block">
        <select data-testid="contact-field-budget" value={form.budget} onChange={set("budget")} className={`${inputCls} bg-black text-slate-200`}>
        <select data-testid="contact-field-budget" value={form.budget} onChange={set("budget")} className={`${inputCls} bg-[#121215]`}>
  <option value="">Select a range</option>
  <option>Under ₹1.5L</option>
  <option>₹1.5L - ₹3L</option>
  <option>₹3L - ₹6L</option>
  <option>₹6L+</option>
</select>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Service Interest</span>
        <select data-testid="contact-field-service" value={form.service} onChange={set("service")} className={`${inputCls} bg-black text-slate-200`}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.name} value={s.name} className="bg-black text-slate-200">{s.name}</option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">Your Story</span>
        <textarea data-testid="contact-field-message" rows={4} value={form.message} onChange={set("message")} className={`${inputCls} resize-none`} placeholder="Tell us about your wedding — the city, the venue, the mood..." />
      </label>
      <div className="sm:col-span-2 mt-2">
        <GoldButton type="submit" testid="contact-form-submit" className={submitting ? "opacity-60 pointer-events-none" : ""}>
          {submitting ? "Sending..." : "Send Enquiry"}
        </GoldButton>
      </div>
    </form>
  );
};

export default function Contact() {
  useSEO(
    "Contact — Vikash Singh Films",
    "Book Vikash Singh Films for your wedding. Phone, WhatsApp, email and Instagram — let's create something timeless."
  );
  return (
    <motion.main
      data-testid="page-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-36 pb-24"
    >
      <section className="px-6 sm:px-10 max-w-[1500px] mx-auto">
        <Eyebrow>Contact</Eyebrow>
        <MaskedLines
          className="mt-6"
          lines={["LET'S CREATE SOMETHING", "TIMELESS."]}
          lineClassName="font-serif text-[10vw] sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-slate-50"
        />
        <Reveal className="max-w-xl mt-8">
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Vikash Singh Films — wedding photography, cinematography and post-production.
            Tell us about your celebration and we'll respond within 24 hours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mt-20">
          <div className="lg:col-span-4 space-y-4">
            {INFO.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07}>
                <a
                  data-testid={c.testid}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-5 border border-white/10 bg-[#121215] p-6 transition-all duration-500 hover:border-gold/50"
                >
                  <span className="h-12 w-12 shrink-0 border border-white/15 grid place-items-center text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">{c.label}</span>
                    <span className="block text-sm text-slate-200 mt-1">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div data-testid="contact-location-card" className="border border-white/10 bg-[#121215] p-6">
                <div className="flex items-center gap-5">
                  <span className="h-12 w-12 shrink-0 border border-white/15 grid place-items-center text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">Studio Address</span>
                    <span className="block text-sm text-slate-200 mt-1">{CONTACT.address}</span>
                  </span>
                </div>
                <div className="mt-6 aspect-video border border-white/10 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831.5409709392725!2d85.3591851513682!3d23.34904568995625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e16fdf488b89%3A0x678856c036d416eb!2sWedding%20Diaries!5e0!3m2!1sen!2sin!4v1787895085756!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-[#0e0e10] p-8 sm:p-12">
                <h2 className="font-serif text-3xl font-light text-slate-50 mb-10">Business & Wedding Enquiries</h2>
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
