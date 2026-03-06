"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Servicos() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useGSAP(() => {
        // Animate Header
        if (headerRef.current) {
            gsap.fromTo(headerRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Animate Service Items
        if (listRef.current) {
            const articles = gsap.utils.toArray(listRef.current.children) as HTMLElement[];
            articles.forEach((article) => {
                gsap.fromTo(article,
                    { y: 80, opacity: 0, scale: 0.98 },
                    {
                        y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out",
                        scrollTrigger: {
                            trigger: article,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 relative overflow-hidden min-h-screen">
            <div className="absolute inset-0 z-[-2] bg-[#050507]"></div>
            <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#050507] to-[#000000]"></div>
            <div className="absolute inset-0 z-[-1] opacity-30 mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")" }}></div>
            <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16 relative z-10">
                <header ref={headerRef} className="w-full flex flex-col gap-6">
                    <div className="flex justify-between items-end w-full border-b border-white/5 pb-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(233,30,99,0.8)] animate-pulse"></span>
                                {siteContent.servicos.badge}
                            </span>
                            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-extralight tracking-tight text-white mt-2 leading-[0.9]">
                                {siteContent.servicos.title.p1}<span className="font-light text-white/90">{siteContent.servicos.title.h1}</span>
                            </h1>
                        </div>
                    </div>
                </header>

                <section ref={listRef} className="flex flex-col gap-4 w-full">
                    {siteContent.servicos.items.map((item, index) => {
                        const isActive = activeIndex === index;

                        if (isActive) {
                            return (
                                <article key={index} className="bg-[#141419]/60 border border-white/10 relative backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-[24px] p-6 sm:p-8 md:p-10 w-full transition-all duration-500 group">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0 blur-[40px]" style={{ background: 'radial-gradient(circle at center, rgba(233, 30, 99, 0.15) 0%, rgba(156, 39, 176, 0.05) 40%, transparent 70%)' }}></div>
                                    <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                                        <div className="flex-shrink-0 flex flex-col justify-between lg:w-1/3 min-h-[300px] lg:min-h-[400px]">
                                            <div className="flex flex-col gap-8">
                                                <span className="font-display text-6xl sm:text-7xl md:text-8xl font-light text-gradient-coral leading-none opacity-90">{item.number}</span>
                                                <div className="mt-2">
                                                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight">{item.title}</h2>
                                                    <div className="flex flex-wrap gap-3">
                                                        <span className="glass-pill px-4 py-2 rounded-full text-xs font-medium text-white/70 tracking-wide backdrop-blur-md">{item.tags[0]}</span>
                                                        <span className="glass-pill px-4 py-2 rounded-full text-xs font-medium text-white/70 tracking-wide backdrop-blur-md">{item.tags[1]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block mt-auto">
                                                <button className="bg-[#111] border border-white/10 text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm flex items-center gap-4 hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-300 group/btn shadow-lg shadow-black/20">
                                                    {item.buttonText}
                                                    <div className="bg-coral-gradient w-9 h-9 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,107,107,0.4)] group-hover/btn:scale-110 transition-transform duration-300">
                                                        <span className="material-symbols-outlined text-sm text-white font-bold">arrow_forward</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex-grow flex flex-col md:flex-row gap-8 items-center lg:items-stretch group/img">
                                            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border border-white/5 min-h-[250px]">
                                                {/* Optimized image with next/image */}
                                                <Image
                                                    alt={item.title as string}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    priority={index === 0}
                                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 grayscale-[20%] hover:grayscale-0"
                                                    src={item.image || "/images/services-branding.jpg"}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60"></div>
                                            </div>
                                            <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
                                                <div className="flex justify-end mb-4">
                                                    <button onClick={() => setActiveIndex(-1)} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm relative z-20 cursor-pointer">
                                                        <span className="material-symbols-outlined">remove</span>
                                                    </button>
                                                </div>
                                                <div className="flex flex-col gap-6 mt-auto">
                                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed font-light border-l border-white/10 pl-6">
                                                        {item.description?.p1}<span className="text-gradient-coral font-normal">{item.description?.h1}</span>{item.description?.p2}
                                                    </p>
                                                    <div className="lg:hidden mt-4">
                                                        <button className="w-full bg-[#111] border border-white/10 text-white pl-6 pr-2 py-3 rounded-full font-medium text-sm flex items-center justify-between hover:bg-[#1a1a1a] transition-colors shadow-lg">
                                                            {item.buttonText}
                                                            <div className="bg-coral-gradient w-9 h-9 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,107,107,0.4)]">
                                                                <span className="material-symbols-outlined text-sm text-white">arrow_forward</span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        }

                        return (
                            <article key={index} onClick={() => setActiveIndex(index)} className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.3)] rounded-[24px] p-5 sm:p-6 md:p-8 w-full hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative">
                                    <div className="flex items-center gap-6 sm:gap-8 md:gap-16 w-full md:w-auto">
                                        <span className="font-display text-4xl sm:text-5xl md:text-7xl font-light text-white/10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white/40 group-hover:to-white/10 transition-all duration-500 leading-none">{item.number}</span>
                                        <div className="flex flex-col gap-2 sm:gap-3">
                                            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-light text-white/80 group-hover:text-white transition-colors tracking-wide leading-tight">{item.title}</h3>
                                            <div className="flex flex-wrap gap-2 opacity-40 group-hover:opacity-90 transition-opacity duration-300">
                                                <span className="glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-gray-400 border-white/5 group-hover:border-white/10">{item.tags[0]}</span>
                                                {item.tags[1] && <span className="glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-gray-400 border-white/5 group-hover:border-white/10">{item.tags[1]}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:static w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/20 transition-all duration-300 bg-white/[0.02] group-hover:bg-white/[0.05] self-end sm:self-center">
                                        <span className="material-symbols-outlined font-light">add</span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </div>
        </section>
    );
}
