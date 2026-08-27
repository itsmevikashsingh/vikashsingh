import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ease = [0.22, 1, 0.36, 1];

export const inputCls =
  "w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-gold/60 transition-colors duration-300";

export const Reveal = ({ children, delay = 0, y = 36, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "", delay = 0.25, stagger = 0.14 }) => (
  <div className={className}>
    {lines.map((line, i) => (
      <div key={i} className="overflow-hidden">
        <motion.div
          initial={{ y: "115%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, delay: delay + i * stagger, ease }}
          className={`pb-[0.14em] ${lineClassName}`}
        >
          {line}
        </motion.div>
      </div>
    ))}
  </div>
);

export const ParallaxImage = ({ src, alt = "", className = "", speed = 0.12, imgClassName = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        loading="lazy"
        className={`w-full h-[124%] -mt-[12%] object-cover ${imgClassName}`}
      />
    </div>
  );
};

export const Eyebrow = ({ children, className = "" }) => (
  <p className={`text-[11px] sm:text-xs font-mono uppercase tracking-[0.35em] text-gold/80 ${className}`}>
    {children}
  </p>
);

export const SectionHead = ({ eyebrow, title, copy, center = false }) => (
  <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-slate-50 mt-4">
      {title}
    </h2>
    {copy && <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mt-5">{copy}</p>}
  </Reveal>
);

const goldCls =
  "group inline-flex items-center justify-center gap-3 bg-gold text-ink px-8 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]";
const ghostCls =
  "group inline-flex items-center justify-center gap-3 border border-white/25 text-slate-100 px-8 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-500 hover:border-gold/70 hover:text-gold";

export const GoldButton = ({ to, href, testid, onClick, type, children, className = "" }) => {
  const inner = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  const cls = `${goldCls} ${className}`;
  if (to) return <Link data-testid={testid} to={to} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a data-testid={testid} href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  return (
    <button data-testid={testid} type={type || "button"} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
};

export const GhostButton = ({ to, href, testid, onClick, type, children, className = "" }) => {
  const inner = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  const cls = `${ghostCls} ${className}`;
  if (to) return <Link data-testid={testid} to={to} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a data-testid={testid} href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  return (
    <button data-testid={testid} type={type || "button"} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
};
