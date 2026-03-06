export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05050A]">
            <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-coral-gradient blur-2xl opacity-20 animate-pulse-slow rounded-full scale-150"></div>

                {/* Animated Rings */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-2 border-white/5 rounded-full"></div>
                    <div className="absolute inset-0 border-t-2 border-magenta rounded-full animate-spin"></div>
                    <div className="absolute inset-4 border-2 border-white/5 rounded-full"></div>
                    <div className="absolute inset-4 border-b-2 border-coral rounded-full animate-spin [animation-direction:reverse] [animation-duration:1s]"></div>
                </div>

                <div className="mt-8 text-center">
                    <span className="text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase animate-pulse">
                        Carregando Experiência
                    </span>
                </div>
            </div>
        </div>
    );
}
