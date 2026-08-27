const Row = ({ items }) => (
  <div className="flex shrink-0 items-center">
    {items.map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light italic text-slate-500/80 whitespace-nowrap">
          {item}
        </span>
        <span className="mx-10 inline-block h-1.5 w-1.5 rotate-45 bg-gold/50 shrink-0" />
      </span>
    ))}
  </div>
);

export default function Marquee({ items, className = "" }) {
  return (
    <div
      data-testid="editorial-marquee"
      className={`overflow-hidden border-y border-white/10 py-8 select-none ${className}`}
    >
      <div className="flex w-max animate-marquee">
        <Row items={items} />
        <Row items={items} />
      </div>
    </div>
  );
}
