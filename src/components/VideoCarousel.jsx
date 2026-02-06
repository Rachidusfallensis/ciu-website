import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';

export default function VideoCarousel({ videos, onVideoSelect }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const getVisibleItems = () => {
        const items = [];
        const total = videos.length;
        // We want 5 items: center (0), left (-1, -2), right (+1, +2)
        for (let i = -2; i <= 2; i++) {
            const index = (activeIndex + i + total) % total;
            items.push({ ...videos[index], offset: i, originalIndex: index });
        }
        return items;
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden py-10">

            <div className="relative w-full max-w-6xl h-full flex items-center justify-center perspective-1000">
                <AnimatePresence mode='popLayout'>
                    {visibleItems.map((item) => {
                        const isCenter = item.offset === 0;
                        const isLeft = item.offset < 0;
                        const isRight = item.offset > 0;
                        const dist = Math.abs(item.offset);

                        // Responsive spacing
                        const spacing = isMobile ? 60 : 180;
                        const xOffset = item.offset * spacing;

                        return (
                            <motion.div
                                key={item.id} // Use stable key
                                initial={false}
                                animate={{
                                    opacity: isCenter ? 1 : (isMobile ? 0.3 : 0.6),
                                    scale: isCenter ? 1 : 0.85 - (dist * 0.05),
                                    x: `calc(-50% + ${xOffset}px)`, // Centered relative to left:50% plus offset
                                    z: -dist * (isMobile ? 30 : 50),
                                    rotateY: isLeft ? 10 : isRight ? -10 : 0,
                                    zIndex: 50 - dist
                                }}
                                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                                className={`absolute left-1/2 top-1/2 cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl border border-white/10
                                    ${isCenter
                                        ? 'w-[85vw] md:w-[600px] h-[50vw] md:h-[400px] bg-black'
                                        : 'w-[20vw] md:w-[120px] h-[40vw] md:h-[360px] bg-slate-900 grayscale hover:grayscale-0'
                                    }
                                `}
                                style={{
                                    y: "-50%", // Center vertically
                                    // marginLeft removed - relying on x: calc(-50% + offset)
                                }}
                                onClick={() => {
                                    if (isCenter) onVideoSelect(item, item.originalIndex);
                                    else setActiveIndex(item.originalIndex);
                                }}
                            >
                                {/* Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                {isCenter ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                                            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-left">
                                            <h3 className="text-lg md:text-3xl font-bold text-white mb-2 line-clamp-2 md:line-clamp-none leading-tight">{item.title}</h3>
                                            <p className="text-white/70 text-xs md:text-base line-clamp-2">{item.description}</p>
                                        </div>
                                    </div>
                                ) : (
                                    // Strip Content (Hidden on mobile generally due to size, but kept for desktop or large mobile)
                                    !isMobile && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                            <div className="absolute inset-0 bg-black/40" />
                                            <span className="relative text-white font-bold tracking-widest text-xl uppercase whitespace-nowrap -rotate-90 drop-shadow-lg">
                                                {item.title.split(" ")[0]}
                                            </span>
                                        </div>
                                    )
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 md:bottom-10 flex gap-4 z-50">
                <button
                    onClick={handlePrev}
                    className="p-3 md:p-4 rounded-full bg-white text-slate-900 shadow-lg hover:scale-110 transition-transform"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                    onClick={handleNext}
                    className="p-3 md:p-4 rounded-full bg-slate-900 text-white shadow-lg hover:scale-110 transition-transform"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>

        </div>
    );
}
