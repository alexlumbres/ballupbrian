import Reveal from "./Reveal";
import { services, site } from "@/lib/site";
export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-wrap mx-auto px-7">
        <div className="flex justify-between items-end gap-6 mb-13 flex-wrap" style={{ marginBottom: "3.25rem" }}>
          <Reveal as="h2" className="font-serif font-medium text-[clamp(30px,4.6vw,52px)] leading-[1.02] max-w-[18ch]">A full studio,<br/>under one creative.</Reveal>
          <Reveal as="p" className="text-ink2 max-w-[34ch]">Strategy, production, and post — handled end-to-end so your brand shows up consistently and grows on purpose.</Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={(i % 2) * 60} className="bg-bg hover:bg-card transition-colors duration-300 p-9">
              <div className="font-serif text-sm text-accent">{s.num}</div>
              <h3 className="font-serif text-[25px] mt-4 mb-3">{s.title}</h3>
              <p className="text-ink2 text-[15.5px]">{s.body}</p>
            </Reveal>
          ))}
          <Reveal className="bg-bg p-9 flex flex-col justify-center">
            <h3 className="font-serif text-[28px]">Not sure which you need?</h3>
            <p className="text-ink2 mb-5 mt-2">Start with a call. We'll map your goals to the right mix.</p>
            <a href={site.bookingUrl} target="_blank" rel="noopener" className="self-start inline-flex items-center gap-2 bg-ink text-bg px-5 py-2.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:bg-accent hover:text-white transition-all duration-300 ease-soft">Book a call →</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
