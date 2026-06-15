import Reveal from "./Reveal";
import { cases } from "@/lib/site";
export default function Proof() {
  return (
    <section id="work" className="py-24 bg-ink text-bg">
      <div className="max-w-wrap mx-auto px-7">
        <div className="flex justify-between items-end gap-6 mb-13 flex-wrap" style={{ marginBottom: "3.25rem" }}>
          <Reveal as="h2" className="font-serif font-medium text-[clamp(30px,4.6vw,52px)] leading-[1.02] max-w-[18ch]">Results, not<br/>just reels.</Reveal>
          <Reveal as="p" className="text-bg/60 max-w-[34ch]">Real accounts, real numbers. A sample of what consistent, strategy-led content has produced.</Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-[18px]">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 55} className="border border-bg/15 rounded-2xl p-7 hover:-translate-y-1.5 hover:border-accent transition-all duration-300">
              <div className="text-xs tracking-[.12em] uppercase text-accent font-semibold">{c.tag}</div>
              <div className="font-serif font-medium text-[40px] tracking-tight mt-4 mb-1.5">{c.big}</div>
              <h3 className="font-serif text-lg mb-1.5">{c.title}</h3>
              <p className="text-sm text-bg/60">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
