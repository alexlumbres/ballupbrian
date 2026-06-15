import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Packages from "@/components/Packages";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Services />
        <Proof />
        <Packages />
        <BookCTA />
      </main>
      <Footer />
    </>
  );
}
