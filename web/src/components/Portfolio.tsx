"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Portfolio() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const naftaVideoRef = useRef<HTMLVideoElement>(null);

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

                    <div className="lg:col-span-2 lg:row-span-2 flex flex-col justify-end p-8 md:p-10">
                        <div className="mb-4">
                            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(233,30,99,0.8)] animate-pulse"></span>
                                Portfólio
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-display font-thin tracking-tight text-white">
                            {siteContent.portfolioHighlights.title}
                        </h1>
                    </div>

                    <article
                        className="lg:col-span-2 lg:row-span-2 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-10 md:p-12 flex flex-col justify-end relative group hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                        onMouseEnter={() => naftaVideoRef.current?.play()}
                        onMouseLeave={() => {
                            if (naftaVideoRef.current) {
                                naftaVideoRef.current.pause();
                                naftaVideoRef.current.currentTime = 0;
                            }
                        }}
                    >
                        {siteContent.portfolioHighlights.items[2].image && (
                            <>
                                <Image
                                    src={siteContent.portfolioHighlights.items[2].image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-0 transition-opacity duration-700 ease-out group-hover:scale-110"
                                    alt="Background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>
                            </>
                        )}
                        {siteContent.portfolioHighlights.items[2].video && (
                            <video
                                ref={naftaVideoRef}
                                src={siteContent.portfolioHighlights.items[2].video}
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110 group-hover:scale-100"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="mb-auto relative z-10 w-fit group-hover:opacity-0 transition-opacity duration-500">
                            <span className="material-symbols-outlined text-4xl text-white/80 p-4 rounded-full bg-white/5 border border-white/10">{siteContent.portfolioHighlights.items[2].icon}</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-light text-white mb-4 relative z-10 leading-[1.1] tracking-tight group-hover:opacity-0 transition-opacity duration-500">
                            {siteContent.portfolioHighlights.items[2].title}
                        </h3>
                        <div className="flex items-center justify-between relative z-10 group-hover:opacity-0 transition-opacity duration-500">
                            <p className="text-sm text-gray-400 font-light tracking-[0.2em] uppercase">{siteContent.portfolioHighlights.items[2].subtitle}</p>
                            <div className="flex items-center gap-2 group/link">
                                <span className="material-symbols-outlined text-white/50 text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </div>
                        </div>
                    </article>

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

                    <article className="lg:col-span-1 lg:row-span-2 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-8 flex flex-col justify-end relative group hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                        {siteContent.portfolioHighlights.items[1].image && (
                            <>
                                <Image
                                    src={siteContent.portfolioHighlights.items[1].image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 25vw"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                                    alt="Background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            </>
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="mb-auto relative z-10">
                            <span className="material-symbols-outlined text-2xl text-white/80 p-2 rounded-full bg-white/5 border border-white/10">{siteContent.portfolioHighlights.items[1].icon}</span>
                        </div>
                        <h3 className="text-xl font-light text-white mb-1 relative z-10 leading-tight">
                            {siteContent.portfolioHighlights.items[1].title}
                        </h3>
                        <div className="flex items-center justify-between relative z-10 mt-1">
                            <p className="text-[10px] text-gray-400 font-light tracking-wide uppercase">{siteContent.portfolioHighlights.items[1].subtitle}</p>
                            <div className="flex items-center gap-2 group/link opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white/50 text-xs transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </div>
                        </div>
                    </article>

                    <article className="lg:col-span-1 lg:row-span-2 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-8 flex flex-col justify-end relative group hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                        {siteContent.portfolioHighlights.items[4].image && (
                            <>
                                <Image
                                    src={siteContent.portfolioHighlights.items[4].image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 25vw"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                                    alt="Background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            </>
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="mb-auto relative z-10">
                            <span className="material-symbols-outlined text-3xl text-white/80 p-3 rounded-full bg-white/5 border border-white/10">{siteContent.portfolioHighlights.items[4].icon}</span>
                        </div>
                        <h3 className="text-2xl font-light text-white mb-2 relative z-10 leading-tight">
                            {siteContent.portfolioHighlights.items[4].title}
                        </h3>
                        <div className="flex items-center justify-between relative z-10 mt-2">
                            <p className="text-xs text-gray-400 font-light tracking-wide uppercase">{siteContent.portfolioHighlights.items[4].subtitle}</p>
                            <div className="flex items-center gap-2 group/link opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white/50 text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </div>
                        </div>
                    </article>

                    <div className="lg:col-span-2 lg:row-span-2 glass-card bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/[0.06] p-10 md:p-12 flex flex-col justify-end relative overflow-hidden hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
                        {siteContent.portfolioHighlights.items[3].image && (
                            <>
                                <Image
                                    src={siteContent.portfolioHighlights.items[3].image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
                                    alt="Background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            </>
                        )}
                        <div className="mb-auto relative z-10">
                            <span className="material-symbols-outlined text-4xl text-white/80 p-4 rounded-full bg-white/5 border border-white/10">{siteContent.portfolioHighlights.items[3].icon}</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-light text-white mb-3 relative z-10 leading-tight tracking-tight">
                            {siteContent.portfolioHighlights.items[3].title}
                        </h3>
                        <div className="flex items-center justify-between relative z-10 mt-2">
                            <p className="text-sm text-gray-400 font-light tracking-[0.2em] uppercase">
                                {siteContent.portfolioHighlights.items[3].subtitle}
                            </p>
                            <div className="flex items-center gap-2 group/link opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white/50 text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                            </div>
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
