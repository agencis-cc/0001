"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Cases() {
    const containerRef = useRef<HTMLElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const reviewCardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Sidebar entrance animation
        gsap.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: sidebarRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(reviewCardRef.current,
            { scale: 0.9, opacity: 0, rotation: -2 },
            {
                scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.2)", delay: 0.2,
                scrollTrigger: {
                    trigger: sidebarRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate each project card individually as they scroll into view
        const cards = gsap.utils.toArray('.project-card') as HTMLElement[];
        cards.forEach((card) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%", // Triggers when the top of the card is 85% down the viewport
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animate quotes
        const quotes = gsap.utils.toArray('.quote-card') as HTMLElement[];
        quotes.forEach(quote => {
            gsap.fromTo(quote,
                { x: 50, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: {
                        trigger: quote,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-24 pb-24 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16">
                {/* Sticky Sidebar */}
                <div ref={sidebarRef} className="col-span-1 lg:col-span-5 relative">
                    <div className="lg:sticky lg:top-32 h-fit flex flex-col gap-10">
                        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none opacity-40 z-[-1]">
                            <img alt="3D Abstract Shape" className="w-full h-full object-contain" src="/images/abstract-octopus.png" />
                        </div>
                        <div ref={titleRef} className="space-y-4 relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-2 h-2 rounded-full bg-coral-gradient"></span>
                                <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">{siteContent.cases.badge}</span>
                            </div>
                            <h2 className="text-6xl lg:text-8xl font-display font-thin tracking-tighter text-white leading-[0.9]">
                                {siteContent.cases.title.p1}<br /><span className="text-gray-500">{siteContent.cases.title.h1}</span>
                            </h2>
                            <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed mt-6">
                                {siteContent.cases.description}
                            </p>
                        </div>

                        <div ref={reviewCardRef} className="bg-white/90 backdrop-blur-md rounded-3xl p-6 max-w-sm mt-8 transform hover:scale-105 transition-transform duration-500 border border-white/20">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <div className="text-4xl font-display font-medium text-black tracking-tight">{siteContent.cases.reviewCard.title}</div>
                                    <div className="text-xs font-medium text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: siteContent.cases.reviewCard.subtitle }}></div>
                                </div>
                                <div className="bg-coral-gradient w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <span className="material-symbols-outlined text-xl">favorite</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <div className="flex -space-x-3">
                                    <img alt="Client Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatar-1.jpg" />
                                    <img alt="Client Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatar-2.jpg" />
                                    <img alt="Client Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatar-3.jpg" />
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+42</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold text-black uppercase tracking-wide">{siteContent.cases.reviewCard.ratingLabel}</div>
                                    <div className="flex text-yellow-500 text-sm">
                                        <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button className="glass-pill px-8 py-4 rounded-full text-white flex items-center gap-4 hover:bg-white/10 transition group w-fit">
                                <span className="font-medium text-sm tracking-widest uppercase">{siteContent.cases.button}</span>
                                <span className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scrollable Cases */}
                <div className="col-span-1 lg:col-span-7 flex flex-col gap-12 pb-20 pt-10 lg:pt-0">

                    <article className="project-card group relative bg-[#0F0F16] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 cursor-pointer"></div>
                        <div className="relative h-[480px] w-full overflow-hidden">
                            <img alt="Fintech Project" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="/images/fintech-data.png" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 pointer-events-none">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="flex gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-black/30 backdrop-blur-md">{siteContent.cases.projects[0].tags[0]}</span>
                                        <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-black/30 backdrop-blur-md">{siteContent.cases.projects[0].tags[1]}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-medium mb-2">{siteContent.cases.projects[0].title}</h3>
                                    <p className="text-gray-300 max-w-md text-sm leading-relaxed">{siteContent.cases.projects[0].description}</p>
                                </div>
                                <button className="w-14 h-14 rounded-full bg-coral-gradient flex items-center justify-center text-white shadow-lg transform group-hover:rotate-45 transition-transform duration-300 shrink-0 ml-4 pointer-events-auto cursor-pointer">
                                    <span className="material-symbols-outlined">arrow_upward</span>
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Quote 1 */}
                    <div className="quote-card bg-[#14141C]/70 backdrop-blur-[16px] border border-white/5 rounded-3xl p-8 relative ml-auto w-full md:w-[90%] transform translate-x-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        <span className="absolute -top-4 -left-4 w-12 h-12 bg-coral-gradient rounded-full flex items-center justify-center text-white text-2xl font-serif">&quot;</span>
                        <p className="text-xl md:text-2xl font-display font-light leading-relaxed text-gray-200">
                            {siteContent.cases.quotes[0].p1}<span className="text-magenta font-medium">{siteContent.cases.quotes[0].h1}</span>{siteContent.cases.quotes[0].p2}
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <img alt={siteContent.cases.quotes[0].author} className="w-12 h-12 rounded-full border border-white/20 object-cover" src="/images/avatar-1.jpg" />
                            <div>
                                <div className="text-white font-medium">{siteContent.cases.quotes[0].author}</div>
                                <div className="text-gray-500 text-sm">{siteContent.cases.quotes[0].role}</div>
                            </div>
                        </div>
                    </div>

                    <article className="project-card group relative bg-[#0F0F16] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl mt-8">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 cursor-pointer"></div>
                        <div className="relative h-[480px] w-full overflow-hidden bg-gray-800">
                            <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                                <span className="text-9xl text-white/5 font-display font-bold">E-COM</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 pointer-events-none">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="flex gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-black/30 backdrop-blur-md">{siteContent.cases.projects[1].tags[0]}</span>
                                        <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-black/30 backdrop-blur-md">{siteContent.cases.projects[1].tags[1]}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-medium mb-2">{siteContent.cases.projects[1].title}</h3>
                                    <p className="text-gray-300 max-w-md text-sm leading-relaxed">{siteContent.cases.projects[1].description}</p>
                                </div>
                                <button className="w-14 h-14 rounded-full bg-coral-gradient flex items-center justify-center text-white shadow-lg transform group-hover:rotate-45 transition-transform duration-300 shrink-0 ml-4 pointer-events-auto cursor-pointer">
                                    <span className="material-symbols-outlined">arrow_upward</span>
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Quote 2 */}
                    <div className="quote-card bg-[#14141C]/70 backdrop-blur-[16px] border border-white/5 rounded-3xl p-8 relative ml-auto w-full md:w-[90%] transform translate-x-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        <span className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 border border-white/10 rounded-full flex items-center justify-center text-white text-2xl font-serif">&quot;</span>
                        <p className="text-xl md:text-2xl font-display font-light leading-relaxed text-gray-200">
                            {siteContent.cases.quotes[1].p1}<span className="text-coral font-medium">{siteContent.cases.quotes[1].h1}</span>{siteContent.cases.quotes[1].p2}
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <img alt={siteContent.cases.quotes[1].author} className="w-12 h-12 rounded-full border border-white/20 object-cover" src="/images/avatar-2.jpg" />
                            <div>
                                <div className="text-white font-medium">{siteContent.cases.quotes[1].author}</div>
                                <div className="text-gray-500 text-sm">{siteContent.cases.quotes[1].role}</div>
                            </div>
                        </div>
                    </div>

                    <article className="project-card group relative bg-[#0F0F16] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl mt-8">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 cursor-pointer"></div>
                        <div className="relative h-[480px] w-full overflow-hidden bg-gray-800">
                            <div className="w-full h-full bg-gradient-to-br from-teal-900 to-emerald-900 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                                <span className="text-9xl text-white/5 font-display font-bold">SAAS</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 pointer-events-none">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="flex gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-black/30 backdrop-blur-md">{siteContent.cases.projects[2].tags[0]}</span>
                                        <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium bg-black/30 backdrop-blur-md">{siteContent.cases.projects[2].tags[1]}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-medium mb-2">{siteContent.cases.projects[2].title}</h3>
                                    <p className="text-gray-300 max-w-md text-sm leading-relaxed">{siteContent.cases.projects[2].description}</p>
                                </div>
                                <button className="w-14 h-14 rounded-full bg-coral-gradient flex items-center justify-center text-white shadow-lg transform group-hover:rotate-45 transition-transform duration-300 shrink-0 ml-4 pointer-events-auto cursor-pointer">
                                    <span className="material-symbols-outlined">arrow_upward</span>
                                </button>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}
