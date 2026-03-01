"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Portfolio() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!gridRef.current) return;

        const gridItems = gsap.utils.toArray(gridRef.current.children) as HTMLElement[];

        gsap.fromTo(gridItems,
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%", // Triggers when section hits 75% height
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="min-h-screen py-16 px-6 md:px-12 lg:px-10 overflow-hidden relative w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[#02040a] z-[-2]"></div>
            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    backgroundImage: "radial-gradient(circle at 50% 0%, rgba(20, 30, 60, 0.4) 0%, rgba(2, 4, 10, 0) 60%), linear-gradient(180deg, #050a14 0%, #02040a 100%)"
                }}
            ></div>

            <div className="w-full max-w-[1440px] mx-auto relative z-10">
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-6 gap-4 md:gap-5 lg:gap-6 lg:auto-rows-[180px]">

                    <div className="lg:col-span-2 lg:row-span-2 flex items-end p-8 md:p-10">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-display font-thin tracking-tight text-white">
                            {siteContent.portfolioHighlights.title}
                        </h1>
                    </div>

                    <div className="lg:col-span-2 lg:row-span-1 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] flex items-center px-10 hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl transition-all duration-500">
                        <h2 className="text-3xl md:text-5xl font-display font-thin leading-tight text-gray-200">
                            {siteContent.portfolioHighlights.subtitle}
                        </h2>
                    </div>

                    <article className="lg:col-span-2 lg:row-span-3 bg-white text-[#02040a] rounded-3xl p-10 md:p-14 flex flex-col justify-between group overflow-hidden relative shadow-2xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#e82c89] uppercase bg-[#e82c89]/10 px-3 py-1 rounded-full">{siteContent.portfolioHighlights.items[0].badge}</span>
                                <span className="material-symbols-outlined text-4xl text-[#e82c89] font-light">{siteContent.portfolioHighlights.items[0].icon}</span>
                            </div>
                            <h3 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-black tracking-tight">
                                {siteContent.portfolioHighlights.items[0].title}
                            </h3>
                            <p className="text-xl text-gray-600 font-light border-l-2 border-[#e82c89] pl-4">{siteContent.portfolioHighlights.items[0].subtitle}</p>
                        </div>
                        <div className="mt-12 relative">
                            <p className="text-base leading-relaxed text-gray-500 max-w-lg font-light">
                                {siteContent.portfolioHighlights.items[0].description}
                            </p>
                            <div className="mt-8 flex items-center gap-2 group/link cursor-pointer">
                                <span className="text-sm font-medium text-[#e82c89] uppercase">{siteContent.portfolioHighlights.items[0].linkText}</span>
                                <span className="material-symbols-outlined text-[#e82c89] text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </div>
                        </div>
                    </article>

                    <div className="lg:col-span-1 lg:row-span-1 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] flex items-center justify-center text-center p-6 hover:-translate-y-1 transition-all duration-500">
                        <span className="text-[#e82c89] text-4xl md:text-5xl font-light italic tracking-tight">{siteContent.portfolioHighlights.block2Subtitle}</span>
                    </div>

                    <article className="lg:col-span-1 lg:row-span-2 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-8 flex flex-col justify-end relative group hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-auto relative z-10">
                            <span className="material-symbols-outlined text-3xl text-white/80 p-3 rounded-full bg-white/5 border border-white/10">{siteContent.portfolioHighlights.items[1].icon}</span>
                        </div>
                        <h3 className="text-2xl font-light text-white mb-2 relative z-10">
                            {siteContent.portfolioHighlights.items[1].title}
                        </h3>
                        <p className="text-xs text-gray-400 font-light tracking-wide uppercase relative z-10">{siteContent.portfolioHighlights.items[1].subtitle}</p>
                    </article>

                    <article className="lg:col-span-2 lg:row-span-1 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-8 flex items-center justify-between gap-6 group hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                        <div className="flex-1">
                            <h3 className="text-2xl font-light text-white mb-1 group-hover:text-[#ff6b6b] transition-colors">
                                {siteContent.portfolioHighlights.items[2].title}
                            </h3>
                            <div className="flex gap-2 mt-2">
                                <span className="text-[10px] uppercase tracking-wider text-gray-400 border border-white/10 px-2 py-1 rounded">{siteContent.portfolioHighlights.items[2].tags?.[0]}</span>
                                <span className="text-[10px] uppercase tracking-wider text-gray-400 border border-white/10 px-2 py-1 rounded">{siteContent.portfolioHighlights.items[2].tags?.[1]}</span>
                                <span className="text-[10px] uppercase tracking-wider text-gray-400 border border-white/10 px-2 py-1 rounded">{siteContent.portfolioHighlights.items[2].tags?.[2]}</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e82c89] to-[#ff6b6b] flex items-center justify-center shadow-[0_4px_20px_rgba(232,44,137,0.4)]">
                            <span className="material-symbols-outlined text-white text-xl">{siteContent.portfolioHighlights.items[2].icon}</span>
                        </div>
                    </article>

                    <div className="lg:col-span-2 lg:row-span-2 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1 transition-all duration-500">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#e82c89] rounded-full filter blur-[80px] opacity-20"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 text-white text-2xl font-light tracking-wide">
                                <span className="material-symbols-outlined text-3xl text-[#ff6b6b]">{siteContent.portfolioHighlights.items[3].icon}</span>
                                <span className="font-normal font-display">{siteContent.portfolioHighlights.items[3].title}</span>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed font-light max-w-xl">
                                {siteContent.portfolioHighlights.items[3].description}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-8 relative z-10">
                            <a className="inline-flex items-center gap-0 group cursor-pointer no-underline bg-[#0a0a0a] rounded-full p-1 pr-6 border border-white/10 hover:border-white/30 transition-all shadow-lg" href="#">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e82c89] to-[#ff6b6b] flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined text-white text-sm">arrow_forward</span>
                                </div>
                                <span className="text-sm font-medium text-white tracking-wide uppercase">
                                    {siteContent.portfolioHighlights.items[3].linkText}
                                </span>
                            </a>
                            <p className="hidden lg:block text-[9px] text-gray-500 uppercase tracking-[0.2em] text-right">
                                {siteContent.portfolioHighlights.items[3].smallText}
                            </p>
                        </div>
                    </div>

                    <article className="lg:col-span-1 lg:row-span-2 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-8 flex flex-col justify-center text-center group hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                        <div className="mb-6 mx-auto w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#e82c89]/50 transition-colors">
                            <span className="material-symbols-outlined text-2xl text-gray-300 group-hover:text-white transition-colors">{siteContent.portfolioHighlights.items[4].icon}</span>
                        </div>
                        <h3 className="text-2xl font-light text-white mb-3 leading-tight">
                            {siteContent.portfolioHighlights.items[4].title}
                        </h3>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">{siteContent.portfolioHighlights.items[4].description}</p>
                    </article>

                    <div className="lg:col-span-1 lg:row-span-1 flex items-center justify-center px-6">
                        <p className="text-xs text-gray-500 text-center font-light leading-relaxed max-w-[150px]">
                            {siteContent.portfolioHighlights.items[5].description}
                        </p>
                    </div>

                    <article className="lg:col-span-1 lg:row-span-1 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-6 flex items-center gap-5 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#ff6b6b] text-lg">{siteContent.portfolioHighlights.items[6].icon}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-light text-white">{siteContent.portfolioHighlights.items[6].title}</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{siteContent.portfolioHighlights.items[6].subtitle}</p>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}
