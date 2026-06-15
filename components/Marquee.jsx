import { brands } from "@/lib/site";
export default function Marquee() {
  const row = [...brands, ...brands];
  return (
    <div className="border-y border-ink/10 py-5 overflow-hidden bg-ink text-bg group" aria-label="Brands and collaborations">
      <div className="flex gap-[54px] w-max animate-scroll group-hover:[animation-play-state:paused] whitespace-nowrap">
        {row.map((b, i) => (
          <span key={i} className="font-serif text-[22px] opacity-90 after:content-['•'] after:ml-[54px] after:text-accent">{b}</span>
        ))}
      </div>
    </div>
  );
}
