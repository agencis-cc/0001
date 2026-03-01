import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Servicos from "@/components/Servicos";
import Portfolio from "@/components/Portfolio";
import Cases from "@/components/Cases";
import CtaFooter from "@/components/CtaFooter";
import { siteContent } from "@/data/content";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Navbar */}
      <header className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
        <div className="glass-nav rounded-full px-2 py-2 flex items-center justify-between w-full max-w-5xl">
          <div className="pl-6 flex items-center">
            <a className="text-2xl font-display font-semibold tracking-tight text-white hover:opacity-80 transition-opacity cursor-pointer">
              {siteContent.navbar.brand}
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-1 mx-4">
            {siteContent.navbar.links.map((link: { label: string, href: string }, i: number) => (
              <a key={i} href={link.href} className="px-4 py-2 text-white hover:bg-white/10 rounded-full text-sm font-medium transition-all cursor-pointer">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pr-2">
            <button className="bg-coral-gradient px-6 py-2.5 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(255,107,107,0.4)] cursor-pointer">
              {siteContent.navbar.button}
            </button>
          </div>
        </div>
      </header>

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
