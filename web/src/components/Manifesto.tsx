"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Manifesto() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%", // Triggers when the top of the section hits 75% of the viewport height
                toggleActions: "play none none reverse" // Play on scroll down, reverse on scroll up
            }
        });

        // Split the title into lines/words for better stagger effect (simulated here by fading the whole block for safety due to innerHTML complexity)
        tl.fromTo(titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
        )
            .fromTo(imageRef.current,
                { scale: 0, rotation: -15, opacity: 0 },
                { scale: 1, rotation: 3, opacity: 1, duration: 1, ease: "back.out(1.5)" },
                "-=0.8" // Overlap with title animation
            )
            .fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo(btnRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.8"
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full min-h-screen py-24 flex items-center justify-center px-6 lg:px-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute rounded-full filter blur-[120px] opacity-40 -top-20 -left-20 w-[800px] h-[800px] bg-purple-900/30"></div>
                <div className="absolute rounded-full filter blur-[120px] opacity-40 bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-900/20"></div>
                <div className="absolute rounded-full filter blur-[120px] opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-900/20"></div>
            </div>

            <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(233,30,99,0.8)] animate-pulse"></span>
                        {siteContent.manifesto.badge}
                    </span>
                </div>

                <h1 ref={titleRef} className="font-display font-thin text-[clamp(2.2rem,8vw,9rem)] leading-[0.95] tracking-[-0.04em] text-white/90 text-left break-words">
                    {siteContent.manifesto.title.p1} <span className="text-coral text-shadow-[0_0_30px_rgba(255,107,107,0.5)] font-light">{siteContent.manifesto.title.h1}</span> {siteContent.manifesto.title.p2}{" "}
                    {siteContent.manifesto.title.p3} <span className="text-magenta text-shadow-[0_0_30px_rgba(217,70,239,0.5)] font-light">{siteContent.manifesto.title.h2}</span>{" "}
                    <span className="relative inline-block">
                        <div ref={imageRef} className="float-right ml-8 mt-4 md:mt-8 w-32 h-32 md:w-64 md:h-64 rounded-full glass-card p-1.5 rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden hidden sm:block" style={{ shapeOutside: "circle(50%)", clipPath: "circle(50%)" }}>
                            <img alt="Agencis Team" className="w-full h-full object-cover scale-110" src="/images/manifesto-team.jpg" />
                        </div>
                        {siteContent.manifesto.title.p4}
                    </span>
                </h1>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-12 w-full">
                    <p ref={textRef} className="text-2xl md:text-3xl text-gray-400 font-light leading-snug max-w-4xl">
                        {siteContent.manifesto.paragraph.p1} <span className="text-white">{siteContent.manifesto.paragraph.h1}</span>{siteContent.manifesto.paragraph.p2} <span className="text-white">{siteContent.manifesto.paragraph.h2}</span>{siteContent.manifesto.paragraph.p3} <span className="text-white">{siteContent.manifesto.paragraph.h3}</span>{siteContent.manifesto.paragraph.p4}
                    </p>
                    <div ref={btnRef} className="flex flex-col items-start lg:items-end gap-6 shrink-0">
                        <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium border-b border-gray-700 pb-1">{siteContent.manifesto.since}</span>
                        <button className="group relative bg-white/5 border border-white/20 rounded-full pl-8 pr-2 py-2 flex items-center gap-6 hover:bg-white/10 transition-all duration-300 transform mb-6 cursor-pointer">
                            <span className="text-white text-sm font-medium tracking-wide">{siteContent.manifesto.button}</span>
                            <div className="w-10 h-10 bg-coral-gradient rounded-full flex items-center justify-center group-hover:bg-coral-gradient transition-colors shadow-lg">
                                <span className="material-symbols-outlined text-white text-xl">arrow_outward</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
