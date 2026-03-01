"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroFeatureCard from "./HeroFeatureCard";
import { siteContent } from "../data/content";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const mediaRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Media fade-in and subtle scale down
        gsap.fromTo(mediaRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 2.5, ease: "power3.out" }
        );

        // Text stagger animation
        if (textRef.current) {
            gsap.fromTo(textRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.5 }
            );
        }

        // Cards up from bottom
        if (cardsRef.current) {
            gsap.fromTo(cardsRef.current.children,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "back.out(1.2)", delay: 1 }
            );
        }

        // Mouse Parallax Effect on Media
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 20; // max 20px movement
            const yPos = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(mediaRef.current, {
                x: xPos,
                y: yPos,
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 w-full max-w-[1440px] mx-auto px-6 z-10 overflow-hidden">
            {/* Background Media */}
            <div
                ref={mediaRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] pointer-events-none z-0 hidden lg:block"
                style={{
                    opacity: 0.9,
                    maskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black 10%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black 10%, transparent 85%)"
                }}
            >
                <img
                    alt="3D Octopus Abstract Art"
                    className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-[2000ms] ease-in-out ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
                    src="/images/abstract-octopus.png"
                />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onCanPlayThrough={() => setIsVideoLoaded(true)}
                    className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-[2000ms] ease-in-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    <source src="/images/abstract-octopus-video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="grid grid-cols-12 gap-6 relative z-10 w-full flex-grow">
                <div ref={textRef} className="col-span-12 lg:col-span-5 relative z-10 flex flex-col justify-start pt-10">
                    <h1 className="font-display font-thin-display text-6xl lg:text-[5rem] leading-[0.95] text-white tracking-tighter mb-4">
                        {siteContent.hero.title}
                    </h1>
                    <div
                        className="text-xs text-gray-400 uppercase tracking-widest mb-10 pl-1 border-l border-gray-700 ml-1"
                        dangerouslySetInnerHTML={{ __html: siteContent.hero.badge }}
                    />
                    <div className="flex items-center gap-4 mb-20 w-fit cursor-pointer group hover:opacity-80 transition-opacity">
                        <div className="glass-pill rounded-full pl-6 pr-1 py-1 flex items-center gap-4">
                            <span className="text-sm font-light text-white">{siteContent.hero.buttons.primary}</span>
                            <button className="w-10 h-10 rounded-full bg-coral-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="glass-pill rounded-full px-6 py-3.5 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <span className="text-sm font-medium text-white">{siteContent.hero.buttons.secondary}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 max-w-[120px] leading-tight">
                            {siteContent.hero.buttons.hint}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-white/90 backdrop-blur text-black p-5 rounded-3xl w-40 flex flex-col justify-between h-40 hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="text-5xl font-display font-medium text-center mt-2">{siteContent.hero.stats.experience.value}</div>
                            <div className="text-center text-sm font-bold mb-1">{siteContent.hero.stats.experience.label}</div>
                            <p className="text-[10px] text-gray-500 leading-tight text-center">
                                {siteContent.hero.stats.experience.description}
                            </p>
                        </div>
                        <div className="glass-card text-white p-5 rounded-3xl w-40 flex flex-col justify-between h-40 border border-white/20 hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="text-5xl font-display font-light text-center mt-2 text-white">{siteContent.hero.stats.retention.value}</div>
                            <div className="text-center text-sm font-bold mb-1 text-white">{siteContent.hero.stats.retention.label}</div>
                            <p className="text-[10px] text-gray-400 leading-tight text-center">
                                {siteContent.hero.stats.retention.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-7 relative z-10 flex flex-col items-end pt-10 pointer-events-none">
                    <div className="pointer-events-auto flex flex-col items-end gap-4 mt-20 lg:mt-32 mr-0 lg:mr-10">
                        <div className="glass-card bg-[#F3F3F3]/10 rounded-[2rem] p-4 w-[280px] shadow-2xl relative mb-4">
                            <div className="w-full h-32 bg-black rounded-2xl mb-4 overflow-hidden relative">
                                <img className="absolute top-[-20px] left-[-20px] w-[140%] h-[140%] object-cover opacity-80 mix-blend-screen" src="/images/fintech-data.png" alt="Data abstract" />
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-display text-coral font-light mb-1">{siteContent.hero.stats.adBudget.value}</div>
                                <div className="text-xs text-gray-300 font-medium uppercase tracking-wide mb-3">{siteContent.hero.stats.adBudget.label}</div>
                                <div className="flex justify-center mb-3">
                                    <span className="material-symbols-outlined font-light text-2xl text-white">add</span>
                                </div>
                                <p className="text-[11px] text-gray-400 leading-tight px-4 mb-4">
                                    {siteContent.hero.stats.adBudget.description}
                                </p>
                                <div className="flex justify-center -space-x-2 pb-2">
                                    <img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#15151A]" src="/images/avatar-1.jpg" />
                                    <img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#15151A]" src="/images/avatar-2.jpg" />
                                    <img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#15151A]" src="/images/avatar-3.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col gap-2 items-end absolute right-[260px] top-[180px]">
                            <button className="w-12 h-12 glass-pill rounded-2xl flex items-center justify-center hover:bg-white/10 transition">
                                <span className="text-white font-bold text-lg">📷</span>
                            </button>
                            <button className="w-12 h-12 glass-pill rounded-2xl flex items-center justify-center hover:bg-white/10 transition">
                                <span className="text-white font-bold text-lg">in</span>
                            </button>
                            <div className="flex items-center gap-3">
                                <button className="w-12 h-12 glass-pill rounded-2xl flex items-center justify-center hover:bg-white/10 transition">
                                    <span className="text-white font-bold text-lg">f</span>
                                </button>
                                <span className="text-xs text-gray-300 w-12 leading-tight">{siteContent.hero.social.label}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 mt-32 mb-10 flex flex-col lg:flex-row items-start lg:items-end justify-between relative z-20">
                    <div className="flex items-start gap-3 mb-8 lg:mb-0">
                        <span className="material-symbols-outlined font-light text-3xl text-gray-500 mt-1">add</span>
                        <p className="text-xs text-gray-400 max-w-[100px] leading-relaxed">
                            {siteContent.hero.cards.sectionHint}
                        </p>
                    </div>
                    <div className="max-w-2xl text-left lg:text-right">
                        <h2 className="text-3xl lg:text-4xl font-display font-light leading-tight text-white">
                            {siteContent.hero.description}
                        </h2>
                    </div>
                </div>

                <div ref={cardsRef} className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
                    <div className="hidden lg:flex flex-col justify-end pb-8 pr-4">
                        <p className="text-xs text-gray-400 leading-relaxed mb-6">
                            {siteContent.hero.cards.carouselHint}
                        </p>
                        <div className="flex gap-2">
                            <button className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:opacity-90 transition">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:opacity-90 transition">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    <HeroFeatureCard
                        number={siteContent.hero.cards.card1.number}
                        title={siteContent.hero.cards.card1.title}
                        description={siteContent.hero.cards.card1.description}
                        variant="dark"
                        accentColor="coral"
                    />

                    <HeroFeatureCard
                        number={siteContent.hero.cards.card2.number}
                        title={siteContent.hero.cards.card2.title}
                        description={siteContent.hero.cards.card2.description}
                        variant="glass"
                        accentColor="coral"
                    />

                    <HeroFeatureCard
                        number={siteContent.hero.cards.card3.number}
                        title={siteContent.hero.cards.card3.title}
                        variant="dark"
                        accentColor="magenta"
                    />

                </div>
            </div>
        </section>
    );
}
