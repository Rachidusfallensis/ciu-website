import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

export default function PageHero({
    title = "",
    highlight = "",
    subtitle = "",
    backgroundImage = "/background.jpg",
    children
}) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden"
            aria-labelledby="hero-heading"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src={backgroundImage}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-20">
                <motion.div
                    className="text-center text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        id="hero-heading"
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
                    >
                        <span className="block md:inline mr-3">{title}</span>
                        {highlight && (
                            <motion.span
                                className="inline-block relative px-4 py-1"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                            >
                                <motion.span
                                    className="absolute inset-0 bg-primary-600 -skew-x-6 rounded-lg"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                />
                                <span className="relative z-10 text-white drop-shadow-sm">
                                    {highlight}
                                </span>
                            </motion.span>
                        )}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl lg:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto mb-10"
                    >
                        {subtitle}
                    </motion.p>

                    {children && (
                        <motion.div variants={itemVariants}>
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Enhanced Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <motion.svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-16 sm:h-24 fill-slate-50"
                    initial={prefersReducedMotion ? { opacity: 1 } : { y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.5 }}
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff" />
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#f8fafc"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </motion.svg>
            </div>
        </section>
    );
}
