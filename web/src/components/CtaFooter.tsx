"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Magnetic from "./Magnetic";
import Image from "next/image";

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
                        <h2 className="font-display font-thin-display text-4xl sm:text-5xl lg:text-[6rem] leading-[0.9] text-white tracking-tighter">
                            {siteContent.ctaFooter.cta.title.p1}<br />
                            {siteContent.ctaFooter.cta.title.p2}<span className="align-top text-3xl lg:text-6xl text-gray-600 font-light">{siteContent.ctaFooter.cta.title.plus}</span>
                        </h2>
                        <div className="absolute -left-12 top-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                    </div>
                    <div className="flex flex-col items-start lg:pl-10 relative">
                        <div className="absolute right-0 top-[-20%] w-64 h-64 bg-pink-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="mb-12 relative z-10 cta-content">
                            <Magnetic>
                                <button
                                    className="group relative bg-coral-gradient rounded-full pl-8 pr-2 py-2 flex items-center gap-6 hover:shadow-[0_0_40px_rgba(255,107,107,0.4)] transition-all duration-300 transform hover:scale-105 mb-6 cursor-pointer"
                                    aria-label={siteContent.ctaFooter.cta.button}
                                >
                                    <span className="text-white text-xl font-medium tracking-wide">{siteContent.ctaFooter.cta.button}</span>
                                    <div className="w-14 h-14 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/40 transition-colors border border-white/10">
                                        <span className="material-symbols-outlined text-white text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </button>
                            </Magnetic>
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
                                <div className="relative w-8 h-8 rounded-full border border-black overflow-hidden">
                                    <Image alt="Client" fill src="/images/avatar-1.jpg" className="object-cover" />
                                </div>
                                <div className="relative w-8 h-8 rounded-full border border-black overflow-hidden">
                                    <Image alt="Client" fill src="/images/avatar-2.jpg" className="object-cover" />
                                </div>
                                <div className="relative w-8 h-8 rounded-full border border-black overflow-hidden">
                                    <Image alt="Client" fill src="/images/avatar-3.jpg" className="object-cover" />
                                </div>
                                <div className="w-8 h-8 rounded-full border border-black bg-white/10 flex items-center justify-center text-[10px] text-white backdrop-blur-sm z-10">
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
                            <a className="mb-8 block hover:opacity-80 transition-opacity" href="#">
                                <svg id="uuid-10cf10d3-5297-4b86-b70b-54e50878cb27" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 848.3 251.27" className="h-10 w-auto fill-white">
                                    <g id="uuid-5b17b311-b0f4-43c7-85ca-fc07bafd3c56">
                                        <path d="M296.13,40.67s-64.94-2.93-70.35-2.93c-9.32,0-18.08,1.39-26.27,4.17-8.19,2.78-15.33,6.8-21.42,12.06-6.09,5.27-10.9,11.69-14.43,19.28-3.53,7.59-5.3,16.12-5.3,25.59s1.77,18.04,5.3,25.71c3.53,7.67,8.38,14.21,14.54,19.62,6.16,5.41,13.34,9.58,21.53,12.52,8.19,2.93,16.87,4.4,26.04,4.4s18-1.51,26.04-4.51c8.04-3.01,15.03-7.22,20.97-12.63,5.93-5.41,10.63-11.95,14.09-19.62,3.45-7.67,5.19-16.16,5.19-25.48,0-5.26-.68-10.63-2.03-16.12-1.35-5.49-3.68-10.79-6.99-15.9l12.4-3.16.68-23ZM253.4,112.71c-1.28,4.14-3.19,7.78-5.75,10.94-2.56,3.16-5.71,5.64-9.47,7.44-3.76,1.8-8.12,2.71-13.08,2.71s-9.36-.9-13.19-2.71c-3.83-1.81-7.07-4.29-9.69-7.44-2.63-3.16-4.62-6.8-5.98-10.94-1.35-4.13-2.03-8.53-2.03-13.19,0-3.16.45-6.65,1.35-10.49.9-3.83,2.55-7.4,4.96-10.71,2.4-3.31,5.6-6.05,9.58-8.23,3.98-2.18,8.98-3.27,14.99-3.27,10.07,0,17.62,3.05,22.66,9.13,5.03,6.09,7.55,13.95,7.55,23.56,0,4.66-.64,9.06-1.92,13.19Z" />
                                        <path d="M438.98,40.66h26.96l4.27,10.56c4.64-3.74,10.3-6.93,16.96-9.55,6.66-2.62,14.34-3.93,23.03-3.93,9.74,0,17.75,1.57,24.04,4.72,6.29,3.15,11.23,7.49,14.83,13.03,3.59,5.54,6.1,11.95,7.53,19.21,1.42,7.27,2.14,15.09,2.14,23.48v59.98h-36.17c.4-43.15.38-59.72.18-63.5-.01-.23-.12-2.28-.26-5.14-.38-7.7-.3-7.43-.39-8.11-.98-7.25-6.74-11.99-7.17-12.33-3.79-3.04-7.74-3.76-9.98-4.17-4.83-.87-8.63-.13-10.6.28-2.65.54-6.28,1.29-10.04,4.09-.75.56-4.19,3.2-6.6,8.09-2.59,5.27-2.51,10.17-2.32,12.49v68.3h-36.4V40.66Z" />
                                        <path d="M688.12,143.56l-1.35.9c-5.69,4.8-12.62,8.76-20.78,11.91-8.17,3.15-17.56,4.72-28.2,4.72-9.29,0-18.09-1.39-26.4-4.16-8.31-2.77-15.58-6.77-21.79-12.02-6.22-5.24-11.16-11.61-14.83-19.1-3.67-7.49-5.51-16.03-5.51-25.61s1.76-18.46,5.28-26.17c3.52-7.71,8.39-14.27,14.6-19.66,6.21-5.39,13.48-9.51,21.79-12.36,8.31-2.84,17.26-4.27,26.85-4.27,10.63,0,20.03,1.57,28.2,4.72,8.16,3.15,15.09,7.12,20.78,11.91l1.35.9-20.89,22.91-2.92-3.14c-5.69-6.44-14.46-9.66-26.28-9.66-11.09,0-19.25,3.18-24.49,9.55-5.24,6.37-7.86,14.79-7.86,25.27,0,3.45.48,7.12,1.46,11.01.97,3.9,2.66,7.49,5.05,10.79,2.4,3.3,5.69,6.03,9.88,8.2,4.19,2.17,9.51,3.26,15.95,3.26,11.68,0,20.52-3.15,26.51-9.44l2.92-3.37,20.67,22.92Z" />
                                        <path d="M716.2,35.72c-2.7,0-5.28-.45-7.75-1.36-2.47-.9-4.68-2.16-6.63-3.76-1.95-1.6-3.48-3.48-4.6-5.64-1.12-2.16-1.69-4.56-1.69-7.21s.6-5.05,1.8-7.21c1.2-2.16,2.73-4.04,4.6-5.64,1.87-1.6,4.04-2.82,6.52-3.66,2.47-.84,5.05-1.25,7.75-1.25s5.28.42,7.75,1.25c2.47.83,4.64,2.06,6.52,3.66,1.87,1.6,3.4,3.48,4.6,5.64,1.2,2.16,1.8,4.56,1.8,7.21s-.56,5.05-1.69,7.21c-1.12,2.16-2.66,4.04-4.6,5.64-1.95,1.6-4.16,2.86-6.63,3.76-2.47.91-5.05,1.36-7.75,1.36ZM698.01,40.66h36.4v117.5h-36.4V40.66Z" />
                                        <path d="M764.73,120.42l3.14,3.37c3.59,3.9,7.82,7.12,12.69,9.66,4.87,2.55,10.97,3.82,18.31,3.82,4.34,0,7.64-1.2,9.88-3.6,2.25-2.39,3.37-5.09,3.37-8.09s-.86-5.65-2.58-7.98c-1.72-2.32-4.08-4.68-7.08-7.08-3.45-2.54-7-4.94-10.67-7.19-3.67-2.25-7.38-4.42-11.12-6.51-4.04-2.25-8.05-4.68-12.02-7.3-3.97-2.62-7.53-5.43-10.67-8.42-3.14-2.99-5.69-6.29-7.64-9.88-1.95-3.59-2.92-7.56-2.92-11.91,0-1.2.15-2.62.45-4.27.3-1.65.82-3.33,1.57-5.06.75-1.72,1.76-3.37,3.03-4.94,1.27-1.57,2.88-2.88,4.83-3.93l.9-.45h36.84l-5.17,3.37c-1.05.75-1.91,1.72-2.58,2.92-.68,1.2-1.01,2.32-1.01,3.37,0,1.95.67,3.86,2.02,5.73,1.35,1.87,2.99,3.63,4.94,5.28,1.94,1.65,4.01,3.14,6.18,4.49,2.17,1.35,4.01,2.47,5.51,3.37,1.8,1.2,3.67,2.36,5.61,3.48,1.94,1.12,3.97,2.36,6.07,3.71,3.89,2.55,7.75,5.28,11.57,8.2,3.82,2.92,7.22,6.26,10.22,10,2.99,3.75,5.39,7.9,7.19,12.47,1.8,4.57,2.7,9.7,2.7,15.39,0,4.2-.79,8.76-2.36,13.7-1.57,4.95-4.23,9.51-7.97,13.71-3.75,4.19-8.8,7.71-15.16,10.56-6.37,2.84-14.34,4.27-23.93,4.27-12.13,0-22.54-1.99-31.23-5.95-8.69-3.97-15.88-8.72-21.56-14.27l-.9-1.12,19.55-22.92Z" />
                                        <path d="M255.77,169.63c-5.63,24.76-27.77,43.31-54.2,43.31-28.19,0-47.94-21.69-53.64-40.86-1.76-5.9-2.05-11.13-1.99-14.77V16.51h-.13V0h-55.27L0,157.93h43.36L107.6,45.84v111.47c0,.11,0,.22,0,.33v.29h0c.34,51.52,42.34,93.34,93.94,93.34,47.63,0,87.07-35.64,93.13-81.64h-38.92Z" />
                                        <path d="M423.93,75.15c-2.69-7.71-6.59-14.34-11.68-19.88-5.09-5.54-11.38-9.89-18.87-13.03-7.49-3.15-16.1-4.72-25.84-4.72s-17.86,1.54-25.72,4.61c-7.86,3.07-14.68,7.38-20.44,12.92-5.77,5.54-10.26,12.13-13.48,19.77-3.22,7.64-4.83,16.03-4.83,25.16s1.72,17.9,5.17,25.39c3.44,7.49,8.12,13.86,14.04,19.1,5.91,5.24,12.92,9.29,21,12.13,8.09,2.84,16.77,4.27,26.06,4.27h3.37v-27.63h-3.37c-10.04,0-17.52-3.18-22.47-9.55-2.6-3.35-4.5-7.14-5.73-11.35h86.16l.23-1.8c.15-1.65.26-3.33.33-5.05.07-1.72.11-3.48.11-5.28,0-8.99-1.35-17.33-4.04-25.05ZM340.73,87.84c.06-.3.11-.6.18-.9.97-4.19,2.58-7.9,4.83-11.12,2.25-3.22,5.17-5.8,8.76-7.75,3.6-1.94,7.94-2.92,13.03-2.92,7.34,0,12.84,2.1,16.51,6.29,3.67,4.19,6.18,9.66,7.53,16.4h-50.84Z" />
                                    </g>
                                </svg>
                            </a>
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
                        <form
                            className="mt-6 flex flex-col gap-4"
                            action="https://formsubmit.co/contato@agencis.com.br"
                            method="POST"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors group">
                                    <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.nameLabel}</label>
                                    <input name="name" required className="w-full bg-transparent pb-3 text-coral placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light" placeholder={siteContent.ctaFooter.footer.form.namePlaceholder} type="text" />
                                </div>
                                <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors group">
                                    <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.emailLabel}</label>
                                    <input name="email" required className="w-full bg-transparent pb-3 text-coral placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light" placeholder={siteContent.ctaFooter.footer.form.emailPlaceholder} type="email" />
                                </div>
                            </div>
                            <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors mt-2 group">
                                <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.subjectLabel}</label>
                                <input name="subject" required className="w-full bg-transparent pb-3 text-coral placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light" placeholder={siteContent.ctaFooter.footer.form.subjectPlaceholder} type="text" />
                            </div>
                            <div className="w-full border-b border-white/20 hover:border-white/50 transition-colors mt-2 group">
                                <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">{siteContent.ctaFooter.footer.form.messageLabel}</label>
                                <textarea name="message" required className="w-full bg-transparent py-2 text-coral placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light min-h-[60px] resize-none" placeholder={siteContent.ctaFooter.footer.form.messagePlaceholder}></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
                                <div className="w-full md:w-1/3 border-b border-white/20 hover:border-white/50 transition-colors group py-1">
                                    <label className="block text-[10px] text-gray-500 group-hover:text-coral transition-colors uppercase tracking-widest mb-1">PROVA HUMANA: 3 + 4 = ?</label>
                                    <input required className="w-full bg-transparent pb-2 text-coral placeholder-gray-600 focus:outline-none focus:ring-0 text-sm font-light" placeholder="Resultado" type="number" />
                                </div>
                                <button
                                    className="flex-grow text-white hover:text-coral transition-colors p-2 cursor-pointer flex items-center justify-between border border-white/10 rounded-full bg-white/5 hover:bg-white/10 px-8 py-4"
                                    type="submit"
                                    aria-label={siteContent.ctaFooter.footer.form.submitButton}
                                >
                                    <span className="text-xs font-semibold tracking-wider">{siteContent.ctaFooter.footer.form.submitButton}</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-4 order-2 md:order-1">
                        <a
                            href={siteContent.hero.social.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a
                            href={siteContent.hero.social.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href={siteContent.hero.social.links.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 group cursor-pointer"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-4 h-4" />
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
