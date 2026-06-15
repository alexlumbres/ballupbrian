import { site } from "@/lib/site";
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 backdrop-blur-md bg-bg/75">
      <div className="max-w-wrap mx-auto px-7">
        <nav className="flex items-center justify-between h-[66px]">
          <a href="#top" className="font-serif font-semibold text-xl tracking-tight">BallUp<b className="text-accent">Brian</b></a>
          <div className="flex items-center gap-7">
            <a href="#services" className="hidden sm:inline text-sm text-ink2 hover:text-ink transition-colors">Services</a>
            <a href="#work" className="hidden sm:inline text-sm text-ink2 hover:text-ink transition-colors">Work</a>
            <a href="#packages" className="hidden sm:inline text-sm text-ink2 hover:text-ink transition-colors">Packages</a>
            <a href={site.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-ink text-bg px-5 py-2.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:bg-accent hover:text-white transition-all duration-300 ease-soft">Book a call →</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
