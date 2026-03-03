import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Servicos from "@/components/Servicos";
import Portfolio from "@/components/Portfolio";
import Cases from "@/components/Cases";
import CtaFooter from "@/components/CtaFooter";
import Navbar from "@/components/Navbar";
import { siteContent } from "@/data/content";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Main Content Assembly */}
      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        <Manifesto />
        <Servicos />
        <Portfolio />
        <Cases />
        <CtaFooter />
      </main>
    </div>
  );
}
