import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { universities } from '../../../data/universitiesData';

export default function UniversityShowcase() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const controls = useAnimation();
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    useEffect(() => {
        if (!prefersReducedMotion) {
            controls.start({
                x: -width * 2, // Scroll further to ensure loop
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                },
            });
        }
    }, [width, controls, prefersReducedMotion]);

    // Duplicate the list to ensure seamless infinite scroll
    const displayUniversities = [...universities, ...universities, ...universities];

    return (
        <section className="py-12 bg-white border-b border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Nos conseils universitaires sont disponibles dans toutes les universités du Sénégal
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradients for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    ref={carousel}
                    className="flex gap-12 items-center w-max px-12"
                    animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }} // Simplistic CSS-like infinite scroll
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {displayUniversities.map((uni, idx) => (
                        <div key={`${uni.id}-${idx}`} className="flex flex-col items-center gap-2 group min-w-[120px]">
                            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center p-4 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain rounded-full" />
                            </div>
                            <span className="text-sm font-bold text-slate-400 group-hover:text-primary-600 transition-colors">
                                {uni.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
