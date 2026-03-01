"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CtaFooter() {
    const containerRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate CTA section
        if (ctaRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(".cta-title",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
                .fromTo(".cta-content",
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.2 },
                    "-=0.5"
                );
        }

        // Animate Footer section
        if (footerRef.current) {
            gsap.fromTo(footerRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full bg-gradient-to-b from-[#05050A] via-[#0a0a1a] to-black text-white rounded-t-[3rem] overflow-hidden mt-10">
            <section ref={ctaRef} className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="relative cta-title">
                        <h2 className="font-display font-thin-display text-5xl lg:text-[6rem] leading-[0.9] text-white tracking-tighter">
                            {siteContent.ctaFooter.cta.title.p1}<br />
                            {siteContent.ctaFooter.cta.title.p2}<span className="align-top text-4xl lg:text-6xl text-gray-600 font-light">{siteContent.ctaFooter.cta.title.plus}</span>
                        </h2>
                        <div className="absolute -left-12 top-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                    </div>
                    <div className="flex flex-col items-start lg:pl-10 relative">
                        <div className="absolute right-0 top-[-20%] w-64 h-64 bg-pink-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="mb-12 relative z-10 cta-content">
                            <button className="group relative bg-coral-gradient rounded-full pl-8 pr-2 py-2 flex items-center gap-6 hover:shadow-[0_0_40px_rgba(255,107,107,0.4)] transition-all duration-300 transform hover:scale-105 mb-6 cursor-pointer">
                                <span className="text-white text-xl font-medium tracking-wide">{siteContent.ctaFooter.cta.button}</span>
                                <div className="w-14 h-14 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/40 transition-colors border border-white/10">
                                    <span className="material-symbols-outlined text-white text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </button>
                            <p className="text-gray-400 text-sm font-light tracking-wide max-w-sm pl-2">
                                {siteContent.ctaFooter.cta.description}
                            </p>
                        </div>
                        <div className="cta-content glass-card p-6 rounded-2xl border border-white/10 max-w-xs w-full relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full pointer-events-none"></div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-400 font-light uppercase tracking-wider">{siteContent.ctaFooter.cta.stats.label}</span>
                                <span className="material-symbols-outlined text-coral">favorite</span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-display font-light text-white">{siteContent.ctaFooter.cta.stats.value}</span>
                                <span className="text-sm text-green-400 font-medium">{siteContent.ctaFooter.cta.stats.metric}</span>
                            </div>
                            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                <div className="bg-coral-gradient h-full w-[98%] rounded-full"></div>
                            </div>
                            <div className="mt-4 flex -space-x-2">
                                <img alt="Client" className="w-8 h-8 rounded-full border border-black object-cover" src="/images/avatar-1.jpg" />
                                <img alt="Client" className="w-8 h-8 rounded-full border border-black object-cover" src="/images/avatar-2.jpg" />
                                <img alt="Client" className="w-8 h-8 rounded-full border border-black object-cover" src="/images/avatar-3.jpg" />
                                <div className="w-8 h-8 rounded-full border border-black bg-white/10 flex items-center justify-center text-[10px] text-white backdrop-blur-sm">
                                    {siteContent.ctaFooter.cta.stats.avatarsLabel}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="relative z-10 w-full max-w-[1440px] mx-auto border-t border-white/5 pt-16 pb-12 px-6 lg:px-12 bg-gradient-to-t from-black to-transparent">
                <div ref={footerRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <a className="text-4xl font-display font-bold text-white mb-6 block tracking-tight" href="#">Agencis</a>
                            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs mb-8">
                                {siteContent.ctaFooter.footer.brandDescription}
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-4 lg:col-span-4">
                        <h4 className="text-white font-display font-medium text-lg mb-6">{siteContent.ctaFooter.footer.contactTitle}</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-light">
                            {siteContent.ctaFooter.footer.contactInfo.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                        <h4 className="text-white font-display font-medium text-lg mb-6">{siteContent.ctaFooter.footer.policiesTitle}</h4>
                        <ul className="space-y-4 mb-4">
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm font-light" href="#">{siteContent.ctaFooter.footer.policiesLinks[0]}</a></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm font-light" href="#">{siteContent.ctaFooter.footer.policiesLinks[1]}</a></li>
                        </ul>
                        <form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors group">
                                    <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.nameLabel}</label>
                                    <input className="w-full bg-transparent pb-3 text-white placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light" placeholder={siteContent.ctaFooter.footer.form.namePlaceholder} type="text" />
                                </div>
                                <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors group">
                                    <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.emailLabel}</label>
                                    <input className="w-full bg-transparent pb-3 text-white placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light" placeholder={siteContent.ctaFooter.footer.form.emailPlaceholder} type="email" />
                                </div>
                            </div>
                            <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors mt-2 group">
                                <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.subjectLabel}</label>
                                <input className="w-full bg-transparent pb-3 text-white placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light" placeholder={siteContent.ctaFooter.footer.form.subjectPlaceholder} type="text" />
                            </div>
                            <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors mt-2 group">
                                <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.messageLabel}</label>
                                <textarea className="w-full bg-transparent py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light min-h-[60px] resize-none" placeholder={siteContent.ctaFooter.footer.form.messagePlaceholder}></textarea>
                            </div>
                            <button className="mt-4 text-white hover:text-coral transition-colors p-2 cursor-pointer flex items-center justify-between w-full border border-white/10 rounded-full bg-white/5 hover:bg-white/10 px-6 py-3" type="submit">
                                <span className="text-xs font-semibold tracking-wider">{siteContent.ctaFooter.footer.form.submitButton}</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-4 order-2 md:order-1">
                        <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer" href="#">
                            <span className="font-display font-bold text-xs">Ig</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer" href="#">
                            <span className="font-display font-bold text-xs">Li</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer" href="#">
                            <span className="font-display font-bold text-xs">Tw</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer" href="#">
                            <span className="font-display font-bold text-xs">Be</span>
                        </a>
                    </div>
                    <div className="text-xs font-light text-gray-600 flex flex-col md:flex-row gap-4 md:gap-8 items-center order-1 md:order-2">
                        <p>© 2026 Agencis Comunicação. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
