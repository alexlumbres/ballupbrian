import Reveal from "./Reveal";
import { site, stats } from "@/lib/site";
export default function Hero() {
  return (
    <section className="pt-20 pb-14">
      <div className="max-w-wrap mx-auto px-7">
        <Reveal className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          <span className="text-xs tracking-[.18em] uppercase text-ink2 font-semibold">New York City · Available across the boroughs</span>
        </Reveal>
        <Reveal as="h1" delay={60} className="font-serif font-medium leading-[1.02] tracking-tight text-[clamp(42px,8.2vw,104px)] max-w-[14ch]">
          Content that <span className="italic text-accent">moves</span><br/>brands <span className="text-stroke">forward.</span>
        </Reveal>
        <Reveal as="p" delay={120} className="mt-7 text-ink2 text-[clamp(17px,2vw,21px)] max-w-[48ch]">
          I'm Brian Ramos — a NYC creative working at the intersection of strategy, storytelling, and aesthetic content. I help brands and creators turn attention into audiences, and audiences into sold-out rooms.
        </Reveal>
        <Reveal delay={180} className="mt-9 flex gap-3.5 flex-wrap">
          <a href={site.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-ink text-bg px-7 py-3.5 rounded-full font-medium hover:-translate-y-0.5 hover:bg-accent hover:text-white transition-all duration-300 ease-soft">Book a strategy call →</a>
          <a href="#work" className="inline-flex items-center gap-2 border border-ink/15 px-7 py-3.5 rounded-full font-medium hover:border-ink transition-all duration-300 ease-soft">See the results</a>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 border-t border-ink/10 pt-8">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 55}>
              <div className="font-serif font-medium text-[clamp(30px,4vw,46px)] tracking-tight">{s.n}</div>
              <div className="text-[13px] text-ink2 mt-1">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
