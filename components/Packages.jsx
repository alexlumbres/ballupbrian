import Reveal from "./Reveal";
import { packages, site } from "@/lib/site";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 mt-1 flex-none fill-accent"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <div className="flex justify-between items-end gap-6 flex-wrap" style={{ marginBottom: "3.25rem" }}>
          <Reveal as="h2" className="font-serif font-medium text-[clamp(30px,4.6vw,52px)] leading-[1.02] max-w-[18ch]">Pick a lane.<br/>Start growing.</Reveal>
          <Reveal as="p" className="text-ink2 max-w-[34ch]">Clear scopes, monthly retainers, and project work. Every engagement starts with a free strategy call.</Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-[18px] items-start">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 55}
              className={`rounded-[18px] p-8 border transition-all duration-300 hover:-translate-y-1.5 ${p.featured ? "bg-ink text-bg border-ink" : "bg-card border-ink/10 hover:shadow-[0_24px_50px_-28px_rgba(12,11,10,.35)]"}`}>
              {p.featured && <span className="inline-block text-[11px] tracking-[.14em] uppercase text-accent font-semibold mb-2">Most popular</span>}
              <div className="font-serif text-2xl">{p.name}</div>
              <div className="font-serif text-[40px] tracking-tight mt-3.5 mb-1">{p.price}<span className={`text-[13px] ${p.featured ? "text-bg/60" : "text-ink2"}`}> {p.per}</span></div>
              <div className={`text-[13px] ${p.featured ? "text-bg/60" : "text-ink2"}`}>{p.sub}</div>
              <ul className="my-6 flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className={`text-[14.5px] flex gap-2.5 items-start ${p.featured ? "text-bg/80" : "text-ink2"}`}><Check />{f}</li>
                ))}
              </ul>
              <a href={site.bookingUrl} target="_blank" rel="noopener"
                className={`w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-soft ${p.featured ? "bg-accent text-white hover:-translate-y-0.5" : "border border-ink/15 hover:border-ink"}`}>Book a call →</a>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 text-xs text-ink2/70">Pricing shown as placeholder (—) pending your confirmation. Final rates are a business decision and should be set by you before this page goes live.</p>
      </div>
    </section>
  );
}
