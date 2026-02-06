import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';
import { cn } from '../utils/cn'; // Adjust path as needed

export default function TeamAccordion({ members }) {
    const [activeId, setActiveId] = useState(null);

    // Handle click/hover logic
    // For better UX on desktop, hover might be enough, but click is safer for details.
    // "Here Our Stories" style is usually click-to-expand or hover-to-expand. 
    // Let's go with Hover for desktop interaction richness, Click for mobile.

    return (
        // Added overflow-x-auto and min-w for scrolling
        // pb-4 adds padding for scrollbar / spacing
        <div className="w-full h-[500px] flex gap-2 md:gap-4 overflow-x-auto pb-4 px-4 snap-x">
            {members.map((member, index) => {
                // Use name or filtered index as ID if no unique ID provided
                const id = member.name;
                const isActive = activeId === id;

                return (
                    <motion.div
                        key={id}
                        layout
                        onHoverStart={() => setActiveId(id)}
                        onClick={() => setActiveId(id)}
                        onHoverEnd={() => setActiveId(null)} // Optional: Reset on leave? Or keep last active? Reference usually behaves like accordion (keeps one open or resets). Let's keep it resetting for "elastic" feel, or set a default.
                        // Better: default to null (all equal) or hover expands one.
                        className={cn(
                            "relative h-full rounded-[2rem] overflow-hidden cursor-pointer transition-[flex,min-width] duration-500 ease-in-out shadow-lg flex-shrink-0 snap-center",
                            // Min-width prevents squashing. 
                            // When active: large width. When inactive: strip width
                            isActive ? "min-w-[300px] md:min-w-[400px] flex-[0_0_auto]" : "min-w-[60px] md:min-w-[80px] flex-[0_0_auto]"
                        )}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            {member.photo ? (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700"
                                    style={{ transform: isActive ? 'scale(1.05)' : 'scale(1.2)' }}
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                    <Users className="text-slate-400 w-12 h-12" />
                                </div>
                            )}

                            {/* Gradients */}
                            <div className={cn(
                                "absolute inset-0 transition-opacity duration-300",
                                isActive ? "bg-black/20" : "bg-black/40 hover:bg-black/30"
                            )} />

                            {/* Vertical text gradient (bottom) */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>

                        {/* Content Labels */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">

                            {/* Collapsed State: Vertical Text (Visible when NOT active) */}
                            <div className={cn(
                                "absolute top-8 left-1/2 -translate-x-1/2 transition-opacity duration-300",
                                isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                            )}>
                                {/* Vertical text styling */}
                                <span className="block text-white text-lg font-bold tracking-widest uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180 drop-shadow-md">
                                    {member.name.split(" ")[0]}
                                </span>
                            </div>

                            {/* Expanded State: Full Info (Visible when Active) */}
                            <div className={cn(
                                "relative z-10 transition-all duration-500 transform",
                                isActive ? "translate-y-0 opacity-100 delay-100" : "translate-y-4 opacity-0"
                            )}>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                    {member.name}
                                </h3>
                                <p className="text-primary-300 font-medium text-sm md:text-base uppercase tracking-wider mb-2">
                                    {member.commission}
                                </p>
                                {member.university && (
                                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/20">
                                        {member.university}
                                    </div>
                                )}
                            </div>

                        </div>

                    </motion.div>
                );
            })}
        </div>
    );
}
