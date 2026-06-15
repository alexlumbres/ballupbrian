import { site } from "@/lib/site";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="max-w-wrap mx-auto px-7">
        <div className="flex justify-between gap-6 flex-wrap items-center">
          <a href="#top" className="font-serif text-2xl font-semibold">BallUp<b className="text-accent">Brian</b></a>
          <div className="flex gap-5.5" style={{ gap: "1.375rem" }}>
            <a href={site.instagram} target="_blank" rel="noopener" className="text-ink2 text-sm hover:text-ink transition-colors">Instagram</a>
            <a href={site.tiktok} target="_blank" rel="noopener" className="text-ink2 text-sm hover:text-ink transition-colors">TikTok</a>
            <a href="#book" className="text-ink2 text-sm hover:text-ink transition-colors">Book</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-ink2/70">© {year} Brian Ramos · BallUpBrian · New York City.</div>
      </div>
    </footer>
  );
}
