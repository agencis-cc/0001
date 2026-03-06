import React from 'react';

interface HeroFeatureCardProps {
    number: string;
    title: React.ReactNode;
    description?: string;
    variant?: 'dark' | 'glass';
    accentColor?: 'coral' | 'magenta';
    whiteNumber?: boolean;
}

export default function HeroFeatureCard({
    number,
    title,
    description,
    variant = 'dark',
    accentColor = 'coral',
    whiteNumber = false
}: HeroFeatureCardProps) {
    const isDark = variant === 'dark';
    const accentClass = accentColor === 'coral' ? 'text-coral' : 'text-magenta';
    const hoverAccentClass = accentColor === 'coral' ? 'group-hover:text-coral' : 'group-hover:text-magenta';

    const baseClasses = isDark
        ? "bg-[#121218] p-5 sm:p-6 rounded-3xl h-56 sm:h-64 flex flex-col justify-between group hover:bg-white hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 border border-white/5 cursor-pointer w-[240px] sm:w-[280px] shrink-0"
        : "glass-card bg-[#F3F3F3]/10 p-5 sm:p-6 rounded-3xl h-56 sm:h-64 flex flex-col justify-between relative overflow-hidden group hover:bg-white hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer w-[240px] sm:w-[280px] shrink-0";

    return (
        <article className={baseClasses}>
            <span className={`text-2xl sm:text-3xl font-display ${whiteNumber ? 'text-white' : accentClass} z-10 group-hover:drop-shadow-sm transition-all`}>{number}</span>
            <div className="z-10">
                <h3 className={`text-white text-base sm:text-lg ${isDark ? 'font-normal' : 'font-medium'} leading-snug mb-1 sm:mb-2 ${hoverAccentClass} group-hover:!text-[#111] transition-colors duration-300`}>
                    {title}
                </h3>
                {description && (
                    <p className={`text-gray-400 ${isDark ? 'text-[10px] sm:text-xs font-light' : 'text-[9px] sm:text-[11px] font-normal'} leading-snug group-hover:!text-gray-600 transition-colors duration-300`}>
                        {description}
                    </p>
                )}
            </div>
        </article>
    );
}
