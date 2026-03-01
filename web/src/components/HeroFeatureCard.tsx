import React from 'react';

interface HeroFeatureCardProps {
    number: string;
    title: React.ReactNode;
    description?: string;
    variant?: 'dark' | 'glass';
    accentColor?: 'coral' | 'magenta';
}

export default function HeroFeatureCard({
    number,
    title,
    description,
    variant = 'dark',
    accentColor = 'coral'
}: HeroFeatureCardProps) {
    const isDark = variant === 'dark';
    const accentClass = accentColor === 'coral' ? 'text-coral' : 'text-magenta';
    const hoverAccentClass = accentColor === 'coral' ? 'group-hover:text-coral' : 'group-hover:text-magenta';

    const baseClasses = isDark
        ? "bg-[#121218] p-6 rounded-3xl h-64 flex flex-col justify-between group hover:bg-[#1A1A22] transition-colors border border-white/5 cursor-pointer"
        : "glass-card bg-[#F3F3F3]/10 p-6 rounded-3xl h-64 flex flex-col justify-between relative overflow-hidden group cursor-pointer";

    return (
        <article className={baseClasses}>
            <span className={`text-3xl font-display ${accentClass} z-10`}>{number}</span>
            <div className="z-10">
                <h3 className={`text-white text-lg ${isDark ? 'font-normal' : 'font-medium'} leading-snug mb-2 ${hoverAccentClass} transition-colors`}>
                    {title}
                </h3>
                {description && (
                    <p className={`text-gray-400 ${isDark ? 'text-sm font-light' : 'text-[11px] font-normal'} leading-relaxed`}>
                        {description}
                    </p>
                )}
            </div>
        </article>
    );
}
