"use client";
import React from "react";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroFeatureCard from "./HeroFeatureCard";
import { siteContent } from "../data/content";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Magnetic from "./Magnetic";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const mediaRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [adCount, setAdCount] = useState(8295);

    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [cardWidthMultiplier, setCardWidthMultiplier] = useState(280 + 24);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 640) {
                setCardWidthMultiplier(240 + 24);
            } else {
                setCardWidthMultiplier(280 + 24);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleNext = () => {
        setIsTransitioning(true);
        setActiveSlide((prev) => prev + 1);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setActiveSlide((prev) => (prev > 0 ? prev - 1 : 4));
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, activeSlide]);

    // Seamless jump
    useEffect(() => {
        if (activeSlide === 5) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setActiveSlide(0);
            }, 700); // Same as transition duration
            return () => clearTimeout(timer);
        }
    }, [activeSlide]);

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

        // Counter Animation for Trabalhos Finalizados
        const targetValue = parseInt(siteContent.hero.stats.adBudget.value.replace(/\./g, ''));
        const counterObj = { value: 8295 };

        gsap.to(counterObj, {
            value: targetValue,
            duration: 15,
            ease: "power1.inOut",
            delay: 1.5,
            onUpdate: () => {
                setAdCount(Math.floor(counterObj.value));
            }
        });

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
                <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                        alt="3D Octopus Abstract Art"
                        fill
                        priority
                        className="object-cover object-top"
                        src="/images/abstract-octopus.png"
                    />
                </div>
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
                <div ref={textRef} className="col-span-12 lg:col-span-10 xl:col-span-5 relative z-10 flex flex-col justify-start pt-10">
                    <h1 className="font-display font-thin-display text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.95] text-white tracking-tighter mb-6 lg:mb-4">
                        {siteContent.hero.title}
                    </h1>
                    <div className="mb-10 flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(233,30,99,0.8)] animate-pulse"></span>
                            <span dangerouslySetInnerHTML={{ __html: siteContent.hero.badge }}></span>
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16 lg:mb-20">
                        <div className="flex items-center gap-4">
                            <Magnetic>
                                <a
                                    href={siteContent.hero.buttons.primary.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-pill rounded-full pl-6 pr-1 py-1 flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer group"
                                    aria-label={siteContent.hero.buttons.primary.label}
                                >
                                    <span className="text-sm font-light text-white">{siteContent.hero.buttons.primary.label}</span>
                                    <div className="w-10 h-10 rounded-full bg-coral-gradient flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </a>
                            </Magnetic>
                            <div className="glass-pill rounded-full px-6 py-3.5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                                <span className="text-sm font-medium text-white">{siteContent.hero.buttons.secondary}</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 max-w-[150px] leading-tight">
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
                        <div className="glass-card rounded-[2rem] p-4 w-[280px] shadow-2xl relative mb-4 group cursor-pointer transition-all duration-300">
                            <div className="w-full h-32 bg-black rounded-2xl mb-4 overflow-hidden relative">
                                <Image
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                                    src="/images/polvo_job.jpg"
                                    alt="Agencis Work"
                                />
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-display text-coral font-light">
                                    {adCount.toLocaleString('pt-BR')}
                                </div>
                                <div className="text-[10px] text-coral/80 font-medium uppercase tracking-wider mb-2">{siteContent.hero.stats.adBudget.label}</div>

                                <p className="text-[11px] text-gray-400 leading-tight px-6 mb-5">
                                    {siteContent.hero.stats.adBudget.description}
                                </p>

                                <div className="pb-2">
                                    <button className="text-[9px] uppercase tracking-[0.2em] text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-5 py-2 transition-all duration-300 flex items-center justify-center gap-2 mx-auto group/btn">
                                        Portfolio <span className="text-sm group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col gap-2 items-end absolute right-[340px] top-[180px]">
                            <a
                                href={siteContent.hero.social.links.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass-pill rounded-2xl flex items-center justify-center hover:bg-white/10 transition group/btn"
                                aria-label="Instagram"
                            >
                                <Instagram className="text-white w-5 h-5 transition-transform group-hover/btn:scale-110" />
                            </a>
                            <a
                                href={siteContent.hero.social.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass-pill rounded-2xl flex items-center justify-center hover:bg-white/10 transition group/btn"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="text-white w-5 h-5 transition-transform group-hover/btn:scale-110" />
                            </a>
                            <div className="flex items-center gap-3">
                                <a
                                    href={siteContent.hero.social.links.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 glass-pill rounded-2xl flex items-center justify-center hover:bg-white/10 transition group/btn"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="text-white w-5 h-5 transition-transform group-hover/btn:scale-110" />
                                </a>
                                <span className="text-xs text-gray-300 w-12 leading-tight">{siteContent.hero.social.label}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 mt-32 mb-10 flex flex-col lg:flex-row items-start lg:items-end justify-between relative z-20">
                    <div className="flex items-start gap-3 mb-8 lg:mb-0">
                        <span className="material-symbols-outlined font-light text-3xl text-gray-500 mt-1">
                            {siteContent.hero.cards.sectionSymbol === "+" ? "add" : siteContent.hero.cards.sectionSymbol}
                        </span>
                        <p className="text-xs text-gray-400 max-w-[100px] leading-relaxed">
                            {siteContent.hero.cards.sectionHint}
                        </p>
                    </div>
                    <div className="max-w-2xl text-left lg:text-right">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light leading-snug text-white">
                            {siteContent.hero.description}
                        </h2>
                    </div>
                </div>

                <div ref={cardsRef} className="col-span-12 grid grid-cols-12 gap-6 mt-12 overflow-visible">
                    {/* Left Side: Hint & Controls */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col justify-end pb-8 lg:pr-8">
                        <p className="text-xs text-gray-400 leading-relaxed mb-8">
                            {siteContent.hero.cards.carouselHint}
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 4))}
                                className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors pointer-events-auto cursor-pointer"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button
                                onClick={() => setActiveSlide((prev) => (prev < 4 ? prev + 1 : 0))}
                                className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors pointer-events-auto cursor-pointer"
                            >
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Sliding Cards Container */}
                    <div className="col-span-12 lg:col-span-9 overflow-hidden relative -mt-8 pt-8 pb-8 -mb-8">
                        <div
                            className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-[cubic-bezier(0.8,0,0.2,1)]' : 'transition-none'}`}
                            style={{
                                transform: `translateX(-${activeSlide * cardWidthMultiplier}px)`,
                                pointerEvents: 'auto'
                            }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {[0, 1].map((setIndex) => (
                                <React.Fragment key={setIndex}>
                                    <HeroFeatureCard
                                        number={siteContent.hero.cards.card1.number}
                                        title={siteContent.hero.cards.card1.title}
                                        description={siteContent.hero.cards.card1.description}
                                        variant="dark"
                                        accentColor="coral"
                                        whiteNumber={true}
                                    />
                                    <HeroFeatureCard
                                        number={siteContent.hero.cards.card2.number}
                                        title={siteContent.hero.cards.card2.title}
                                        description={siteContent.hero.cards.card2.description}
                                        variant="glass"
                                        accentColor="magenta"
                                    />
                                    <HeroFeatureCard
                                        number={siteContent.hero.cards.card3.number}
                                        title={siteContent.hero.cards.card3.title}
                                        variant="dark"
                                        accentColor="coral"
                                    />
                                    <HeroFeatureCard
                                        number={siteContent.hero.cards.card4.number}
                                        title={siteContent.hero.cards.card4.title}
                                        description={siteContent.hero.cards.card4.description}
                                        variant="glass"
                                        accentColor="magenta"
                                    />
                                    <HeroFeatureCard
                                        number={siteContent.hero.cards.card5.number}
                                        title={siteContent.hero.cards.card5.title}
                                        description={siteContent.hero.cards.card5.description}
                                        variant="dark"
                                        accentColor="coral"
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
