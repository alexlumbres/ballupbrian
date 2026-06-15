import Reveal from "./Reveal";
import { site } from "@/lib/site";
export default function BookCTA() {
  return (
    <section id="book" className="text-center py-[120px]">
      <div className="max-w-wrap mx-auto px-7">
        <Reveal as="span" className="text-xs tracking-[.18em] uppercase text-ink2 font-semibold">Let's build something</Reveal>
        <Reveal as="h2" delay={60} className="font-serif font-medium text-[clamp(38px,7vw,86px)] leading-[1.02] max-w-[16ch] mx-auto mt-4">
          Ready to scale your <span className="italic text-accent">presence?</span>
        </Reveal>
        <Reveal as="p" delay={120} className="text-ink2 max-w-[46ch] mx-auto mt-6">Book a free strategy call and we'll map your goals to a content system that actually moves the numbers.</Reveal>
        <Reveal delay={180} className="mt-10 flex gap-3.5 justify-center flex-wrap">
          <a href={site.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-ink text-bg px-7 py-3.5 rounded-full font-medium hover:-translate-y-0.5 hover:bg-accent hover:text-white transition-all duration-300 ease-soft">Book a strategy call →</a>
          <a href={`mailto:${site.email}?subject=Strategy%20call%20-%20BallUpBrian`} className="inline-flex items-center gap-2 border border-ink/15 px-7 py-3.5 rounded-full font-medium hover:border-ink transition-all duration-300 ease-soft">Email Brian</a>
        </Reveal>
      </div>
    </section>
  );
}
