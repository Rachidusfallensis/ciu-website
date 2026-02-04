import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, BookOpen, Target, Award, FileText, Star, Clock, Mic } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function ProgramSection({ programData }) {
    const [selectedDay, setSelectedDay] = useState(0);
    const currentProgram = programData[selectedDay];

    const getSessionIcon = (type) => {
        switch (type) {
            case 'keynote': return Mic;
            case 'conference': return Users;
            case 'panel': return BookOpen;
            case 'workshop': return Target;
            case 'ceremony': return Award;
            case 'presentation': return FileText;
            case 'competition': return Star;
            default: return Clock;
        }
    };

    return (

        <section id="programme-detaille" className="section-padding bg-slate-50 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
                        <span className="text-primary-600">Programme</span> Détaillé
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Trois journées intenses rythmées par des conférences, ateliers et moments de partage pour enrichir votre parcours.
                    </p>
                </div>

                {/* Day Selector */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-2 rounded-full shadow-lg border border-slate-100 inline-flex mx-auto relative z-10">
                        {programData.map((day, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedDay(idx)}
                                className={cn(
                                    "px-8 py-4 rounded-full font-bold transition-all text-sm sm:text-base relative overflow-hidden flex flex-col items-center min-w-[120px]",
                                    selectedDay === idx
                                        ? "text-white shadow-md"
                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                )}
                            >
                                {selectedDay === idx && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-slate-900"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex flex-col items-center leading-tight">
                                    <span className="mb-0.5 text-lg">{day.day}</span>
                                    <span className={cn("text-xs font-medium uppercase tracking-wider", selectedDay === idx ? "text-slate-300" : "text-slate-400")}>{day.fullDate}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Content */}
                <div className="relative max-w-4xl mx-auto pb-12">
                    <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-200 hidden md:block" />

                    <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                    >
                        {currentProgram.sessions.map((session, idx) => {
                            const Icon = getSessionIcon(session.type);
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-0 md:pl-24 group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[19px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-white bg-slate-200 shadow-sm z-10 hidden md:block group-hover:bg-primary-600 group-hover:scale-125 transition-all duration-300" />

                                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-500 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left group-hover:-translate-y-1">
                                        <div className="w-20 h-20 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:rotate-3">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-600 text-sm font-bold mb-3 border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-700 group-hover:border-primary-100 transition-colors">
                                                <Clock className="w-3.5 h-3.5 mr-2" />
                                                {session.time}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors mb-2 leading-tight">
                                                {session.title}
                                            </h3>
                                            {/* Placeholder: Add speaker/location if available later */}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );

}
