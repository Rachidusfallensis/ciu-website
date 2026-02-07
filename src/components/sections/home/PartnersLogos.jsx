import { motion } from 'framer-motion';
import { getAssetPath } from '../../../utils/assets';

// Logos des universités (utilisation des logos optimisés)
const universities = [
    { name: 'UCAD', logo: getAssetPath('/ucad.png') },
    { name: 'UGB', logo: getAssetPath('/ugb.png') },
    { name: 'UASZ', logo: getAssetPath('/uasz.png') },
    { name: 'UADB', logo: getAssetPath('/uadb.png') },
    { name: 'UAM', logo: getAssetPath('/uam.png') },
    { name: 'ISEP', logo: getAssetPath('/isep.png') },
    // Duplication pour l'effet de défilement infini
    { name: 'UCAD', logo: getAssetPath('/ucad.png') },
    { name: 'UGB', logo: getAssetPath('/ugb.png') },
    { name: 'UASZ', logo: getAssetPath('/uasz.png') },
    { name: 'UADB', logo: getAssetPath('/uadb.png') },
    { name: 'UAM', logo: getAssetPath('/uam.png') },
    { name: 'ISEP', logo: getAssetPath('/isep.png') },
];

export default function PartnersLogos() {
    return (
        <section className="py-10 bg-white border-b border-primary-50/50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Nos conseils universitaires sont présents dans toutes les universités du Sénégal
                </p>
            </div>

            {/* Container avec masques de dégradé pour effet de fondue sur les bords */}
            <div className="relative flex overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white z-10" />

                <motion.div
                    className="flex space-x-12 sm:space-x-20 min-w-full items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Vitesse de défilement (plus grand = plus lent)
                            ease: "linear",
                        },
                    }}
                >
                    {universities.map((uni, index) => (
                        <div
                            key={`${uni.name}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110"
                        >
                            <img
                                src={uni.logo}
                                alt={`Logo ${uni.name}`}
                                className="max-h-14 max-w-full object-contain"
                                loading="lazy"
                                width={80}
                                height={80}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
